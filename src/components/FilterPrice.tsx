import { useEffect, useState } from "preact/hooks";
import { getParam, setParam } from "../util/urlParams";

// Valores iniciales para el rango de precios
export const initialMaxPrice = 5000, initialMinPrice = 0;

/**
 * Componente FilterPrice
 * 
 * Este componente permite a los usuarios seleccionar un rango de precios mínimo y máximo 
 * utilizando dos controles deslizantes (sliders). Los valores de los sliders se inicializan 
 * con los parámetros de la URL si están presentes, o con valores predeterminados si no lo están.
 */
export default function FilterPrice() {
  // Estado para el precio mínimo y máximo
  const [minPrice, setMinPrice] = useState<number>(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState<number>(initialMaxPrice);

  // useEffect para inicializar los valores del rango de precios desde los parámetros de la URL
  useEffect(() => {
    setMinPrice(parseInt(getParam('min') + '') || initialMinPrice);
    setMaxPrice(parseInt(getParam('max') + '') || initialMaxPrice);
  }, []);

  // Maneja el cambio del valor del slider de precio mínimo
  const handleMinPriceChange = (e: Event) => {
    const value = parseInt((e.target as HTMLInputElement).value, 10);
    setMinPrice(value);
  };

  // Actualiza el parámetro 'min' en la URL cuando cambia el valor del slider de precio mínimo
  const handleMinPriceChangeParam = (e: Event) => {
    const value = parseInt((e.target as HTMLInputElement).value, 10);
    setParam('min', value + '');
  };

  // Maneja el cambio del valor del slider de precio máximo
  const handleMaxPriceChange = (e: Event) => {
    const value = parseInt((e.target as HTMLInputElement).value, 10);
    setMaxPrice(value);
  };

  // Actualiza el parámetro 'max' en la URL cuando cambia el valor del slider de precio máximo
  const handleMaxPriceChangeParam = (e: Event) => {
    const value = parseInt((e.target as HTMLInputElement).value, 10);
    setParam('max', value + '');
  }

  return (
    <div class="w-full flex flex-col items-center gap-x-1">
      <div class="flex w-full py-2 text-gray-500 dark:text-gray-300">
        <span class="w-full text-right">${minPrice}</span>
        <span class="px-2 text-center"> - </span>
        <span class="w-full">${maxPrice === initialMaxPrice ? maxPrice + ' y más' : maxPrice}</span>
      </div>
      <div className="flex w-full">
        <input
          type="range"
          value={minPrice}
          min={initialMinPrice}
          max={parseInt(initialMaxPrice / 2 + '')}
          onInput={handleMinPriceChange}
          onChange={handleMinPriceChangeParam}
          class="w-full bg-gray-200 hover:bg-gray-400 cursor-pointer rounded-s h-2 appearance-none dark:bg-slate-600 dark:hover:bg-slate-800"
        />
        <input
          type="range"
          value={maxPrice}
          min={parseInt(initialMaxPrice / 2 + '') + 1}
          max={initialMaxPrice}
          onInput={handleMaxPriceChange}
          onChange={handleMaxPriceChangeParam}
          class="w-full bg-gray-200 hover:bg-gray-400 cursor-pointer rounded-e h-2 appearance-none dark:bg-slate-600 dark:hover:bg-slate-800"
        />
      </div>
      <div className="flex w-full text-gray-500 dark:text-gray-300">
        <span className="w-full">$0</span>
        <span className="w-full text-center">&nbsp;&nbsp;${parseInt(initialMaxPrice / 2 + '')}</span>
        <span className="w-full text-right">${initialMaxPrice}</span>
      </div>
    </div>
  );
}