import {Scene, Context, Sprite, Label} from 'dkwdpil';

export class StartScene extends Scene {
    title: Label = new Label("testLabel", "Scratch", 0, 15, {fontsize: 2.5, horizAlign: "center", vertAlign: "center"});

    init(context: Context): void {
        context.imageMode(context.CENTER);
        context.noStroke();
        context.fill(0);
    }

    update(c: Context) {
        c.background(235);

        if (c.keyJustPressed("KeyE")) {
            c.nextScene = "editScene";
        }
        if (c.keyJustPressed("KeyV")) {
            c.nextScene = "eventScene";
        }
    }
}
