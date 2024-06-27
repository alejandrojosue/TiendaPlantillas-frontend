import { useState } from "preact/hooks"
import { PUBLIC_STRAPI_HOST } from "../../env/config"
import useTemplate from "../../hooks/useTemplate"
import { IconCheck, IconCircleMinus, IconCirclePlus, IconDownload } from "../icons/Icons"
interface Props {
 stripeId: string
 updatedAt: string
 idUser: number
 token: string
 products: [{ id: number, name: string, unitPrice: number }]
}

export default function Item({ stripeId, updatedAt, idUser, token, products }: Props) {
 const { download } = useTemplate()
 const [isOpen, setIsOpen] = useState<boolean>(false);
 const handleOpen = () => setIsOpen(prev => !prev)
 const handleDownload = async () => {
  const products = await download({ stripeId, idUser, token })
  if (!products.length) {
   alert('Ocurrió un error al descargar la plantilla.')
   return;
  }
  for (const product of products) {
   const a = document.createElement("a") as HTMLAnchorElement;
   a.href = PUBLIC_STRAPI_HOST + product.url;
   // @ts-ignore
   a.download = product.url.split("/").pop();
   document.body.appendChild(a);
   a.click();
   document.body.removeChild(a);

   // Espera 1 segundo antes de continuar con la siguiente descarga
   await new Promise((resolve) => setTimeout(resolve, 1000));
  }
 }
 return (<>
  <li class="py-3 sm:py-4 transition-all ease-in-out duration-200">
   <div class="flex items-center accordion-collapse-heading">
    <div class="flex-1 min-w-0 ms-4">
     <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
      {stripeId}
     </p>
     <p class="text-sm text-gray-500 truncate dark:text-gray-400">
      Comprado el {updatedAt?.split(',')[0]} a las {updatedAt?.split(',')[1]}
     </p>
    </div>
    <div class="inline-flex items-center gap-x-1 text-base font-semibold text-gray-900 dark:text-white">
     <button
      id="downloadButton"
      onClick={handleDownload}
      class="p-2 bg-blue-500 text-white rounded"
     >
      <IconDownload width="35" height="25" />
     </button>
     <button
      onClick={handleOpen}
      class="p-2 bg-blue-500 text-white rounded"
     >
      {!isOpen
       ? <IconCirclePlus width="35" height="25" />
       : <IconCircleMinus width="35" height="25" />}
     </button>
    </div>
   </div>
   <div id="accordion-collapse-body-1" class={`ms-4 pt-2 ${isOpen ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
    {/* Header List */}
    <h2 class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
     Plantillas
    </h2>
    {/* List */}
    <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
     {
      products.map(({id, name, unitPrice}) => (
       <li class="flex space-x-2 rtl:space-x-reverse items-center">
        <span class="text-blue-500">
         <IconCheck width="15" height="15" />
        </span>
        <span class="leading-tight">{name} <span class="italic">${unitPrice}</span></span><a href={`/templates/${id}`} class="text-blue-500 hover:underline">Leer más</a>
       </li>
      ))
     }
    </ul>
   </div>
  </li>
 </>)
}