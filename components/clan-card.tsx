'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ClanCardProps {
  name: string
  title: string
  description: string
  image: string
}

export function ClanCard({ name, title, description, image }: ClanCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-[#C63143]/10 hover:border-[#C63143]/30 transition-colors"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 className="text-2xl font-bold mb-1">{name}</h2>
          <p className="text-white/90">{title}</p>
        </div>
      </div>
      
      <motion.div 
        className="p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0.7 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-[#714100] leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  )
}

