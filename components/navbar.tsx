import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#FFFEFE]/90 backdrop-blur-sm z-50 border-b border-[#C63143]/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Circle Picture.jpg"
            alt="Tuzi Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-[#C63143]">Tuzi</span>
        </Link>
        
        <div className="flex gap-6">
          <Link href="/#about" className="hover:text-[#C63143] transition-colors">
            About
          </Link>
          <Link href="/clans" className="hover:text-[#C63143] transition-colors">
            Clans
          </Link>
          <Link href="/gallery" className="hover:text-[#C63143] transition-colors">
            Gallery
          </Link>
          <Link href="/links" className="hover:text-[#C63143] transition-colors">
            Links
          </Link>
        </div>
      </div>
    </nav>
  )
}

