import { Screen } from './screen'
import { FrameStack } from './frame-stack'
import { Camera } from './camera'
import { Settings } from './settings'
import { Scene } from './scene'
import { Calculations } from './calculations'

export default class _3dEngine {
    private frameStack: FrameStack = new FrameStack()
    private camera: Camera = new Camera()
    private scene: Scene = new Scene()
    private calculations: Calculations = new Calculations()
    private screen: Screen
    constructor(targetDiv: string) {
        this.screen = new Screen(targetDiv)
    }
    public launch() {
        this.screen.init()
        console.log(this.scene.genEntities())
        this.screen.renderFrame(this.frameStack.popFrameFromStack()!)
        this.frameStack.logStack()
        console.log('point on line' , this.calculations.getPointOnLine(this.camera.getLinePoints(), 1))
        console.log('distance between 2 points', this.calculations.getDistanceBetweenTwoPoints(this.camera.getLinePoints()))
    }
}