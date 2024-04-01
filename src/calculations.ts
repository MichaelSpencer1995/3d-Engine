import { PointIn3dSpace } from "./pointIn3dSpace"


export class Calculations {
    getPointOnLine(pointsOnLine: PointIn3dSpace[], t: number) {
        // parametric equation of a line
        // The Math Sorcerer on youtube best resource found thus far
        let xoT = pointsOnLine[1].x + ((pointsOnLine[0].x - pointsOnLine[1].x) * t)
        let yoT = pointsOnLine[1].y + ((pointsOnLine[0].y - pointsOnLine[1].y) * t)
        let zoT = pointsOnLine[1].z + ((pointsOnLine[0].z - pointsOnLine[1].z) * t)

        return new PointIn3dSpace(xoT, yoT, zoT)
    }
    getDistanceBetweenTwoPoints(points: PointIn3dSpace[]) {
        // distance between p1 (x, y, z) and p2 (x, y, z)
        // p = √((x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2)
        let distance
        return distance
    }
    equationOfPlane() {
        // If we know the normal vector of a plane and a point passing through the plane,
        // the equation of the plane is established.
        // a ( x − x 1 ) + b ( y − y 1 ) + c ( z − z 1 ) = 0.
    }
}