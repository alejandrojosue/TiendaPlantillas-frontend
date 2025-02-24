import {PUBLIC_USER_CREATE_TOKEN} from '../env/config';
import {userMaper} from '../maper/userMaper';

import {Role, type User} from '../types/api';
import { getCookie } from '../util/cookies';
import {fetchDataFromAPI} from '../util/fetchDataFromAPI';
import type IUserRepository from './IUserRepository';

export default class UserRepository implements IUserRepository {
  async edit({ biography, linkedinLink, githubLink, instagramLink, stripeLink }: { biography: string; linkedinLink: string; githubLink: string; instagramLink: string; stripeLink: string }): Promise<User | Error> {
    try {
      const id = getCookie('id');
      const token = getCookie('jwt') as string;
      if(!id) throw new Error('ID no encontrada!')
      const res = await fetchDataFromAPI({
        method: 'PUT',
        url: `/api/users/${id}`,
        data: {biography, linkedinLink, githubLink, instagramLink, stripeLink},
        token
      })
      return res as User
    } catch (error) {
      return error as Error
    }
  }
  async countByRole():
      Promise<{countFreelancers: number, countCustomers: number}|Error> {
    try {
      const [freelancers, customers] = await Promise.all([
        fetchDataFromAPI({url: `/api/users?filters[role][name]=Freelancer`}),
        fetchDataFromAPI({url: `/api/users?filters[role][name]=Customer`})
      ])
      const countFreelancers = (freelancers as []).length
      const countCustomers = (customers as []).length
      return {
        countFreelancers, countCustomers
      }
    } catch (error) {
      console.error((error as Error).message);
      return error as Error
    }
  }
  async signin(identifier: String, password: String): Promise<User|Error> {
    try {
      const res = await fetchDataFromAPI({
        url: `/api/auth/local`,
        method: 'POST',
        data: {identifier, password}
      });
      return res
    } catch (error) {
      return error as Error
    }
  }

  async me({token}: {token: string}): Promise<User|null> {
    try {
      const res =
          await fetchDataFromAPI({url: '/api/users/me?populate=role', token})

      if (!res) return null;

      return userMaper(res)
    } catch (error) {
      console.error((error as Error).message);
      return null
    }
  }

  async getUser({username}: {username: string}): Promise<User|null> {
    try {
      const res = await fetchDataFromAPI({
        url:
            `/api/users?populate=*&filters[$and][0][username][$eqi]=${username}`
      })
      if (!res) return null;

      return userMaper(res[0])
    } catch (error) {
      console.error((error as Error).message);
      
      return null
    }
  }

  async getUserByEmail({email}: {email: string}): Promise<User|null> {
    try {
      const res = await fetchDataFromAPI(
          {url: `/api/users?populate=*&filters[$and][0][email][$eqi]=${email}`})
      return res[0]
    } catch (error) {
      return null
    }
  }

  async signup({email, username, password, role}: User&
               {password: string}): Promise<User|Error> {
    try {
      if (!email) throw new Error('Correo es requerido!')
        if (!username) throw new Error('Nombre de usuario es requerido!')
        if (!password) throw new Error('Contraseña es requerida!')
        if (!role) throw new Error('Rol es requerido!')

        // it already exists?
        const [_username, _email] = await Promise.all(
            [this.getUser({username}), this.getUserByEmail({email})])
        if (_email) throw new Error('Correo ya está regitrado!')
        if (_username) throw new Error('Nombre de usuario ya existe!')

        /*
          RolesId
          freelancer: 3
          customer: 4
        */
        if (role !== Role.customer &&
            role !== Role.freelancer) throw new Error('Rol no válido!')

        let _role = 4  // customer

        if (role === Role.freelancer) _role = 3;
      const res = await fetchDataFromAPI({
        url: `/api/users`,
        method: 'POST',
        token: PUBLIC_USER_CREATE_TOKEN,
        data: {email, username, confirmed: true, password, role: _role}
      });
      
      return res
    } catch (error) {
      return error as Error
    }
  }
}