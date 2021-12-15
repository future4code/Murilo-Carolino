import { v4 } from "uuid"


export class IdGenerator {
    id = (): string => {
        return v4()
    }
}