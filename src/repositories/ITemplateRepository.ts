import type {Template} from '../types/api';

export default interface ITemplateRepository {
  get({pageNumber, sort, categories}:{pageNumber:string, sort:string, categories?:string[]}): Promise<Template[]>;
  getById(id: string): Promise<Template|null>;
  getByUsername({username}:{username:string}): Promise<Template[]>;
  create(template: Template, images:FileList|null, templateZIP:File, token:string): Promise<void>;
  update(template: Template, token:string): Promise<void>;
  downLoad({idTemplate, idUser}: {idTemplate: String, idUser: String}): Promise<void>
  total: number
  pageCount: number
}