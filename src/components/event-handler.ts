import { _Frame } from "../structures/frame"
import { FrameStack } from "./frame-stack"
import { Scene } from "./scene"
import { Screen } from "./screen"

class _EventHandler {
    private rotation = -0.1
    private keyDown = false
    private clock: number = setInterval(() => {}, 999)
    public init() {
        window.addEventListener('keydown', (e) => {
            if(this.keyDown || e.code != 'Space') {
                return
            }
            this.keyDown = true
            this.clock = setInterval(() => {
                Scene.entities[0].rotate(this.rotation)
                Screen.drawFrame(FrameStack.popFrameFromStack()!)
            }, 1)
        })
        window.addEventListener('keyup', (e) => {
            if(e.code != 'Space') {
                return
            }
            this.keyDown = false
            clearInterval(this.clock)
        })
    }
}

export const EventHandler = new _EventHandler()