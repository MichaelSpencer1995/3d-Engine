import { _Frame } from "../structures/frame"

class _FrameStack {
    private stack: _Frame[]
    constructor() {
        this.stack = []
    }

    public logStack() {
        console.log(this.stack)
    }
    public addFrameToStack(frame: _Frame) {
        this.stack.unshift(frame)
        console.log('frame stack: ', this.stack)
    }
    public popFrameFromStack() {
        return this.stack.pop()
    }
}

export const FrameStack = new _FrameStack()