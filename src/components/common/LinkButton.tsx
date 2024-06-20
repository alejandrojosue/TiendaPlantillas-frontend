import { setParam } from "../../util/urlParams";

interface Props {
  link?: string; // URL opcional a la que apunta el botón
  sort?: 'asc' | 'desc'; // Tipo de ordenamiento opcional ('asc' para ascendente, 'desc' para descendente)
  target?: '_blank' | '_self'; // Opción para especificar si el enlace debe abrirse en una nueva pestaña o en la misma ('_blank' o '_self')
  size: 'small' | 'medium' | 'large'; // Tamaño del botón ('small', 'medium' o 'large')
  children: any; // Contenido del botón, puede ser texto, elementos JSX, etc.
}

/**
 * Componente LinkButton
 * 
 * Este componente renderiza un botón que puede actuar como un enlace (anchor). 
 * Permite definir opciones como el destino del enlace, el tipo de ordenamiento
 * para actualizar parámetros de URL, y el tamaño del botón.
 * 
 * @param {string} [link] - URL opcional a la que apunta el botón.
 * @param {'asc' | 'desc'} [sort] - Tipo de ordenamiento ('asc' para ascendente, 'desc' para descendente).
 * @param {'_blank' | '_self'} [target] - Opción para especificar si el enlace debe abrirse en una nueva pestaña o en la misma.
 * @param {'small' | 'medium' | 'large'} size - Tamaño del botón ('small', 'medium' o 'large').
 * @param {any} children - Contenido del botón, puede ser texto, elementos JSX, etc.
 */
export default function LinkButton({ link, sort, target, size, children }: Props) {
  return (
    <a
      href={link}
      target={target ?? '_self'}
      onClick={(e) => {
        if (!link) return false; // Evitar comportamiento por defecto si no hay URL
        if (sort) setParam('sort', sort!); // Actualizar parámetro de URL si se especifica el tipo de ordenamiento
      }}
      class={`
        flex-row justify-center cursor-pointer 
        bg-white hover:bg-blue-500 dark:bg-gray-900 dark:hover:bg-gray-800 
        text-blue-500 hover:text-white dark:text-gray-400 dark:hover:text-white
        focus:ring-4 focus:outline-none rounded-lg p-2.5 text-center inline-flex items-center
        hover:shadow-lg transition-all duration-200 ease-in-out scale-90 gap-x-2 opacity-90 hover:opacity-100
        ${size === 'small' ? 'mx-auto hover:scale-100' : 'mr-2 hover:scale-110'}
        ${size === 'medium' ? 'text-xl' : ''}
        ${size === 'large' ? 'text-2xl font-medium' : ''}
      `}
    >
      {children}
    </a>
  );
}