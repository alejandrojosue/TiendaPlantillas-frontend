import { categoriesMaper } from "../maper/categoryMaper";
import type { Category } from "../types/api";
import { fetchDataFromAPI } from "../util/fetchDataFromAPI";

export default class CategoryRepository{
 constructor(){}
 async get():Promise<Category[]>{
  try {
   const res = await fetchDataFromAPI({
     url: `/api/categories`
   });

   if (!res.data) return [];

   return categoriesMaper(res.data)
 } catch (error) {
 }
  return []
 }
}