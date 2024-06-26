export default function Modal({ children }: { children: any }) {
 return (<div
  id="authentication-modal"
  tabindex={-1}
  aria-hidden="true"
  class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen"
  style="background-color: rgba(0,0,0,.7);"
 >
  {children}
 </div>)
}
