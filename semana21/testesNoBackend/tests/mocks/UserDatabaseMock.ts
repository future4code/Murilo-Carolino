import { User } from "../../src/model/User";
import { userMock, userMock2 } from "./userMock";

export class UserDatabaseMock {


   public async createUser(user: User): Promise<void> {
   }

   public async getUserByEmail(email: string): Promise<User | undefined> {
      switch (email) {
         case "astrodev@gmail.com":
            return userMock
         case "astrodev2@gmail.com":
            return userMock2
         default:
            undefined
      }
   }

   public async getUserById(id: string): Promise<User | undefined> {
      switch (id) {
         case "id_mock_1":
            return userMock
         case "id_mock_2":
            return userMock2
         default:
            undefined
      }
   }

   public async getAllUsers(): Promise<User[]> {
      return [userMock, userMock2]
   }

}

