import { paymentsMaper } from "../maper/paymentMaper";
import type { Payment } from "../types/api";
import { fetchDataFromAPI } from "../util/fetchDataFromAPI";

export default class PaymentRepository{
 async getByFreelancerId({ token, userId }: { token: string, userId: number }) : Promise<Payment[]>{
  try {
   const res = await fetchDataFromAPI({
    url: `/api/payments?populate=template&filters[template][freelancer][id]=${userId}`,
    token
   });   
   if(!res) return [];
   return paymentsMaper(res.data)
  } catch (error) {
   console.error((error as Error).message)
  }
  return []
 }
}