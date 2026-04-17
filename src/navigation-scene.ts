import {Context, Scene} from "dkwdpil";
import {NavButton} from "./nav-button";

export class NavigationScene extends Scene {
    scenes: Scene[];
    currentSceneIndex: number = 0;

    navButtonLeft: NavButton = new NavButton("navLeft", "left", "");
    navButtonRight: NavButton = new NavButton("navRight", "right", "");

    constructor(scenes: Scene[]) {
        super();
        this.scenes = scenes;
    }

    init(c: Context) {
        this.currentSceneIndex = 0;
        this.navButtonLeft.init(c);
        this.navButtonRight.init(c);
    }

    update(c: Context): void {
        const navButtons = [];
        if (this.currentSceneIndex > 0)
            navButtons.push(this.navButtonLeft);
        if (this.currentSceneIndex < this.scenes.length - 1)
            navButtons.push(this.navButtonRight);

        navButtons.forEach(navButton => navButton.update(c));
        c.nextScene = null;

        const currentScene = this.scenes[this.currentSceneIndex];
        currentScene.call(c);

        navButtons.forEach(navButton => navButton.draw());

        let changed = false;
        if (this.currentSceneIndex > 0 && this.navButtonLeft.clicked) {
            this.currentSceneIndex--;
        } else if (this.currentSceneIndex < this.scenes.length - 1 && this.navButtonRight.clicked) {
            this.currentSceneIndex++;
        }
        if (changed) {
            this.scenes[this.currentSceneIndex].init(c);
        }
    }
}