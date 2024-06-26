import { IconTrash } from "./icons/Icons";

// Definición de las propiedades que el componente CategoryTag espera recibir
interface Props {
  categoryName: string;
  size: 'small' | 'large';
  onDeleteTag?: (categoryName: string) => void;
}

/**
 * Componente CategoryTag
 * 
 * Este componente muestra una etiqueta de categoría que puede tener diferentes tamaños. 
 * También incluye un botón opcional para eliminar la etiqueta, que aparece si se proporciona 
 * una función de eliminación.
 * 
 * @param {string} categoryName - El nombre de la categoría a mostrar.
 * @param {'small' | 'large'} size - El tamaño de la etiqueta, puede ser 'small' o 'large'.
 * @param {function} [onDeleteTag] - Función opcional que se llama cuando se hace clic en el botón de eliminar.
 */
export default function CategoryTag({ categoryName, size, onDeleteTag }: Props) {
  return (
    <span class={`${size === 'large' ? 'p-2' : 'text-sm p-1'} cursor-pointer hover:scale-105 flex transition-all capitalize rounded font-bold border-blue-500 text-blue-500 dark:text-gray-400 border dark:border-gray-400`}>
      <span>{categoryName}</span>
      {
        onDeleteTag
          ? (
            <button 
              type="button" 
              onClick={() => onDeleteTag && onDeleteTag(categoryName)} 
              class="ml-2 text-red-500 cursor-pointer hover:text-red-800"
            >
              <IconTrash width="25" height="25" />
            </button>
          )
          : ''
      }
    </span>
  );
}