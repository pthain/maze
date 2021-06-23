import { Entity } from "./entity"

/*
*   This class represents a speaker entity
*/

export class Speaker implements Entity {
    pos_x : number
    pos_y : number
    meta_description : string

    constructor(pos_x : number, pos_y : number, meta_description : string) {
        this.pos_x = pos_x
        this.pos_y = pos_y
        this.meta_description = meta_description
    }
    
    introduce() {
        this.speak("Hello World!")
        this.speak("I am " + this.meta_description)
        this.speak("My location is @ x: " + this.pos_x + " y: " + this.pos_y )
    }
    speak(speech : string) {
        console.log(speech)
    }
}