import type { Category } from "../../types/api";

interface Props {
	id: string;
	title: string;
	img: string
	categories: Category[]
	unitPrice: number
}

export default function CardTemplate({ id, title, img, categories, unitPrice }: Props) {
	return (<>
		<a
			href={`/templates/${id}`}
			class="max-h-[400px] rounded-lg border pb-2 shadow-md bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700 hover:scale-105 dark:hover:bg-gray-700 dark:hover:border-gray-500 transition flex flex-col"
		>

			<picture>
				<img src={img} alt={`For ${title}`} loading="lazy"
					class="rounded-t-lg w-full h-60 object-cover" />
			</picture>
			<header class="px-4 py-3 flex-grow">
				<h1 class="text-sm line-clamp-2 lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h1>
			</header>
			<div class="flex flex-wrap gap-1 my-2 justify-center">
				{categories.map(category => (
					<span class="text-xs text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 p-1 rounded-sm font-bold tracking-tight dark:text-white ">
						{category.categoryName}
					</span>
				))}
			</div>
		</a>
	</>)
}