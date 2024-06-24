import ReaderMarkdown from "../ReaderMarkdown";
import Carousel from "./Carousel";
import LinkButton from "../common/LinkButton";
import CategoryTag from "../CategoryTag";
import {
 IconArrowLeft,
 IconCirclePlus,
 IconTablerCoin,
 IconTablerEye,
} from "../icons/Icons";
import useTemplate from "../../hooks/useTemplate";
import { useEffect } from "preact/hooks";
import type { Template } from "../../types/api";

interface Props {
 id: string
}

export default function _Template({ id }: Props) {
 const { template, loading, error, getById } = useTemplate()
 useEffect(() => {
  getById(id)

  console.log(template);
  
  document.title = (template as Template).title;
 }, [])

 return (<>

  <div class="p-3 overflow-hidden">
   <h1 class="text-5xl my-2 text-gray-700 dark:text-white">
    {(template as Template)?.title}
   </h1>
   <Carousel images={(template as Template)?.images as string[] ?? []} />
   <ReaderMarkdown description={(template as Template)?.description} />
   <div class="grid lg:grid-cols-2 lg:gap-16">
    <div
     class="bg-blue-500 text-white dark:bg-gray-800 dark:text-gray-100 p-8 text-3xl font-semibold my-3 rounded-md flex items-center justify-center"
    >
     <IconTablerCoin width="35" height="35" />
     Precio: ${(template as Template)?.unitPrice}
    </div>
    <div
     class="bg-gray-100 dark:bg-gray-400 text-lg relative p-8 flex items-center justify-center text-gray-800 font-semibold my-3 rounded-md"
    >
     <span
      class="text-blue-500 dark:text-slate-800 p-3 text-xs absolute top-1 left-1">Autor</span>
     <a
      href={`/user/${(template as Template)?.freelancer?.username}`}
      class="capitalize transition-all hover:text-2xl"
     >{(template as Template)?.freelancer?.username}</a>
     <h1 class="mx-2">&#183;</h1>{(template as Template)?.freelancer?.email}
    </div>
   </div>
   <div class="flex flex-wrap justify-center my-3 gap-4 mb-10">
    <span
     class="font-semibold p-2 rounded-s-full bg-blue-500 text-white dark:bg-gray-400 dark:text-gray-800">
     Tags:</span>
    {
     (template as Template)?.categories?.map(({ categoryName }) => (
      <CategoryTag size="large" categoryName={categoryName} />
     ))
    }
   </div>
   <div class="flex flex-wrap">
    <LinkButton link="/templates" size="large">
     <IconArrowLeft width="40" height="40" />
     Regresar
    </LinkButton>
    <LinkButton link={(template as Template)?.url ?? ""} size="large" target="_blank">
     <IconTablerEye width="44" height="44" />
     Vista previa
    </LinkButton>
    <LinkButton link="#" size="large">
     <div
      id="add-cart"
      data-id={(template as Template)?.id ?? "1"}
      data-name={(template as Template)?.title ?? ""}
      data-price={(template as Template)?.unitPrice ?? ""}
      data-img={template &&  (template as Template).images ? (template as Template)?.images[0] : ""}
      class="flex gap-x-2 items-center">
      <IconCirclePlus width="40" height="40" />
      Agregar al carrito
     </div>
    </LinkButton>
   </div>
  </div>
 </>)
}