import { Settings } from './settings'

class _Screen {
    init(elementSelector: string) {
        let $screen = document.querySelector(elementSelector)!

        for(let i = 0; i < Settings.windowSize; i++) {
            let $row = document.createElement('div')
            $row.style.display = 'flex'

            for(let j = 0; j < Settings.windowSize; j++) {
                let $pixel = document.createElement('div')
                $pixel.style.width = Settings.pixelSize + 'px'
                $pixel.style.height = Settings.pixelSize + 'px'
                $pixel.style.background = Settings.background
                $row.appendChild($pixel)
            }
            $screen.appendChild($row)
        }
    }
    renderFrame(frame: number) {
        console.log('render this frame ', frame)
    }
}

export const Screen = new _Screen()