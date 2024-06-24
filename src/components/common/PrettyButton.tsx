interface Props {
    type: "submit" | "button" | "reset";
    children: any
}


export default function PrettyButton({ type, children }: Props) {
    return (
        <button
            type={type}
            class="flex-row text-2xl w-1/2 mx-auto text-blue-500 dark:text-white
    justify-center cursor-pointer hover:bg-blue-500 hover:text-white dark:hover:bg-slate-700
    focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50
    font-medium rounded-lg p-2.5 text-center
    inline-flex items-center dark:focus:ring-[#1da1f2]/55
    hover:shadow-lg transition-all duration-200
    ease-in-out hover:scale-105 scale-90 gap-x-2
    opacity-90 hover:opacity-100"
        >
            {children}
        </button>
    )
}
