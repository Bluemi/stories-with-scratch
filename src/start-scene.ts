import {Context, Sprite, Label, HoverEffect, AutoDrawScene} from 'dkwdpil';
import {NavButton} from "./nav-button";

const SPREAD: number = 14;

export class StartScene extends AutoDrawScene {
    title: Label = new Label("testLabel", "Geschichten in Scratch", 0, 15, {fontsize: 2.5, horizAlign: "center", vertAlign: "center"});

    label01: Label = new Label("Label01", "Einführung", -SPREAD, -12, {fontsize: 1.7, horizAlign: "center", vertAlign: "center", rotation: 0.0, alpha: 0, color: [0, 0, 0]});
    sprite01: Sprite = new Sprite("Sprite01", "intro.png", -SPREAD, 0, {size: 13, imageMode: "center", rotation: 0.0, alpha: 1});
    hoverEffect01: HoverEffect = new HoverEffect(this.sprite01);

    label02: Label = new Label("Label02", "Setup", SPREAD, -12, {fontsize: 1.7, horizAlign: "center", vertAlign: "center", rotation: 0.0, alpha: 0, color: [0, 0, 0]});
    sprite02: Sprite = new Sprite("Sprite02", "setup.jpg", SPREAD, 0, {size: 17, imageMode: "center", rotation: 0.0, alpha: 1});
    hoverEffect03: HoverEffect = new HoverEffect(this.sprite02);

    navButton: NavButton = new NavButton("navButton", "right", "scratchExplained");

    update(c: Context) {
        c.background(235);

        if (c.keyJustPressed("KeyE")) {
            c.nextScene = "editScene";
        }
        if (c.keyJustPressed("KeyV")) {
            c.nextScene = "eventScene";
        }

        if (this.sprite01.clicked)
            c.nextScene = "introScene";

        if (this.sprite02.clicked)
            c.nextScene = "setupScene";
    }
}
