import {Context, Sprite, Label, AutoDrawScene} from 'dkwdpil';
import {NavButton} from "./nav-button";

export class DrawingScene extends AutoDrawScene {
    title: Label = new Label("title", "Figuren und Hintergründe", 0, 15, {fontsize: 2.5, horizAlign: "center", vertAlign: "center"});
    navButton: NavButton = new NavButton("navLeft", "left", "startScene");
}
