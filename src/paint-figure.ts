import {AutoDrawScene, Context, Sprite, Label} from 'dkwdpil';
import {BackButton} from "./back-button";
import {NavButton} from "./nav-button";
import {Arrow} from "./arrow";

const LEFT = -26;

export class PaintFigure extends AutoDrawScene {
    title: Label = new Label("title", "Figuren zeichnen", 0, 15, {fontsize: 2.5, horizAlign: "center", vertAlign: "center"});
    backButton: BackButton = new BackButton("backButton", "scratchExplained");
    navButtonLeft: NavButton = new NavButton("navLeft", "left", "drawingScene");
    navButtonRight: NavButton = new NavButton("navRight", "right", "paintFigure");

    label01: Label = new Label("Label01", "Um eine neue Figur einzufügen, klicken wir", LEFT, 5.0, {fontsize: 1.0, horizAlign: "left", vertAlign: "center", rotation: 0.0, alpha: 0, color: [0, 0, 0]});
    label02: Label = new Label("Label02", "unten rechts auf das Figuren-Zeichen.", LEFT, 3.5, {fontsize: 1.0, horizAlign: "left", vertAlign: "center", rotation: 0.0, alpha: 0, color: [0, 0, 0]});
    label03: Label = new Label("Label03", "Wenn wir kurz warten können wir auch auf den", LEFT, 1.0, {fontsize: 1.0, horizAlign: "left", vertAlign: "center", rotation: 0.0, alpha: 0, color: [0, 0, 0]});
    label04: Label = new Label("Label04", "Stift klicken, um eine eigene Figur zu zeichnen.", LEFT, -0.5, {fontsize: 1.0, horizAlign: "left", vertAlign: "center", rotation: 0.0, alpha: 0, color: [0, 0, 0]});

    sprite01: Sprite = new Sprite("Sprite01", "addFigure.png", 13.9, -1.6, {size: 22.3, imageMode: "center", rotation: 0.0, alpha: 1});
    // arrow01: Arrow = new Arrow("arrow01", 23.22, -10.86);
    arrow02: Arrow = new Arrow("arrow02", 23.22, -6.86);

    update(c: Context) {
        if (c.keyJustPressed("KeyM"))
            console.log(c.mousePos.x, c.mousePos.y);
    }
}
