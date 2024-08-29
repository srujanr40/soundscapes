import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Play, Pause } from 'lucide-react'

export const HoverEffect = ({
  items,
  className,
  playingIndices,
  handlePlayPauseClick,
  masterVolume,
}: {
  items: {
    title: string
    description: string
    link: string // URL to the .wav file
    src?: string
  }[]
  className?: string
  playingIndices: { [key: number]: number } // 0 = default, 1 = playing, 2 = paused
  handlePlayPauseClick: (index: number) => void
  masterVolume: number
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [volumes, setVolumes] = useState<number[]>(items.map(() => 1))

  // Refs for each audio element
  const audioRefs = useRef<HTMLAudioElement[]>([])

  useEffect(() => {
    return () => {
      audioRefs.current.forEach((audio) => {
        audio?.pause()
      })
    }
  }, [])

  useEffect(() => {
    // Play or pause the respective audio element based on playingIndices state
    items.forEach((_, index) => {
      const audioElement = audioRefs.current[index]
      if (audioElement) {
        if (playingIndices[index] === 1) {
          audioElement.play()
        } else {
          audioElement.pause()
        }
      }
      audioElement.volume = volumes[index] * masterVolume
    })
  }, [playingIndices, masterVolume, volumes])

  const handleVolumeChange = (index: number, volume: number) => {
    setVolumes((prevVolumes) => {
      const newVolumes = [...prevVolumes]
      newVolumes[index] = volume
      return newVolumes
    })

    if (audioRefs.current[index]) {
      audioRefs.current[index].volume = volume * masterVolume
    }
  }

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
          <Card
            className='h-66'
            hovered={hoveredIndex === idx}
            backgroundImage={item.src}
            playing={playingIndices[idx] === 1 || playingIndices[idx] === 2}
          >
            <div>
              <div
                style={{
                  opacity:
                    hoveredIndex === idx ||
                    playingIndices[idx] === 1 ||
                    playingIndices[idx] === 2
                      ? 0
                      : 1,
                  visibility:
                    hoveredIndex === idx ||
                    playingIndices[idx] === 1 ||
                    playingIndices[idx] === 2
                      ? 'hidden'
                      : 'visible',
                  transition:
                    hoveredIndex === idx ||
                    playingIndices[idx] === 1 ||
                    playingIndices[idx] === 2
                      ? 'none'
                      : 'opacity 0.2s ease-in-out',
                }}
              >
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </div>
              {(hoveredIndex === idx ||
                playingIndices[idx] === 1 ||
                playingIndices[idx] === 2) && (
                <div
                  className="absolute h-56 w-full mx-auto inset-0 flex items-center justify-center"
                  onClick={() => handlePlayPauseClick(idx)}
                >
                  {playingIndices[idx] === 1 ? (
                    <div>
                      <Pause size={48} className="text-white fill-current" />
                      <div className="absolute bottom-0 left-4 flex w-60 bg-neutral-50 p-2 rounded-xl shadow-md">
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={volumes[idx]}
                          onChange={(e) =>
                            handleVolumeChange(idx, parseFloat(e.target.value))
                          }
                          className="w-full"
                        />
                      </div>
                    </div>
                  ) : (
                    <Play size={48} className="text-white fill-current" />
                  )}
                </div>
              )}
            </div>
            {/* Hidden audio element */}
            <audio
              ref={(el) => {
                if (el) audioRefs.current[idx] = el
              }}
              src={item.link}
              preload="auto"
            />
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
          hovered || playing ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="relative z-50 h-56">
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
