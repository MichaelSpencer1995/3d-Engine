// General Software Architecture thoughts/feelings

// I feel like this should be more of a helper function globally defined somehow that doesnt have to be passed in
// as a parameter to instances of sub classes within the global scope of the 3d Engine, and is it really a class if,
// its a LITERAL object that I need? Like in this case ({x: x, y: y, z: z}) wouldn't some sort of helper function that returns a LITERAL object
// make more sense? Like is there a difference between a regular class and a function that 
// LITERALLY returns an object like in this case? Somehow I feel like they have slightly different classifications, even though they are technically
// the same thing. I don't want to pass in my helper functions as a parameter to sub classes for readabilities sake, is there a design
// pattern that solves this problem? For now referencing this CoordinateTrio class to the sub classes that need it will be
// sufficient


// My initial intuition was to have a property on the main 3dEngine class called helper functions, that could be read from subordinate class methods
// without having to be passed to them, perhaps it simply makes more sense to reference this helper class in the files where it is needed but idk

// how do you have global variables and methods that can be used throughout the application without referencing them in each file that needs them, I guess
// you have to do it like that?

export class CoordinateTrio {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }
}