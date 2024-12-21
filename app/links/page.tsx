import Image from 'next/image'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Twitter, Link as Discord } from 'lucide-react'

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-[#FFFEFE] pb-16 pt-20">
      <PageHeader 
        title="Connect with Tuzi"
        description="Join our community and stay updated with the latest news from the Tuzi universe."
      />
      
      <section className="container mx-auto px-4 mt-8 text-center">
        <div className="flex justify-center space-x-8 mb-12">
          <Link href="https://x.com/TeamTuzi" target="_blank" rel="noopener noreferrer" className="text-[#C63143] hover:text-[#714100] transition-colors">
            <Twitter size={48} /> Twitter
          </Link>
          <Link href="https://discord.com/invite/teamtuzi" target="_blank" rel="noopener noreferrer" className="text-[#C63143] hover:text-[#714100] transition-colors">
          <Discord size={48} /> Discord
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-[#C63143] mb-4">Team</h2>
        <div className="flex justify-center space-x-8 mb-12">
          <Link href="https://twitter.com/gtx360ti" target="_blank" rel="noopener noreferrer" className="text-center">
            <Image src="/360 (team).jpg" alt="Team Member 1" width={100} height={100} className="rounded-full mb-2" />
            <span className="text-[#714100]">@gtx360ti</span>
          </Link>
          <Link href="https://twitter.com/bunnyhodl" target="_blank" rel="noopener noreferrer" className="text-center">
          <Image src="/bunnyhodl (team).jpg" alt="Team Member 1" width={100} height={100} className="rounded-full mb-2" />
          <span className="text-[#714100]">@bunnyhodl</span>
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-[#C63143] mb-4">FAQ</h2>
        <Accordion type="single" collapsible className="max-w-md mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>Which chain?</AccordionTrigger>
            <AccordionContent>
              Zaar, initia rollup
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Wen mint?</AccordionTrigger>
            <AccordionContent>
              After Initia mainnet
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Supply & Price</AccordionTrigger>
            <AccordionContent>
              10k supply and price TBA
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is it free mint?</AccordionTrigger>
            <AccordionContent>
              No (only Mint hopper role is Free mint)
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  )
}

