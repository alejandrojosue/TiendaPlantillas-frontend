import type { Project } from '../../types/api';
import { setCookie } from '../../util/cookies';
import ReaderMarkdown from '../ReaderMarkdown';

export default function CardProject({ id, title, description, categories, unitPrice, customer, status, createdAt }: Project) {
  interface DataEmail {
    recipientEmail: string
    senderEmail: string
    projectTitle: string
    projectID: string
    customerName: string
  }
  const updateCookie = ({ recipientEmail, senderEmail, projectTitle, projectID, customerName }: DataEmail) => {
    setCookie('recipientEmail', recipientEmail)
    setCookie('senderEmail', senderEmail)
    setCookie('projectTitle', projectTitle)
    setCookie('projectID', projectID)
    setCookie('customerName', customerName)
  }

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
        {categories.map(({categoryName}) =>
          <span class="text-xs border-gray-500 bg-gray-500 hover:bg-gray-300 p-1 rounded-sm font-bold tracking-tight text-white ">
            {categoryName}
          </span>
        )}
      </div>
      <hr />
      <div class="flex flex-col lg:flex-row mt-2 items-center justify-between">
        <div>
          <a href="/user/contact" 
          onClick={()=>{updateCookie({
            recipientEmail: customer.email + '',
            senderEmail: 'josued.ad13@gmail.com',
            customerName: customer.username as string,
            projectID: id + '',
            projectTitle: title
          })}}
          class="flex-row text-gray-300 justify-center cursor-pointer hover:bg-slate-700 
 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 
 rounded-lg p-2.5 text-center mr-2
 inline-flex items-center dark:focus:ring-[#1da1f2]/55 
 hover:shadow-lg transition-all duration-200 
 ease-in-out hover:scale-110 scale-90 gap-x-2 
 opacity-90 hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-filled" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" stroke-width="0" fill="currentColor" />
              <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" stroke-width="0" fill="currentColor" />
            </svg>
            Contactar</a>
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
        <p class="text-gray-500"><span class="font-semibold">Publicado por:</span> {customer?.username}</p>
      </div>
    </div>)
}