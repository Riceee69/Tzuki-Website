import Image from 'next/image'

export function About() {
  return (
    <section className="py-16 bg-[#FFFEFE]">
      <div className="container mx-auto px-4 space-y-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-4xl font-bold text-[#C63143] mb-8">
            The Moon's Unexpected Inhabitants
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <p>
                In a bold experiment, humans transformed the moon into a lush green paradise, 
                complete with forests, rivers, and meadows. They introduced bunnies, one of 
                Earth's most adaptable creatures, to populate this new world. However, the 
                moon's dust had unique, transformative properties that altered the bunnies 
                over time, granting them humanoid forms and intelligence.
              </p>
              <p>
                One day, the humans mysteriously vanished, leaving behind the paradise they 
                had created. Over generations, the bunnies, now called the Tuzi, uncovered 
                relics of human life—books, clothing, and tools—and began mimicking their 
                creators. They learned to read, fashioned human-inspired outfits, and 
                celebrated traditions drawn from their discoveries.
              </p>
            </div>
            
            <Image
              src="/Bunny evolution.png"
              alt="Bunny Evolution Stages"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-4xl font-bold text-[#C63143] mb-8">
            Introducing ARZI and Her Journey to the Moon
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Image
              src="/Ari.png"
              alt="Arzi Character"
              width={400}
              height={600}
              className="rounded-lg shadow-lg justify-self-center"
            />
            
            <div className="space-y-6">
              <p>
                Centuries after humans mysteriously abandoned the moon, Arzi, a bold and 
                curious scout, embarked on a mission to uncover the truth behind their 
                disappearance and assess the moon's potential for humanity's return.
              </p>
              <p>
                Armed with a magical cap that let her blend among the bunnies and special 
                headphones that allowed her to understand their soft chatter, Arzi explored 
                the moon's vibrant landscape without disturbing its serene inhabitants.
              </p>
              <p>
                Her mission became one of awe and revelation. Immersed in the lunar world's 
                beauty and its enigmatic history, Arzi found herself forming an unexpected 
                bond with the bunnies, who welcomed her as one of their own.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

