import { _PixelToColor } from './blueprints/pixel-to-color'
import { Scene } from './scene'
import { Settings } from './settings'

class _Renderer {
    public createDummyFrameData() {
        const entities = Scene.getEntities()
        let coloredPixels: _PixelToColor[]
        coloredPixels = []
        entities.forEach(entity => {
            const pixelLocations = entity.getPixelLocations()
            pixelLocations.forEach(pixelLocation => {
                coloredPixels.push(pixelLocation)
            })
        })

        // the renderer will repaint the entire screen 1 pixel at a time setting each pixel back to its default color or painting it the color of the pixel that needs to be rendered for that frame at that location, so bascially all the pixels that need to be rendered need to be sorted in order so it can do the whole thing in one go
        coloredPixels.sort((a, b) => a.x - b.x || a.y - b.y)

        let frame = []
        for(let i = 0; i < Settings._windowSize; i++) {
            let row = []
            for(let j = 0; j < Settings._windowSize; j++) {
                let pixel = {
                    background: Settings._background
                }
                    
                if(coloredPixels[0]) {
                    if(coloredPixels[0].x == i && coloredPixels[0].y == j) {
                        console.log('call this 4 times')
                        pixel.background = coloredPixels[0].color
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