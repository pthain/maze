import { Speaker } from "./Speaker"

/* 
* This controller will set up a core loop, an environment, and any entities.
*/

export class MazeInitializer {

    go() {
        let narrator : Speaker = new Speaker(0,0, "The 'Narrator'")
        narrator.introduce()
        /**
         *  Core game loop begins here
         * 
         * */
    }
}