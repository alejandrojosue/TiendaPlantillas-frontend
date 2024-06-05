import { PUBLIC_STRAPI_HOST } from "../env/config";
import { Role, type Template, TemplateStatus, type User } from "../types/api"

export const templatesMaper = (data:any): Template[] =>{
 if(!data.length)
  return [];
 return data.map(({id, attributes}:{id:string,attributes:any})=>(
  templateMaper(+id, attributes) as Template
 )) as Template[]
}

export const templateMaper = (id:number, attributes: any): Template =>{
 const {title, createdAt, description,unitPrice, images, categories, status, freelancer, url} = attributes;
 const _imagesUrl = imagesListMaper(images.data)
 const template:Template = {
  id,
  title,
  createdAt,
  description,
  unitPrice,
  status: status || TemplateStatus["PENDING REVIEW"],
  images: _imagesUrl,
  url,
  freelancer: freelancerMaper(freelancer.data.attributes),
  categories: categories.map(({categoryName}:{categoryName:string})=>({categoryName: categoryName})),
 }
 return template
}

const imagesListMaper = (data:any) : string[] =>{
 return data?.map(({attributes}:{attributes:any})=>(
  PUBLIC_STRAPI_HOST + attributes.formats?.medium?.url
 )) as string[]
}

const freelancerMaper = (attributes:any): User & {role: Role.freelancer} =>{
 const {username, email, githubLink, LinkedInLink, instagramLink, biography} = attributes
 const data:User = {
  username,
  email,
  githubLink,
  LinkedInLink,
  instagramLink,
  biography,
  role: Role.freelancer
 }

 return data as User & {role: Role.freelancer} 
}