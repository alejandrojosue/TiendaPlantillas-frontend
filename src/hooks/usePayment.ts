import {useState} from 'preact/hooks'
import type {Payment} from '../types/api'
import PaymentRepository from '../repositories/PaymentRepository';

interface Props {
  loading: boolean
  data: Payment[]
  error: string
}

const usePayment = () => {
  const paymentRepository = new PaymentRepository()
  const [state, setState] =
      useState<Props>({loading: true, data: [], error: ''})
  const [total, setTotal] = useState<number>(0);
  const [feedback, setFeedback] = useState<unknown>(null)


  const handleTotal = (value: number) => setTotal(value)

  const getByFreelancerId =
      async ({token, userId}: {token: string, userId: number}) => {
    try {
      if (!token || !userId) {
        return;
      }
      setState(prev => ({...prev, loading: true}))
      const [res, res2] = await Promise.all([
        paymentRepository.getByFreelancerId({userId, token}),
        paymentRepository.feedback({token, userId})
      ])

      setFeedback(res2)

      setState(prev => ({...prev, data: res}))
    } catch (error) {
      setState(prev => ({...prev, error: (error as Error).message}))
    } finally {
      setState(prev => ({...prev, loading: false}))
    }
  }

  const collectNow = async({token, paymentsId}: {token: string, paymentsId: number[]})=>{
    try {
      setState(prev=>({...prev, loading: true}))
      if (total < 100) {
        alert('El monto total debe ser superior a $100 para poder cobrarse!');
        return
       }
       if (confirm(`¿Desea cobrar la cantidad de $${total}?`)) {
        await paymentRepository.update({token, paymentsId, amount: total})
       }
    } catch (error) {
      setState(prev=>({...prev, error: (error as Error).message}))
    }finally{
      setState(prev=>({...prev, loading: false, data: []}))
    }
  }

  return {
    ...state, total, feedback, handleTotal, getByFreelancerId, collectNow
  }
};

export default usePayment