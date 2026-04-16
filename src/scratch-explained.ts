import {AutoDrawScene, Context, Sprite, Label, HoverEffect} from 'dkwdpil';
import {NavButton} from "./nav-button";

const SPREAD: number = 14;

export class ScratchExplained extends AutoDrawScene {
    title: Label = new Label("title", "Scratch verstehen", 0, 15, {fontsize: 2.5, horizAlign: "center", vertAlign: "center"});
    navButton: NavButton = new NavButton("navLeft", "left", "startScene");

    label01: Label = new Label("Label01", "Figuren und Hintergründe", -SPREAD, -12, {fontsize: 1.7, horizAlign: "center", vertAlign: "center", rotation: 0.0, alpha: 0, color: [0, 0, 0]});
    sprite01: Sprite = new Sprite("Sprite01", "costumesBackgrounds.jpg", -SPREAD, 0, {size: 17, imageMode: "center", rotation: 0.0, alpha: 1});
    hoverEffect01: HoverEffect = new HoverEffect(this.sprite01);

    // label02: Label = new Label("Label02", "Setup", SPREAD, -12, {fontsize: 1.7, horizAlign: "center", vertAlign: "center", rotation: 0.0, alpha: 0, color: [0, 0, 0]});
    // sprite02: Sprite = new Sprite("Sprite02", "setup.jpg", SPREAD, 0, {size: 17, imageMode: "center", rotation: 0.0, alpha: 1});
    // hoverEffect03: HoverEffect = new HoverEffect(this.sprite02);

    update(c: Context) {
        super.update(c);

        if (this.sprite01.clicked) {
            c.nextScene = "drawingScene";
        }
        /*
        if (this.sprite02.clicked) {
            // TODO
        }
         */
    }
}
