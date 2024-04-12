import { _Vertex } from "../structures/vertex"

export class _Entity {
    name: string
    width: number
    center: _Vertex
    constructor(name: string, width: number, center: _Vertex) {
        this.name = name,
        this.width = width,
        this.center = center
    }
}