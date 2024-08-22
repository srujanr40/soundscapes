import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Play, Pause } from 'lucide-react'

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    link: string
    src?: string
  }[]
  className?: string
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  let [playingIndices, setPlayingIndices] = useState<number[]>([]);

  const handlePlayPauseClick = (index: number) => {
    setPlayingIndices((prev) => {
      if (playingIndices.includes(index)) {
        return prev.filter((i) => i !== index); // Remove the index to pause
      } else {
        return [...prev, index]; // Add the index to play
      }
    });
  };

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10',
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-pink-100 dark:bg-fuchsia-900/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card hovered={hoveredIndex === idx} backgroundImage={item.src} playing={playingIndices.includes(idx)}>
            <div>
              <div
                style={{
                  visibility: (hoveredIndex === idx || playingIndices.includes(idx)) ? 'hidden' : 'visible',
                }}
              >
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </div>
              { (hoveredIndex === idx || playingIndices.includes(idx)) && (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  onClick={() => handlePlayPauseClick(idx)}
                >
                  {playingIndices.includes(idx) ? (
                    <Pause size={48} className="text-white fill-current" />
                  ) : (
                    <Play size={48} className="text-white fill-current" />
                  )}
                </div>
              )}
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children,
  hovered,
  backgroundImage,
  playing,
}: {
  className?: string
  children: React.ReactNode
  hovered?: boolean
  backgroundImage?: string
  playing?: boolean
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl h-full w-full p-4 overflow-hidden bg-gray-200 dark:bg-zinc-950 border-2 border-zinc-300 dark:border-white/[0.2] dark:group-hover:border-fuchsia-300 group-hover:border-fuchsia-400 relative z-20',
        className
      )}
    >
      <div
        className={cn(
          'absolute inset-0 transition-opacity duration-300 ease-in-out',
          (hovered || playing) ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

export const CardTitle = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h4
      className={cn(
        'text-zinc-700 dark:text-zinc-100 font-bold tracking-wide mt-4',
        className
      )}
    >
      {children}
    </h4>
  )
}
export const CardDescription = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p
      className={cn(
        'mt-8 text-zinc-600 dark:text-zinc-400 tracking-wide leading-relaxed text-sm',
        className
      )}
    >
      {children}
    </p>
  )
}
