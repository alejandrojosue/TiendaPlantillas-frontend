import { Role, type User } from "../types/api"

export const userMaper = (response: any):User=>{
 const {id, username, email, LinkedInLink, githubLink, instagramLink, biography, role, stripeLink } = response
 //@ts-ignore
 return {id, username, email, LinkedInLink, stripeLink, githubLink, instagramLink, biography, role: Role[(role.name as string).toLowerCase()]} as User
}