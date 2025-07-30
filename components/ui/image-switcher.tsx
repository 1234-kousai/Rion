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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <Image
      src={images[currentImageIndex]}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  )
}
