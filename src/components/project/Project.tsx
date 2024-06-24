import ReaderMarkdown from "../../components/ReaderMarkdown";
import LinkButton from "../../components/common/LinkButton";
import { IconArrowLeft, IconTablerCoin, IconTablerEmailFilled } from "../../components/icons/Icons";
import useProject from "../../hooks/useProject";
import { useEffect } from "preact/hooks";
import type { Project } from "../../types/api";

interface Props {
 id: string
}

export default function _Project({ id }: Props) {
 const { project, loading, error, getById } = useProject()
 useEffect(() => {
  getById(id)
 }, [])
 useEffect(() => {
  document.title = (project as Project).title ?? `Project ${id}`
 }, [loading])

 return (<>
  <div class="p-3">
   <h1 class="text-5xl my-2">{(project as Project).title ?? ""}</h1>
   <ReaderMarkdown description={(project as Project).description ?? ""} />
   <div class="grid lg:grid-cols-2 lg:gap-16">
    <div
     class="bg-gray-800 text-gray-400 p-8 text-3xl font-semibold my-3 rounded-md flex items-center justify-center">
     <IconTablerCoin width="35" height="35" />
     Precio: ${(project as Project).unitPrice}
    </div>
    <div class="bg-gray-400 text-lg relative p-8 flex items-center justify-center text-gray-800 font-semibold my-3 rounded-md">
     <span
      class="text-gray-800 rounded p-3 text-xs absolute top-0 left-0">
      Autor</span>
     <a
      href={`/user/${(project as Project).customer?.username ?? ""}`}
      class="capitalize transition-all hover:text-2xl">
      {(project as Project).customer?.username ?? ""}
     </a>
     <h1 class="mx-2">&#183;</h1>{(project as Project).customer?.email ?? ""}
    </div>
   </div>
   <div class="flex flex-wrap justify-center my-3 gap-4 mb-10">
    <span class="p-2 rounded-s-full bg-gray-400 text-gray-800">
     Tags:
     </span>
    {
     (project as Project).categories?.map(({ categoryName }) => (
      <span class="p-2 cursor-pointer hover:scale-105 transition-all capitalize rounded font-bold text-gray-400 border border-gray-400">
       {categoryName}
      </span>
     ))
    }
   </div>
   <div class="flex">
    <LinkButton link="/projects" size="large">
     <IconArrowLeft width="40" height="40" />
     Regresar
    </LinkButton>
    <LinkButton link="/user/contact" size="large">
     <IconTablerEmailFilled width="40" height="40" />
     Contactar
    </LinkButton>
   </div>
  </div>
 </>)
}