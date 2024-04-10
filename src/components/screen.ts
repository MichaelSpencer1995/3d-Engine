import { Settings } from "../config/settings"
import { _Frame } from "../not-sure-what-to-name/frame"
import { EventHandler } from "./event-handler"

class _Screen {
    private $elements: HTMLElement[][]
    constructor() {
        this.$elements = []
    }
    public init(elementSelector: string) {
        let $screen = document.querySelector(elementSelector)!
        let $screenCover = document.createElement('div')
        $screenCover.style.width = '100%'
        $screenCover.style.height = '100%'
        $screenCover.style.background = 'transparent'
        $screenCover.style.position = 'absolute'
        // $screenCover.addEventListener('mousedown', () => EventHandler.mouseDown())
        // $screenCover.addEventListener('mouseup', () => EventHandler.mouseUp())
        $screenCover.addEventListener('click', () => EventHandler.click())
        $screen.appendChild($screenCover)
        console.log('test')

        for(let i = 0; i < Settings._windowSize; i++) {
            let row: HTMLElement[] = []
            let $row = document.createElement('div')
            $row.style.display = 'flex'
            for(let j = 0; j < Settings._windowSize; j++) {
                let $pixel = document.createElement('div')
                row.push($pixel)
                $pixel.style.width = Settings._pixelSize + 'px'
                $pixel.style.height = Settings._pixelSize + 'px'
                $pixel.style.background = Settings._background
                $pixel.style.boxSizing = 'border-box'
                $row.appendChild($pixel)
            }
            this.$elements.push(row)
            $screen.appendChild($row)
        }
    }
    get _$elements() {
        return this.$elements
    }
    public drawFrame(frame: _Frame) {
        if(!frame) {
            return
        }
        for(let i = 0; i < Settings._windowSize; i++) {
            for(let j = 0; j < Settings._windowSize; j++) {
                this.$elements[i][j].style.background = frame.getPixel(i, j).background!
            }
        }
    }
}

export const Screen = new _Screen()