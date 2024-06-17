import { TemplateStatus, type Category } from "../../types/api";
import CategoryTag from "../CategoryTag";
import { IconTablerEyeFilled } from "../icons/Icons";

interface Props {
  id: string; // Identificador único del template
  title: string; // Título del template
  img: string; // URL de la imagen del template
  categories: Category[]; // Lista de categorías a las que pertenece el template
  unitPrice: number; // Precio unitario del template
  status?: TemplateStatus; // Estado de la plantilla
  isProfile?: boolean; // Verifica si es para mostrar en el perfil o en otro sitio
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
export default function CardTemplate({ id, title, img, categories, unitPrice, status, isProfile }: Props) {
  return (
    <>
      <a
        href={`/templates/${id}`}
        class="rounded-lg border pb-5 shadow-md bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700 hover:scale-105 dark:hover:bg-gray-700 dark:hover:border-gray-500 transition flex flex-col"
      >
        {/* Imagen del template */}
        <picture>
          <img src={img} alt={`For ${title}`} loading="lazy" class="rounded-t-lg w-full h-60 object-cover" />
        </picture>

        {/* Estado del template */}
        {
          isProfile && <section class="mx-4 mt-4 font-semibold capitalize">
          <span class={`py-1 px-2 rounded-md ${
            status === TemplateStatus.APPROVED ? 'bg-blue-400 text-blue-800' :
            status === TemplateStatus['PENDING REVIEW'] ? 'bg-yellow-400 text-yellow-800' :
            status === TemplateStatus['NOT APPROVED'] ? 'bg-red-400 text-red-800' : 
            'bg-green-400 text-green-800'
            } `}>{status?.toLocaleLowerCase()}</span>
        </section>
        }

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
        <p className="px-6 flex mt-2">
          <span class="w-full p-2 flex bg-blue-500 text-white hover:font-semibold rounded justify-center gap-3 mx-auto">
            <IconTablerEyeFilled width="25" height="25" />
            Leer más
          </span>
        </p>
      </a>
    </>
  );
}
