import { useState, useEffect } from 'preact/hooks';
import type { Category, Template, User } from '../../types/api';
import { TemplateStatus, Role, TypeFileToUpload } from '../../types/api';
import CategoryRepository from '../../repositories/CategoryRepository';
import Tags from '../Tags';
import useTemplate from '../../hooks/useTemplate';
import UploadFile from '../../components/template/UploadFile';
import { EMOTICONS_SET, TOOLBARS, TEXT_EXAMPLE } from '../../util/froalaConstants';
import LinkButton from '../LinkButton';
import Carousel from './Carousel';
import { IconArrowLeft, IconRoundedPuls, IconTablerCoin, IconURL } from '../icons/Icons';

interface Props {
   customerID: number;
   username: string;
   email: string;
   token: string;
   template?: Template;
}

/**
 * Componente Form
 * 
 * Este componente permite crear o editar una plantilla.
 * 
 * @param {number} customerID - ID del cliente.
 * @param {string} username - Nombre de usuario.
 * @param {string} email - Correo electrónico del usuario.
 * @param {string} token - Token de autenticación.
 * @param {Template} [template] - Datos de la plantilla a editar (opcional).
 */
export default function Form({ customerID, username, email, token, template }: Props) {
   const [title, setTitle] = useState(template?.title ?? '');
   const [url, setURL] = useState(template?.url ?? '');
   const [description, setDescription] = useState(template?.description ?? TEXT_EXAMPLE);
   const [price, setPrice] = useState(template?.unitPrice ?? 0);
   const [tags, setTags] = useState<Category[]>(template?.categories ?? []);
   const [categories, setCategories] = useState<Category[]>([]);
   const [images, setImages] = useState<File[]>([]);
   const [zips, setZips] = useState<File[]>([]);
   const { create, update } = useTemplate();

   useEffect(() => {
      // Obtiene categorías del almacenamiento local o del repositorio
      if (localStorage.getItem('categories')) {
         setCategories(JSON.parse(localStorage.getItem('categories') + ''));
      } else {
         const categoryRepository = new CategoryRepository();
         categoryRepository.get().then(data => setCategories(data));
      }

      // Inicialización de Froala Editor (https://froala.com/wysiwyg-editor/docs/overview)
      //@ts-ignore
      new FroalaEditor('#editor', {
         toolbarButtons: TOOLBARS,
         placeholderText: 'Ingrese una descripción...',
         saveInterval: 500,
         emoticonsSet: EMOTICONS_SET,
         events: {
            'save.before': function (html: string) {
               setDescription(html);
            },
         },
      });
   }, []);

   /**
    * Maneja la adición de archivos (imágenes o ZIP) al estado correspondiente.
    * 
    * @param {FileList} files - Lista de archivos seleccionados.
    * @param {TypeFileToUpload} type - Tipo de archivo a subir (imagen o ZIP).
    */
   const handleFilesAdded = (files: FileList, type: TypeFileToUpload) => {
      if (type === TypeFileToUpload.IMAGE) {
         setImages(Array.from(files));
      } else if (type === TypeFileToUpload.ZIP) {
         setZips(Array.from(files));
      }
   };

   /**
    * Maneja la eliminación de archivos del estado correspondiente.
    * 
    * @param {number} index - Índice del archivo a eliminar.
    * @param {TypeFileToUpload} type - Tipo de archivo a eliminar (imagen o ZIP).
    */
   const handleRemoveFile = (index: number, type: TypeFileToUpload) => {
      if (type === TypeFileToUpload.IMAGE) {
         setImages(prev => prev.filter((_, i) => i !== index));
      } else if (type === TypeFileToUpload.ZIP) {
         setZips(prev => prev.filter((_, i) => i !== index));
      }
   };

   /**
    * Maneja el envío del formulario para crear o actualizar una plantilla.
    * 
    * @param {Event} event - Evento del formulario.
    */
   const handleSubmit = async (event: Event) => {
      event.preventDefault();

      // Validaciones básicas
      if (price === 0 || isNaN(price)) {
         alert('El precio debe ser mayor a cero!');
         return;
      }

      if (tags.length < 3) {
         alert('Debe seleccionar al menos 3 tags!');
         return;
      }

      // Datos del usuario como "freelancer"
      const freelancer: User & { role: Role.freelancer } = {
         id: customerID,
         role: Role.freelancer
      };

      // Datos de la plantilla a enviar al servidor
      const templateData: Template = {
         id: template?.id,
         title,
         description,
         unitPrice: price,
         categories: tags,
         freelancer,
         status: TemplateStatus['PENDING REVIEW'],
         images: [],
         template: '',
         url
      };

      // Llamada a la API para crear o actualizar la plantilla
      if (!template) {
         await create({ templateData, zip: zips[0], images, token });
      } else {
         await update(templateData, token);
      }
   };

   return (
      <div class="p-3">
         <form id="Template-form" onSubmit={handleSubmit}>
            {/* Input para el título de la plantilla */}
            <input
               type="text"
               name="title"
               id="title"
               style="background-color: transparent;"
               class="p-1 rounded-md text-5xl my-2 w-full"
               placeholder="Ingrese un título"
               value={title}
               required
               //@ts-ignore
               onInput={(e) => setTitle(e.target.value)}
            />

            {/* Editor de texto para la descripción de la plantilla */}
            <textarea id="editor" class="my-2">{template?.description ?? TEXT_EXAMPLE}</textarea>

            {/* Carrusel de imágenes (solo si se está editando una plantilla existente) */}
            {template ? <Carousel images={template.images ?? []} /> : ''}

            {/* Subida de archivos (imágenes y ZIPs) */}
            <div class="grid lg:grid-cols-1">
               {!template ? <>
                  {/* Subida de imágenes */}
                  <UploadFile type={TypeFileToUpload.IMAGE} onFilesAdded={(files) => handleFilesAdded(files, TypeFileToUpload.IMAGE)} onFilesRemoved={(index) => handleRemoveFile(index, TypeFileToUpload.IMAGE)} />
                  {/* Subida de archivos ZIP */}
                  <UploadFile type={TypeFileToUpload.ZIP} onFilesAdded={(files) => handleFilesAdded(files, TypeFileToUpload.ZIP)} onFilesRemoved={(index) => handleRemoveFile(index, TypeFileToUpload.ZIP)} />
               </> : ''}
               
               {/* Campo para el precio de la plantilla */}
               <div class="bg-gray-800 text-gray-400 p-8 text-3xl font-semibold my-3 rounded-md flex items-center justify-center">
                  <IconTablerCoin width="40" height="40" />
                  Precio:
                  <input
                     type="number"
                     name="unitPrice"
                     id="unitPrice"
                     required
                     min={1}
                     value={price > 0 ? price : ''}
                     class="p-1 text-center rounded-md w-full bg-transparent"
                     placeholder="Ingrese valor ($)"
                     //@ts-ignore
                     onInput={(e) => setPrice(parseFloat(e.target.value))}
                  />
               </div>

               {/* Información del autor */}
               <div class="bg-gray-400 text-lg relative p-8 flex items-center justify-center text-gray-800 font-semibold my-3 rounded-md">
                  <span class="text-gray-800 rounded p-3 text-xs absolute top-0 left-0">Autor</span>
                  <span class="capitalize transition-all hover:text-2xl">
                     {username}
                  </span>
                  <h1 class="mx-2">&#183;</h1>{email}
               </div>

               {/* URL de la plantilla */}
               <div class="bg-gray-800 text-gray-400 p-8 text-3xl font-semibold my-3 rounded-md flex items-center justify-center">
                  <IconURL width='40' height='40'/>
                  URL:
                  <input
                     title="URL inválida!"
                     type="text"
                     name="url"
                     id="url"
                     style="background-color: transparent;"
                     class="p-1 text-center rounded-md w-full bg-transparent"
                     placeholder="Ingrese la url donde tiene desplegada la plantilla"
                     value={url}
                     required
                     //@ts-ignore
                     onInput={(e) => setURL(e.target.value)}
                  />
               </div>
            </div>

            {/* Selección de etiquetas (tags) */}
            <div class="flex flex-wrap justify-center my-3 gap-4 mb-10">
               <Tags categories={categories} tags={tags} onTagsChange={setTags} />
            </div>

            {/* Botón de regresar */}
            <LinkButton link="/templates" size="large">
               <IconArrowLeft width="40" height="40" />
               Regresar
            </LinkButton>

            {/* Botón de guardar */}
            <button
               class="flex-row text-2xl justify-center cursor-pointer hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg p-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100"
               type="submit"
            >
               <IconRoundedPuls width="40" height="40" />
               Guardar
            </button>
         </form>
      </div>
   );
}
