import {useState} from 'preact/hooks'

import TemplateRepository from '../repositories/TemplateRepository'

import type {Template} from '../types/api'
import {getParam} from '../util/urlParams';

const useTemplate = () => {
  const [state, setState] = useState<{
    template: Template[] | Template,
    total: number,
    page: number,
    pageCount: number,
    pageSize: number,
    loading: boolean,
    error: string | null
  }>({
    template: [],
    total: 0,
    page: 0,
    pageCount: 0,
    pageSize: 0,
    loading: true,
    error: null
  });
  const templateRepository = new TemplateRepository();
  const get = async () => {
    try {
      let pageNumber = getParam('page') || '1'
      let sort = getParam('sort') || 'asc'
      let categories = getParam('categories')?.split(',') || [];
      if (sort !== 'asc' && sort !== 'desc') {
        throw new Error('El parámetro de ``sort debe ser `asc` o `desc`.')
      }
      // @ts-ignore
      if (isNaN(pageNumber)) {
        throw new Error('El parámetro de `page` debe ser un número.')
      }
      if (categories.includes('all')) categories = [];
      const templatesData =
          await templateRepository.get({pageNumber, sort, categories});
      setState(prev => ({
                 ...prev,
                 template: templatesData,
                 page: templateRepository.page,
                 pageCount: templateRepository.pageCount,
                 pageSize: templateRepository.pageSize,
                 total: templateRepository.total
               }));
    } catch (error) {
      setState(prev => ({...prev, error: (error as Error).message}));
    } finally {
      setState(prev => ({...prev, loading: false}))
    }
  };

  const getById = async (id: string) => {
    try {
      const template = await templateRepository.getById(id);
      if (!template) {
        location.href = '/404';
        return;
      }
      setState(prev => ({...prev, template}));
    } catch (error) {
      setState(prev => ({...prev, error: (error as Error).message}));
    } finally {
      setState(prev => ({...prev, loading: false}))
    }
  };

  const getByUsername = async (
      {username, isProfile}: {username: string, isProfile?: boolean}) => {
    try {
      const templatesData =
          await templateRepository.getByUsername({username, isProfile});
      setState(prev => ({
                 ...prev,
                 template: templatesData,
                 page: templateRepository.page,
                 pageCount: templateRepository.pageCount,
                 pageSize: templateRepository.pageSize,
                 total: templateRepository.total
               }));
    } catch (error) {
      setState(prev => ({...prev, error: (error as Error).message}));
    } finally {
      setState(prev => ({...prev, loading: false}))
    }
  };

  const create = async ({templateData, images, zip, token}: {
    templateData: Template,
    images: File[],
    zip: File,
    token: string
  }) => {
    if (images.length < 1) {
      alert('No ha seleccionado imágenes');
      return;
    }

    if (!zip) {
      alert('No ha seleccionado un archivo zip');
      return;
    }

    // Crear un nuevo objeto DataTransfer
    const dataTransfer = new DataTransfer();

    // Agregar cada archivo del array al objeto DataTransfer
    images.forEach(image => dataTransfer.items.add(image));

    await templateRepository.create(
        templateData, dataTransfer.files, zip, token)
  };

  const update = async (template: Template, token: string) => {
    await templateRepository.update(template, token)
  };

  const download = async({stripeId, idUser, token}:
                             {stripeId: string, idUser: number, token: string}):
      Promise<Array<{url: string}>> => {
        try {
          const res =
              await templateRepository.downLoad({stripeId, idUser, token});
          return res as [];
        } catch (error) {
          console.error((error as Error).message);
          return []
        }
      };

  return {
    ...state, get, getById, getByUsername, create, update, download
  }
};

export default useTemplate