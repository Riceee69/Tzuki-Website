import Image from 'next/image'
import { PageHeader } from '@/components/page-header'

export default function GalleryPage() {

  const images = [
    '/Gallery pic 1.jpeg',
    '/Gallery pic 2.png',
    '/Gallery pic 3.jpeg',
    '/Gallery pic 4.png',
    '/Gallery pic 5.jpeg',
    '/Gallery pic 6.jpeg',
    '/Gallery pic 7.png',
    '/Gallery pic 8.jpeg',
    '/Gallery pic 9.jpeg',
    '/Gallery pic 10.jpeg',
    '/Gallery pic 11.png',
    '/Gallery pic 12.jpeg',
    '/Gallery pic 13.jpeg',
    '/Gallery pic 14.jpeg',
    '/Gallery pic 15.jpeg',
    '/Gallery pic 16.jpeg',
    '/Gallery pic 17.png',
    '/Gallery pic 18.jpeg',
    '/Gallery pic 19.jpeg',
    '/Gallery pic 20.jpeg',
  ]

  return (
    <main className="min-h-screen bg-[#FFFEFE] pb-16 pt-20">
      <PageHeader 
        title="Tuzi Gallery"
        description="Explore the magical world of Tuzi through our collection of enchanting bunnies, their unique personalities."
      />
      
      <section className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="aspect-square relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Image
                src={src}
                alt={`Gallery pic ${index + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

