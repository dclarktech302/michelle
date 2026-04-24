import GalleryGrid from '@/components/features/galleryGrid'
import { galleryImages } from '@/data/gallery'

export const metadata = {
  title: 'Gallery — Michele W. Johnson for Delegate',
  description:
    'Photos from the Michele W. Johnson campaign for Maryland House of Delegates District 37B.',
}

export default function GalleryPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold lg:text-5xl font-heading">Gallery</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            On the trail across District 37B.
          </p>
        </div>

        {galleryImages.length > 0 ? (
          <GalleryGrid images={galleryImages} columns={3} />
        ) : (
          <div className="rounded-2xl border bg-muted/30 p-10 text-center">
            <p className="text-muted-foreground">Photos coming soon.</p>
          </div>
        )}

      </div>
    </main>
  )
}