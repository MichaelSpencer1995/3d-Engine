import { Settings, SettingsInterface } from './settings'
import { Screen } from './screen'
import { FrameStack } from './frame-stack'
import { Camera } from './camera'
import { Scene } from './scene'
import { Calculations } from './calculations'
import { _Frame } from './frame'
import { PointIn3dSpace } from './pointIn3dSpace'


export default class _Entry {
    private $root: string
    private settings?: SettingsInterface
    constructor(targetDiv: string, settings?: SettingsInterface) {
        this.$root = targetDiv
        this.settings = settings
    }
    public launch() {
        this.setSettings()
        Screen.init(this.$root)
        Camera.init()
        FrameStack.addFrameToStack(new _Frame(this.createDummyFrameData()))
        Screen.renderFrame(FrameStack.popFrameFromStack()!)
    }
    private setSettings() {
        if(this.settings) {
            if(this.settings.windowSize) {
                Settings._windowSize = this.settings.windowSize
            }
            if(this.settings.pixelSize) {
                Settings._pixelSize = this.settings.pixelSize
            }
            if(this.settings.background) {
                Settings._background = this.settings.background
            }
            if(this.settings.fps) {
                Settings._fps = this.settings.fps
            }
        }
    }
    public createDummyFrameData() {
        const coloredPixels = [
            // these just need to be in order
            [10, 12],
            [16, 15],
            [20, 44],
            [25, 30]
        ]
        let frame = []
        for(let i = 0; i < Settings._windowSize; i++) {
            let row = []
            for(let j = 0; j < Settings._windowSize; j++) {
                let pixel = Settings._background
                if(coloredPixels[0]) {
                    if(coloredPixels[0][0] == i && coloredPixels[0][1] == j) {
                        console.log('call this 4 times')
                        pixel = "red"
                        coloredPixels.shift()
                    }
                }
                row.push(pixel)
            }
            frame.push(row)
        }
        console.log('this should be empty', coloredPixels)
        return frame
    }
}
