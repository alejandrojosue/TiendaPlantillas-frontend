import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { getParam, setParam } from '../util/urlParams';
import type { Category } from '../types/api';
import CategoryRepository from '../repositories/CategoryRepository';

export const useSelectComponent = (multiple: boolean) => {
  // Estado local para opciones, valor seleccionado, estado de apertura y término de búsqueda
  const [options, setOptions] = useState<Category[]>([{ id: 0, categoryName: 'all' }]);
  const [value, setValue] = useState<Category | Category[] | undefined>([{ id: 0, categoryName: 'all' }]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  // Memoiza las opciones filtradas basadas en el término de búsqueda
  const filteredOptions = useMemo(() => {
    return options.filter(option =>
      option.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [options, searchTerm]);

  // Función para limpiar las opciones seleccionadas y actualizar parámetros de URL
  const clearOptions = () => {
    setParam('categories', 'all');
    setValue(multiple ? [options[0]] : undefined);
  };

  // Función para seleccionar una categoría, gestionando múltiple selección y parámetros de URL
  const selectCategory = (option: Category) => {
    if (multiple) {
      if (!Array.isArray(value)) return;

      if (option.categoryName === 'all') {
        clearOptions();
        return;
      }

      const updatedValue = value.includes(option)
        ? value.filter(element => element !== option)
        : [...value, option];

      setValue(updatedValue);

      const categories = updatedValue
        .map(({ categoryName }) => categoryName)
        .filter(categoryName => categoryName !== 'all')
        .join(',');
      setParam('categories', categories || 'all');
    } else {
      if (option !== value) {
        setValue(option);
      }
    }
  };

  // Evita que el evento se propague al contenedor padre al hacer clic en el componente
  const handleInputClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  // Determina si una opción está seleccionada
  const isOptionSelected = (option: Category) => {
    return multiple && Array.isArray(value) ? value.includes(option) : option === value;
  };

  // Efecto para cargar las categorías desde el repositorio al montar el componente
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await new CategoryRepository().get();
        localStorage.setItem('categories', JSON.stringify(categories));
        setOptions([{ id: 0, categoryName: 'all' }, ...categories]);
      } catch (err) {
        console.error(err);
      }
    };

    if (!localStorage.getItem('categories')) {
      fetchCategories();
    } else {
      setOptions([
        { id: 0, categoryName: 'all' },
        ...JSON.parse(localStorage.getItem('categories') || '[]')
      ]);
    }
  }, []);

  // Efecto para actualizar el valor seleccionado cuando cambia el estado de apertura
  useEffect(() => {
    const selectedCategories =
      getParam('categories')?.split(',').map(categoryName => ({ categoryName })) || [options[0]];
    setValue(multiple ? selectedCategories : selectedCategories[0]);
  }, [isOpen]);

  // Efecto para manejar eventos de teclado cuando el componente está abierto
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target !== containerRef.current) return;
      switch (e.code) {
        case 'Enter':
        case 'Space':
          setIsOpen(prev => !prev);
          break;
        case 'ArrowUp':
        case 'ArrowDown':
          if (!isOpen) {
            setIsOpen(true);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };
    containerRef.current?.addEventListener('keydown', handler);

    return () => {
      containerRef.current?.removeEventListener('keydown', handler);
    };
  }, [isOpen, filteredOptions]);

  // Retorna los valores y funciones necesarios para manejar el estado del componente desde el componente que lo utiliza
  return {
    value,
    isOpen,
    containerRef,
    filteredOptions,
    clearOptions,
    selectCategory,
    handleInputClick,
    isOptionSelected,
    setSearchTerm,
    setIsOpen
  };
};