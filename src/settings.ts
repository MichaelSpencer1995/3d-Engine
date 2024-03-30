import { Vector3 } from "./vector3.js"

export const Settings = {
    viewPortHeight: 100,
    viewPortWidth: 100,
    fps: 20,
    // cameraPos is 2 points that describe a line in 3dSpace, all things that need to be rendered will cast parralel line
    // lines parallel 
    cameraPos: [new Vector3(3, 3, 3), new Vector3(0, 0, 0)]
    
}