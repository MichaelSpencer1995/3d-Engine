export interface SettingsInterface {
    windowSize?: number
    pixelSize?: number
    background?: string
    fps?: number
    cameraPoints?: number[][]
}

class _Settings {
    private windowSize: number
    private pixelSize: number
    private background: string
    private fps: number
    private cameraPoints: number[][]
    constructor() {
        this.windowSize = 100
        this.pixelSize = 3
        this.background = '#ccc'
        this.fps = 20
        this.cameraPoints = [[3, 3, 0.1], [0, 0, 0]]
        // this.cameraPoints = [[3, 4, 0.2], [0, 0, 0]]
        // this.cameraPoints = [[0, 0, 0], [6, 8, 0]]
    }
    public getWindowSize() {
        return this.windowSize
    }
    public getPixelSize() {
        return this.pixelSize
    }
    public getBackground() {
        return this.background
    }
    public getCameraPoints() {
        return this.cameraPoints
    }
    public setWindowSize(size: number) {
        this.windowSize = size
    }
    public setPixelSize(size: number) {
        this.pixelSize = size
    }
    public setBackground(color: string) {
        this.background = color
    }
    public setCameraPoints(points: number[][]) {
        this.cameraPoints = points
    }
}

export const Settings = new _Settings()


//  Software Architecture 
// Just thinking this thought out all the way to see if I am over looking something ridiculously obvious or simple or something

//  So I have to define the Settings here and instantiate the class right away because there will only be 1 instance of settings (this will be the case with many other instances too, there will only be one of them such as the camera, scene, framestack, etc), and I need it available anywhere, any time, in any part of the app, so its a global variable so to speak, in the case of the calculations class instance it will be like a global, dependency, my initial intuition (which after thinking this out I am starting to deduce, was wrong, and based on ignorance of the subject of OOP, and its established best practices), was to invoke these instances as a property on the main 3d engine class instance when the app starts up, after all, I need that logic contained within the 3d engine itself kind of right? However that would mean I would have to pass that object down as a parameter anywhere I need it, for example, if I want to call a method on my calculations class instance, inside my camera class instance, and my calculations and my camera class instances are both properties on the 3d engine class instance, that would mean I would have to pass the calculations class instance into the camera class instance as a parameter... YUCK, however I still want the the calculations object to be available anywhere, so even though it isnt "on" the 3d engine class itself, like as a property, like I thought it should have been, it is still available anywhere in the project by referencing the one right here, however this leads to another issue, I know for certain I want the end user to to use the syntax, const app = new _3dEngine('#root', settings) and then call app.launch() so that everything is extremely straight forward and readable, so my conjecture is that the only possible way to change the default settings with settings the user passes in is to set it as a property on the 3d engine, and set it equal to the settings that is passed in the constructor, since the only way to access a parameter inside of an instance of a class (outside of a constructor) is to set it as a property, during the construction of the object. (this is unique to data that will be passed in to the engine upon intialization)

// The same problem appears to me here in another way, this time I don't need to save any parameters or anything, but I do want to be able to use my calculations like a dependency throughout the app, for example I want to be able to call a method on calculations, anywhere, inside the camera for example, I just want the one instance of calculations, but I don't want to do that, yucky, set it as a property on the 3d engine (even though that is still a better representation of what is actually happening in my mind), and then pass it down as a parameter, thing, to the other single class instance objects that are a property on the engine 

//  What I still feel like I truely need, would be able to define the objects ON the 3d engine (camera, calculations, etc) as properties, have them as the only instance of those objects and somehow be able to see them from other classes, would making them public properties work? Is it that simple?

//  My next intuition is that the singleton pattern might address this issue (I haven't read into it yet much so I don't know), but the way a singleton invokes itself or whatever inside the class, and then checks if it already exists with a null value or whatever just seems weird and yucky to me so I don't want to do that either.

// I think the problem was my initial ignorance about OOP and my intuition to put all my objects "inside" of the 3d engine class or something, but I refuse to let this idea go yet


// Upon rereading this, I feel I have overthought the entire thing, my initial intuition WAS wrong, and the way I am doing it now is the most obvious way, even though, the Settings or calculations object isnt "inside" the 3d Engine, it still is kind of, becuase its free to be referenced anywhere by simply importing it where you need it, idk, I still feel like it should be literally inside of the the 3d engine, after all, the calculations object is a thing that is a part of the 3d engine right? I really don't know anymore, the only gripe (ahhh whats a synonym for gripe I don't like that word) I still have, is that, this is sort of treating my calculations class as a dependency, which I guess it technically is in that case, but what about the case of my camera instance, its not a dependency as all, its literally a sub module of the 3d engine itself, so this brings me back to my original point, why can I not define it ON the 3d engine, and then have it passed to other sub modules such as the framestack or camera or whatever and however I want to share methods and what not from one sub module to another, WITHOUT doing the yucky pass it as a parameter thing, and the only reason that is so yucky to me is becuase, if I had a line of code that is something like camera.doSonmethingThatWillNeedAMethodOnMyCalculationsClass(calculations), it just doesn't read correctly, and frankly does feel intuitvely correct to me either, like I was trying to say before, what makes sense to me, is that the settings, calculations, camera and whatever else ARE properties on the main 3d engine class, but then when inside of the camera class for example, it should still be able to have access to the other properties on that main class, but that doesnt make any sense really does it? So there for those objects MUST exist outside of the 3d engine class and be treaded more like dependencies, even though they arent (like in the example I gave before) the framestack or camera is not something the 3d engine depends on, its something INSIDE the 3d engine, Idk, frankly I might not even have the faintest idea of what I am talking about right now, my final thought is, I want to be able to do this:

// class _3dEngine() {
//    private calculations = new Calculations()
//    private camera = new Camera()

//    launch() {
//        camera.methodThatNeedsCalculations()  <--- but somehow just do it like this
//        camera.methodThatNeedsCalculations(this.calculations) <--- and not like this
//    }
// }

// is there another way to have calculations and camera "inside" of _3dEngine? without setting them as properties?

// so I guess the only conclusion I am left to make, is to deduce that there is a flaw in my intuition, the above code is simply wrong, and infact camera calculations and whatever else indeed ARE dependencies, or atleast should be treated as such, and thats why they exist outside of the class, its like if I had a simply device like a remote for a tv, the little components like resistors, chips, transistors and what not, even though they are LITERALLY inside of the remote, theoretically they are dependencies of the remote, well come to think of it actually, when I compile all my code thats why it all gets wrapped up in an IIFE right? So in the final product I guess that calculations and camera WILL still be inside of the 3d engine, maybe 3d engine is just the name of the entire module, and my main class should not be called 3d engine, but rather just "main", yeaahhhhhh actually I think thats it, I think I figured it out, that makes more sense, ahhh I like that better,3dengine is the name of my MODDDULLLLE, there is not class inside the module called 3d engine,, ahhhhhhhhhh i get it now I think... oh yeah let me sit with that for a few days, ahhhh.