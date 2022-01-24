export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
}

export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
}

export interface UserCasino {
    name: string;
    age: number;
    nacionality: NACIONALITY;
}

export interface Casino {
    name: string;
    location: LOCATION;
}

export interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}

export interface ResultItem {
    allowed: string[];
    unallowed: string[];
}