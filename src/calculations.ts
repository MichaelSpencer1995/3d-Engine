import { PointIn3dSpace } from "./pointIn3dSpace"
import { VectorForm } from "./vectorForm"

class _Calculations {
    public getPointOnLine(point: PointIn3dSpace, vectorForm: VectorForm, t: number, returnLengthOfT: boolean) {
        // parametric equation of a line
        // The Math Sorcerer on youtube best resource found thus far

        // let vectorForm = this.getVectorForm(pointsOnLine)
        // console.log(vectorForm)
        let xoT = point.x + (vectorForm.a * t)
        let yoT = point.y + (vectorForm.b * t)
        let zoT = point.z + (vectorForm.c * t)

        // let point = new PointIn3dSpace(xoT, yoT, zoT)

        // if(returnLengthOfT) {
        //     return this.getDistanceBetweenTwoPoints([pointsOnLine[0], point])
        // }
        return new PointIn3dSpace(xoT, yoT, zoT)
    }
    public getVectorForm(pointsOnLine: PointIn3dSpace[]) {
        return new VectorForm(
            (pointsOnLine[0].x - pointsOnLine[1].x),
            (pointsOnLine[0].y - pointsOnLine[1].y),
            (pointsOnLine[0].z - pointsOnLine[1].z),
            this.getDistanceBetweenTwoPoints(pointsOnLine)
        )
    }
    public getDistanceBetweenTwoPoints(points: PointIn3dSpace[]) {
        // equation for distance between 2 points in 3d space
        // p = √((x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2)
        return (
            Math.sqrt(
                (Math.pow(points[0].x - points[1].x, 2)) +
                (Math.pow(points[0].y - points[1].y, 2)) +
                (Math.pow(points[0].z - points[1].z, 2))
            )
        )
    }
    public getPointOnLineXDistanceFromOnePoint(pointOnLine: PointIn3dSpace, vectorForm: VectorForm, x: number) {
        let coefficient = x / vectorForm.t
        return this.getPointOnLine(pointOnLine, vectorForm, coefficient, false)
        // return this.getDistanceBetweenTwoPoints()
        // I don't think this function will be used, just made it to help me better conceptualize
        // the math I had to learn to make this application, and sort of self affirm that I am understanding/visualizing
        // everything correctly \m/ 0_0 \m/
        // Also, I am almost certain a good Mathemetician could show me the better way to do this.
        // this.getPointOnLine(pointsOnLine)
        
    }
    public equationOfPlane() {
        
        // If we know the normal vector of a plane and a point passing through the plane,
        // the equation of the plane is established.
        // a ( x − x 1 ) + b ( y − y 1 ) + c ( z − z 1 ) = 0.
    }
}


export const Calculations = new _Calculations()