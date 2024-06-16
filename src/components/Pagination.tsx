import { useState } from 'preact/hooks'
import { setParam } from '../util/urlParams'

/**
 * Componente Pagination
 * 
 * Este componente proporciona controles de paginación para navegar entre las páginas de un conjunto de datos.
 * Permite cambiar la página actual y muestra información sobre la paginación.
 * 
 * @param {string} pageName - Nombre de la página (por defecto: "templates").
 * @param {number} page - Número de la página actual.
 * @param {number} pageCount - Total de páginas disponibles.
 * @param {number} pageSize - Tamaño de página (número de elementos por página).
 * @param {number} total - Total de elementos en todas las páginas.
 */
export default function Pagination({ pageName = "templates", page, pageCount, pageSize, total }: { pageName?: string, page: number, pageCount: number, pageSize: number, total: number }) {
  // Estado para controlar la página actual
  const [__page, setPage] = useState<number>(page)

  /**
   * Maneja el cambio de página y actualiza la URL con el parámetro de página.
   * 
   * @param {number} _page - Número de la página a la que se quiere navegar.
   */
  const handlePage = (_page: number) => {
    setPage(_page)
    setParam('page', _page + '')
  }

  return (
    <div class="flex flex-col items-center my-5">
      {/* Texto de ayuda que muestra información sobre los elementos mostrados */}
      <span class="text-sm dark:text-gray-400">
        Mostrando <span class="font-semibold dark:text-white">{(__page - 1) * pageSize + 1}</span> hasta
        <span class="font-semibold dark:text-white"> {Math.min((__page - 1) * pageSize + pageSize, total)}</span> de <span
          class="font-semibold dark:text-white">{pageCount}</span> Páginas
      </span>
      
      {/* Botones de navegación */}
      <div class="inline-flex mt-2 xs:mt-0">
        {/* Botón "Anterior" */}
        <a href={`#${pageName}`} onClick={(e) => { page > 1 ? handlePage(page - 1) : e.preventDefault(); }}
          class="flex items-center justify-center px-4 h-10 text-base font-medium bg-gray-100 rounded-s hover:text-white hover:bg-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Anterior
        </a>
        
        {/* Botón "Siguiente" */}
        <a href={`#${pageName}`} onClick={(e) => { page < pageCount ? handlePage(page + 1) : e.preventDefault() }}
          class="flex items-center justify-center px-4 h-10 text-base font-medium bg-gray-100 border-0 border-s hover:text-white border-gray-400 rounded-e hover:bg-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Siguiente
        </a>
      </div>
    </div>
  )
}