import { useState } from 'preact/hooks'
import { setParam } from '../util/urlParams'

export default function Pagination({ pageName = "templates", page, pageCount, pageSize, total }: { pageName?: string, page: number, pageCount: number, pageSize: number, total: number }) {
  const [__page, setPage] = useState<number>(page)
  const handlePage = (_page: number) => {
    setPage(_page)
    setParam('page', _page + '')
  }
  return (
    <div class="flex flex-col items-center my-5">
      {/* <!-- Help text --> */}
      <span class="text-sm dark:text-gray-400">
        Mostrando <span class="font-semibold dark:text-white">{(__page - 1) * pageSize + 1}</span> hasta
        <span class="font-semibold dark:text-white"> {Math.min((__page - 1) * pageSize + pageSize, total)}</span> de <span
          class="font-semibold dark:text-white">{pageCount}</span> Páginas
      </span>
      {/*<!-- Buttons -->*/}
      <div class="inline-flex mt-2 xs:mt-0">
        <a href={`#up`} onClick={(e) => { page > 1 ? handlePage(page - 1) : e.preventDefault(); }}
          class="flex items-center justify-center px-4 h-10 text-base font-medium bg-gray-100 rounded-s hover:text-white hover:bg-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Anterior
        </a>
        <a href={`#up`} onClick={(e) => { page < pageCount ? handlePage(page + 1) : e.preventDefault() }}
          class="flex items-center justify-center px-4 h-10 text-base font-medium bg-gray-100 border-0 border-s hover:text-white border-gray-400 rounded-e hover:bg-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Siguiente
        </a>
      </div>
    </div>
  )
}