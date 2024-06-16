import { useState } from "preact/hooks";

interface Props {
  images: string[];
}

/**
 * Componente Carousel
 * 
 * Muestra un carrusel de imágenes con navegación de botones para desplazarse entre ellas.
 * 
 * @param {string[]} images - Lista de URLs de las imágenes a mostrar en el carrusel.
 */
export default function Carousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Avanza al siguiente slide en el carrusel.
   */
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  /**
   * Retrocede al slide anterior en el carrusel.
   */
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-auto my-5 rounded shadow-lg hover:opacity-75 transition-opacity duration-300">
      <div className="overflow-hidden relative" style={{ height: "500px" }}>
        {images?.map((image, index) => (
          <a href={image} target="_blank" key={`image-${index}`}>
            <div
              className={`absolute inset-0 transition-transform duration-500 ${
                index === currentIndex
                  ? "transform translate-x-0"
                  : "transform translate-x-full"
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </a>
        ))}
      </div>

      {images.length > 1 && (
        <>
          {/* Botón para retroceder */}
          <button
            type="button"
            className="absolute top-1/2 left-1 transform -translate-y-1/2 text-slate-300 rounded-full font-extrabold text-center"
            onClick={prevSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-circle-arrow-left-filled"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ff2825"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2a10 10 0 0 1 .324 19.995l-.324.005-.324-.005a10 10 0 0 1 .324-19.995zm.707 5.293a1 1 0 0 0-1.414 0l-4 4a1.048 1.048 0 0 0-.083.094l-.064.092-.052.098-.044.11-.03.112-.017.126-.003.075.004.09.007.058.025.118.035.105.054.113.043.07.071.095.054.058 4 4 .094.083a1 1 0 0 0 1.32-1.497l-2.292-2.293h5.585l.117-.007a1 1 0 0 0-.117-1.993h-5.586l2.293-2.293.083-.094a1 1 0 0 0-.083-1.32z" />
            </svg>
          </button>

          {/* Botón para avanzar */}
          <button
            type="button"
            className="absolute top-1/2 right-1 transform -translate-y-1/2 text-slate-300 rounded-full font-extrabold text-center"
            onClick={nextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-circle-arrow-right-filled"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ff2825"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2l.324.005a10 10 0 1 1-.648 0l.324-.005zm.613 5.21a1 1 0 0 0-1.32 1.497l2.291 2.293h-5.584l-.117.007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293-.083.094a1 1 0 0 0 1.497 1.32l4-4 .073-.082.064-.089.062-.113.044-.11.03-.112.017-.126.003-.075-.007-.118-.029-.148-.035-.105-.054-.113-.071-.111a1.008 1.008 0 0 0-.097-.112l-4-4z" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
