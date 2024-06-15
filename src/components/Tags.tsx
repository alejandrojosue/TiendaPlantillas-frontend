import { useState } from "preact/hooks";
import type { Category } from "../types/api";
import CategoryTag from "./CategoyTag";

export default function Tags({ categories, tags, onTagsChange }: { categories: Category[], tags: Category[], onTagsChange: (tags: Category[]) => void }) {

  const deleteTag = (categoryName: string) => {
    if (confirm(`¿Desea eliminar ${categoryName}?`)) {
      const newTags = tags.filter(tag => tag.categoryName !== categoryName);
      onTagsChange(newTags);
    }
  };

  const addTag = (categoryName: string) => {
    if (!tags.some(tag => tag.categoryName === categoryName)) {
      const newTags = [...tags, ({ categoryName } as Category)];
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
      {tags.map(({ categoryName }) => (
        <CategoryTag size="large" categoryName={categoryName} onDeleteTag={() => deleteTag(categoryName)} />
      ))}
    </>
  );
}
