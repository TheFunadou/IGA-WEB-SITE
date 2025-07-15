// Utilities
import clsx from "clsx"

// Hooks
import { useEffect, useRef, useState } from "react";

export type CarouselImages = {
    id: number;
    image_url: string;
};


type Props = {
    srcImages: CarouselImages[];
    carouselClassName?: string;
    slideDuration: number;
}


const CustomCarouselDaysiUI: React.FC<Props> = ({ srcImages, carouselClassName, slideDuration}) => {

    // Logic for the Carousel
    const carouselRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (index + 1) % srcImages.length;
            setIndex(nextIndex);

            const carousel = carouselRef.current;
            if (carousel) {
                const itemWidth = carousel.offsetWidth;
                carousel.scrollTo({
                    left: nextIndex * itemWidth,
                    behavior: "smooth",
                });
            }
        }, slideDuration);

        return () => clearInterval(interval);
    }, [index]);

    return (
        <div
            className={clsx(
                "carousel overflow-hidden",
                carouselClassName ? (carouselClassName) : ("")
            )}
            ref={carouselRef}>
            {srcImages.map((item) => (
                <div key={item.id} className="carousel-item w-full flex-shrink-0">
                    <img
                        src={item.image_url}
                        alt={`slide-${item.id}`}
                        className="w-full h-full"
                    />
                </div>
            ))}
        </div>
    );
}

export default CustomCarouselDaysiUI;