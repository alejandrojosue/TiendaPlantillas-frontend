import { useEffect, useState } from "preact/hooks";
import { IconShoppingCart } from "../icons/Icons";

export default function CartButton() {
 const [isOpen, setIsOpen] = useState<boolean>(false);
 const [counter, setCounter] = useState<number>(0)
 const [cart, setCart] = useState<[]>([])

 useEffect(() => {
  const cartStorage = localStorage.getItem('cart') as string;
  setCart(JSON.parse(cartStorage) || [])
  setCounter(cart.length)
 }, [cart, isOpen, counter])

 return (
  <div class="flex relative"
   onClick={() => {
    document.getElementById('drawer-navigation')?.classList.toggle('-translate-x-full');
    setIsOpen(prev => !prev);
   }}>
   <IconShoppingCart width="30" height="30" />
   <span class="absolute rounded-full bg-slate-100 size-4 dark:text-gray-500 text-xs -right-1 -top-1">{counter}</span>
  </div>
 )
}
