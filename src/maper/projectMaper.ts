import { Role, type Project, ProjectStatus, type User, type Category } from "../types/api"

export const projectsMaper = (data:any): Project[] =>{ 
 if(!data.length)
  return [];
 return data.map(({id, attributes}:{id:number, attributes:any})=>(
  projectMaper(id, attributes) as Project
 )) as Project[]
}

export const projectMaper = (id:number, attributes: any): Project =>{
 const {title, createdAt, description,unitPrice, categories, status, customer} = attributes;
 const project:Project = {
  id,
  title,
  createdAt,
  description,
  unitPrice,
  status: status || ProjectStatus.Open,
  customer: customerMaper(customer?.data.attributes),
  categories
 }
 return project
}

const customerMaper = (attributes:any): User & {role: Role.customer} =>{
 const {username, email, LinkedInLink, instagramLink, biography} = attributes
 const data:User = {
  username,
  email,
  LinkedInLink,
  instagramLink,
  biography,
  role: Role.customer
 }

 return data as User & {role: Role.customer} 
}