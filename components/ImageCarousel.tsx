'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageCarouselProps {
  images: string[]
  alt: string
  colorClass?: string
  fallback?: React.ReactNode
}

export default function ImageCarousel({ images, alt, colorClass = 'bg-vert-feuillage/10', fallback }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())

  const hasMultipleImages = images.length > 1
  const validImages = images.filter((_, i) => !imageErrors.has(i))
  const allImagesFailed = validImages.length === 0

  const goToPrevious = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }, [currentIndex])

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index))
  }

  // Auto-advance slides every 5 seconds if multiple images
  useEffect(() => {
    if (!hasMultipleImages) return

    const interval = setInterval(() => {
      goToNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [hasMultipleImages, goToNext])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  // If all images failed to load, show fallback
  if (allImagesFailed && fallback) {
    return <div className={`w-full h-full ${colorClass}`}>{fallback}</div>
  }

  // If no images provided, show fallback
  if (images.length === 0 && fallback) {
    return <div className={`w-full h-full ${colorClass}`}>{fallback}</div>
  }

  return (
    <div className="relative w-full h-full group">
      <div className="relative w-full h-full overflow-hidden rounded-3xl">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            {!imageErrors.has(currentIndex) ? (
              <Image
                src={images[currentIndex]}
                alt={`${alt} - Image ${currentIndex + 1}`}
                fill
                className="object-cover"
                onError={() => handleImageError(currentIndex)}
              />
            ) : fallback ? (
              <div className={`w-full h-full ${colorClass}`}>{fallback}</div>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows - only show if multiple images */}
      {hasMultipleImages && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-6 h-6 text-marron-terre" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-6 h-6 text-marron-terre" />
          </button>
        </>
      )}

      {/* Dots indicator - only show if multiple images */}
      {hasMultipleImages && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white w-6'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
