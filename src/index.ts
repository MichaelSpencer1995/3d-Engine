import { Settings } from './settings'
import { Screen } from './screen'
import { FrameStack } from './frame-stack'
import { Camera } from './camera'
import { Scene } from './scene'
import { Calculations } from './calculations'


export default class _3dEngine {
    // private frameStack: FrameStack = new FrameStack()
    // private scene: Scene = new Scene()
    // private screen: Screen
    private $root: string
    constructor(targetDiv: string) {
        this.$root = targetDiv
    }
    public launch() {
        Screen.init(this.$root)
        // console.log(this.scene.genEntities())
        // this.screen.renderFrame(this.frameStack.popFrameFromStack()!)
        // this.frameStack.logStack()
        console.log('point on line: ' , Calculations.getPointOnLine(Camera.getPoints(), 1, false))
        console.log('distance of T: ' , Calculations.getPointOnLine(Camera.getPoints(), 1, false))
        console.log('distance between 2 points: ', Calculations.getDistanceBetweenTwoPoints(Camera.getPoints()))
        console.log('vector form of camera: ', Camera.getVectorForm())
    }
}
