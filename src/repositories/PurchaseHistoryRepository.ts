import {fetchDataFromAPI} from '../util/fetchDataFromAPI';
export default class PurchaseHistoryRepository {
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