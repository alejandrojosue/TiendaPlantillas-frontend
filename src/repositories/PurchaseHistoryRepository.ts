import {purchasesHistoryMaper} from '../maper/purchaseHistoryMaper';
import type {PurchaseHistory} from '../types/api';
import {fetchDataFromAPI} from '../util/fetchDataFromAPI';
export default class PurchaseHistoryRepository {
  async get({userId, token}: {userId: number, token: string}):
      Promise<PurchaseHistory[]|Error> {
    try {
      const res = await fetchDataFromAPI({
        url: `/api/purchase-histories?filters[customer][id]=${
            userId}&filters[completed]=true&sort[0]=id:desc`,
        token
      })
      if (!res.data) return [];
      return purchasesHistoryMaper(res.data) as PurchaseHistory[]
    } catch (error) {
      console.error((error as Error).message);
      // alert((error as Error).message)
      return error as Error
    }
  }
  async create({token, customerId, products}: {
    token: string,
    customerId: number,
    products: [{id: number}]
  }): Promise<any|Error> {
    try {
      const res = fetchDataFromAPI({
        url: '/api/purchase-histories',
        method: 'POST',
        data: {customer: {id: customerId}, products},
        token
      })
      return res
    } catch (error) {
      console.error((error as Error).message);
      return error as Error
    }
  }
}