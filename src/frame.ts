interface Pixel {
    background?: string
}

export class _Frame {
    private frame: Pixel[][]
    constructor(frameData: Pixel[][]) {
        this.frame = frameData
    }
    get _frame() {
        return this.frame
    }
    public getPixel(x: number, y: number) {
        return this.frame[x][y]
    }
}