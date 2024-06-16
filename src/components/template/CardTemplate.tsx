import type { Category } from "../../types/api";
import CategoryTag from "../CategoryTag";
import { IconTablerEyeFilled } from "../icons/Icons";

interface Props {
  id: string; // Identificador único del template
  title: string; // Título del template
  img: string; // URL de la imagen del template
  categories: Category[]; // Lista de categorías a las que pertenece el template
  unitPrice: number; // Precio unitario del template
}

/**
 * Componente CardTemplate
 * 
 * Representa una tarjeta que muestra la vista previa de un template.
 * Incluye imagen, título, categorías y un enlace para leer más detalles.
 * 
 * @param {string} id - Identificador único del template.
 * @param {string} title - Título del template.
 * @param {string} img - URL de la imagen del template.
 * @param {Category[]} categories - Lista de categorías a las que pertenece el template.
 * @param {number} unitPrice - Precio unitario del template.
 */
export default function CardTemplate({ id, title, img, categories, unitPrice }: Props) {
  return (
    <>
      <a
        href={`/templates/${id}`}
        class="max-h-[400px] rounded-lg border pb-5 shadow-md bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700 hover:scale-105 dark:hover:bg-gray-700 dark:hover:border-gray-500 transition flex flex-col"
      >
        {/* Imagen del template */}
        <picture>
          <img src={img} alt={`For ${title}`} loading="lazy" class="rounded-t-lg w-full h-60 object-cover" />
        </picture>

        {/* Título del template */}
        <header class="px-4 py-3 flex-grow">
          <h1 class="text-sm line-clamp-2 lg:text-xl font-bold tracking-tight text-gray-500 dark:text-white">
            {title}
          </h1>
        </header>

        {/* Categorías del template */}
        <div class="flex flex-wrap gap-1 my-2 justify-center">
          {categories.map(({ categoryName }) => (
            <CategoryTag size="small" categoryName={categoryName} />
          ))}
        </div>

        {/* Enlace para leer más detalles */}
        <p className="w-full px-4 flex mt-2">
          <span class="w-full p-2 flex text-blue-600 bg-blue-100 dark:text-gray-800 dark:bg-gray-400 hover:font-semibold rounded justify-center gap-3 mx-auto">
            <IconTablerEyeFilled width="25" height="25" />
            Leer más
          </span>
        </p>
      </a>
    </>
  );
}
