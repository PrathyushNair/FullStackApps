import * as bcrypt from "bcrypt";
import * as dotenv from "dotenv";
import * as path from "path";
const envPath = path.resolve(__dirname, "../../.env");

dotenv.config({ path: envPath });

export async function hashPassword(password: string) {
  try {
    const saltRounds=Number(process.env.SALT_ROUNDS) ||5
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error("Error while hashing password");
  }
}
