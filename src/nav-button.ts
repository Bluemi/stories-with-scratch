import {Context, InteractiveElement, InteractiveElementDump} from "dkwdpil";
import {Rect} from "../../dkwdp-interactivelib/src/element-helpers/rect";

const WIDTH = 4;
const HEIGHT = 8;

export class NavButton extends InteractiveElement {
    dir: 'left' | 'right';
    nextScene: string;

    visible: boolean = true;

    constructor(identifier: string, dir: 'left' | 'right', nextScene: string) {
        super(identifier, 0, 0);
        this.dir = dir;
        this.nextScene = nextScene;
    }

    init(_c: Context) {
        this.x = 29.5;
        if (this.dir === 'left')
            this.x *= -1;
    }

    draw() {
        const c = this.getContext();
        const p = c.p;

        // Draw gray rectangle
        c.fill(180);
        c.noStroke();
        c.rectMode(c.CENTER);
        c.rect(this.x, this.y, WIDTH, HEIGHT);

        // Draw a white arrow
        c.fill(255);
        c.noStroke();
        p.beginShape();
        const size = 1;
        if (this.dir === 'left') {
            p.vertex(this.x + size, this.y - size);
            p.vertex(this.x - size, this.y);
            p.vertex(this.x + size, this.y + size);
        } else {
            p.vertex(this.x - size, this.y - size);
            p.vertex(this.x + size, this.y);
            p.vertex(this.x - size, this.y + size);
        }
        p.endShape(p.CLOSE);
    }

    update(c: Context) {
        super.update(c);
        if (this.clicked) c.nextScene = this.nextScene;
    }

    dump(): InteractiveElementDump {
        throw new Error("Method not implemented.");
    }

    getBoundingBox(): Rect {
        return Rect.fromMode(this.x, this.y, WIDTH, HEIGHT, "center");
    }

    getSourceCode(): string {
        throw new Error("Method not implemented.");
    }

    load(_data: InteractiveElementDump): void {
        throw new Error("Method not implemented.");
    }
}
