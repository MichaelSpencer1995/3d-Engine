import { _Vertex } from "../vertex"
import { _PixelToColor } from "./pixel-to-color"

export class _Square {
    name: string
    width: number
    center: _Vertex
    pixels: _PixelToColor[]
    constructor(name: string, width: number, center: _Vertex) {
        this.name = name
        this.width = width
        this.center = center
        this.pixels = []
        this.calculatePixels()
    }
    private calculatePixels() {
        const pixels = [
            new _PixelToColor(this.center.x - 10, this.center.y, 'red'),
            new _PixelToColor(this.center.x + 10, this.center.y, 'yellow'),
            new _PixelToColor(this.center.x, this.center.y - 10, 'green'),
            new _PixelToColor(this.center.x, this.center.y + 10, 'blue')
        ]
        pixels.forEach(pixel => {
            this.pixels.push(pixel)
        })
    }
    public getPixelLocations() {
        return this.pixels
    }
}