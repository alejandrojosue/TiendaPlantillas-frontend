import { useEffect } from "preact/hooks"
import usePayment from "../../hooks/usePayment"
import Item from "./Item"
import { dateTimeFormat } from "../../util/dateTimeFormat"
import { IconReceipt } from "../icons/Icons"

export default function List({ token, userId }: { token: string, userId: number }) {
 const { loading, error, data, total, feedback, handleTotal, getByFreelancerId, collectNow } = usePayment()
 useEffect(() => {
  getByFreelancerId({ token, userId })
 }, [])

 useEffect(() => {
  handleTotal(data.reduce((accum, value) => value.amount + accum, 0));
 }, [loading])

 return (
  <>
  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
   <div class="flex items-center justify-between mb-4">
    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
     Mis Pagos por Cobrar (${total})
    </h5>
    <button type="button" class="p-2 flex bg-blue-500 text-white rounded"
    onClick={()=>collectNow({token, paymentsId: data.map(item=>item.id)})}>
     <IconReceipt width="25" height="25" />
     <span>Cobrar</span>
    </button>
   </div>
   <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
    {
     data?.map((value, index) => (<Item key={`item-${index}`} idUser={userId} token={token} amount={value.amount} product={value.product} createAt={dateTimeFormat(value.createdAt)} />))
    }
    {/* Muestra un mensaje si no hay compras para mostrar. */}
    {Array.isArray(data) && data.length < 1 && (
     <p class="text-gray-400"> // Nada aún </p>
    )}
   </ul>
  </div>
  {feedback
  ? <div class="w-full mt-10 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
  <div class="flex items-center justify-between">
   <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
    {/* @ts-ignore */}
    Total a cobrar (${feedback.amount })
    <br /><a href="/terms#cobros-ganancias-ventas" className="text-xs underline text-blue-700 font-semibold hover:text-blue-500">Leer más</a>
   </h5>
   <span className="bg-yellow-400 text-yellow-800 text-xs p-1 rounded-sm">Pendiente de Revisión</span>
  </div>
 </div>
 : ''}
  </>
 )
}