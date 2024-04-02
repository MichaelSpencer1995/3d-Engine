export class _Frame {
    private frame: string[][]
    constructor(frameData: string[][]) {
        this.frame = frameData
    }
    get _frame() {
        return this.frame
    }
    public getPixel(x: number, y: number) {
        return this.frame[x][y]
    }
}