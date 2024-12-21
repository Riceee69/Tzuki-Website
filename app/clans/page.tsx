import { ClanCard } from '@/components/clan-card'
import { PageHeader } from '@/components/page-header'

export default function ClansPage() {
  const clans = [
    {
      name: "Clan Lunar",
      title: "Keepers of Secrets",
      description: "The oldest and most mysterious clan, the Lunars are descendants of the first Tuzi created by humans. Guardians of ancient traditions, they live in isolation and are burdened by a closely guarded secret rumored to hold the power to reshape the Tuzi's understanding of their world. Their members often gaze wistfully at Earth, seemingly haunted by memories only they can recall.",
      image: "/Clan Lunar.jpeg"
    },
    {
      name: "Clan ChiChi",
      title: "Masters of Knowledge and Lightning",
      description: "Perched in the Moon's highlands, the ChiChi clan excels as scholars and inventors. Harnessing the Moon's electric storms, they create powerful energy sources and technological marvels inspired by ancient human texts. While admired for their intellect, their detached nature often alienates them from other clans.",
      image: "/Clan ChiChi.jpeg"
    },
    {
      name: "Clan Tokki",
      title: "The Royal Charmers",
      description: "Residing in a glittering moonstone palace, the Tokki clan thrives on charm and political intrigue. Known for their royal history and social dominance, they host grand celebrations but struggle with internal scandals and rivalries. Despite the chaos, their court remains the center of diplomacy and influence in the Tuzi kingdom.",
      image: "/Clan Tokki.jpeg"
    },
    {
      name: "Clan Fuddy",
      title: "Champions of Freedom",
      description: "In the Moon's sprawling valleys, the Fuddy clan embraces democracy and independence. Known for their playful debates ('fudding') and community-driven ideals, they often clash with the hierarchical Tokkis and secretive Lunars. Their emphasis on unity and free spirit keeps the Tuzi grounded in their shared values.",
      image: "/Clan Fuddy.jpeg"
    }
  ]

  return (
    <main className="min-h-screen bg-[#FFFEFE] pb-16">
      <PageHeader 
        title="The Four Clans of the Tuzi Empire"
        description="Over generations, the once-unified Tuzi kingdom on the Moon fractured into four distinct clans, each shaped by the knowledge and traits inherited from human artifacts and ideals. These clans, though coexisting, diverged in ideology and purpose, creating a vibrant yet divided lunar society."
      />
      
      <section className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clans.map((clan) => (
            <ClanCard key={clan.name} {...clan} />
          ))}
        </div>
        
        <div className="mt-16 prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-[#C63143] mb-6">A Fractured Harmony</h2>
          <p className="text-[#714100]">
            The clans' differences, once peaceful, have begun to fuel disputes and rivalries. 
            Though united by the celestial Goddess, who strives to maintain balance, their 
            human-like tendencies threaten to unravel the harmony of the lunar paradise, 
            leaving the future of the Tuzi kingdom uncertain.
          </p>
        </div>
      </section>
    </main>
  )
}

