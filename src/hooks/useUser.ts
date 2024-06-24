import { useState } from "preact/hooks"
import type { User } from "../types/api"
import UserRepository from "../repositories/UserRepository";

const useUser = ()=>{
 const [state, setState] = useState<{
  loading: boolean,
  user: User|null,
  error: string | null
 }>({
  loading: true,
  user: null,
  error: null
 });
 const userRepository = new UserRepository();
 const me = async({token}:{token:string})=>{
  try {
   const res = await userRepository.me({token})
   setState(prev=>({...prev, user: res}))
   if(!res){
    location.href = '/404'
   }
  } catch (error) {
   setState(prev=>({...prev, error: (error as Error).message}))
  }finally{
   setState(prev=>({...prev, loading: false}))
  }
 }

 return{...state, me}
}

export default useUser