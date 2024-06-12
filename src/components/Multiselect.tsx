import { useEffect, useRef, useState, useMemo } from "preact/hooks";
import styles from "../css/select.module.css";
import { getParam, setParam } from "../util/urlParams";
import type { Category } from "../types/api";
import CategoryRepository from "../repositories/CategoryRepository";

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

  function Category(option: Category) {
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

  function isOptionSelected(option: Category) {
    return multiple && Array.isArray(value) ? value.includes(option) : option === value;
  }

  useEffect(() => {
    if(!localStorage.getItem('categories')){
      new CategoryRepository()
      .get()
      .then(categories=>localStorage.setItem('categories', JSON.stringify(categories)))
      .catch(err=>{
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
          if (isOpen) Category(filteredOptions[highlightedIndex]);
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

  const handleInputClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      ref={containerRef}
      onClick={() => setIsOpen(prev => !prev)}
      tabIndex={0}
      className={'relative w-full min-h-6 flex items-center gap-2 p-2 rounded-md border-white outline-none'}
      style={{ borderWidth: '0.05rem' }}
    >
      <span className={`flex gap-2 flex-wrap flex-grow`}>
        {multiple && Array.isArray(value)
          ? value?.map(v => (
            <button
              key={v.categoryName}
              onClick={e => {
                e.stopPropagation();
                Category(v);
              }}
              className={`flex items-center border-white rounded-md px-2 py-1 cursor-pointer bg-transparent outline-none hover:bg-white hover:text-slate-600`}
              style={{ borderWidth: '0.05em' }}
            >
              {v.categoryName}
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
        className="bg-transparent border-none outline-none cursor-pointer p-0"
        style={{ fontSize: '1.25em' }}
      >
        &times;
      </button>
      <div className={`self-stretch`} style={{ width: '.05em' }}></div>
      <div className={` translate-ys-1/4 border-4 cursor-pointer border-transparent border-t-white`} style={{ translate: '0 25%' }}></div>

      {isOpen && (
        <>
          <ul className={`${styles.options} bg-slate-800 ${isOpen ? styles.show : ""}`}>
          <input
            type="search"
            value={searchTerm}
            // @ts-ignore
            onChange={e => setSearchTerm(e.target.value)}
            onClick={handleInputClick}
            placeholder="Search..."
            className="w-full p-2 mb-2 bg-transparent border border-gray-300 rounded"
          />
            {filteredOptions.map((option, index) => (
              <li
                onClick={e => {
                  e.stopPropagation();
                  Category(option);
                  setIsOpen(false);
                }}
                onMouseEnter={() => setHighlightedIndex(index)}
                key={option.categoryName}
                className={`${styles.option} ${isOptionSelected(option) ? "bg-slate-600" : ""
                  } ${index === highlightedIndex ? 'bg-slate-600' : ""} bg-slate-800`}
              >
                {option.categoryName}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
