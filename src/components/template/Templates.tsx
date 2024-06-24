import { useEffect } from 'preact/hooks';
import useTemplate from '../../hooks/useTemplate';
import type { Template } from '../../types/api';
import Pagination from '../Pagination';
import CardTemplate from './CardTemplate';
import CardTemplateSkeleton from './CardTemplateSkeleton';

/**
 * Componente Templates
 * 
 * Muestra una lista de plantillas de acuerdo a ciertos criterios, ya sea todas las plantillas o las de un usuario específico.
 * 
 * @param {string} username - Nombre de usuario opcional para filtrar las plantillas.
 * @param {boolean} isMyProfile - Verifica si se solicita desde el perfil de usuario o no.
 */
export default function Templates({ username, isMyProfile = false }: { username?: string, isMyProfile?:boolean}) {
  const { template: templates, loading, error, page, pageCount, pageSize, total, get, getByUsername } = useTemplate();

  useEffect(() => {
    /**
     * @function getByUsername - Obtiene en base a un usuario
     * @function get - Obtiene todos
    */
    if (username) getByUsername({ username, isProfile: isMyProfile }); else get();
  }, []);

  if (loading) {
    // Renderiza los esqueletos de tarjetas mientras se carga la información.
    return (
      <div class="text-white px-2 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <CardTemplateSkeleton /><CardTemplateSkeleton />
        <CardTemplateSkeleton /><CardTemplateSkeleton />
      </div>
    );
  }

  if (error) {
    // Renderiza un mensaje de error si ocurre algún problema al cargar las plantillas.
    return (
      <h1 class="text-4xl text-center py-4 text-white">{error}</h1>
    );
  }

  // Renderiza la lista de plantillas si no hay errores ni cargando.
  return (
    <>
      <div class="text-white px-2 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {
          Array.isArray(templates) && templates.map((template: Template) => (
            <CardTemplate
              key={template.id}
              id={template.id + ''}
              title={template.title}
              img={template.images[0]}
              categories={template.categories}
              unitPrice={template.unitPrice}
              status={template.status}
              isMyProfile={isMyProfile}
            />
          ))
        }
        {
          // Renderiza un mensaje si no hay plantillas para mostrar.
          (Array.isArray(templates) && templates.length < 1) && (<p class="text-gray-400 my-4"> // Nada aún </p>)
        }
      </div>
      {
        // Renderiza la paginación si no se está filtrando por usuario.
        username ? '' : <Pagination
          page={page}
          pageCount={pageCount}
          pageSize={pageSize}
          total={total}
        />
      }
    </>
  );
}
