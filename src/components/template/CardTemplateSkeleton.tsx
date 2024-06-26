import { IconImageAlt } from "../icons/Icons";

/**
 * Componente CardTemplateSkeleton
 * 
 * Representa una versión esquelética de la tarjeta de template mientras se carga la información.
 * Incluye elementos simulados para indicar que el contenido está cargando.
 */
export default function CardTemplateSkeleton() {
  return (
    <div
      role="status"
      class="space-y-6 animate-pulse rounded-lg border pb-5 shadow-md bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex flex-col"
    >
      {/* Imagen placeholder */}
      <div
        class="flex items-center justify-center w-full h-60 bg-gray-300 rounded-t-lg dark:bg-gray-700"
      >
        <IconImageAlt />
      </div>

      {/* Título y descripción placeholders */}
      <div class="px-4 w-full">
        <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-3.5"></div>
        <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-3.5"></div>
        <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px]"></div>
      </div>

      {/* Categorías placeholders */}
      <div class="w-full px-4">
        <div class="flex flex-wrap gap-1 justify-center">
          <span class="bg-gray-300 dark:bg-gray-500 w-24 h-5 rounded-sm font-bold tracking-tight"></span>
          <span class="bg-gray-300 dark:bg-gray-500 w-20 h-5 rounded-sm font-bold tracking-tight"></span>
          <span class="bg-gray-300 dark:bg-gray-500 w-24 h-5 rounded-sm font-bold tracking-tight"></span>
          <span class="bg-gray-300 dark:bg-gray-500 w-24 h-5 rounded-sm font-bold tracking-tight"></span>
          <span class="bg-gray-300 dark:bg-gray-500 w-12 h-5 rounded-sm font-bold tracking-tight"></span>
          <span class="bg-gray-300 dark:bg-gray-500 w-12 h-5 rounded-sm font-bold tracking-tight"></span>
        </div>
      </div>

      {/* Enlace de "Leer más" placeholder */}
      <p className="w-full px-4 flex">
        <span class="w-full rounded bg-gray-300 dark:bg-gray-500 p-5 font-bold tracking-tight"></span>
      </p>

      {/* Elemento oculto para accesibilidad */}
      <span class="sr-only">Loading...</span>
    </div>
  );
}
