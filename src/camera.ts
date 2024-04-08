import { Settings } from "./settings"
import { PointIn3dSpace } from "./pointIn3dSpace"
import { NormalizedVectorForm } from "./normalizedVectorForm"
import { Calculations } from "./calculations"

class _Camera {
    private points: PointIn3dSpace[] = [
        new PointIn3dSpace(Settings._cameraPoints[0][0], Settings._cameraPoints[0][1], Settings._cameraPoints[0][2]),
        new PointIn3dSpace(Settings._cameraPoints[1][0], Settings._cameraPoints[1][1], Settings._cameraPoints[1][2])
    ]
    private normalizedVectorForm: NormalizedVectorForm = Calculations.getNormalizedVectorForm(this.points)
    public init() {

    }
    public getPoints() {
        return this.points
    }
    public getNormalizedVectorForm() {
        return this.normalizedVectorForm
    }
}

export const Camera = new _Camera()