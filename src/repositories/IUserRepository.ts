import type { User } from "../types/api";

export default interface IUserRepository{
 signin(identifier:String, password:String):Promise<void>
 signup():Promise<void>
}