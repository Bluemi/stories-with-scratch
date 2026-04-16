import {AutoDrawScene, Context, Sprite, Label} from 'dkwdpil';
import {BackButton} from "./back-button";

export class SetupScene extends AutoDrawScene {
    title: Label = new Label("title", "Setup", 0, 15, {fontsize: 2.5, horizAlign: "center", vertAlign: "center"});
    backButton: BackButton = new BackButton("backButton");

    update(c: Context) {
        c.background(235);
    }
}
