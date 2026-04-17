import {AutoDrawScene, Context, Sprite, Label} from 'dkwdpil';
import {BackButton} from "./back-button";

const LEFT = -26;

export class IntroScene extends AutoDrawScene {
    title: Label = new Label("title", "Einführung", 0, 15, {fontsize: 2.5, horizAlign: "center", vertAlign: "center"});

    backButton: BackButton = new BackButton("backButton");

    label01: Label = new Label("Label01", "Was wir heute machen", LEFT-2, 9.0, {fontsize: 2, horizAlign: "left", vertAlign: "center"});
    label02: Label = new Label("Label02", "- Buch animieren", LEFT, 4, {fontsize: 1.4, horizAlign: "left", vertAlign: "center"});
    label03: Label = new Label("Label03", "- Kapitel verteilen", LEFT, 1, {fontsize: 1.4, horizAlign: "left", vertAlign: "center"});
    label04: Label = new Label("Label04", "- Anleitungen anschauen", LEFT, -2, {fontsize: 1.4, horizAlign: "left", vertAlign: "center"});
    label05: Label = new Label("Label05", "- Zeit zum Animieren", LEFT, -5, {fontsize: 1.4, horizAlign: "left", vertAlign: "center"});
    label06: Label = new Label("Label06", "- Präsentation", LEFT, -8, {fontsize: 1.4, horizAlign: "left", vertAlign: "center"});

    sprite01: Sprite = new Sprite("Sprite01", "dieGrosseWoerterfabrik.jpg", 13.9, -1.6, {size: 22.3, imageMode: "center", rotation: 0.0, alpha: 1});

    update(c: Context) {
        c.background(235);
    }
}
