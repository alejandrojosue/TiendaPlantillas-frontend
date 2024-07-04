import type { Payment } from "../types/api";

export const paymentsMaper = (data:any): Payment[]=>{
 if(!data.length) return [];
 return data.map(({id, attributes}:{id: number, attributes:any})=> paymentMaper(id, attributes));
}

export const paymentMaper = (id: number, attributes:any) : Payment=>{
 return {
  id,
  amount: attributes.amount,
  createdAt: attributes.createdAt,
  isWithDrawn: attributes.isWithDrawn,
  product: {
   id: attributes?.template?.data?.id,
   name: attributes?.template?.data?.attributes?.title
  }
 }
}