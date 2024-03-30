import { Settings } from './settings.js'


export class Screen {
    private targetDiv: string
    constructor(targetDiv: string) {
        this.targetDiv = targetDiv
    }
    init() {
        let $screen = document.querySelector(this.targetDiv)!

        for(let i = 0; i < Settings.viewPortHeight; i++) {
            let $row = document.createElement('div')
            $row.style.display = 'flex'

            for(let j = 0; j < Settings.viewPortWidth; j++) {
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