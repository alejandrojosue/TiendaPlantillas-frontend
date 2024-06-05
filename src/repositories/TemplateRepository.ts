import {type Template} from '../types/api';
import {fetchDataFromAPI} from '../util/fetchDataFromAPI';
import type ITemplateRepository from './ITemplateRepository';
import {templateMaper, templatesMaper} from '../maper/templateMaper'
import {PUBLIC_STRAPI_HOST} from '../env/config';
export default class TemplateRepository implements ITemplateRepository {
  constructor() {
    this.total = 0;
    this.pageCount = 0;
    this.pageSize = 0
  }
  total: number;
  pageCount: number;
  pageSize: number;

  async get({pageNumber, sort = 'asc'}: {pageNumber: string, sort?: string}):
      Promise<Template[]> {
    try {
      const res = await fetchDataFromAPI({
        url: `/api/templates?populate=*&sort[0]=id:${sort}&pagination[page]=${
            pageNumber}`
      });

      if (!res.data) return [];

      this.total = res.meta.pagination.total;
      this.pageCount = res.meta.pagination.pageCount;
      this.pageSize = res.meta.pagination.pageSize;

      return templatesMaper(res.data)
    } catch (error) {
    }
    return []
  }

  async getById(id: string): Promise<Template|null> {
    try {
      const res =
          await fetchDataFromAPI({url: `/api/templates/${id}?populate=*`});

      if (!res.data) return null;

      this.total = 1;
      this.pageCount = 1;
      return templateMaper(res.data.id, res.data.attributes)
    } catch (error) {
      console.log((error as Error).message)
    }
    return null
  }

  async getByUsername({username}: {username: string;}): Promise<Template[]> {
    try {
      const res = await fetchDataFromAPI({
        url: `/api/templates?populate=*&filters[freelancer][username][$eqi]=${
            username}`
      });

      if (!res.data) return [];

      // this.total = res.meta.pagination.total
      // this.pageCount = res.meta.pagination.pageCount
      // this.pageSize = res.meta.pagination.pageSize

      return templatesMaper(res.data)
    } catch (error) {
    }
    return []
  }

  async create(
      template: Template, images: FileList|null, templateZIP: File,
      token: string): Promise<void> {
    try {
      const {title, description, unitPrice, categories, freelancer, url} =
          template;
      if (!images || !templateZIP || !title || !description || !unitPrice ||
          !categories || !freelancer || !url)
        return;
      const data = {title, description, unitPrice, categories, freelancer, url};
      console.log(data);

      const formData = new FormData();

      formData.append(
          'data',
          JSON.stringify(data),
      );
      for (let i = 0; i < images.length; i++) {
        formData.append('files.images', images[i]);
      }

      formData.append('files.template', templateZIP)

      const response = await fetch(PUBLIC_STRAPI_HOST + '/api/templates', {
        method: 'post',
        body: formData,
        headers: {Authorization: `Bearer ${token}`}
      });

      const res = await response.json()

      if (!res.data) return;
      alert('Se ha creado la plantilla satisfactoriamente!')
      location.href = '/user/profile'
    } catch (error) {
      alert((error as Error).message)
    }
  }

  async update(template: Template, token: string): Promise<void> {
    const {id, title, description, unitPrice, url} = template;
    let data: any = {};
    if(!unitPrice || isNaN(unitPrice) || unitPrice === 0) return;
    if (title.trim()) data.title = title.trim();
    if (description.trim()) data.description = description;
    if (unitPrice) data.unitPrice = unitPrice;
    if (url.trim()) data.url = url;

    try {
      const res = await fetchDataFromAPI({
        url: `/api/templates/${id}`,
        method: 'PUT',
        data: {data},
        token
      });

      alert('Se ha actualizado la plantilla satisfactoriamente!')
      location.href = '/user/profile'
    } catch (error) {
      alert((error as Error).message)
    }
  }

  async downLoad({idTemplate, idUser}: {idTemplate: String, idUser: String}):
      Promise<void> {
    const template = await fetch('')

    throw new Error('Method not implemented.');
  }
}