import { useState } from "preact/hooks";
import { IconArrowLeftFilled, IconArrowRightFilled } from "../icons/Icons";

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
            className="absolute top-1/2 left-1 transform -translate-y-1/2 text-blue-500 dark:text-gray-400 rounded-full font-extrabold text-center"
            onClick={prevSlide}
          >
            <IconArrowLeftFilled width="44" height="44" />
          </button>

          {/* Botón para avanzar */}
          <button
            type="button"
            className="absolute top-1/2 right-1 transform -translate-y-1/2 text-blue-500 dark:text-gray-400 rounded-full font-extrabold text-center"
            onClick={nextSlide}
          >
            <IconArrowRightFilled width="44" height="44" />
          </button>
        </>
      )}
    </div>
  );
}
