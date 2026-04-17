import {AutoDrawScene, Context, Sprite, Label} from 'dkwdpil';
import {Arrow} from "./arrow";


export class DrawingYourselfScene extends AutoDrawScene {
    title: Label = new Label("title", "Selber zeichnen", 0, 15, {fontsize: 2.5, horizAlign: "center", vertAlign: "center"});

    label01: Label = new Label("Label01", "Was wir heute machen", LEFT-1, 5.0, {fontsize: 1.3, horizAlign: "left", vertAlign: "center"});
    label02: Label = new Label("Label02", "Buch animieren", LEFT, 3.5, {fontsize: 1.0, horizAlign: "left", vertAlign: "center"});
    label03: Label = new Label("Label03", "Kapitel verteilen", LEFT, 2.0, {fontsize: 1.0, horizAlign: "left", vertAlign: "center"});
    label04: Label = new Label("Label04", "Anleitungen anschauen", LEFT, 0.5, {fontsize: 1.0, horizAlign: "left", vertAlign: "center"});
    label05: Label = new Label("Label05", "Zeit zum Animieren", LEFT, -1.0, {fontsize: 1.0, horizAlign: "left", vertAlign: "center"});
    label06: Label = new Label("Label06", "Zeit zum Animieren", LEFT, -2.5, {fontsize: 1.0, horizAlign: "left", vertAlign: "center"});

    sprite01: Sprite = new Sprite("Sprite01", "dieGrosseWoerterfabrik.jpg", 13.9, -1.6, {size: 22.3, imageMode: "center", rotation: 0.0, alpha: 1});
}
