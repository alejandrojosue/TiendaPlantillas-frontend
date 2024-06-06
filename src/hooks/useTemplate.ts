import {useState} from 'preact/hooks'

import TemplateRepository from '../repositories/TemplateRepository'

import type {Template} from '../types/api'

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
  const get =
      async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      let pageNumber = urlParams.get('page') || '1';
      let sort = urlParams.get('sort') || 'asc';
      if (sort !== 'asc' && sort !== 'desc') {
        throw new Error('El parámetro de ``sort debe ser `asc` o `desc`.')
      }
      // @ts-ignore
      if (isNaN(pageNumber)) {
        throw new Error('El parámetro de `page` debe ser un número.')
      }
      const templatesData = await templateRepository.get({pageNumber, sort});
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
  }

  const getByUsername =
      async ({username}: {username: string}) => {
    try {
      const templatesData = await templateRepository.getByUsername({username});
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
  }

  const create =
      async ({templateData, images, zip, token}: {
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
  }

  const update =
      async (template: Template, token: string) => {
    await templateRepository.update(template, token)
  }

  return {
    ...state, get, getByUsername, create, update
  }
};

export default useTemplate