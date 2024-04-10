import { _Square } from "../blueprints/square"
import { _Vertex } from "../not-sure-what-to-name/vertex"

class _Scene {
    public entities = [
        new _Square('001', 30, new _Vertex(65, 70))
    ]
    public getEntities() {
        return this.entities
    }
}

export const Scene = new _Scene()