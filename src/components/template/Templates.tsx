import { useEffect } from 'preact/hooks';
import { PUBLIC_STRAPI_HOST } from '../../env/config';
import useTemplate from '../../hooks/useTemplate';
import type { Template } from '../../types/api';
import Pagination from '../Pagination';
import CardTemplate from './CardTemplate';
import CardTemplateSkeleton from './CardTemplateSkeleton';

export default function Templates({ username }: { username?: string }) {
  const { template: templates, loading, error, pageCount, pageSize, total, get, getByUsername } = useTemplate()
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
      </div>
      {
        username ? '' : <Pagination
        pageCount={pageCount}
        pageSize={pageSize}
        total={total}
      />
      }
    </>
  )
}