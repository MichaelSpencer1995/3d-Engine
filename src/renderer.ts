import { Settings } from './settings'

class _Renderer {
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

export const Renderer = new _Renderer()