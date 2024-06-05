import { useState } from "preact/hooks";
interface Props {
  images: string[]
}

export default function Carousel  ({images}:Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-auto my-5 rounded shadow-lg hover:opacity-75 transition-opacity duration-300">
      <div className="overflow-hidden relative" style="height: 500px;">
        {images?.map((image, index) => (
          <a href={image} target="_blank">
            <div
            key={`image-${index}`}
            className={`absolute inset-0 transition-transform duration-500 ${
              index === currentIndex ? "transform translate-x-0" : "transform translate-x-full"
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
      <button
      type="button"
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
      type="button"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};
