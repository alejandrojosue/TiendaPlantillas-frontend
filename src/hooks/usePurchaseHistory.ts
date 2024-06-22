import { useState} from 'preact/hooks';

import PurchaseHistoryRepository from '../repositories/PurchaseHistoryRepository';
import type { PurchaseHistory } from '../types/api';

interface Props {
  loading: boolean
  data: PurchaseHistory[]
  error: string
}
export const usePurchaseHistory = () => {
  const purchaseHistoryRepository = new PurchaseHistoryRepository()
  const [state, setState] =
      useState<Props>({loading: true, data: [], error: ''})

  const get = async ({token, userId}:{ token:string, userId:number}) => {
    try {
      
      if (!token || !userId) {
        return;
      }
      setState(prev => ({...prev, loading: true}))

      const res = await purchaseHistoryRepository.get({userId, token});

      if (Array.isArray(res)) {
        setState(prev => ({...prev, data: res}))
      }
    } catch (error) {
      setState(prev => ({...prev, error: (error as Error).message + ''}))
    } finally {
      setState(prev => ({...prev, loading: false}))
    }
  };
  return {
    ...state, get
  }
}