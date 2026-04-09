'use client'
import { useState } from 'react'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { GalleryImage } from '@/lib/types'

interface GalleryGridProps {
  images: GalleryImage[]
  columns?: 2 | 3 | 4
}

export default function GalleryGrid({ images, columns = 3 }: GalleryGridProps) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <>
      <Masonry
        breakpointCols={{ default: columns, 1024: 2, 640: 1 }}
        className="flex gap-4"
        columnClassName="flex flex-col gap-4">
        {images.map((image, i) => (
          <button
            key={image.src}
            onClick={() => { setIndex(i); setOpen(true) }}
            className="block w-full overflow-hidden rounded-xl border hover:opacity-90 transition-opacity">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full h-auto"
            />
            {image.caption && (
              <p className="px-3 py-2 text-xs text-muted-foreground text-left">
                {image.caption}
              </p>
            )}
          </button>
        ))}
      </Masonry>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map(img => ({ src: img.src, alt: img.alt }))}
      />
    </>
  )
}