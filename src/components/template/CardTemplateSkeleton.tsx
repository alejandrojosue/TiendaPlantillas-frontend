import { IconImageAlt } from "../icons/Icons";

export default function CardTemplateSkeleton() {
  return (
    <div
      role="status"
      class="space-y-6 animate-pulse rounded-lg border pb-2 shadow-md bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex flex-col"
    >
      <div
        class="flex items-center justify-center w-full h-60 bg-gray-300 rounded-t-lg dark:bg-gray-700"
      >
        <IconImageAlt />
      </div>
      <div class="px-4 w-full">
        <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-3.5"></div>
        <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-3.5"></div>
        <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px]"></div>
      </div>
      <div class="w-full px-4">
        <div class="flex flex-wrap gap-1 justify-center">
          <span class="text-xs bg-gray-300 dark:bg-gray-500 w-24 h-5 rounded-sm font-bold tracking-tight"></span>
          <span class="text-xs bg-gray-300 dark:bg-gray-500 w-20 h-5 rounded-sm font-bold tracking-tight"></span>
          <span class="text-xs bg-gray-300 dark:bg-gray-500 w-24 h-5 rounded-sm font-bold tracking-tight"></span>
          <span class="text-xs bg-gray-300 dark:bg-gray-500 w-24 h-5 rounded-sm font-bold tracking-tight"></span>
          <span class="text-xs bg-gray-300 dark:bg-gray-500 w-12 h-5 rounded-sm font-bold tracking-tight"></span>
          <span class="text-xs bg-gray-300 dark:bg-gray-500 w-12 h-5 rounded-sm font-bold tracking-tight"></span>
        </div>
      </div>
      <span class="sr-only">Loading...</span>
    </div>
  );
}
