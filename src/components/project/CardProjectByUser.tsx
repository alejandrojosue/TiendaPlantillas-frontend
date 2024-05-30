import  { type Project } from '../../types/api';
import ReaderMarkdown from '../ReaderMarkdown';

export default function CardProjectByUser({ id, title, description, categories, unitPrice, customer, status, createdAt }: Project) {

  return (
    <div class="p-4 mb-5 rounded-md border-2 w-full border-gray-400">
      <h1 class="text-white capitalize">{title}</h1>
      <div class="flex flex-col justify-between items-center lg:flex-row gap-3">
        <p class="font-semibold text-gray-600">Publicado el {createdAt!.split(',')[0]} a las {createdAt!.split(',')[1]}</p>
        <strong class="bg-gray-800 text-white px-2 py-1 rounded flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-coin mr-2" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path> <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1"></path> <path d="M12 7v10"></path> </svg>
          {unitPrice}</strong>
      </div>
      <p class="my-1 text-justify line-clamp-5 text-gray-400"><ReaderMarkdown description={description} /></p>
      <div class="flex flex-wrap gap-1 my-2 mb-3">
        {categories.map(({ categoryName }) =>
          <span class="text-xs border-gray-500 bg-gray-500 hover:bg-gray-300 p-1 rounded-sm font-bold tracking-tight text-white ">
            {categoryName}
          </span>
        )}
      </div>
      <hr />
      <div class="flex flex-col lg:flex-row mt-2 items-center justify-between">
        <div>
          <a href={`/projects/${id}`} class="flex-row text-gray-300 justify-center cursor-pointer hover:bg-slate-700 
 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 
 rounded-lg p-2.5 text-center mr-2
 inline-flex items-center dark:focus:ring-[#1da1f2]/55 
 hover:shadow-lg transition-all duration-200 
 ease-in-out hover:scale-110 scale-90 gap-x-2 
 opacity-90 hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-filled" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7bc62d" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 4c4.29 0 7.863 2.429 10.665 7.154l.22 .379l.045 .1l.03 .083l.014 .055l.014 .082l.011 .1v.11l-.014 .111a.992 .992 0 0 1 -.026 .11l-.039 .108l-.036 .075l-.016 .03c-2.764 4.836 -6.3 7.38 -10.555 7.499l-.313 .004c-4.396 0 -8.037 -2.549 -10.868 -7.504a1 1 0 0 1 0 -.992c2.831 -4.955 6.472 -7.504 10.868 -7.504zm0 5a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" stroke-width="0" fill="currentColor" />
            </svg>
            Leer más</a>

        </div>
        {/* <p class="text-gray-500"><span class="font-semibold">Publicado por:</span> {customer?.username}</p> */}
        <p class="text-gray-500"><span class="font-semibold">Estado:</span> <span class={`font-semibold ${status.toString() === 'Finished' ? 'text-red-700' : 'text-sky-600'}`}>{status}</span></p>
      </div>
    </div>)
}