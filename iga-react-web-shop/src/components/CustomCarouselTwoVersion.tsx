import { useEffect, useRef, useState } from "react";

export type CarouselImages = {
  id: number;
  image_url: string;
};

type Props = {
  srcImages: CarouselImages[];
  carouselClassName?: string;
  slideDuration: number;
};

const CustomCarouselTwoVersion: React.FC<Props> = ({
  srcImages,
  carouselClassName,
  slideDuration,
}) => {
  const mainImageRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

  const [mainIndex, setMainIndex] = useState(0);

  // Duplicamos las imágenes para permitir scroll infinito sin rebote visual
  const duplicatedImages = srcImages.concat(srcImages);
  const imageCount = srcImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      const isLastSlide = mainIndex >= imageCount;

      const newMainIndex = isLastSlide ? 1 : mainIndex + 1;
      const newLeftIndex = (newMainIndex - 1 + imageCount) % imageCount;
      const newRightIndex = (newMainIndex + 1) % imageCount;

      setMainIndex(newMainIndex);

      const scrollToIndex = (
        container: HTMLDivElement | null,
        index: number,
        isReset: boolean = false
      ) => {
        if (container) {
          const itemWidth = container.offsetWidth;
          container.scrollTo({
            left: index * itemWidth,
            behavior: isReset ? "auto" : "smooth",
          });
        }
      };

      scrollToIndex(leftImageRef.current, newLeftIndex);
      scrollToIndex(mainImageRef.current, newMainIndex);
      scrollToIndex(rightImageRef.current, newRightIndex);

      // Reiniciar scroll instantáneamente si alcanzamos la imagen duplicada
      if (isLastSlide) {
        setTimeout(() => {
          scrollToIndex(mainImageRef.current, 0, true);
          scrollToIndex(leftImageRef.current, imageCount - 1, true);
          scrollToIndex(rightImageRef.current, 1, true);
          setMainIndex(0);
        }, slideDuration - 50);
      }
    }, slideDuration);

    return () => clearInterval(interval);
  }, [mainIndex, slideDuration, imageCount]);

  return (
    <div className={`w-full flex gap-5 items-center justify-center ${carouselClassName}`}>
      {/* Left image carousel */}
      <div className="carousel overflow-hidden w-[300px]" ref={leftImageRef}>
        <div className="flex transition-all duration-500">
          {duplicatedImages.map((img, index) => (
            <div key={`left-${img.id}-${index}`} className="carousel-item flex-shrink-0 w-full">
              <img src={img.image_url} alt={`left-${img.id}`} className="w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Main image carousel */}
      <div className="carousel overflow-hidden w-[300px]" ref={mainImageRef}>
        <div className="flex transition-all duration-500">
          {duplicatedImages.map((img, index) => (
            <div key={`main-${img.id}-${index}`} className="carousel-item flex-shrink-0 w-full">
              <img src={img.image_url} alt={`main-${img.id}`} className="w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Right image carousel */}
      <div className="carousel overflow-hidden w-[300px]" ref={rightImageRef}>
        <div className="flex transition-all duration-500">
          {duplicatedImages.map((img, index) => (
            <div key={`right-${img.id}-${index}`} className="carousel-item flex-shrink-0 w-full">
              <img src={img.image_url} alt={`right-${img.id}`} className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCarouselTwoVersion;
