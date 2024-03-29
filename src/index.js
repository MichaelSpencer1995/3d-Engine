import { _3dEngine } from './3dEngine.js'

// this makes sense right? the user doesn't have to know how the 3d engine works with the screen or anything, they would just need
// to see, ah, you pass the the element selector in where you want this 3d engine to take place, as opposed to how react passes in the
// the actual element itself, Idk I need to think about this

const app = new _3dEngine('#root')
app.launch()