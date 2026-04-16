import {Context, InteractiveElement, InteractiveElementDump, Sprite} from "dkwdpil";
import {Rect} from "../../dkwdp-interactivelib/src/element-helpers/rect";

export class Arrow extends InteractiveElement {
    sprite: Sprite;

    constructor(identifier: string, x: number, y: number, rotation: number = 0) {
        super(identifier, x, y);
        this.sprite = new Sprite(identifier + "_sprite", "arrow.png", this.x, this.y, {size: 2, rotation});
    }

    draw() {
        this.sprite.draw();
    }

    update(c: Context) {
        this.sprite.update(c);
        this.sprite.size = 2 + Math.sin(c.globalTime * Math.PI * 2 * 0.6) * 0.1;
    }

    dump(): InteractiveElementDump {
        throw new Error("Method not implemented");
    }

    getBoundingBox(): Rect {
        return this.sprite.getBoundingBox();
    }

    getSourceCode(): string {
        throw new Error("Method not implemented");
    }

    load(data: InteractiveElementDump): void {
        throw new Error("Method not implemented");
    }
}
