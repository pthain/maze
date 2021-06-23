import { Speaker } from "./Speaker"

/* 
* This class will set up a core loop, an environment, and any entities.
*/

function main() {
    let narrator : Speaker = new Speaker(0,0, "The 'Narrator'")
    narrator.introduce()
}

main()