import type {Project} from '../types/api'

export default interface IProjectRepository {
  get({pageNumber, sort}: {pageNumber: string; sort: string;}):
      Promise<Project[]>;
  getById(id: string): Promise<Project|null>;
  getByUsername({username}:{username: string}): Promise<Project[]>;
  create(project: Project): Promise<Project|null>;
}