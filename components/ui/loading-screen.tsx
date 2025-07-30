'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2秒後にローディング画面を非表示にする

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-500">
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
