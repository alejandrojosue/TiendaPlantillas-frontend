import type { PurchaseHistory } from "../types/api";

export const purchasesHistoryMaper = (data:any)=>{
 return data.map(({attributes}:{attributes:any})=>{
  return purchaseHistoryMaper(attributes);
 }) as PurchaseHistory[];
};

export const purchaseHistoryMaper = (attributes:any)=>{
 return {
  stripeId: attributes.stripeId,
  products: attributes.products,
  updatedAt: attributes.updatedAt
 } as PurchaseHistory
};