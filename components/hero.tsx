import Image from 'next/image'

export function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 fade-scroll">
        <Image
          src="/Tzuki Banner.jpeg"
          alt="Tzuki Banner"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="relative pt-32 container mx-auto px-4">
        <h1 className="text-6xl md:text-7xl font-bold text-[#6B0001] text-center mb-8">
          The Rise of Tuzi
        </h1>
      </div>
    </div>
  )
}

