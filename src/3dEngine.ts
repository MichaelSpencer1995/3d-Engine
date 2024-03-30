import { Screen } from './screen.js'
import { FrameStack } from './frame-stack.js'
import { Camera } from './camera.js'
import { Settings } from './settings.js'
import { Scene } from './scene.js'

export class _3dEngine {
    private frameStack: FrameStack = new FrameStack()
    private camera: Camera = new Camera()
    private scene: Scene = new Scene()
    private screen: Screen
    constructor(targetDiv: string) {
        this.screen = new Screen(targetDiv)
    }
    launch() {
        this.screen.init()
        console.log(this.scene.genEntities())
        // this.screen.renderFrame(this.frameStack.popFrameFromStack())
        // this.frameStack.logStack()
    }
}