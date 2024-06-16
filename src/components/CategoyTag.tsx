import { IconTrash } from "./icons/Icons"

interface Props {
  categoryName: string
  size: 'small' | 'large'
  onDeleteTag?: (categoryName: string) => void
}

export default function CategoryTag({ categoryName, size, onDeleteTag }: Props) {

  return (
    <span class={`${size === 'large' ? 'p-2' : 'text-sm p-1'} hover:scale-105 flex transition-all capitalize rounded font-bold border-blue-500 text-blue-500 dark:text-gray-400 border dark:border-gray-400`}>
      <span>{categoryName}</span>
      {
        onDeleteTag
          ? (<button type="button" onClick={() => onDeleteTag && onDeleteTag(categoryName)} class="ml-2 text-red-500 cursor-pointer hover:text-red-800">
            <IconTrash width="25" height="25" />
          </button>)
          : ''
      }
    </span>
  )
}