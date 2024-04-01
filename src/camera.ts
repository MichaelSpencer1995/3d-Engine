import { Settings } from "./settings"
import { PointIn3dSpace} from "./pointIn3dSpace"

export class Camera {
    private points: PointIn3dSpace[] = [
        new PointIn3dSpace(Settings.cameraPoints[0][0], Settings.cameraPoints[0][1], Settings.cameraPoints[0][2]),
        new PointIn3dSpace(Settings.cameraPoints[1][0], Settings.cameraPoints[1][1], Settings.cameraPoints[1][2])
    ]
    getPoints() {
        return this.points
    }
}