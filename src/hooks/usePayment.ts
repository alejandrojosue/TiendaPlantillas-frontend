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
  const [total, setTotal] = useState<number>(0)


  const handleTotal = (value: number) => setTotal(value)

  const getByFreelancerId =
      async ({token, userId}: {token: string, userId: number}) => {
    try {
      if (!token || !userId) {
        return;
      }
      setState(prev => ({...prev, loading: true}))

      const res = await paymentRepository.getByFreelancerId({userId, token});

      setState(prev => ({...prev, data: res}))
    } catch (error) {
      setState(prev => ({...prev, error: (error as Error).message}))
    } finally {
      setState(prev => ({...prev, loading: false}))
    }
  }

  return {
    ...state, total, handleTotal, getByFreelancerId
  }
};

export default usePayment