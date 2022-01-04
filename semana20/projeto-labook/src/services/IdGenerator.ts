import { v4 } from "uuid"

export class IdGenerator {
    
    generate = () => {
        v4()
    }
}