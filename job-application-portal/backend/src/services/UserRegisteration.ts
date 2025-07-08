import { User } from "../models/user";
import { hashPassword } from "../utils/passwordSalt";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import * as dotenv from "dotenv";
import * as path from "path";
const envPath = path.resolve(__dirname, "../../.env");

dotenv.config({ path: envPath });
class UserRegisterationService {
  constructor() {}
  public async registerUser(
    userName: string,
    userEmail: string,
    userPassword: string
  ): Promise<{ success: boolean; message: string }> {
    const { data: users } = await axios.get(`${process.env.DB_ENDPOINT}`);
    const isUserAlreadyRegistered = users.some((user: User) => {
      return (
        user.userName.toLocaleLowerCase() === userName.toLocaleLowerCase() ||
        user.userEmail.toLocaleLowerCase() === userEmail.toLocaleLowerCase()
      );
    });
    if (isUserAlreadyRegistered) {
      return { success: false, message: "User already registered" };
    }
    const hashedPassword = await hashPassword(userPassword);
    const newUser = {
      userName,
      userEmail,
      userPassword: hashedPassword,
      userId: uuidv4(),
    };
    await axios.post(`${process.env.DB_ENDPOINT}`, newUser);
    return { success: true, message: "User registered successfully" };
  }
}
export default UserRegisterationService;
