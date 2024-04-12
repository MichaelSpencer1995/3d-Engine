import { Screen } from './components/screen'
import { Scene, EntityInterface } from './components/scene'
import { Camera } from './components/camera'
import { FrameStack } from './components/frame-stack'
import { Settings, SettingsInterface } from './config/settings'
import { _Frame } from './structures/frame'
import { EventHandler } from './components/event-handler'

export default class _Entry {
    private $root: string
    private settings: SettingsInterface
    constructor(targetDiv: string, settings: SettingsInterface) {
        this.$root = targetDiv
        this.settings = settings
    }
    public launch() {
        Settings.setSettings(this.settings)
        Screen.init(this.$root)
        Camera.init()
        Scene.init()
        FrameStack.init()
        EventHandler.init()
    }
}