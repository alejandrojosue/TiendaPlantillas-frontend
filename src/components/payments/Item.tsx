import { IconCheck, IconTablerEyeFilled } from "../icons/Icons"
interface Props {
  createAt: string
  idUser: number
  token: string
  amount: number
  product: { id: number, name: string }
}

export default function Item({ createAt, amount, idUser, token, product }: Props) {

  return (<>
    <li class="py-3 sm:py-4 transition-all ease-in-out duration-200">
      <div class="flex items-center accordion-collapse-heading">
        <div class="flex-1 min-w-0 ms-4">
          <p class="flex space-x-2 rtl:space-x-reverse items-center text-gray-900 truncate dark:text-white">
            <span class="text-blue-500">
              <IconCheck width="15" height="15" />
            </span>
            <span class="leading-tight">{product.name} <span class="italic">${amount}</span></span><a href={`/templates/${product.id}`} class="text-blue-500 hover:underline">Leer más</a>
          </p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            Pagado el {createAt?.split(',')[0]} a las {createAt?.split(',')[1]}
          </p>
        </div>
        <div class="inline-flex items-center gap-x-1 text-base font-semibold text-gray-900 dark:text-white">
          <a href={`/templates/${product.id}`}
            class="p-2 bg-blue-500 text-white rounded"
          >
            <IconTablerEyeFilled width="35" height="25" />
          </a>
        </div>
      </div>
    </li>
  </>)
}