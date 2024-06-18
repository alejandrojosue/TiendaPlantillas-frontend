export interface Props {
 id: number
 img: string
 name: string
 price: number
}


export default function Item({id, img, name, price}:Props) {
 return (
  <a href={`/templates/${id}`} class="w-full object-fill bg-slate-800 rounded-lg hover:scale-95 transition-transform">
   <img src={img} alt={name} class="w-full h-32" />
   <div class="flex flex-col text-xl p-2">
    <span class="text-white line-clamp-1">{name}</span>
    <span class="text-gray-400 font-semibold">${price}</span>
   </div>
  </a>
 )
}