import { Settings, SettingsInterface } from './settings'
import { Screen } from './screen'
import { FrameStack } from './frame-stack'
import { Camera } from './camera'
import { Scene } from './scene'
import { Calculations } from './calculations'


export default class Entry {
    private $root: string
    private settings?: SettingsInterface
    constructor(targetDiv: string, settings?: SettingsInterface) {
        this.$root = targetDiv
        this.settings = settings
    }
    private setSettings() {
        // have to check again if(settings){} because TS isn't smart enough to figur out that the only way to get into this function is if the settings check below passed it still thinks this.settings could be undefined if I go straight into, this.settings.windowSize etc but I don't want to remove the if check in the launch function because that is where it rightly belongs for understandabilities sake do other languages have this issue to or is it unique to typescript? am I missing something here?
        if(this.settings) {
            if(this.settings.windowSize) {
                Settings.setWindowSize(this.settings.windowSize)
            }
            if(this.settings.pixelSize) {
                Settings.setPixelSize(this.settings.pixelSize)
            }
            if(this.settings.background) {
                Settings.setBackground(this.settings.background)
            }
            if(this.settings.background) {
                Settings.setBackground(this.settings.background)
            }
        }
    }
    launch() {
        if(this.settings) {
            this.setSettings()
        }
        console.log('settings: ', Settings)
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
