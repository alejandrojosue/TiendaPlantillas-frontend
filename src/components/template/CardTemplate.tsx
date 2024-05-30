interface Props {
	id: string;
	title: string;
	img: string
	categories: string[]
	unitPrice: number
}

export default function CardTemplate({ id, title, img, categories, unitPrice }: Props) {
	return (<>
		<a
			href={`/templates/${id}`}
			class="max-h-[400px] rounded-lg border pb-2 shadow-md bg-gray-800 border-gray-700 hover:scale-105 hover:bg-gray-700 hover:border-gray-500 transition flex flex-col"
		>

			<picture>
				<img src={img} alt={`For ${title}`}
					class="rounded-t-lg w-full object-fill h-60" />
			</picture>
			<header class="px-4 py-3 flex-grow">
				<h1 class="text-sm line-clamp-2 lg:text-xl font-bold tracking-tight text-white">
					{title}
				</h1>
			</header>
			<div class="flex flex-wrap gap-1 my-2 justify-center">
				{categories.map(category => (
					<span class="text-xs border-gray-500 bg-gray-500 hover:bg-gray-300 p-1 rounded-sm font-bold tracking-tight text-white ">
						{category}
					</span>
				))}
			</div>
		</a>
	</>)
}