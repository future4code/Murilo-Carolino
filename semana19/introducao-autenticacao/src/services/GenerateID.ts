import { v4 } from "uuid";

export class GenerateID {
    id = (): string => {
        return v4()
    }
}