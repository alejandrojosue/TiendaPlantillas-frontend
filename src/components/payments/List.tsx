import { useEffect } from "preact/hooks"
import usePayment from "../../hooks/usePayment"
import Item from "./Item"
import { dateTimeFormat } from "../../util/dateTimeFormat"

export default function List({ token, userId }: { token: string, userId: number }) {
 const { loading, error, data, total, handleTotal, getByFreelancerId } = usePayment()
 useEffect(() => {
  getByFreelancerId({ token, userId })
 }, [])

 useEffect(() => {
  handleTotal(data.reduce((accum, value) => value.amount + accum, 0));
 }, [loading])
 return (
  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
   <div class="flex items-center justify-between mb-4">
    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Mis Pagos por Cobrar (${total})</h5>
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
 )
}