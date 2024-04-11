import { Settings } from "../config/settings"
import { _Square } from "../entities/square"
import { _Vertex } from "../structures/vertex"

class _Scene {
    public entities = [
        new _Square('001', 23, new _Vertex(Settings._windowSize / 2, Settings._windowSize / 2))
    ]
    public getEntities() {
        return this.entities
    }
}

export const Scene = new _Scene()