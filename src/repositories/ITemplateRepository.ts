import type {Template} from '../types/api';

export default interface ITemplateRepository {
  get({pageNumber, sort, categories}:{pageNumber:string, sort:string, categories?:string[]}): Promise<Template[]>;
  getById(id: string): Promise<Template|null>;
  getByUsername({username, isProfile}:{username:string, isProfile?:boolean}): Promise<Template[]>;
  create(template: Template, images:FileList|null, templateZIP:File, token:string): Promise<void>;
  update(template: Template, token:string): Promise<void>;
  downLoad({stripeId, idUser, token}: {stripeId: string, idUser: number, token:string}): Promise<string[]|Error>;
  total: number;
  pageCount: number;
}