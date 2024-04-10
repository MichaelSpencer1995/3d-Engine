import { Scene } from "./scene"

class _EventHandler {
    private rotation = 0.05
    // private mouseClicked = false
    public setMouseListener() {
        // document.onmousemove = () => this.handleMouseMove()
    }
    private handleMouseMove() {
        Scene.entities[0].rotate(this.rotation)
    }
    // public mouseDown() {
    //     this.mouseClicked = true
    //     console.log(this.mouseClicked)
    // }
    // public mouseUp() {
    //     this.mouseClicked = false
    //     console.log(this.mouseClicked)
    // }
    public click() {
        // document.onmousemove = () => this.handleMouseMove()
        Scene.entities[0].rotate(this.rotation)

    }
}

export const EventHandler = new _EventHandler()