import {paymentsMaper} from '../maper/paymentMaper';
import type {Payment} from '../types/api';
import {fetchDataFromAPI} from '../util/fetchDataFromAPI';

export default class PaymentRepository {
  async getByFreelancerId({token, userId}: {token: string, userId: number}):
      Promise<Payment[]> {
    try {
      const res = await fetchDataFromAPI({
        url:
            `/api/payments?populate=template&filters[template][freelancer][id]=${
                userId}&filters[isWithDrawn]=false`,
        token
      });
      if (!res) return [];
      return paymentsMaper(res.data)
    } catch (error) {
      console.error((error as Error).message)
    }
    return []
  }

  async update({token, paymentsId, amount}:
                   {token: string, paymentsId: number[], amount: number}) {
    try {
      await Promise.all([
        ...paymentsId.map(paymentId => {
          return fetchDataFromAPI({
            url: `/api/payments/${paymentId}`,
            data: {data: {isWithDrawn: true}},
            method: 'PUT',
            token
          });
        }),
        fetchDataFromAPI({
          url: `/api/withdrawals`,
          token,
          data: {data: {payments: paymentsId, amount}},
          method: 'POST'
        })
      ])
      alert('El cobro se ha registrado exitosamente!')
    } catch (error) {
      alert('No se pudo realizar el cobro')
      return error
    }
  }

  async feedback({token, userId}: {token: string, userId: number}) {
    try {
      const res = await fetchDataFromAPI({
        url: `/api/withdrawals?filters[payments][template][freelancer][id]=${userId}&filters[status]=PENDING`,
        token,
      })
      if (res.data.length) {
        const {attributes} = res.data[0];
        const {status, amount} = attributes
        return {
          status, amount
        }
      }
      return null
    } catch (error) {
      return error
    }
  }
}