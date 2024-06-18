import { useEffect, useState } from "preact/hooks";
import { IconX } from "../icons/Icons";
import Item, { type Props as CartItemProps } from "./Item";


export default function Drawable() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [cart, setCart] = useState<Array<CartItemProps>>([])

  useEffect(() => {
    const cartStorage = localStorage.getItem('cart');
    setCart(JSON.parse(cartStorage || '') || [])
  }, [cart, isOpen])

  return (<div
    id="drawer-navigation"
    class={`${isOpen ? 'translate-x-full' : ''} w-64 h-screen p-4 overflow-y-auto fixed top-0 left-full z-50 transition-transform bg-gray-100 dark:bg-gray-800`}
    tabindex={-1}
    aria-labelledby="drawer-navigation-label"
  >
    <h5
      id="drawer-navigation-label"
      class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
    >
      Carrito
    </h5>
    <button
      onClick={() => setIsOpen(prev => !prev)}
      type="button"
      data-drawer-target="drawer-navigation"
      data-drawer-hide="drawer-navigation"
      aria-controls="drawer-navigation"
      class="btn-close text-gray-300 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <IconX width="20" height="20" />
      <span class="sr-only">Close menu</span>
    </button>
    <div class="py-4 overflow-y-auto">
      {cart.map(item => (
        <Item {...item} />
      ))}
    </div>
  </div>)
}
