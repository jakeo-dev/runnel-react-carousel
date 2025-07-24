import { useEffect, useState } from "react";

export default function ImageCarousel({
  images,
  height,
  width = "100%",
  className,
  imagesClassName = "",
  firstImageIndex = 0,
  autoplay = true,
  imagesDuration = 5000,
  loop = true,
  transitionDuration = 500,
  controlsColor = "dark",
  arrowsSize = "md",
  arrowsPosition = "middle",
  showDots = true,
  showArrows = true,
}: {
  images: {
    src: string;
    alt?: string;
    description?: string; // optional description to show at the top of carousel
    className?: string; // any class names that apply to one image
    position?:
      | "top-left"
      | "top"
      | "top-right"
      | "left"
      | "center"
      | "right"
      | "bottom-left"
      | "bottom"
      | "bottom-right";
    fit?: "cover" | "contain" | "fill" | "scale-down" | "none";
    duration?: number; // image duration that applies to one image
  }[]; // array of each image and their alt texts (REQUIRED)
  height: string; // any css height (REQUIRED)
  width?: string; // any css width
  className?: string; // any class names for carousel
  imagesClassName?: string; // any class names that apply to all the images
  firstImageIndex?: number; // index of first image to display
  autoplay?: boolean; // automatically goes to next image after image duration
  imagesDuration?: number; // any positive number for image duration, applies to all images
  loop?: boolean; // loops back to first image after last one
  transitionDuration?: 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000; // duration of transition between images
  controlsColor?: "light" | "dark" | "transparent-light" | "transparent-dark"; // color/theme of dots and arrows
  arrowsSize?: "sm" | "md" | "lg" | "xl"; // size of arrows
  arrowsPosition?: "middle" | "bottom" | "bottom-center"; // positioning of arrows
  showDots?: boolean; // shows nav dots
  showArrows?: boolean; // shows nav arrows
}) {
  const [currentIndex, setCurrentIndex] = useState(firstImageIndex);

  const prevSlide = () => {
    if (loop)
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    else setCurrentIndex((prev) => (prev === 0 ? prev : prev - 1));
  };

  const nextSlide = () => {
    if (loop)
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    else
      setCurrentIndex((prev) => (prev === images.length - 1 ? prev : prev + 1));
  };

  // go to next image every image duration
  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        nextSlide();
      }, images[currentIndex].duration || imagesDuration);

      return () => clearInterval(interval);
    }
  }, [currentIndex]);

  return (
    <div
      className={`relative-carousel w-full-carousel overflow-hidden-carousel ${className}`}
      style={{ height: height, width: width }}
    >
      <div className="relative-carousel h-full-carousel w-full-carousel">
        {images.map((image, i) => (
          <img
            key={i}
            src={image.src}
            alt={image.alt || ""}
            className={`absolute-carousel h-full-carousel w-full-carousel transition-opacity-carousel duration-${transitionDuration}-carousel ${
              i == currentIndex ? "opacity-100-carousel" : "opacity-0-carousel"
            } object-${image.position || "center"}-carousel object-${
              image.fit || "cover"
            }-carousel ${imagesClassName} ${image.className || ""}`}
          />
        ))}
      </div>

      {images[currentIndex].description ? (
        <div className="absolute-carousel top-0-carousel flex-carousel w-full-carousel items-center-carousel justify-center-carousel">
          <span
            className={`carousel-button flex-carousel w-full-carousel items-center-carousel justify-center-carousel py-2-carousel ${
              controlsColor == "dark"
                ? "bg-gray-600/60-carousel text-white-carousel"
                : controlsColor == "light"
                ? "bg-gray-300/60-carousel text-black-carousel"
                : controlsColor == "transparent-dark"
                ? "text-gray-900-carousel drop-shadow-sm-carousel"
                : controlsColor == "transparent-light"
                ? "text-gray-100-carousel drop-shadow-sm-carousel"
                : ""
            }`}
          >
            {images[currentIndex].description}
          </span>
        </div>
      ) : (
        <></>
      )}

      {showArrows ? (
        <div
          className={`absolute-carousel flex-carousel w-full-carousel ${
            arrowsPosition == "bottom-center" && showDots
              ? "bottom-12-carousel items-center-carousel justify-center-carousel gap-3-carousel px-3-carousel"
              : arrowsPosition == "bottom-center"
              ? "bottom-3-carousel items-center-carousel justify-center-carousel gap-3-carousel px-3-carousel"
              : arrowsPosition == "bottom"
              ? "bottom-3-carousel justify-between-carousel px-3-carousel"
              : "-translate-y-1/2-carousel top-1/2-carousel transform-carousel justify-between-carousel px-3-carousel"
          }`}
        >
          <button
            onClick={prevSlide}
            className={`carousel-button cursor-pointer-carousel flex-carousel items-center-carousel justify-center-carousel rounded-full-carousel transition-carousel ${
              arrowsSize == "sm"
                ? "h-6-carousel w-6-carousel text-xs-carousel"
                : arrowsSize == "lg"
                ? "h-12-carousel w-12-carousel text-xl-carousel"
                : arrowsSize == "xl"
                ? "h-14-carousel w-14-carousel text-2xl-carousel"
                : "h-8-carousel w-8-carousel text-base-carousel"
            } ${
              controlsColor == "dark"
                ? "bg-gray-600/60-carousel text-white-carousel hover:bg-gray-600-carousel active:bg-gray-700-carousel"
                : controlsColor == "light"
                ? "bg-gray-300/60-carousel text-black-carousel hover:bg-gray-300-carousel active:bg-[#c0c5cf]-carousel"
                : controlsColor == "transparent-dark"
                ? "text-gray-900-carousel hover:text-gray-800-carousel active:text-gray-700-carousel drop-shadow-sm-carousel hover:drop-shadow-md-carousel active:drop-shadow-none-carousel"
                : controlsColor == "transparent-light"
                ? "text-gray-100-carousel hover:text-gray-200-carousel active:text-gray-300-carousel drop-shadow-sm-carousel hover:drop-shadow-md-carousel active:drop-shadow-none-carousel"
                : ""
            }`}
          >
            <div
              className={`rotate-180-carousel pl-0.5-carousel ${
                arrowsSize == "sm"
                  ? "-mt-[0.03rem]-carousel"
                  : "-mt-[0.05rem]-carousel"
              }`}
            >
              ▶
            </div>
          </button>

          <button
            onClick={nextSlide}
            className={`carousel-button cursor-pointer-carousel flex-carousel items-center-carousel justify-center-carousel rounded-full-carousel transition-carousel ${
              arrowsSize == "sm"
                ? "h-6-carousel w-6-carousel text-xs-carousel"
                : arrowsSize == "lg"
                ? "h-12-carousel w-12-carousel text-xl-carousel"
                : arrowsSize == "xl"
                ? "h-14-carousel w-14-carousel text-2xl-carousel"
                : "h-8-carousel w-8-carousel text-base-carousel"
            } ${
              controlsColor == "dark"
                ? "bg-gray-600/60-carousel text-white-carousel hover:bg-gray-600-carousel active:bg-gray-700-carousel"
                : controlsColor == "light"
                ? "bg-gray-300/60-carousel text-black-carousel hover:bg-gray-300-carousel active:bg-[#c0c5cf]-carousel"
                : controlsColor == "transparent-dark"
                ? "text-gray-900-carousel hover:text-gray-800-carousel active:text-gray-700-carousel drop-shadow-sm-carousel hover:drop-shadow-md-carousel active:drop-shadow-none-carousel"
                : controlsColor == "transparent-light"
                ? "text-gray-100-carousel hover:text-gray-200-carousel active:text-gray-300-carousel drop-shadow-sm-carousel hover:drop-shadow-md-carousel active:drop-shadow-none-carousel"
                : ""
            }`}
          >
            <div
              className={`pl-0.5-carousel ${
                arrowsSize == "sm"
                  ? "-mb-[0.03rem]-carousel"
                  : "-mb-[0.05rem]-carousel"
              }`}
            >
              ▶
            </div>
          </button>
        </div>
      ) : (
        <></>
      )}

      {showDots ? (
        <div
          className={`-translate-x-1/2-carousel absolute-carousel bottom-3-carousel left-1/2-carousel flex-carousel transform-carousel items-center-carousel justify-center-carousel gap-1.5-carousel rounded-full-carousel px-3-carousel py-2-carousel ${
            controlsColor == "dark"
              ? "bg-gray-600/60-carousel"
              : controlsColor == "light"
              ? "bg-gray-300/60-carousel"
              : ""
          }`}
        >
          {Array.from({ length: images.length }).map((_, i) => (
            <button
              key={i}
              className={`carousel-button h-2-carousel w-2-carousel cursor-pointer-carousel rounded-full-carousel transition-colors-carousel ${
                controlsColor == "dark"
                  ? "bg-gray-300/60-carousel hover:bg-gray-300-carousel active:bg-[#c0c5cf]-carousel"
                  : controlsColor == "light"
                  ? "bg-gray-600/60-carousel hover:bg-gray-600-carousel active:bg-gray-700-carousel"
                  : controlsColor == "transparent-dark"
                  ? "bg-gray-600/60-carousel drop-shadow-sm-carousel hover:bg-gray-600-carousel hover:drop-shadow-md-carousel active:bg-gray-700-carousel active:drop-shadow-none-carousel"
                  : controlsColor == "transparent-light"
                  ? "bg-gray-300/60-carousel drop-shadow-sm-carousel hover:bg-gray-300-carousel hover:drop-shadow-md-carousel active:bg-[#c0c5cf]-carousel active:drop-shadow-none-carousel"
                  : ""
              } ${
                currentIndex == i && controlsColor == "dark"
                  ? "bg-white-carousel"
                  : currentIndex == i && controlsColor == "light"
                  ? "bg-black-carousel"
                  : currentIndex == i && controlsColor == "transparent-dark"
                  ? "bg-black-carousel"
                  : currentIndex == i && controlsColor == "transparent-light"
                  ? "bg-white-carousel"
                  : ""
              }`}
              onClick={() => {
                setCurrentIndex(i);
              }}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
