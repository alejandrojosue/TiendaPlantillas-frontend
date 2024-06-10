import { categoriesMaper } from "../maper/categoryMaper";
import type { Category } from "../types/api";
import { fetchDataFromAPI } from "../util/fetchDataFromAPI";

export default class CategoryRepository{
 constructor(){}
 async get():Promise<Category[]>{
  try {
   const res = await fetchDataFromAPI({
     url: `/api/categories?pagination[pageSize]=120`
   });

   if (!res.data) return [];
   const categories = categoriesMaper(res.data)
   localStorage.setItem('categories', JSON.stringify(categories))
   return categories
 } catch (error) {
 }
  return []
 }
}