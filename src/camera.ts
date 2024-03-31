import { Settings } from "./settings"
import { Vector3 } from "./vector3"

export class Camera {
    private linePoints: Vector3[] = [
        new Vector3(Settings.cameraPoints[0][0], Settings.cameraPoints[0][1], Settings.cameraPoints[0][2]),
        new Vector3(Settings.cameraPoints[1][0], Settings.cameraPoints[1][1], Settings.cameraPoints[1][2])
    ]
    getLinePoints() {
        return this.linePoints
    }
}