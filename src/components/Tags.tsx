import type { Category } from "../types/api";
import CategoryTag from "./CategoryTag";

/**
 * Componente Tags
 * 
 * Este componente permite gestionar etiquetas (tags) asociadas a categorías. Permite agregar nuevas
 * etiquetas desde un selector y eliminar etiquetas existentes mostradas como componentes
 * `CategoryTag`.
 * 
 * @param {Category[]} categories - Lista de categorías disponibles para seleccionar como etiquetas.
 * @param {Category[]} tags - Lista actual de etiquetas seleccionadas.
 * @param {(tags: Category[]) => void} onTagsChange - Función callback para actualizar la lista de etiquetas.
 */
export default function Tags({ categories, tags, onTagsChange }: { categories: Category[], tags: Category[], onTagsChange: (tags: Category[]) => void }) {

  /**
   * Elimina una etiqueta (tag) de la lista de etiquetas.
   * 
   * @param {string} categoryName - Nombre de la categoría de la etiqueta que se desea eliminar.
   */
  const deleteTag = (categoryName: string) => {
    if (confirm(`¿Desea eliminar ${categoryName}?`)) {
      const newTags = tags.filter(tag => tag.categoryName !== categoryName);
      onTagsChange(newTags);
    }
  };

  /**
   * Agrega una nueva etiqueta a la lista de etiquetas si no existe previamente.
   * 
   * @param {string} categoryName - Nombre de la categoría que se desea agregar como etiqueta.
   */
  const addTag = (categoryName: string) => {
    if (!tags.some(tag => tag.categoryName === categoryName)) {
      const newTags = [...tags, ({ categoryName } as Category)];
      onTagsChange(newTags);
    }
  };

  return (
    <>
      {/* Selector para agregar nuevas etiquetas */}
      <select name="categories" id="categories"
        onChange={(e: Event) => addTag((e.target as HTMLSelectElement).value)}
        class="text-gray-800 border border-gray-300 text-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {
          categories.map(({ categoryName }) => (<option value={categoryName}>{categoryName}</option>))
        }
      </select>
      {/* Etiquetas existentes */}
      <span class="p-2 rounded-s-full bg-gray-400 text-gray-800">Tags:</span>
      {tags.map(({ categoryName }) => (
        <CategoryTag size="large" categoryName={categoryName} onDeleteTag={() => deleteTag(categoryName)} />
      ))}
    </>
  );
}
