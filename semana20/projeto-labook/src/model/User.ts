export interface authenticationData {
    id: string
}

export interface userCredentials {
    email: string
    password: string
}

export interface user extends authenticationData, userCredentials {
    name: string
}