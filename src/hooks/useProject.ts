import {useState} from 'preact/hooks'

import ProjectRepository from '../repositories/ProjectRepository'

import type {Project} from '../types/api'
import {isEmpty} from '../util/isEmpy';

const useProject = () => {
  const [state, setState] = useState<{
    project: Project[] | Project,
    total: number,
    page: number,
    pageCount: number,
    pageSize: number,
    loading: boolean,
    error: string | null
  }>({
    project: [],
    total: 0,
    page: 0,
    pageCount: 0,
    pageSize: 0,
    loading: true,
    error: null
  });
  const projectRepository = new ProjectRepository();
  const get =
      async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      let pageNumber = urlParams.get('page') || '1';
      let sort = urlParams.get('sort') || 'desc';
      if (sort !== 'asc' && sort !== 'desc') {
        throw new Error('El parámetro de ``sort debe ser `asc` o `desc`.')
      }
      // @ts-ignore
      if (isNaN(pageNumber)) {
        throw new Error('El parámetro de `page` debe ser un número.')
      }
      const projectsData = await projectRepository.get({pageNumber, sort});
      
      setState(prev => ({
                 ...prev,
                 project: projectsData,
                 page: projectRepository.page,
                 pageCount: projectRepository.pageCount,
                 pageSize: projectRepository.pageSize,
                 total: projectRepository.total
               }));
    } catch (error) {
      setState(prev => ({...prev, error: (error as Error).message}));
    } finally {
      setState(prev => ({...prev, loading: false}))
    }
  }

  const getByUsername =
      async ({username}: {username: string}) => {
    try {
      const projectsData = await projectRepository.getByUsername({username});

      setState(prev => ({
                 ...prev,
                 project: projectsData,
                 page: projectRepository.page,
                 pageCount: projectRepository.pageCount,
                 pageSize: projectRepository.pageSize,
                 total: projectRepository.total
               }));
    } catch (error) {
      setState(prev => ({...prev, error: (error as Error).message}));
    } finally {
      setState(prev => ({...prev, loading: false}))
    }
  }

  const create =
      async (projectData: Project, token: string) => {
    if (projectData.unitPrice < 1 || isNaN(projectData.unitPrice)) {
      alert('Debe ingresar un precio válido!')
      return;
    }if (isEmpty([projectData.title])) {
      alert('Debe ingresar el título!');
      return;
    }
    
    if (isEmpty([projectData.description])) {
      alert('Debe ingresar la descripción!');
      return;
    }
    if (projectData.categories.length < 2) {
      alert('Los tags deben ser al menos 2!')
      return;
    }
    await projectRepository.create(projectData, token)
  }

  return {
    ...state, get, getByUsername, create
  }
};

export default useProject