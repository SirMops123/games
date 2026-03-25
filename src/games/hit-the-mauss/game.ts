import {Entity} from "../../engine/entity/entity.ts";
import type {Renderer} from "../../engine/core/renderer.ts";
import type {Input} from "../../engine/core/input.ts";

class Mauss extends Entity{
    private active = false;
    constructor() {
        const size = 20
        super(0,0,size,size)
    }
    render(r:Renderer){
        r.drawRect(this.x,this.y,this.w,this.h,"#a00f05")
    }
    hit(){
        this.active = false;
    }
    peek(){
        this.active = true;
    }
}
class Hammer extends Entity{
    speed = 20
    private ready = true;
    constructor() {
        const size = 30
        super(0,0,size,size)
    }
    render(r:Renderer){
        r.drawRect(this.x,this.y,this.w,this.h,"#101af1")
    }
}
type GameState = "start" | "running" | "end"
class GameScreen extends Screen{
    entities: Entity[] = [];
    score:number = 0
    gamestate: GameState = "running"

    constructor() {
        super()
        this.entities.push(new Hammer());
        for (let i = 0; i < 10; i++) {
            const m = new Mauss();
            this.entities.push(m);
        }
    }
    render(r:Renderer){
        for (const e of this.entities) {
            e.render(r)
        }
        r.text(`Score: ${this.score}`,10,20, "#fff")
    }

    update(dt:number, input:Input){
        if(this.gamestate === "running"){
            for (const e of this.entities) {
                e.update(dt)
            }
        }
        this.handleInput(input)

    }
    handleInput(input:Input){
        //todo
    }


}
