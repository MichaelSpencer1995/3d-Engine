import { FrameStack } from "../components/frame-stack"
import { Renderer } from "../components/renderer"
import { Calculations } from "../helpers/calculations"
import { _Frame } from "../structures/frame"
import { _Vertex } from "../structures/vertex"
import { _PixelToColor } from "../structures/pixel-to-color"

export class _Square {
    name: string
    width: number
    center: _Vertex
    pixels: _PixelToColor[]
    points: _Vertex[]
    constructor(name: string, width: number, center: _Vertex) {
        this.name = name
        this.width = width
        this.center = center
        this.pixels = []
        this.points = [
            new _Vertex(this.center.x - width, this.center.y),
            new _Vertex(this.center.x, this.center.y + width),
            new _Vertex(this.center.x + width, this.center.y),
            new _Vertex(this.center.x, this.center.y - width)
        ]
        this.calculatePixels()
    }
    private calculatePixels() {
        this.pixels = []
        const pixels = [
            new _PixelToColor(Math.round(this.points[0].x), Math.round(this.points[0].y), 'red'),
            new _PixelToColor(Math.round(this.points[1].x), Math.round(this.points[1].y), 'yellow'),
            new _PixelToColor(Math.round(this.points[2].x), Math.round(this.points[2].y), 'blue'),
            new _PixelToColor(Math.round(this.points[3].x), Math.round(this.points[3].y), 'green')
        ]
        pixels.forEach(pixel => {
            this.pixels.push(pixel)
        })
        this.addSides()
    }
    private addSides() {
        let result0 = Calculations.getSlopeLine2d([this.points[0], this.points[1]])
        let result1 = Calculations.getSlopeLine2d([this.points[1], this.points[2]])
        let result2 = Calculations.getSlopeLine2d([this.points[2], this.points[3]])
        let result3 = Calculations.getSlopeLine2d([this.points[3], this.points[0]])

        let x0 = this.points[0].x - ((this.points[0].x - this.points[1].x) / 2)
        let y0 = (result0[0] * (x0)) + result0[1]

        let x1 = this.points[1].x - ((this.points[1].x - this.points[2].x) / 2)
        let y1 = (result1[0] * (x1)) + result1[1]

        let x2 = this.points[2].x - ((this.points[2].x - this.points[3].x) / 2)
        let y2 = (result2[0] * (x2)) + result2[1]

        let x3 = this.points[3].x - ((this.points[3].x - this.points[0].x) / 2)
        let y3 = (result3[0] * (x3)) + result3[1]

        this.pixels.push(new _PixelToColor(Math.round(x0), Math.round(y0), 'purple'))
        this.pixels.push(new _PixelToColor(Math.round(x1), Math.round(y1), 'orange'))
        this.pixels.push(new _PixelToColor(Math.round(x2), Math.round(y2), 'brown'))
        this.pixels.push(new _PixelToColor(Math.round(x3), Math.round(y3), 'navy'))
    }
    public getPixelLocations() {
        return this.pixels
    }
    public rotate(theta: number) {
        for(let i=0; i < 4; i++) {
            let newPos = Calculations.rotate2d([this.center.x, this.center.y], [this.points[i].x, this.points[i].y], theta)
            this.points[i].x = newPos[0]
            this.points[i].y = newPos[1]
        }
        this.calculatePixels()
        FrameStack.addFrameToStack(new _Frame(Renderer.createDummyFrameData()))
    }
}