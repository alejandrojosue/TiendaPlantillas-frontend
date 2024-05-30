interface Props {
 link: string;
 sort?: string
 children: any
}

export default function FilterButton({ link, sort, children }: Props) {
 const setParamSort = (_sort: string) => {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set('sort', _sort);
  // Construir la nueva URL con los parámetros actualizados
  const nuevaURL = `${window.location.pathname}?${urlParams.toString()}`;

  // Redireccionar a la nueva URL
  window.location.href = nuevaURL;

 }
 return (
  <a
   href={link}
   onClick={(e) => { setParamSort(sort!) }}
   class="flex-row text-xl
 justify-center cursor-pointer hover:bg-slate-700 
 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 
 font-medium rounded-lg p-2.5 text-center 
 inline-flex items-center dark:focus:ring-[#1da1f2]/55 
 mr-2 hover:shadow-lg transition-all duration-200 
 ease-in-out hover:scale-110 scale-90 gap-x-2 
 opacity-90 hover:opacity-100"
  >
   {children}
  </a>)
}

