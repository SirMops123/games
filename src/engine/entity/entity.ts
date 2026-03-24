import type {Vector2Like} from "../math/vector2.ts";
import type {Renderer} from "../core/renderer.ts";

export abstract class Entity implements Vector2Like {
    x: number;
    y: number;
    w: number;
    h: number;  

    protected constructor(x: number, y: number, w: number, h: number) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    update(delta: number) {}
    render(renderer: Renderer) {}
}