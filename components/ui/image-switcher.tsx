'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface ImageSwitcherProps {
  images: string[]
  interval?: number
  width: number
  height: number
  alt: string
  className?: string
}

export function ImageSwitcher({ images, interval = 2000, width, height, alt, className }: ImageSwitcherProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFading, setIsFading] = useState(false) // State to control fading

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true); // Start fade out
      const fadeOutTimer = setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false); // Start fade in for new image
      }, 500); // Duration of fade out (should match CSS transition duration)

      return () => clearTimeout(fadeOutTimer);
    }, interval); // This interval is the time between image changes

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <Image
      src={images[currentImageIndex]}
      alt={alt}
      width={width}
      height={height}
      className={`${className} transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
    />
  )
}