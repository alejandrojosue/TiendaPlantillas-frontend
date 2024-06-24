import type { User } from "../../types/api";
import { IconCirclePlus, IconShoppingCartCheck, IconGithub, IconInstagram, IconLinkedin, IconTablerLogout, IconUserEdit } from "../icons/Icons";
import { deleteAllCookies } from "../../util/cookies";
import LinkButton from "../common/LinkButton";

interface Props extends Omit<User, 'role'> {
 isProfile?: boolean;
 role: string
}

export default function Sidebar({ username, email, githubLink, LinkedInLink, instagramLink, role, isProfile }: Props) {
 return (<>
  <div class="py-4 lg:w-1/3 flex flex-col">
   <img
    src="/public/favicon.svg"
    alt="user-image"
    class="dark:bg-slate-800 rounded-full mx-auto border border-blue-500 dark:border-slate-400 object-fill"
    width="150"
    height="150"
   />
   <p class="text-xl lg:text-2xl text-center my-2 text-blue-400 dark:text-slate-400 font-semibold">
    <span class="capitalize">{username}</span>
   </p>
   <div class="mx-auto">
    <span class="text-blue-500 dark:text-slate-500 text-lg">{role}</span>
   </div>
   <div class="flex justify-center gap-x-1 text-blue-400 dark:text-slate-400 my-2">
    {
     githubLink && (
      <a href={githubLink} target="_blank" class="hover:text-blue-700 dark:hover:text-white">
       <IconGithub width="25" height="25" />
      </a>
     )
    }
    {
     instagramLink && (
      <a href={instagramLink} target="_blank" class="hover:text-blue-700 dark:hover:text-white">
       <IconInstagram width="25" height="25" />
      </a>
     )
    }
    {
     LinkedInLink && (
      <a href={LinkedInLink} target="_blank" class="hover:text-blue-700 dark:hover:text-white">
       <IconLinkedin width="25" height="25" />
      </a>
     )
    }
   </div>
   {
    isProfile && (
     <div class="grid lg:grid-cols-1 grid-cols-2 px-7">
      <LinkButton
       link={`/${role === "Freelancer" ? "templates" : "projects"}/create`}
       size="small"
      >
       <IconCirclePlus width="25" height="25" />
       Crear {role === "Freelancer" ? "plantilla" : "proyecto"}
      </LinkButton>
      <LinkButton size="small">
       <div id="btnEditProfile" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="flex gap-x-2">
        <IconUserEdit width="25" height="25" />
        Editar mi perfil
       </div>
      </LinkButton>
      <LinkButton link="/user/my-purchases" size="small">
       <div class="flex gap-x-2" >
        <IconShoppingCartCheck width="25" height="25" />
        Mis Compras
       </div>
      </LinkButton>
      <LinkButton link="#" size="small">
       <div id="logout" onClick={deleteAllCookies} class="flex gap-x-2" >
        <IconTablerLogout width="25" height="25" />
        Cerrar sesión
       </div>
      </LinkButton>

     </div>
    )
   }
  </div>
 </>)
}