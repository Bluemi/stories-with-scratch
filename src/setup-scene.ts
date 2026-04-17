import {AutoDrawScene, Context, Sprite, Label} from 'dkwdpil';
import {BackButton} from "./back-button";

export class SetupScene extends AutoDrawScene {
    title: Label = new Label("title", "Setup", 0, 15, {fontsize: 2.5, horizAlign: "center", vertAlign: "center"});
    backButton: BackButton = new BackButton("backButton");

    label01: Label = new Label("Label01", "edu.bruno-schilling.de", 0, 8, {fontsize: 1.4, horizAlign: "center", vertAlign: "center"});
    label02: Label = new Label("Label02", "öffnen", 0, 5.2, {fontsize: 1.4, horizAlign: "center", vertAlign: "center"});
    label03: Label = new Label("Label03", "Dann", 0, 1.0, {fontsize: 1.4, horizAlign: "center", vertAlign: "center"});
    label04: Label = new Label("Label04", "scratch.mit.edu", 0, -2.0, {fontsize: 1.6, horizAlign: "center", vertAlign: "center"});
    label05: Label = new Label("Label05", "öffnen", 0, -4.8, {fontsize: 1.4, horizAlign: "center", vertAlign: "center"});

    update(c: Context) {
        c.background(235);

        if (this.label04.hovered) {
            c.cursor("pointer");
        } else {
            c.cursor("default");
        }
        if (this.label04.clicked) {
            window.open("https://scratch.mit.edu/create", '_blank', 'noopener,noreferrer');
        }
    }
}
