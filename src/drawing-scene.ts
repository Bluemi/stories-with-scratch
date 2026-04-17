import {Context, Sprite, Label, AutoDrawScene} from 'dkwdpil';
import {NavButton} from "./nav-button";
import {BackButton} from "./back-button";
import {Arrow} from "./arrow";

const LEFT = -28;

export class DrawingScene extends AutoDrawScene {
    title: Label = new Label("title", "Figuren und Hintergründe", 0, 15, {fontsize: 2.5, horizAlign: "center", vertAlign: "center"});
    backButton: BackButton = new BackButton("backButton", "scratchExplained");

    label01: Label = new Label("Label01", "Das erste was wir machen wollen, ist die", LEFT, 5.0, {fontsize: 1.0, horizAlign: "left", vertAlign: "center", rotation: 0.0, alpha: 0, color: [0, 0, 0]});
    label02: Label = new Label("Label02", "nötigen Figuren und Hintergründe zu erstellen.", LEFT, 3.5, {fontsize: 1.0, horizAlign: "left", vertAlign: "center", rotation: 0.0, alpha: 0, color: [0, 0, 0]});
    label03: Label = new Label("Label03", "Um sauber anzufangen, löschen wir am besten", LEFT, 1.0, {fontsize: 1.0, horizAlign: "left", vertAlign: "center", rotation: 0.0, alpha: 0, color: [0, 0, 0]});
    label04: Label = new Label("Label04", "erstmal die Katze.", LEFT, -0.5, {fontsize: 1.0, horizAlign: "left", vertAlign: "center", rotation: 0.0, alpha: 0, color: [0, 0, 0]});
    label05: Label = new Label("Label05", "Klicke dazu einfach auf den kleinen Mülleimer.", LEFT, -3.0, {fontsize: 1.0, horizAlign: "left", vertAlign: "center", rotation: 0.0, alpha: 0, color: [0, 0, 0]});

    sprite01: Sprite = new Sprite("Sprite01", "deleteCat.png", 13.9, -1.6, {size: 22.3, imageMode: "center", rotation: 0.0, alpha: 1});
    arrow01: Arrow = new Arrow("arrow01", 13.7, -0.8);

    update(c: Context) {
        if (c.keyJustPressed("KeyM"))
            console.log(c.mousePos.x, c.mousePos.y);
    }
}
