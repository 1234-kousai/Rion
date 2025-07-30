'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Menu, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="group cursor-pointer flex items-center gap-2">
            <Image src="/rion-group-watermark.png" alt="Rion Group Logo" width={40} height={40} className="object-contain" />
            <div className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Rion Group
            </div>
            <div className="h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link
              href="#top"
              className="relative group text-gray-300 hover:text-white transition-colors duration-300"
            >
              TOP
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#about"
              className="relative group text-gray-300 hover:text-white transition-colors duration-300"
            >
              ABOUT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#value"
              className="relative group text-gray-300 hover:text-white transition-colors duration-300"
            >
              VALUE
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Mobile Menu Trigger (Hamburger Icon) */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-black text-white border-l border-white/10">
                <nav className="flex flex-col gap-6 pt-10">
                  <Link
                    href="#top"
                    className="text-lg font-medium hover:text-gray-300 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    TOP
                  </Link>
                  <Link
                    href="#about"
                    className="text-lg font-medium hover:text-gray-300 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    ABOUT
                  </Link>
                  <Link
                    href="#value"
                    className="text-lg font-medium hover:text-gray-300 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    VALUE
                  </Link>
                  <Button
                    asChild
                    className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 border-0 shadow-2xl shadow-purple-500/25 group mt-4"
                  >
                    <Link href="https://www.instagram.com/rion.group.official?igsh=MTk1ajAyMW5mNzdyag%3D%3D&utm_source=qr" target="_blank" className="flex items-center gap-2 px-6 py-3">
                      <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      Instagram
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}
