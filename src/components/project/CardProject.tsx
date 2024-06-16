import type { Project } from '../../types/api';
import { setCookie } from '../../util/cookies';
import CategoryTag from '../CategoyTag';
import { IconTablerCoin, IconTablerEmailFilled, IconTablerEyeFilled } from '../icons/Icons';
import LinkButton from '../LinkButton';
import ReaderMarkdown from '../ReaderMarkdown';
interface Props extends Project {
  isProfile?: boolean
}
export default function CardProject({ id, title, description, categories, unitPrice, customer, status, createdAt, isProfile }: Props) {
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
    <div class="p-4 mb-5 rounded-md border-2 w-full border-gray-400 dark:border-gray-400">
      <h1 class="text-gray-600 dark:text-white capitalize">{title}</h1>
      <div class="flex flex-col justify-between items-center lg:flex-row gap-3">
        <p class="font-semibold text-gray-300 dark:text-gray-600">Publicado el {createdAt!.split(',')[0]} a las {createdAt!.split(',')[1]}</p>
        <strong class="text-gray-600 bg-gray-200 dark:bg-gray-800 dark:text-white px-2 py-1 rounded flex items-center">
          <IconTablerCoin width='25' height='25' />
          {unitPrice}</strong>
      </div>
      <p class="my-1 text-justify line-clamp-5 text-gray-500 dark:text-gray-400"><ReaderMarkdown description={description} /></p>
      <div class="flex flex-wrap gap-1 my-2 mb-3">
        {categories.map(({ categoryName }) => <CategoryTag size="small" categoryName={categoryName} />)}
      </div>
      <hr />
      <div class="flex flex-col lg:flex-row mt-2 items-center justify-between">
        <div>
          {
            isProfile
              ? ''
              : <span onClick={() => {
                updateCookie({
                  recipientEmail: customer.email + '',
                  senderEmail: 'josued.ad13@gmail.com',
                  customerName: customer.username as string,
                  projectID: id + '',
                  projectTitle: title
                })
              }}>
                <LinkButton link="/user/contact" size='small'>
                  <IconTablerEmailFilled width='25' height='25' />
                  Contactar</LinkButton></span>
          }
          <LinkButton link={`/projects/${id}`} size='small'>
            <IconTablerEyeFilled width='25' height='25' />
            Leer más
          </LinkButton>
        </div>
        {
          isProfile
            ? <p class="dark:text-gray-500"><span class="font-semibold">Estado:</span> <span class={`font-semibold ${status.toString() === 'Finished' ? 'text-red-700' : 'text-sky-600'}`}>{status}</span></p>
            : <p class="dark:text-gray-500"><span class="font-semibold">Publicado por:</span> {customer?.username}</p>
        }
      </div>
    </div>)
}