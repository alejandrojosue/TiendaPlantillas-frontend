import {setParam} from "../util/urlParams"
interface Props {
 link?: string;
 sort?: string
 children: any
}

export default function FilterButton({ link, sort, children }: Props) {
 return (
  <a
   href={link}
   onClick={(e) => { 
    if(!link) return false;
    setParam('sort', sort!);
   }}
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

