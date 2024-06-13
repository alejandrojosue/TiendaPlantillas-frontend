import { setParam } from "../util/urlParams";

interface Props {
  link?: string;
  sort?: 'asc' | 'desc';
  target?: '_blank' | '_self';
  size: 'small' | 'medium' | 'large';
  children: any;
}

export default function LinkButton({ link, sort, target, size, children }: Props) {
  return (
    <a
      href={link}
      target={target ?? '_self'}
      onClick={(e) => {
        if (!link) return false;
        if (sort) setParam('sort', sort!);
      }}
      class={`
        flex-row justify-center cursor-pointer 
        bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 
        text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white
        focus:ring-4 focus:outline-none rounded-lg p-2.5 text-center inline-flex items-center
        hover:shadow-lg transition-all duration-200 ease-in-out scale-90 gap-x-2 opacity-90 hover:opacity-100
        ${size === 'small' ? 'mx-auto hover:scale-100' : 'mr-2 hover:scale-110'}
        ${size === 'medium' ? 'text-xl' : ''}
        ${size === 'large' ? 'text-2xl font-medium' : ''}
      `}
    >
      {children}
    </a>
  );
}
