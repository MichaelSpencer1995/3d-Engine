import { NormalizedVectorForm } from "../structures/normalizedVectorForm"
import { PointIn3dSpace } from "../structures/pointIn3dSpace"
import { _Vertex } from "../structures/vertex"

class _Calculations {
    public getSlopeLine2d(points: _Vertex[]) {
        let m = (points[0].y - points[1].y) / (points[0].x - points[1].x)
        let b = points[0].y - (m * points[0].x)
        return [m, b]
    }
    public rotate2d(origin: number[], point: number[], theta: number) {
        return [
            ((point[0] - origin[0]) * Math.cos(theta)) - ((point[1] - origin[1]) * Math.sin(theta)) + origin[0],
            ((point[0] - origin[0]) * Math.sin(theta)) + ((point[1] - origin[1]) * Math.cos(theta)) + origin[1]
        ]
    }
    public getPointOnLine(point: PointIn3dSpace, normalizedVectorForm: NormalizedVectorForm, distance: number) {
        return new PointIn3dSpace(
            point.x + normalizedVectorForm.a * distance,
            point.y + normalizedVectorForm.b * distance,
            point.z + normalizedVectorForm.c * distance
        )
    }
    public dotProduct(vectors: NormalizedVectorForm[]) {
        let vector1 = vectors[0]
        let vector2 = vectors[1]

    }
    public getNormalizedVectorForm(pointsOnLine: PointIn3dSpace[]) {
        let x = pointsOnLine[0].x - pointsOnLine[1].x
        let y = pointsOnLine[0].y - pointsOnLine[1].y
        let z = pointsOnLine[0].z - pointsOnLine[1].z
        let length = this.getDistanceBetweenTwoPoints(pointsOnLine)
        let nX = x / length
        let nY = y / length
        let nZ = z / length

        return new NormalizedVectorForm(nX, nY, nZ)
    }
    public getDistanceBetweenTwoPoints(points: PointIn3dSpace[]) {
        return (
            Math.sqrt(
                (Math.pow(points[0].x - points[1].x, 2)) +
                (Math.pow(points[0].y - points[1].y, 2)) +
                (Math.pow(points[0].z - points[1].z, 2))
            )
        )
    }
    public getPointOnLineXDistanceFromOnePoint(pointOnLine: PointIn3dSpace, normalizedVectorForm: NormalizedVectorForm, distance: number) {
        // return this.getPointOnLine(pointOnLine, normalizedVectorForm, distance)
        // return 
    }

    public equationOfPlane() {
    }
    public getCamerasVectors() {

    }
    public sideFinder() {
        
    }
}


export const Calculations = new _Calculations()