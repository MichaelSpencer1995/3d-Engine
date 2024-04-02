import { Settings } from "./settings"
import { PointIn3dSpaceClass } from "./pointIn3dSpace"
import { VectorFormClass } from "./vectorForm"
import { Calculations } from "./calculations"

class CameraClass {
    private points: PointIn3dSpaceClass[] = [
        new PointIn3dSpaceClass(Settings.getCameraPoints()[0][0], Settings.getCameraPoints()[0][1], Settings.getCameraPoints()[0][2]),
        new PointIn3dSpaceClass(Settings.getCameraPoints()[1][0], Settings.getCameraPoints()[1][1], Settings.getCameraPoints()[1][2])
    ]
    private vectorForm: VectorFormClass = Calculations.getVectorForm(this.points)

    public getPoints() {
        return this.points
    }
    public getVectorForm() {
        return this.vectorForm
    }
}

export const Camera = new CameraClass()