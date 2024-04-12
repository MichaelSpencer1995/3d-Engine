import { EntityInterface } from "../components/scene"

export interface SettingsInterface {
    windowSize?: number
    pixelSize?: number
    background?: string
    fps?: number
    cameraPoints?: number[][],
    entities?: EntityInterface[]
}

class _Settings {
    private windowSize: number
    private pixelSize: number
    private background: string
    private fps: number
    private cameraPoints: number[][]
    private entities: EntityInterface[]
    constructor() {
        this.windowSize = 150
        this.pixelSize = 2
        this.background = '#ccc'
        this.fps = -1
        this.entities = [
            {
                type: 'square',
                id: '001',
                width: 10,
                center: [(150 / 2), (150 / 2)]
            }
        ]
        // this.cameraPoints = [[3, 3, 0.1], [0, 0, 0]]
        this.cameraPoints = [[3, 4, 0], [0, 0, 0]]
        // this.cameraPoints = [[3, 4, 0.2], [0, 0, 0]]
        // this.cameraPoints = [[0, 0, 0], [6, 8, 0]]
    }
    get _windowSize() {
        return this.windowSize
    }
    get _pixelSize() {
        return this.pixelSize
    }
    get _background() {
        return this.background
    }
    get _fps() {
        return this.fps
    }
    get _cameraPoints() {
        return this.cameraPoints
    }
    get _entities() {
        return this.entities
    }
    set _entities(entities: EntityInterface[]) {
        this.entities = entities
    }
    set _windowSize(size: number) {
        this.windowSize = size
    }
    set _pixelSize(size: number) {
        this.pixelSize = size
    }
    set _background(color: string) {
        this.background = color
    }
    set _fps(fps: number) {
        this.fps = fps
    }
    set _cameraPoints(points: number[][]) {
        this.cameraPoints = points
    }
    public setSettings(settings?: SettingsInterface) {
        if(!settings) {
            return
        }
        if(settings.windowSize) {
            this._windowSize = settings.windowSize
        }
        if(settings.pixelSize) {
            this._pixelSize = settings.pixelSize
        }
        if(settings.background) {
            this._background = settings.background
        }
        if(settings.fps) {
            this._fps = settings.fps
        }
        if(settings.entities) {
            this._entities = settings.entities
        }
    }
}

export const Settings = new _Settings()