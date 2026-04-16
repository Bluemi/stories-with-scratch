import {Scene, Context, Sprite, Label} from 'dkwdpil';

export class IntroScene extends Scene {
    title: Label = new Label("title", "Einführung", 0, 15, {fontsize: 2.5, horizAlign: "center", vertAlign: "center"});

    update(c: Context) {
        c.background(235);
    }
}
