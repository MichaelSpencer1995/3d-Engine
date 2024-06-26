import { _Frame } from "../structures/frame"
import { Screen } from "../components/screen"
import { Renderer } from "./renderer"

class _FrameStack {
    private stack: _Frame[]
    constructor() {
        this.stack = []
    }
    public init() {
        this.addFrameToStack(new _Frame(Renderer.createDummyFrameData()))
        Screen.drawFrame(FrameStack.popFrameFromStack()!)
    }
    public addFrameToStack(frame: _Frame) {
        this.stack.unshift(frame)
    }
    public popFrameFromStack() {
        return this.stack.pop()
    }
}

export const FrameStack = new _FrameStack()