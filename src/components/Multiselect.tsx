import { useEffect, useRef, useState, useMemo } from "preact/hooks";
import styles from "../css/select.module.css";
import { getParam, setParam } from "../util/urlParams";
import type { Category } from "../types/api";
import CategoryRepository from "../repositories/CategoryRepository";
import { IconSearch } from "./icons/Icons";

export default function Select({ multiple }: { multiple: boolean }) {
  const [options, setOptions] = useState<Category[]>([{ id: 0, categoryName: 'all' }]);
  const [value, setValue] = useState<Category | Category[] | undefined>([{ id: 0, categoryName: 'all' }]);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredOptions = useMemo(() => {
    return options.filter(option => option.categoryName.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [options, searchTerm]);

  function clearOptions() {
    setParam('categories', 'all');
    multiple ? setValue([options[0]]) : setValue(undefined);
  }

  function selectCategory(option: Category) {
    if (multiple) {
      if (!Array.isArray(value)) return;
      if (option.categoryName === 'all') {
        clearOptions();
        return;
      }
      if (value?.includes(option)) {
        setValue(value.filter(element => element !== option));
        setParam('categories', getParam('categories')?.split(',').filter(categoryName => categoryName !== option.categoryName).join(',') || 'all');
      } else {
        if (value.find(({ categoryName }) => categoryName === option.categoryName && categoryName !== 'all')) return;
        setValue([...value, option]);
        setParam('categories', getParam('categories') ? [getParam('categories'), option.categoryName].filter(categoryName => categoryName !== 'all').join(',') : option.categoryName);
      }
    } else {
      if (option !== value) {
        setValue(option);
      }
    }
  }

  const handleInputClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  function isOptionSelected(option: Category) {
    return multiple && Array.isArray(value) ? value.includes(option) : option === value;
  }

  useEffect(() => {
    if (!localStorage.getItem('categories')) {
      new CategoryRepository()
        .get()
        .then(categories => localStorage.setItem('categories', JSON.stringify(categories)))
        .catch(err => {
          console.error(err);
        })
    }
    setOptions([{ id: 0, categoryName: 'all' }, ...JSON.parse(localStorage.getItem('categories') || '[]')]);
  }, []);

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
    setValue(getParam('categories')?.split(',').map(categoryName => ({ categoryName: categoryName, value: categoryName })) || [options[0]]);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target !== containerRef.current) return;
      switch (e.code) {
        case "Enter":
        case "Space":
          setIsOpen(prev => !prev);
          if (isOpen) selectCategory(filteredOptions[highlightedIndex]);
          break;
        case "ArrowUp":
        case "ArrowDown": {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }

          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
          if (newValue >= 0 && newValue < filteredOptions.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case "Escape":
          setIsOpen(false);
          break;
      }
    };
    containerRef.current?.addEventListener("keydown", handler);

    return () => {
      containerRef.current?.removeEventListener("keydown", handler);
    };
  }, [isOpen, highlightedIndex, filteredOptions, searchTerm]);

  return (
    <div
      ref={containerRef}
      onClick={() => setIsOpen(prev => !prev)}
      tabIndex={0}
      className={'relative w-full min-h-6 flex flex-col items-center gap-2 p-2 rounded-md border-slate-600 dark:border-white outline-none'}
      style={{ borderWidth: '0.05rem' }}
    >
      <div class="w-full flex items-center">
        <span className={`flex gap-2 flex-wrap flex-grow`}>
          {multiple && Array.isArray(value)
            ? value?.map(_value => (
              <button
                key={_value.categoryName}
                onClick={e => {
                  e.stopPropagation();
                  selectCategory(_value);
                }}
                className={`flex items-center dark:border-white rounded-md px-2 py-1 cursor-pointer bg-transparent outline-none hover:text-slate-600 hover:border-slate-600`}
                style={{ borderWidth: '0.05em' }}
              >
                {_value.categoryName}
                <span style={{ fontSize: '1.25em' }}>&times;</span>
              </button>
            ))
            // @ts-ignore
            : value?.categoryName}
        </span>
        <button
          onClick={e => {
            e.stopPropagation();
            clearOptions();
          }}
          className="bg-transparent border-none text-slate-400 hover:text-slate-600 dark:hover:text-white outline-none cursor-pointer px-2"
          style={{ fontSize: '1.25em' }}
        >
          &times;
        </button>
        <div
          className={`translate-y-1/4 mx-1 border-4 cursor-pointer border-transparent border-t-slate-400 hover:border-t-slate-600 dark:border-t-slate-400 dark:hover:border-t-white`} style={{ translate: '0 25%' }}></div>
      </div>

      {isOpen && (
        <div class="absolute w-full shadow bg-white dark:bg-gray-900 z-10 border dark:shadow-slate-600" style={{ top: 'calc(100% + .25em)' }}>
          <div class="p-3">
            <label for="input-group-search" class="sr-only">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <IconSearch />
              </div>
              <input type="search"
                // @ts-ignore
                onInput={e => setSearchTerm(e.target.value)}
                class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search user"
                onClick={handleInputClick} />
            </div>
          </div>
          <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
          >
            {filteredOptions.map((option, index) => (
              <li
                onClick={e => {
                  e.stopPropagation();
                  selectCategory(option);
                  setIsOpen(false);
                }}
                onMouseEnter={() => setHighlightedIndex(index)}
                key={option.categoryName}>

                <div class={`${isOptionSelected(option) ? 'bg-gray-100 dark:bg-gray-600' : ''} flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600`}>
                  <label for="checkbox-item-12" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                    {option.categoryName}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
