import { _Square } from "./blueprints/square"
import { PointIn3dSpace } from "./pointIn3dSpace"
import { _Vertex } from "./vertex"

class _Scene {
    private entities = [
        new _Square('001', 10, new _Vertex(65, 70))
    ]
    public getEntities() {
        return this.entities
    }
}

export const Scene = new _Scene()