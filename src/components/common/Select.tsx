import { IconSearch } from "../icons/Icons";
import CategoryTag from "../CategoryTag";
import { useSelectComponent } from "../../hooks/useSelectComponent";
import type { Category } from "../../types/api";

/**
 * Componente Select
 * 
 * Este componente proporciona una interfaz para seleccionar una o varias categorías de una lista desplegable. 
 * Permite búsqueda, selección de opciones y visualización de las selecciones realizadas como tags.
 * 
 * @param {boolean} multiple - Indica si se permite la selección múltiple de categorías.
 */
export default function Select({ multiple }: { multiple: boolean }) {
  // Estados y funciones obtenidos del hook useSelectComponent
  const {
    value,                // Valor seleccionado o valores seleccionados en modo múltiple
    isOpen,               // Estado que indica si el menú desplegable está abierto
    containerRef,         // Referencia al contenedor del componente
    filteredOptions,      // Opciones filtradas según el término de búsqueda
    clearOptions,         // Función para limpiar las opciones seleccionadas
    selectCategory,       // Función para seleccionar una categoría
    handleInputClick,     // Función para manejar clics en el input de búsqueda
    isOptionSelected,     // Función que verifica si una opción está seleccionada
    setSearchTerm,        // Función para establecer el término de búsqueda
    setIsOpen             // Función para cambiar el estado de apertura del menú desplegable
  } = useSelectComponent(multiple);

  return (
    <div
      ref={containerRef}
      onClick={() => setIsOpen(prev => !prev)}   // Cambia el estado de isOpen al hacer clic en el contenedor
      tabIndex={0}                             // Permite enfocar el componente usando la tecla Tab
      className='relative w-full min-h-6 flex flex-col items-center gap-2 p-2 rounded-md border-slate-600 dark:border-white outline-none'
      style={{ borderWidth: '0.05rem' }}
    >
      {/* Sección para mostrar los tags de categoría seleccionados */}
      <div class="w-full flex items-center">
        <span className="flex gap-2 flex-wrap flex-grow">
          {/* Renderiza los tags de categoría seleccionados */}
          {multiple && Array.isArray(value)
            ? value.map((_value) => (
              <button
                key={_value.categoryName}
                onClick={e => {
                  e.stopPropagation();
                  selectCategory(_value);
                }}>
                {/* Utiliza el componente CategoryTag para mostrar el tag */}
                <CategoryTag categoryName={_value.categoryName} size="large" onDeleteTag={() => selectCategory(_value)} />
              </button>
            ))
            // Si no es múltiple, muestra el nombre de la categoría seleccionada
            : (value as Category)?.categoryName}
        </span>
        {/* Botón para limpiar todas las opciones seleccionadas */}
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
        {/* Icono para indicar la apertura del menú desplegable */}
        <div
          className="translate-y-1/4 mx-1 border-4 cursor-pointer border-transparent border-t-slate-400 hover:border-t-slate-600 dark:border-t-slate-400 dark:hover:border-t-white"
          style={{ translate: '0 25%' }}></div>
      </div>

      {/* Menú desplegable para seleccionar categorías */}
      {isOpen && (
        <div class="absolute w-full shadow bg-white dark:bg-gray-900 z-10 border dark:shadow-slate-600" style={{ top: 'calc(100% + .25em)' }}>
          <div class="p-3">
            <label for="input-group-search" class="sr-only">Search</label>
            <div class="relative">
              {/* Icono de búsqueda dentro del input */}
              <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <IconSearch />
              </div>
              {/* Input para buscar categorías */}
              <input
                type="search"
                onInput={(e) => setSearchTerm((e.target as HTMLInputElement).value)}
                class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search category"
                onClick={handleInputClick} />
            </div>
          </div>
          {/* Lista de opciones filtradas */}
          <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
            {filteredOptions.map((option, index) => (
              <li
                onClick={e => {
                  e.stopPropagation();
                  selectCategory(option);
                  setIsOpen(false);
                }}
                key={option.categoryName}
                class={`${isOptionSelected(option) ? 'bg-gray-100 dark:bg-gray-600' : ''} flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600`}
              >
                {/* Nombre de la categoría */}
                <label class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                  {option.categoryName}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}