import { VectorForm } from "./vectorForm"

interface _Settings {
    windowSize: 100,
    pixelSize: 3,
    background: "#ccc",
    fps: 20,
    // cameraPoints: [[0.082, 0.123, 0.545], [3.554, 3.223, 3.873]],
    cameraPoints: [[3, 4, 0], [0, 0, 0]],
    cameraVectorForm?: VectorForm
}

export const Settings: _Settings = {
    windowSize: 100,
    pixelSize: 3,
    background: "#ccc",
    fps: 20,
    // cameraPoints: [[0.082, 0.123, 0.545], [3.554, 3.223, 3.873]],
    cameraPoints: [[3, 4, 0], [0, 0, 0]],
    cameraVectorForm: undefined
    // this all seems so ridiculous, why can I go back later and set a property of a type vector form without defining it in an interface?
}

// export const Settings = {
//     windowSize: 100,
//     pixelSize: 3,
//     background: "#ccc",
//     fps: 20,
//     // cameraPoints: [[0.082, 0.123, 0.545], [3.554, 3.223, 3.873]],
//     cameraPoints: [[3, 4, 0], [0, 0, 0]]
// }

// class _Settings {
//     private windowSize: number
//     private pixelSize: number
//     private background: string
//     private fps: number
//     private cameraPoints: number[][]
//     constructor() {
//         this.windowSize = 100
//         this.pixelSize = 3
//         this.background = "#ccc"
//         this.fps = 20
//         // this.cameraPoints = [[0.082, 0.123, 0.545], [3.554, 3.223, 3.873]]
//         this.cameraPoints = [[3, 4, 0], [0, 0, 0]]
//     }
//     public getWindowSize() { return this.windowSize }
//     public getPixelSize() { return this.pixelSize }
//     public getBackground() { return this.background }
//     public getFps() { return this.fps}
//     public getCameraPoints() { return this.cameraPoints }
// }

// export const Settings = new _Settings()