import { Settings, SettingsInterface } from './settings'
import { Screen } from './screen'
import { FrameStack } from './frame-stack'
import { Camera } from './camera'
import { Scene } from './scene'
import { Calculations } from './calculations'
import { _Frame } from './frame'
import { PointIn3dSpace } from './pointIn3dSpace'
import { Renderer } from './renderer'

export default class _Entry {
    private $root: string
    private settings?: SettingsInterface
    constructor(targetDiv: string, settings?: SettingsInterface) {
        this.$root = targetDiv
        this.settings = settings
    }
    public launch() {
        if(this.settings) {
            Settings.setSettings(this.settings)
        }
        console.log("Settings: ", Settings)
        Screen.init(this.$root)
        Camera.init()
        FrameStack.addFrameToStack(new _Frame(Renderer.createDummyFrameData()))
        Screen.drawFrame(FrameStack.popFrameFromStack()!)
    }
}
