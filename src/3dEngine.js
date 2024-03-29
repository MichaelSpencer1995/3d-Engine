import { Screen } from './screen.js'
import { FrameStack } from './frame-stack.js'
import { Camera } from './camera.js'
import { Settings } from './settings.js'

export class _3dEngine {
    constructor(targetDiv) {
        this.screen = new Screen(targetDiv)
        this.frameStack = new FrameStack()
        this.camera = new Camera(Settings.defaultCameraPos)
    }
    launch() {
        this.screen.init()
        this.screen.renderFrame(this.frameStack.popFrameFromStack())
        this.frameStack.logStack()
    }
}