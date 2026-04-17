import {Scene, Context, Sprite, Label, InteractiveElement} from 'dkwdpil';
import {Arrow} from "./arrow";
import {BackButton} from "./back-button";

const LEFT = -26;

export class ExplainScene extends Scene {
    elements: InteractiveElement[] = [];

    constructor(title: string, backScene: string, image: string, texts: string[], arrows: number[][] = []) {
        super();
        this.elements.push(new BackButton("backButton", backScene));
        this.elements.push(
            new Label("title", title, 0, 15, {fontsize: 2.5, horizAlign: "center", vertAlign: "center"})
        );

        let yPosition = 5.0;
        for (const text of texts) {
            if (text) {
                this.elements.push(
                    new Label(`Label${texts.indexOf(text) + 1}`, text, LEFT, yPosition, {fontsize: 1.0, horizAlign: "left", vertAlign: "center"})
                );
                yPosition -= 1.5;
            } else {
                yPosition -= 1;
            }
        }
        this.elements.push(new Sprite("sprite", image, 13.9, -1.6, {size: 22.3}));
        for (const arrow of arrows) {
            this.elements.push(
                new Arrow(`arrow${arrows.indexOf(arrow) + 1}`, arrow[0], arrow[1], arrow[2])
            );
        }
    }

    update(c: Context) {
        c.background(235);

        this.elements.forEach((e) => e.update(c));
        this.elements.forEach((e) => e.draw());

        if (c.keyJustPressed("KeyM")) {
            const text = `${c.mousePos.x.toFixed(2)}, ${c.mousePos.y.toFixed(2)}`
            console.log(text);
            copyToClipboard(text).then(() => console.log("mouse position copied to clipboard"));
        }
    }
}

async function copyToClipboard(text: string): Promise<void> {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}
