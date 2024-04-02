export class FrameStackClass {
    private stack = [0, 1, 2, 3, 4, 5]

    public logStack() {
        console.log(this.stack)
    }
    public addFrameToStack(frame: number) {
        this.stack.unshift(frame)
    }
    public popFrameFromStack() {
        return this.stack.pop()
    }
}