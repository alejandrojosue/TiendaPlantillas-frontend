import { useState } from "preact/hooks";
import type { Category } from "../types/api";

export default function Tags({ categories, onTagsChange }: { categories: Category[], onTagsChange: (tags: Category[]) => void }) {
  const [tags, setTags] = useState<Category[]>([]);

  const deleteTag = (categoryName: string) => {
    if (confirm(`¿Desea eliminar ${categoryName}?`)) {
      const newTags = tags.filter(tag => tag.categoryName !== categoryName);
      setTags(newTags);
      onTagsChange(newTags);
    }
  };

  const addTag = (categoryName: string) => {
    if (!tags.some(tag=>tag.categoryName === categoryName)) {
      const newTags = [...tags, ({categoryName} as Category)];
      setTags(newTags);
      onTagsChange(newTags);
    }
  };

  return (
    <>
      <select name="categories" id="categories"
        onChange={(e: Event) => addTag((e.target as HTMLSelectElement).value)}
        class="text-gray-800 border border-gray-300 text-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {
          categories.map(({ categoryName }) => (<option value={categoryName}>{categoryName}</option>))
        }
      </select>
      <span class="p-2 rounded-s-full bg-gray-400 text-gray-800">Tags:</span>
      {tags.map(({categoryName}) => (
        <span class="p-2 hover:scale-105 flex transition-all capitalize rounded font-bold text-gray-400 border border-gray-400">
          <span>{categoryName}</span>
          <button
            type="button"
            onClick={() => deleteTag(categoryName)}
            class="ml-2 text-red-500 cursor-pointer hover:text-red-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 7l16 0" />
              <path d="M10 11l0 6" />
              <path d="M14 11l0 6" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </button>
        </span>
      ))}
    </>
  );
}
