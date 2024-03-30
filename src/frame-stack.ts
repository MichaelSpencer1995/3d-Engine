export class FrameStack {
    private stack = [0, 1, 2, 3, 4, 5]

    logStack() {
        console.log(this.stack)
    }
    addFrameToStack(frame) {
        this.stack.unshift(frame)
    }
    popFrameFromStack() {
        return this.stack.pop()
    }
}