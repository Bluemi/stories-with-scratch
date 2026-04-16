import {Scene, Context, Sprite, Label} from 'dkwdpil';

export class StartScene extends Scene {
    title: Label = new Label("testLabel", "Geschichten in Scratch", 0, 15, {fontsize: 2.5, horizAlign: "center", vertAlign: "center"});

    label01: Label = new Label("Label01", "Einführung", -16, -12, {fontsize: 1.7, horizAlign: "center", vertAlign: "center", rotation: 0.0, alpha: 0, color: [0, 0, 0]});
    sprite01: Sprite = new Sprite("Sprite01", "intro.png", -16, 0, {size: 13, imageMode: "center", rotation: 0.0, alpha: 1});
    label02: Label = new Label("Label02", "Setup", 16, -12, {fontsize: 1.7, horizAlign: "center", vertAlign: "center", rotation: 0.0, alpha: 0, color: [0, 0, 0]});
    sprite02: Sprite = new Sprite("Sprite02", "setup.jpg", 16, 0, {size: 17, imageMode: "center", rotation: 0.0, alpha: 1});

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
