import type {Template} from '../types/api';

export default interface ITemplateRepository {
  get({pageNumber, sort}:{pageNumber:string, sort:string}): Promise<Template[]>;
  getById(id: string): Promise<Template|null>;
  getByUsername({username}:{username:string}): Promise<Template[]>;
  create(template: Template, images:FileList|null, templateZIP:File, token:string): Promise<void>;
  uploadImages(files: FileList): Promise<number[]>
  uploadFile(file:File):Promise<number>
  downLoad({idTemplate, idUser}: {idTemplate: String, idUser: String}): Promise<void>
  total: number
  pageCount: number
}