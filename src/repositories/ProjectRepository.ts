import {projectMaper, projectsMaper} from '../maper/projectMaper';
import type {Project} from '../types/api';
import {fetchDataFromAPI} from '../util/fetchDataFromAPI';
import type IProjectRepository from './IProjectRepository';

export default class ProjectRepository implements IProjectRepository {
  constructor() {
    this.total = 0;
    this.page = 0;
    this.pageCount = 0;
    this.pageSize = 0;
  }

  total: number;
  page: number;
  pageCount: number;
  pageSize: number;

  async get({pageNumber, sort = 'asc', categories, min, max}: {
    pageNumber: string,
    sort?: string,
    categories?: string[], min: string, max: string
  }): Promise<Project[]> {
    try {
      let categoriesFilter = '', maxPriceFilter = '';
      categories?.forEach(
          (category) => categoriesFilter +=
          `&filters[categories][categoryName][$eqi]=${category}`);
      if (max.length)
        maxPriceFilter = `&filters[$and][1][unitPrice][$lte]=${max}`;

      const res = await fetchDataFromAPI({
        url: `/api/projects?populate=*&filters[status][$eq]=Open&sort[0]=id:${
            sort}&pagination[page]=${pageNumber}${
            categoriesFilter}&filters[$and][0][unitPrice][$gte]=${min}${
            maxPriceFilter}`
      });

      if (!res.data) return [];

      this.total = res.meta.pagination.total;
      this.page = res.meta.pagination.page;
      this.pageCount = res.meta.pagination.pageCount;
      this.pageSize = res.meta.pagination.pageSize;

      return projectsMaper(res.data)
    } catch (error) {
      console.error(error);
    }
    return []
  }
  async getById(id: string): Promise<Project|null> {
    try {
      const res =
          await fetchDataFromAPI({url: `/api/projects/${id}?populate=*`});

      if (!res.data) return null;

      this.total = 1;
      this.pageCount = 1;
      return projectMaper(res.data.id, res.data.attributes)
    } catch (error) {
      console.error((error as Error).message)
    }
    return null
  }

  async getByUsername({username}: {username: string}): Promise<Project[]> {
    try {
      const res = await fetchDataFromAPI({
        url: `/api/projects?populate=*&filters[customer][username][$eqi]=${
            username}`
      });

      if (!res.data) return [];

      // this.total = res.meta.pagination.total;
      // this.pageCount = res.meta.pagination.pageCount;
      // this.pageSize = res.meta.pagination.pageSize;

      return projectsMaper(res.data)
    } catch (error) {
    }
    return []
  }

  async create(project: Project, token: string): Promise<void> {
    try {
      const {title, description, unitPrice, categories, customer} = project

      const res = await fetchDataFromAPI({
        url: `/api/projects`,
        method: 'POST',
        data: {data: {title, description, unitPrice, categories, customer}},
        token
      });

      if (!res.data) return;
      alert('Se ha creado el proyecto satisfactoriamente!')
      location.href = '/user/profile'
    } catch (error) {
      alert((error as Error).message)
    }
  }

  async count(): Promise<number|Error> {
    try {
      const {meta} = await fetchDataFromAPI(
          {url: `/api/projects?filters[status][$eq]=Open`})
      if (!meta) return 0;
      return meta.pagination.total as number
    } catch (error) {
      return error as Error
    }
  }

  downLoad({idProject, idUser}: {idProject: String; idUser: String;}):
      Promise<void> {
    throw new Error('Method not implemented.');
  }
}