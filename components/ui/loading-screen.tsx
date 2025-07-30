'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [opacity, setOpacity] = useState(1) // Start fully opaque

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0) // Start fading out
      // After fade out, set isLoading to false to remove the component from DOM
      const removeTimer = setTimeout(() => {
        setIsLoading(false)
      }, 500) // Duration of the fade-out transition (should match CSS transition duration)
      return () => clearTimeout(removeTimer)
    }, 2000) // 2秒後にローディング画面を非表示にする

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-500"
      style={{ opacity: opacity }}
    >
      <Image
        src="/rion-group-watermark.png"
        alt="Rion Group Loading"
        width={200}
        height={200}
        className="object-contain animate-pulse"
      />
    </div>
  )
}