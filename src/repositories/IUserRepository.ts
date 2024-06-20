import type {User} from '../types/api';

export default interface IUserRepository {
  signin(identifier: String, password: String): Promise<User|Error>;
  signup({email, username, password, role}: User&
         {password: string, role: number}): Promise<User|Error>;
  countByRole():
      Promise<{countFreelancers: number, countCustomers: number}|Error>;
      edit({biography, linkedinLink, githubLink, instagramLink}:{biography: string, linkedinLink: string, githubLink: string, instagramLink: string}): Promise<User|Error>
}