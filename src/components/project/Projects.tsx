import useProject from '../../hooks/useProject';
import CardProject from './CardProject';
import { dateTimeFormat } from '../../util/dateTimeFormat'
import CardProjectSkeleton from './CardProjectSkeleton';
import Pagination from '../Pagination';
import { useEffect } from 'preact/hooks';

export default function Projects({ username, isProfile }: { username?: string, isProfile?: boolean }) {
  const { project: projects, loading, error, page, pageCount, pageSize, total, get, getByUsername } = useProject()
  useEffect(() => {
    if (username) getByUsername({ username }); else get();
  }, [])
  if (loading) {
    return (
      <div class="p-2">
        <CardProjectSkeleton />
        <CardProjectSkeleton />
        <CardProjectSkeleton />
      </div>)
  }
  if (error) {
    return (<h1 class="text-4xl text-center py-4 text-white">{error}</h1>)
  }

  return (<>
    <div class="p-2">

      {Array.isArray(projects) && projects?.map((project, id) => {
        return <CardProject
          key={`card-${id}`}
          id={project.id}
          title={project.title}
          description={project.description}
          categories={project.categories}
          createdAt={dateTimeFormat(project.createdAt + '')}
          customer={project.customer}
          unitPrice={project.unitPrice}
          status={project.status}
          isProfile={isProfile}
        />
      })}
    </div>
    {
      username ? '' : <Pagination
        page={page}
        pageCount={pageCount}
        pageSize={pageSize}
        total={total}
        pageName='projects'
      />
    }
  </>)
}