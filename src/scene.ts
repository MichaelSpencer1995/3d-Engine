import { PointIn3dSpace } from "./pointIn3dSpace"

export class Scene {
    // I simply hardcoded in the vertices of this purple 3x3x3 cube with center at 0, 0, 0 that I wanted to render
    private entities = [
        {
            id: "Cube",
            color: "Purple",
            vertices: [
                new PointIn3dSpace(1.5, 1.5, 1.5),
                new PointIn3dSpace(1.5, 1.5, -1.5),
                new PointIn3dSpace(1.5, -1.5, 1.5),
                new PointIn3dSpace(1.5, -1.5, -1.5),
                new PointIn3dSpace(-1.5, 1.5, 1.5),
                new PointIn3dSpace(-1.5, 1.5, -1.5),
                new PointIn3dSpace(-1.5, -1.5, 1.5),
                new PointIn3dSpace(-1.5, -1.5, -1.5)
            ]
        }
    ]
    public genEntities() {
        return this.entities
    }
}