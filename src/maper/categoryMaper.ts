import type { Category } from "../types/api";

export const categoriesMaper = (data:any): Category[] =>{ 
 if(!data.length)
  return [];
 return data.map(({id, attributes}:{id:number, attributes:any})=>(
  categoryMaper(id, attributes) as Category
 )) as Category[]
}

const categoryMaper = (id:number, attributes: any):Category=>{
 const {categoryName} = attributes
 return {id, categoryName} as Category
}