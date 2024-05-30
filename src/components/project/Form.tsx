import { useState, useEffect } from "preact/hooks";
import type { Category, Project, User } from "../../types/api";
import { ProjectStatus, Role } from "../../types/api";
import ProjectRepository from "../../repositories/ProjectRepository";
import CategoryRepository from "../../repositories/CategoryRepository";
import Tags from "../Tags";
import { getCookie } from "../../util/cookies"

export default function Form() {
   const projectRepository = new ProjectRepository();
   const categoryRepository = new CategoryRepository()
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [price, setPrice] = useState(0);
   const [tags, setTags] = useState<Category[]>([]);
   const [categories, setCategories] = useState<Category[]>([]);

   useEffect(() => {
      categoryRepository.get().then(data => setCategories(data))
      // Inicialización de Froala
      //@ts-ignore
      new FroalaEditor("#editor", {
         toolbarButtons: [
            ["bold", "italic", "underline", "paragraphFormat", "formatUL"],
            ["insertHR", "insertHTML", "undo", "redo", "html"],
         ],
         placeholderText: "Ingrese una descripción...",
         saveInterval: 2000,
         events: {
            "save.before": function (html: string) {
               (document.getElementById("txtDescription") as HTMLInputElement).value = html;
            },
         },
      });
      console.log(getCookie("jwt"));
   }, []);

   const handleSubmit = async (event: Event) => {
      event.preventDefault();
      const customer: User & { role: Role.customer } = {
         id: 1,
         username: '',
         role: Role.customer
      }
      const projectData: Project = {
         title,
         description,
         unitPrice: price,
         categories: tags,
         customer,
         status: ProjectStatus.Open
      };

      try {
         let res = await projectRepository.create(projectData);
         if (res) alert("Project successfully created!");
         // Optionally, redirect or clear the form here
      } catch (error) {
         console.error("Error creating project:", error);
         alert("Failed to create project.");
      }
   };

   return (
      <div class="p-3">
         <form id="project-form" onSubmit={handleSubmit}>
            <input
               type="text"
               name="title"
               id="title"
               style="background-color: transparent;"
               class="p-1 rounded-md text-5xl my-2 w-full"
               placeholder="Ingrese un título"
               value={title}
               //@ts-ignore
               onInput={(e) => setTitle(e.target.value)}
            />
            <div id="editor" class="my-2"></div>
            {/* @ts-ignore */}
            <input type="hidden" id="txtDescription" onChange={(e) => setDescription(e, target.value)} />

            <div class="grid lg:grid-cols-1">
               <div
                  class="bg-gray-800 text-gray-400 p-8 text-3xl font-semibold my-3 rounded-md flex items-center justify-center"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="icon icon-tabler icon-tabler-coin mr-2"
                     width="40"
                     height="40"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     fill="none"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  >
                     <path stroke="none" d="M0 0h24V24H0z" fill="none"></path>
                     <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                     <path
                        d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1"
                     ></path>
                     <path d="M12 7v10"></path>
                  </svg>
                  Precio:
                  <input
                     style="background: transparent;"
                     type="number"
                     name="unitPrice"
                     id="unitPrice"
                     class="p-1 text-center rounded-md w-full"
                     placeholder="Ingrese valor ($)"
                     //@ts-ignore
                     onInput={(e) => setPrice(parseFloat(e.target.value))}
                  />
               </div>
               <div
                  class="bg-gray-400 text-lg relative p-8 flex items-center justify-center text-gray-800 font-semibold my-3 rounded-md"
               >
                  <span class="text-gray-800 rounded p-3 text-xs absolute top-0 left-0">Autor</span>
                  <a href={`/user/${'susan'}`} class="capitalize transition-all hover:text-2xl">
                     {"susan"}
                  </a>
                  <h1 class="mx-2">&#183;</h1>{"susan@gmail.com"}
               </div>
            </div>
            <div class="flex flex-wrap justify-center my-3 gap-4 mb-10">
               <Tags categories={categories} onTagsChange={setTags} />
            </div>
            <div class="flex"></div>
            <a
               href="/projects"
               class="flex-row text-2xl my3
            justify-center cursor-pointer hover:bg-slate-700
            focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50
            font-medium rounded-lg p-2.5 text-center
            inline-flex items-center dark:focus:ring-[#1da1f2]/55
            mr-2 hover:shadow-lg transition-all duration-200
            ease-in-out hover:scale-110 scale-90 gap-x-2
            opacity-90 hover:opacity-100"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-circle-arrow-left"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               >
                  <path stroke="none" d="M0 0h24V24H0z" fill="none"></path>
                  <path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18"></path>
                  <path d="M8 12l4 4"></path>
                  <path d="M8 12h8"></path>
                  <path d="M12 8l-4 4"></path>
               </svg>
               Regresar
            </a>
            <button
               class="flex-row text-2xl my3
            justify-center cursor-pointer hover:bg-slate-700
            focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50
            font-medium rounded-lg p-2.5 text-center
            inline-flex items-center dark:focus:ring-[#1da1f2]/55
            mr-2 hover:shadow-lg transition-all duration-200
            ease-in-out hover:scale-110 scale-90 gap-x-2
            opacity-90 hover:opacity-100"
               type="submit"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-square-rounded-plus"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               >
                  <path stroke="none" d="M0 0h24V24H0z" fill="none"></path>
                  <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path>
                  <path d="M15 12h-6"></path>
                  <path d="M12 9v6"></path>
               </svg>
               Guardar
            </button>
         </form>
      </div>
   );
}
