import { useEffect, useState } from "preact/hooks";
import { getParam, setParam } from "../util/urlParams";

export const initialMaxPrice = 5000, initialMinPrice = 0;
export default function FilterPrice() {
  const [minPrice, setMinPrice] = useState<number>(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState<number>(initialMaxPrice);

  useEffect(() => {
    setMinPrice(parseInt(getParam('min') + '') || initialMinPrice);
    setMaxPrice(parseInt(getParam('max') + '') || initialMaxPrice);
  }, []);

  const handleMinPriceChange = (e: Event) => {
    const value = parseInt((e.target as HTMLInputElement).value, 10);
    setMinPrice(value);
  };

  const handleMinPriceChangeParam = (e: Event) => {
    const value = parseInt((e.target as HTMLInputElement).value, 10);
    setParam('min', value + '');
  };

  const handleMaxPriceChange = (e: Event) => {
    const value = parseInt((e.target as HTMLInputElement).value, 10);
    setMaxPrice(value);
  };

  const handleMaxPriceChangeParam = (e: Event) => {
    const value = parseInt((e.target as HTMLInputElement).value, 10);
    setParam('max', value + '');
  }

  return (
    <div class="w-full flex flex-col items-center gap-x-1">
      <div class="flex w-full py-">
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
          class="w-full"
        />
        <input
          type="range"
          value={maxPrice}
          min={parseInt(initialMaxPrice / 2 + '') + 1}
          max={initialMaxPrice}
          onInput={handleMaxPriceChange}
          onChange={handleMaxPriceChangeParam}
          class="w-full"
        />
      </div>
      <div className="flex w-full">
        <span className="w-full">$0</span>
        <span className="w-full text-center">&nbsp;&nbsp;${parseInt(initialMaxPrice / 2 + '')}</span>
        <span className="w-full text-right">${initialMaxPrice}</span>
      </div>
    </div>
  );
}