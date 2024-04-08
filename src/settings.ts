export interface SettingsInterface {
    windowSize?: number
    pixelSize?: number
    background?: string
    fps?: number
    cameraPoints?: number[][]
}

class _Settings {
    private windowSize: number
    private pixelSize: number
    private background: string
    private fps: number
    private cameraPoints: number[][]
    constructor() {
        this.windowSize = 100
        this.pixelSize = 3
        this.background = '#ccc'
        this.fps = 20
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
}

export const Settings = new _Settings()