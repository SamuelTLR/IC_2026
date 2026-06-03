import { useRef, useState, useEffect } from 'react';
import './components.css';

function InteractiveImage({ src, src2, alt, alt2 }) {
  const imageRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handlePointerLockChange = () => {
      if (document.pointerLockElement === imageRef.current) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    document.addEventListener('pointerlockchange', handlePointerLockChange);
    return () => {
      document.removeEventListener('pointerlockchange', handlePointerLockChange);
    };
  }, []); 

  const handleImageClick = () => {
    if (!isHidden) {
      imageRef.current.requestPointerLock();
    } else {
      document.exitPointerLock();
    }
  };

  const atualSrc = isHidden ? src2 : src;
  const atualAlt = isHidden ? alt2 : alt;

  return (
    <img
      ref={imageRef}
      src={atualSrc}
      alt={atualAlt}
      onClick={handleImageClick}
      className={`interactive-image ${isHidden ? 'hidden' : ''}`}
    />
  );
}

export default InteractiveImage;