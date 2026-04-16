import {Context, InteractiveElement, InteractiveElementDump, Sprite} from "dkwdpil";
import {Rect} from "../../dkwdp-interactivelib/src/element-helpers/rect";

export class BackButton extends InteractiveElement {
    target: string;
    sprite: Sprite;

    constructor(identifier: string, target: string = "startScene", x: number = -29, y: number = 15) {
        super(identifier, x, y);
        this.target = target;
        this.sprite = new Sprite(identifier + "_sprite", "back_button.png", this.x, this.y, {size: 2});
    }

    draw() {
        this.sprite.draw();
    }

    update(c: Context) {
        this.sprite.update(c);
        if (this.sprite.clicked)
            c.nextScene = this.target;
    }

    dump(): InteractiveElementDump {
        throw new Error("Method not implemented.");
    }

    getBoundingBox(): Rect {
        return this.sprite.getBoundingBox();
    }

    getSourceCode(): string {
        throw new Error("Method not implemented.");
    }

    load(data: InteractiveElementDump): void {
        throw new Error("Method not implemented.");
    }
}
