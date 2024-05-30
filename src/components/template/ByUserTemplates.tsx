import { useEffect } from 'preact/hooks';
import { PUBLIC_STRAPI_HOST } from '../../env/config';
import useTemplate from '../../hooks/useTemplate';
import type { Template } from '../../types/api';
// import Pagination from '../Pagination';
import CardTemplate from './CardTemplate';
import CardTemplateSkeleton from './CardTemplateSkeleton';

export default function ByUserTemplates({username}:{username:string}) {
  const { template: templates, loading, error, pageCount, pageSize, total, getByUsername } = useTemplate()
  useEffect(() => {
    setTimeout(()=>{getByUsername({username})}, 0)
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
              img={`${PUBLIC_STRAPI_HOST}${template.images[0]}`}
              categories={template.categories}
              unitPrice={template.unitPrice}
            />
          ))
        }
      </div>
      {/* <Pagination
        pageCount={pageCount}
        pageSize={pageSize}
        total={total}
      /> */}
    </>
  )
}