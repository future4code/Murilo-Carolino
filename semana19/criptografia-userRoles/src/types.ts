export interface user extends authenticationData {
   id: string
   email: string
   password: string
}

export enum USER_ROLES {
   NORMAL = "normal",
   ADMIN = "admin"
}

export interface authenticationData {
   id: string
   role: USER_ROLES
}