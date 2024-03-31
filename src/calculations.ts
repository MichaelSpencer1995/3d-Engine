import { Vector3 } from "./vector3"


export class Calculations {
    getPointOnLine(pointsOnLine: Vector3[], t: number) {
        let xoT = pointsOnLine[1].x + ((pointsOnLine[0].x - pointsOnLine[1].x) * t)
        let yoT = pointsOnLine[1].y + ((pointsOnLine[0].y - pointsOnLine[1].y) * t)
        let zoT = pointsOnLine[1].z + ((pointsOnLine[0].z - pointsOnLine[1].z) * t)

        return new Vector3(xoT, yoT, zoT)
    }
}