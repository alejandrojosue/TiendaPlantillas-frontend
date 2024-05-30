import { type Template } from "../types/api";
import { fetchDataFromAPI } from "../util/fetchDataFromAPI";
import type ITemplateRepository from "./ITemplateRepository";
import {templateMaper, templatesMaper} from '../maper/templateMaper'
export default class TemplateRepository implements ITemplateRepository{
 constructor(){
  this.total = 0
  this.pageCount = 0
  this.pageSize = 0
 }
 total: number;
 pageCount: number;
 pageSize: number;
 
 async get({pageNumber, sort = 'asc'}:{pageNumber:string, sort?:string}): Promise<Template[]> {
  try {
   const res = await fetchDataFromAPI({
    url: `/api/templates?populate=*&sort[0]=id:${sort}&pagination[page]=${pageNumber}`
   });

   if(!res.data)
    return [];
 
   this.total = res.meta.pagination.total
   this.pageCount = res.meta.pagination.pageCount
   this.pageSize = res.meta.pagination.pageSize
 
   return templatesMaper(res.data)
  } catch (error) {   
  }
  return []
 }
 
 async getById(id: string): Promise<Template|null> {
  try {
   const res = await fetchDataFromAPI({
    url: `/api/templates/${id}?populate=*`
   });
 
   if(!res.data)
    return null;
 
   this.total = 1
   this.pageCount = 1
   return templateMaper(res.data.id, res.data.attributes)
  } catch (error) {
   console.log((error as Error).message)
  }
  return null
 }

 async getByUsername({ username }: { username: string; }): Promise<Template[]> {
  try {
   const res = await fetchDataFromAPI({
    url: `/api/templates?populate=*&filters[freelancer][username][$eqi]=${username}`
   });

   if(!res.data)
    return [];
 
   // this.total = res.meta.pagination.total
   // this.pageCount = res.meta.pagination.pageCount
   // this.pageSize = res.meta.pagination.pageSize
 
   return templatesMaper(res.data)
  } catch (error) {   
  }
  return []
 }

 async create(template:Template): Promise<Template> {
  throw new Error("Method not implemented.");
 }

 async downLoad({idTemplate, idUser}: {idTemplate: String, idUser: String}): Promise<void> {
  const template =   await fetch('')
  
  throw new Error("Method not implemented.");
 }

}