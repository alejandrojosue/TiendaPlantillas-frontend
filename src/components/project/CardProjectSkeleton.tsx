/**
 * Componente funcional que muestra una representación esqueleto de un proyecto en forma de tarjeta.
 */
export default function CardProjectSkeleton() {
 return (
   <div class="p-4 mb-5 rounded-md border-2 w-full border-gray-400">
     {/* Título del proyecto (animación de pulso) */}
     <h1 class="animate-pulse bg-gray-400 capitalize w-full p-3 rounded"></h1>

     {/* Información de publicación y precio (animación de pulso) */}
     <div class="flex flex-col justify-between items-center lg:flex-row gap-3 my-2">
       <p class="animate-pulse bg-gray-600 rounded w-full p-2.5 my-2"></p>
       <strong class="animate-pulse bg-gray-500 p-2.5 w-1/5 rounded flex items-center"></strong>
     </div>

     {/* Descripción del proyecto (animación de pulso) */}
     <p class="my-2.5 text-justify line-clamp-5 animate-pulse bg-gray-400 w-full rounded p-2"></p>
     <p class="my-2.5 text-justify line-clamp-5 animate-pulse bg-gray-400 w-full rounded p-2"></p>
     <p class="my-2.5 text-justify line-clamp-5 animate-pulse bg-gray-400 w-full rounded p-2"></p>
     <p class="my-2.5 text-justify line-clamp-5 animate-pulse bg-gray-400 w-full rounded p-2"></p>
     <p class="my-2.5 text-justify line-clamp-5 animate-pulse bg-gray-400 w-full rounded p-2"></p>

     {/* Etiquetas de categoría (animación de pulso) */}
     <div class="flex flex-wrap gap-1 my-2 mb-3">
       <span class="text-xs py-2.5 w-10 animate-pulse bg-gray-500 rounded-sm"></span>
       <span class="text-xs py-2.5 w-12 animate-pulse bg-gray-500 rounded-sm"></span>
       <span class="text-xs py-2.5 w-10 animate-pulse bg-gray-500 rounded-sm"></span>
       <span class="text-xs py-2.5 w-10 animate-pulse bg-gray-500 rounded-sm"></span>
     </div>

     {/* Separador horizontal (animación de pulso) */}
     <hr class="animate-pulse" />

     {/* Botones y detalles adicionales (animación de pulso) */}
     <div class="flex flex-col lg:flex-row mt-2 items-center justify-between">
       <div>
         <div class="flex-row animate-pulse bg-slate-700 justify-center cursor-pointer rounded-lg p-2.5 text-center mr-2 inline-flex items-center scale-90 gap-x-2 opacity-90">
           <span class="py-3 px-12"></span>
         </div>
         <div class="flex-row animate-pulse bg-slate-700 justify-center cursor-pointer rounded-lg p-2.5 text-center mr-2 inline-flex items-center scale-90 gap-x-2 opacity-90">
           <span class="py-3 px-12"></span>
         </div>
       </div>
       <p class="animate-pulse bg-gray-500 px-32 py-3 rounded my-1"></p>
     </div>
   </div>
 );
}
