import {projectMaper, projectsMaper} from '../maper/projectMaper';
import type {Project} from '../types/api';
import {fetchDataFromAPI} from '../util/fetchDataFromAPI';
import type IProjectRepository from './IProjectRepository';

export default class ProjectRepository implements IProjectRepository {
  constructor() {
    this.total = 0;
    this.pageCount = 0;
    this.pageSize = 0;
  }
  
  total: number;
  pageCount: number;
  pageSize: number;
  async get({pageNumber, sort}: {pageNumber: string; sort: string;}):
      Promise<Project[]> {
    try {
      const res = await fetchDataFromAPI({
        url: `/api/projects?populate=*&sort[0]=id:${sort}&pagination[page]=${
            pageNumber}`
      });

      if (!res.data) return [];

      this.total = res.meta.pagination.total;
      this.pageCount = res.meta.pagination.pageCount;
      this.pageSize = res.meta.pagination.pageSize;

      return projectsMaper(res.data)
    } catch (error) {
    }
    return []
  }
  async getById(id: string): Promise<Project|null> {
    try {
      const res = await fetchDataFromAPI({
       url: `/api/projects/${id}?populate=*`
      });
    
      if(!res.data)
       return null;
    
      this.total = 1
      this.pageCount = 1
      return projectMaper(res.data.id, res.data.attributes)
     } catch (error) {
      console.log((error as Error).message)
     }
     return null
  }

  async getByUsername({username}:{username: string}): Promise<Project[]> {
    try {
      const res = await fetchDataFromAPI({
        url: `/api/projects?populate=*&filters[customer][username][$eqi]=${username}`
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

  async create(project: Project): Promise<Project|null> {
    try {
      const res = await fetchDataFromAPI({
       url: `/api/projects`,
       method: 'POST',
       data: {data: project}
      });
    
      if(!res.data) return null;
        
      return projectMaper(res.data.id, res.data.attributes)
     } catch (error) {
      console.log((error as Error).message)
      alert((error as Error).message)
    }
    return null;
  }
  downLoad({idProject, idUser}: {idProject: String; idUser: String;}):
      Promise<void> {
    throw new Error('Method not implemented.');
  }
}