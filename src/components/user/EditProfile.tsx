import {
 IconX,
 IconGithub,
 IconLinkedin,
 IconInstagram,
 IconUserEdit,
} from "../icons/Icons";
import Modal from "../Modal";
import PrettyForm from "../common/PrettyForm";
interface Props {
 biography: string;
 githubLink: string;
 instagramLink: string;
 LinkedInLink: string;
}

export default function EditProfile({ biography, githubLink, instagramLink, LinkedInLink }: Props) {
 
 return (<>
  <Modal>
   <div class="relative w-full max-h-full">
    <PrettyForm
    header_before_form={<>
    <div slot="header-before-form" class="flex items-center justify-between">
      <button
       type="button"
       class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
       data-modal-hide="authentication-modal"
      >
       <IconX width="25" height="25" />
       <span class="sr-only">Close modal</span>
      </button>
     </div>
     <h1 slot="header-before-form" class="text-center flex justify-center text-3xl pb-3">
       {/* Editar mis datos */}
       <span class="p-4 bg-blue-500 rounded-full text-white">
        <IconUserEdit width="40" height="40" />
       </span>
      </h1>
    </>}
    >
     <div>
      <label
       class="flex items-center gap-x-2 my-2 w-full text-slate-400 font-semibold"
      >
       <IconLinkedin width="35" height="35" />
       <input
        type="text"
        name="Linkedin"
        placeholder="https://www.linkedin.com/in/my-user"
        value={LinkedInLink}
        class="w-full rounded-md my-1 bg-transparent border border-slate-400 p-1 text-slate-500 focus:text-slate-300"
       />
      </label>
      <label
       class="flex items-center gap-x-2 my-2 w-full text-slate-400 font-semibold"
      >
       <IconGithub width="35" height="35" />
       <input
        type="text"
        name="githubLink"
        placeholder="https://github.com/my-user"
        value={githubLink}
        class="w-full rounded-md my-1 bg-transparent border border-slate-400 p-1 text-slate-500 focus:text-slate-300"
       />
      </label>
      <label
       class="flex items-center gap-x-2 my-2 w-full text-slate-400 font-semibold"
      >
       <IconInstagram width="35" height="35" />
       <input
        type="text"
        name="instagramLink"
        value={instagramLink}
        placeholder="https://www.instagram.com/my-user"
        class="w-full rounded-md my-1 bg-transparent border border-slate-400 p-1 text-slate-500 focus:text-slate-300"
       />
      </label>
      <label
       class="flex flex-col my-2 text-lg text-slate-400 font-semibold"
      >
       Biografía:
       <textarea
        name="biography"
        id="biography"
        class="rounded-md my-1 bg-transparent border border-slate-400 p-3 text-slate-500 focus:text-slate-300"
       >{biography}</textarea>
      </label>
     </div>
    </PrettyForm>
   </div>
  </Modal>
 </>)
}