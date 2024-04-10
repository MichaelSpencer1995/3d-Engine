import { FrameStack } from "../components/frame-stack"
import { Renderer } from "../components/renderer"
import { Calculations } from "../helpers/calculations"
import { _Frame } from "../not-sure-what-to-name/frame"
import { _Vertex } from "../not-sure-what-to-name/vertex"
import { _PixelToColor } from "./pixel-to-color"

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
            new _PixelToColor(Math.trunc(this.points[0].x), Math.trunc(this.points[0].y), 'red'),
            new _PixelToColor(Math.trunc(this.points[1].x), Math.trunc(this.points[1].y), 'yellow'),
            new _PixelToColor(Math.trunc(this.points[2].x), Math.trunc(this.points[2].y), 'blue'),
            new _PixelToColor(Math.trunc(this.points[3].x), Math.trunc(this.points[3].y), 'green')
        ]
        pixels.forEach(pixel => {
            this.pixels.push(pixel)
        })
        this.addSides()
    }
    private addSides() {
        let result = Calculations.getSlopeLine2d([this.points[0], this.points[1]])
        console.log('y = ' + result[0] + 'x + ' + result[1])
        let y = (result[0] * (this.points[0].x + 1)) + result[1]
        this.pixels.push(
            new _PixelToColor(Math.trunc(this.points[0].x + 1), Math.trunc(y), 'purple')
        )
        
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
        console.log('new points', this.points)
        this.calculatePixels()
        FrameStack.addFrameToStack(new _Frame(Renderer.createDummyFrameData()))
    }
}