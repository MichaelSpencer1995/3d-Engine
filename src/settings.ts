export interface SettingsInterface {
    windowSize?: number
    pixelSize?: number
    background?: string
    fps?: number
    cameraPoints?: number[][]
}

class SettingsClass {
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
        this.cameraPoints = [[3, 4, 0], [0, 0, 0]]
    }
    public getWindowSize() {
        return this.windowSize
    }
    public getPixelSize() {
        return this.pixelSize
    }
    public getBackground() {
        return this.background
    }
    public getCameraPoints() {
        return this.cameraPoints
    }
    public setWindowSize(size: number) {
        this.windowSize = size
    }
    public setPixelSize(size: number) {
        this.pixelSize = size
    }
    public setBackground(color: string) {
        this.background = color
    }
    public setCameraPoints(points: number[][]) {
        this.cameraPoints = points
    }
}

export const Settings = new SettingsClass()