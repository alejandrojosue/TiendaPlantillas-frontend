import { useEffect } from 'preact/hooks';
import useTemplate from '../../hooks/useTemplate';
import type { Template } from '../../types/api';
import Pagination from '../Pagination';
import CardTemplate from './CardTemplate';
import CardTemplateSkeleton from './CardTemplateSkeleton';

export default function Templates({ username }: { username?: string }) {
  const { template: templates, loading, error, page, pageCount, pageSize, total, get, getByUsername } = useTemplate()
  useEffect(() => {
    if (username) getByUsername({ username }); else get();
  }, [])
  if (loading) {
    return (
      <div class="text-white px-2 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <CardTemplateSkeleton /><CardTemplateSkeleton />
        <CardTemplateSkeleton /><CardTemplateSkeleton />
      </div>)
  }

  if (error) {
    return (<h1 class="text-4xl text-center py-4 text-white">{error}</h1>)
  }
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
            />
          ))
        }
        {
          (Array.isArray(templates) && templates.length < 1) && (<p class="text-gray-400 my-4"> // Nada aún </p>)
        }
      </div>
      {
        username ? '' : <Pagination
        page={page}
        pageCount={pageCount}
        pageSize={pageSize}
        total={total}
      />
      }
    </>
  )
}