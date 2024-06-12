import type {Project} from '../types/api'

export default interface IProjectRepository {
  get({pageNumber, sort, categories, min, max}: {
    pageNumber: string,
    sort: string,
    categories?: string[], min: string, max: string
  }): Promise<Project[]>;
  getById(id: string): Promise<Project|null>;
  getByUsername({username}: {username: string}): Promise<Project[]>;
  create(project: Project, token: string): Promise<void>;
}