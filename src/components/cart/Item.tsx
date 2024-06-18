import { IconTrash } from "../icons/Icons"

export interface Props {
 id: number
 img: string
 name: string
 price: number
}

export default function Item({ id, img, name, price }: Props) {
 const removeToCart = () => {
  const cartStorage = localStorage.getItem('cart') as string;
  const cart: Props[] = JSON.parse(cartStorage) as [] || [];  
  localStorage.setItem('cart', JSON.stringify(cart.filter(item => item.id !== id)))
 }
 return (
  <article class="p-1 bg-slate-800 rounded-lg hover:scale-95 transition-transform">
   <a href={`/templates/${id}`} class="w-full object-fill">
    <img src={img} alt={name} class="w-full h-32 rounded" />
   </a>
   <div class="flex flex-col text-xl p-2">
    <span class="text-white line-clamp-1">{name}</span>
    <div class="flex justify-between">
     <span class="text-gray-400 font-semibold">${price}</span>
     <span onClick={removeToCart} class="text-red-600 hover:text-red-800 cursor-pointer">
      <IconTrash width="25" height="25" />
     </span>
    </div>
   </div>
  </article>
 )
}