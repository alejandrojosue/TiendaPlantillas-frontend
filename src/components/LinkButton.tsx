import { setParam } from "../util/urlParams"

interface Props {
  link?: string
  sort?: 'asc' | 'desc'
  target?: '_blank' | '_self'
  size: 'small' | 'medium' | 'large'
  children: any
}

export default function LinkButton({ link, sort, target, size, children }: Props) {
  return (<>
    <a
      href={link}
      target={target ?? '_self'}
      onClick={(e) => {
        if (!link) return false;
        if (sort) setParam('sort', sort!);
      }}
      class={`flex-row 
 justify-center cursor-pointer hover:bg-slate-700 dark:bg-slate-50
 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50
 rounded-lg p-2.5 text-center 
 inline-flex items-center dark:focus:ring-[#1da1f2]/55
 hover:shadow-lg transition-all duration-200
 ease-in-out scale-90 gap-x-2
 opacity-90 hover:opacity-100
 ${size === 'small' ? 'hover:scale-100 mx-auto text-gray-300' : 'hover:scale-110 mr-2 text-white'}
 ${size === 'medium' ? 'text-xl' : ''}
 ${size === 'large' ? 'text-2xl font-medium' : ''}`}
    >
      {children}
    </a></>)
}

