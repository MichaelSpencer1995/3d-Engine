import { Vector3 } from "./vector3"

export class Scene {
    // I simply hardcoded in the vertices of this purple 3x3x3 cube with center at 0, 0, 0 that I wanted to render
    private entities = [
        {
            id: "Cube",
            color: "Purple",
            vertices: [
                new Vector3(1.5, 1.5, 1.5),
                new Vector3(1.5, 1.5, -1.5),
                new Vector3(1.5, -1.5, 1.5),
                new Vector3(1.5, -1.5, -1.5),
                new Vector3(-1.5, 1.5, 1.5),
                new Vector3(-1.5, 1.5, -1.5),
                new Vector3(-1.5, -1.5, 1.5),
                new Vector3(-1.5, -1.5, -1.5)
            ]
        }
    ]
    genEntities() {
        return this.entities
    }
}