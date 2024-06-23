import { useEffect } from "preact/hooks";
import { usePurchaseHistory } from "../../hooks/usePurchaseHistory";
import { dateTimeFormat } from "../../util/dateTimeFormat";
import Item from "./Item";

export default function List({ token, userId }: { token: string, userId: number }) {
    const { loading, error, data, get } = usePurchaseHistory()
    useEffect(() => {get({ token, userId });
    }, [])

    if (error) {
        return (<>Error</>)
    }

    return (
        <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Mi Historial de Compras</h5>
            </div>
            <div class="flow-root">
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                    {data?.map((value, index) => (
                        <Item key={`item-${index}`} stripeId={value.stripeId} updatedAt={dateTimeFormat(value.updatedAt)} token={token} idUser={userId} products={value.products} />
                    ))}
                </ul>
            </div>
        </div>
    )
}