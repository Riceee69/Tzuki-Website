interface PageHeaderProps {
    title: string
    description: string
  }
  
  export function PageHeader({ title, description }: PageHeaderProps) {
    return (
      <div className="relative bg-[#C63143]/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#C63143] text-center mb-6">
            {title}
          </h1>
          <p className="text-[#714100] text-lg md:text-xl text-center max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    )
  }
  
  