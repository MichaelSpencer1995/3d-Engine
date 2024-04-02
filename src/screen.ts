import { Settings } from './settings'

class ScreenClass {
    public init(elementSelector: string) {
        let $screen = document.querySelector(elementSelector)!

        for(let i = 0; i < Settings.getWindowSize(); i++) {
            let $row = document.createElement('div')
            $row.style.display = 'flex'

            for(let j = 0; j < Settings.getWindowSize(); j++) {
                let $pixel = document.createElement('div')
                $pixel.style.width = Settings.getPixelSize() + 'px'
                $pixel.style.height = Settings.getPixelSize() + 'px'
                $pixel.style.background = Settings.getBackground()
                $row.appendChild($pixel)
            }
            $screen.appendChild($row)
        }
    }
    public renderFrame(frame: number) {
        console.log('render this frame ', frame)
    }
}

export const Screen = new ScreenClass()