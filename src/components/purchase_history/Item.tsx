import { PUBLIC_STRAPI_HOST } from "../../env/config"
import useTemplate from "../../hooks/useTemplate"
interface Props {
 stripeId: string
 updatedAt: string
 idUser: number
 token: string
}

export default function Item({ stripeId, updatedAt, idUser, token }: Props) {
 const { download } = useTemplate()
 const handleDownload = async () => {
  const products = await download({ stripeId, idUser, token })
  console.log(products);
  
  if (!products.length) {
   alert('Ocurrió un error al descargar la plantilla.')
   return;
  }
  for (const product of products) {
   const a = document.createElement("a") as HTMLAnchorElement;
   a.href = PUBLIC_STRAPI_HOST+product.url;
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
  <li class="py-3 sm:py-4">
   <div class="flex items-center">
    <div class="flex-1 min-w-0 ms-4">
     <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
      {stripeId}
     </p>
     <p class="text-sm text-gray-500 truncate dark:text-gray-400">
      Publicado el {updatedAt?.split(',')[0]} a las {updatedAt?.split(',')[1]}
     </p>
    </div>
    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
     <button
      id="downloadButton"
      onClick={handleDownload}
      class="px-4 py-2 bg-blue-600 text-white rounded"
     >
      Descargar Archivos
     </button>
    </div>
   </div>
  </li>
 </>)
}