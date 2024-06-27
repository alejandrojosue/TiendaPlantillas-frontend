import type { Payment } from "../types/api";

export const paymentsMaper = (data:any): Payment[]=>{
 if(!data.length) return [];
 return data.map(({attributes}:{attributes:any})=> paymentMaper(attributes));
}

export const paymentMaper = (attributes:any) : Payment=>{
 return {
  amount: attributes.amount,
  createdAt: attributes.createdAt,
  isWithDrawn: attributes.isWithDrawn,
  product: {
   id: attributes?.template?.data?.id,
   name: attributes?.template?.data?.attributes?.title
  }
 }
}