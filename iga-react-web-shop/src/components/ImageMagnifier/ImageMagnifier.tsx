import { useState, useRef, useCallback, useEffect } from 'react';

type ImageMagnifierProps = {
  src?: string;
  widthClass: string;
  heightClass?: string;
  magnifierSize?: number;
  zoomLevel?: number;
  enabled?: boolean;
  imageStyle?: string;
};

// Utilidad para concatenar clases condicionales
const combineClasses = (...classes: (string | false | undefined)[]) =>
  classes.filter(Boolean).join(' ');

export default function ImageMagnifier({
  src,
  widthClass,
  heightClass,
  magnifierSize = 80,
  zoomLevel = 2.5,
  enabled = true,
  imageStyle,
}: ImageMagnifierProps) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );

  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Actualiza isLargeScreen al cambiar el tamaño de ventana
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleResize = () => setIsLargeScreen(mediaQuery.matches);

    // Escuchar cambios
    mediaQuery.addEventListener('change', handleResize);
    handleResize(); // Evalúa inicialmente

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!enabled || !isLargeScreen) return;
    const img = imgRef.current;
    if (img) {
      const { width, height } = img.getBoundingClientRect();
      setSize([width, height]);
      setShowMagnifier(true);
    }
  }, [enabled, isLargeScreen]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!enabled || !isLargeScreen) return;
      const { top, left } = e.currentTarget.getBoundingClientRect();
      setXY([e.clientX - left, e.clientY - top]);
    },
    [enabled, isLargeScreen]
  );

  const handleMouseLeave = useCallback(() => {
    setShowMagnifier(false);
  }, []);

  const magnifierStyle: React.CSSProperties = {
    position: 'absolute',
    left: `${x - magnifierSize / 2}px`,
    top: `${y - magnifierSize / 2}px`,
    width: `${magnifierSize}px`,
    height: `${magnifierSize}px`,
    opacity: 1,
    border: '1px solid lightgray',
    borderRadius: '1em',
    backgroundColor: 'white',
    backgroundImage: `url('${src}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
    backgroundPositionX: `${-x * zoomLevel + magnifierSize / 2}px`,
    backgroundPositionY: `${-y * zoomLevel + magnifierSize / 2}px`,
    pointerEvents: 'none',
    zIndex: 1,
  };

  const zoomedPreviewStyle: React.CSSProperties = {
    position: 'absolute',
    left: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    marginLeft: '20px',
    height: `${imgHeight * 1.5}px`,
    width: `${imgWidth * 1.5}px`,
    border: '1px solid #d4d4d4',
    borderRadius: '1em',
    backgroundColor: "white",
    backgroundImage: `url('${src}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
    backgroundPositionX: `${-x * zoomLevel + (imgWidth * 1.5) / 2}px`,
    backgroundPositionY: `${-y * zoomLevel + (imgHeight * 1.5) / 2}px`,
    zIndex: 2,
  };

  return (
    <div
      ref={containerRef}
      className={combineClasses('relative', widthClass, heightClass)}
    >
      <div
        className={combineClasses(
          'relative w-full overflow-hidden',
          heightClass && 'h-full'
        )}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imgRef}
          src={src}
          alt="Magnified"
          className={combineClasses(
            'w-full',
            heightClass && 'h-full object-cover',
            imageStyle
          )}
        />
        {enabled && isLargeScreen && showMagnifier && (
          <div style={magnifierStyle} />
        )}
      </div>
      {enabled && isLargeScreen && showMagnifier && (
        <div style={zoomedPreviewStyle} />
      )}
    </div>
  );
}
