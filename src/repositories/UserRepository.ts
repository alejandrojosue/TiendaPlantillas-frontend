import { userMaper } from '../maper/userMaper';
import type {User} from '../types/api';
import {fetchDataFromAPI} from '../util/fetchDataFromAPI';
import type IUserRepository from './IUserRepository';

export default class UserRepository {
  async signin(identifier: String, password: String): Promise<User|null> {
    try {
      const res = await fetchDataFromAPI({
        url: `/api/auth/local`,
        method: 'POST',
        data: {identifier, password}
      });
     return res
    } catch (error) {
      return null
    }
  }
  signup(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async me({token}:{token:string}):Promise<User|null>{
    try {
      const res = await fetchDataFromAPI({
        url: '/api/users/me?populate=role', token
      })

      if(!res) return null;
      
      return userMaper(res)
    } catch (error) {
      return null
    }
  }

  async getUser({username}:{username:string}):Promise<User|null>{
    try {
      const res = await fetchDataFromAPI({
        url: `/api/users?populate=*&filters[$and][0][username][$eqi]=${username}`
      })      
      return res[0]
    } catch (error) {
      return null
    }
  }
}