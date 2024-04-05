import { _Frame } from './frame'
import { Settings } from './settings'

class _Screen {
    private $elements: HTMLElement[][]
    constructor() {
        this.$elements = []
    }
    public init(elementSelector: string) {
        let $screen = document.querySelector(elementSelector)!

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
    public renderFrame(frame: _Frame) {
        for(let i = 0; i < Settings._windowSize; i++) {
            for(let j = 0; j < Settings._windowSize; j++) {
                this.$elements[i][j].style.background = frame.getPixel(i, j)
            }
        }
    }
}

export const Screen = new _Screen()