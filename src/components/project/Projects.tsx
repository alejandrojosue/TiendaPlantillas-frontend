import useProject from '../../hooks/useProject';
import CardProject from './CardProject';
import { dateTimeFormat } from '../../util/dateTimeFormat';
import CardProjectSkeleton from './CardProjectSkeleton';
import Pagination from '../Pagination';
import { useEffect } from 'preact/hooks';

/**
 * Componente funcional que muestra una lista de proyectos.
 * 
 * @param username Nombre de usuario para filtrar proyectos específicos (opcional).
 * @param isMyProfile Indica si se está mostrando en el perfil del usuario (opcional).
 */
export default function Projects({ username, isMyProfile }: { username?: string, isMyProfile?: boolean }) {
  const { project: projects, loading, error, page, pageCount, pageSize, total, get, getByUsername } = useProject();

  useEffect(() => {
    // Obtiene proyectos por nombre de usuario si está definido, de lo contrario, obtiene todos los proyectos.
    if (username) getByUsername({ username }); else get();
  }, [username]); // Ejecuta el efecto cada vez que cambia el nombre de usuario.

  // Muestra un esqueleto de carga mientras se están recuperando los proyectos.
  if (loading) {
    return (
      <div class="p-2">
        <CardProjectSkeleton />
        <CardProjectSkeleton />
        <CardProjectSkeleton />
      </div>
    );
  }

  // Muestra un mensaje de error si hay un problema al cargar los proyectos.
  if (error) {
    return <h1 class="text-4xl text-center py-4 text-white">{error}</h1>;
  }

  // Muestra la lista de proyectos si hay proyectos disponibles.
  return (
    <>
      <div class="p-2">
        {Array.isArray(projects) && projects.map((project, id) => (
          <CardProject
            key={`card-${id}`}
            id={project.id}
            title={project.title}
            description={project.description}
            categories={project.categories}
            createdAt={dateTimeFormat(project.createdAt + '')}
            customer={project.customer}
            unitPrice={project.unitPrice}
            status={project.status}
            isMyProfile={isMyProfile}
          />
        ))}
        {/* Muestra un mensaje si no hay proyectos para mostrar. */}
        {Array.isArray(projects) && projects.length < 1 && (
          <p class="text-gray-400 my-4"> // Nada aún </p>
        )}
      </div>

      {/* Muestra la paginación si no se está mostrando en el perfil de usuario. */}
      {!username && (
        <Pagination
          page={page}
          pageCount={pageCount}
          pageSize={pageSize}
          total={total}
          pageName='projects'
        />
      )}
    </>
  );
}
