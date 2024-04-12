import { Settings } from "../config/settings"
import { _Square } from "../entities/square"
import { _Vertex } from "../structures/vertex"

export interface EntityInterface {
    type: string,
    id: string,
    width: number,
    center: number[]
}

class _Scene {
    public entities: _Square[]
    constructor() {
        this.entities = []
    }
    public init() {
        for(let i = 0; i < Settings._entities.length; i++) {
            if(Settings._entities[i].type == 'square') {
                this.entities.push(
                    new _Square(
                        Settings._entities[i].id,
                        Settings._entities[i].width,
                        new _Vertex(
                            Settings._entities[i].center[0],
                            Settings._entities[i].center[1]
                        )
                    )
                )
            }
        }
    }
    public getEntities() {
        return this.entities
    }
}

export const Scene = new _Scene()