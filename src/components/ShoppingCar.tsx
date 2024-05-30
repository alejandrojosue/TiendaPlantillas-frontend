import { useState } from "preact/hooks";


export default function ShoppingCar({ }) {
 const [counter, setCounter] = useState(0)

 return (
  <div class="flex relative">
   <svg xmlns="http://www.w3.org/2000/svg"
   onClick={() => { setCounter((counter) => counter + 1) }}
    class="icon icon-tabler icon-tabler-shopping-cart" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M17 17h-11v-14h-2" />
    <path d="M6 5l14 1l-1 7h-13" />
   </svg>
   <span class="absolute rounded-full bg-slate-100 w-4 h-4 text-xs -right-1 -top-1">{counter}</span>
  </div>
 )
}