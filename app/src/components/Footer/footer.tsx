export default function Footer() {
  return (
    <div className="container grid grid-cols-2 pt-20 mb-10">
      <div className="flex justify-self-start text-sm text-muted-foreground z-30">
        <p className="pr-1">
          Built with 
        </p>
        <p className="line-through pr-1">
          love
        </p>
        <p>
          frustration, Srujan Rao @ 2024
        </p>
      </div>
      <p className="justify-self-end text-sm text-muted-foreground z-30">
        Powered by Next.js, TailwindCSS, Aceternity, and shadcn/ui
      </p>
    </div>
  )
}
