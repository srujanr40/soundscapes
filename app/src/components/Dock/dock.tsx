'use client'

import React from 'react'
import { FloatingDock } from '@/components/ui/floating-dock'
import AudioDrawer from '@/components/AudioDrawer/audio-drawer'
import {
  IconChartCandle,
  IconPlayerPause,
  IconPlayerPlay,
  IconVolume,
} from '@tabler/icons-react'
import Image from 'next/image'
import { on } from 'events'

export default function Dock() {
  const [toggleMixer, setToggleMixer] = React.useState(false)

  const links = [
    {
      title: 'Play',
      icon: (
        <IconPlayerPlay className="h-full w-full text-zinc-50 dark:text-neutral-300" />
      ),
      href: '#',
    },

    {
      title: 'Pause',
      icon: (
        <IconPlayerPause className="h-full w-full text-zinc-50 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'Master Volume',
      icon: (
        <IconVolume className="h-full w-full text-zinc-50 dark:text-neutral-300"/>
      ),
      href: '#',
    },
    {
      title: 'Aceternity UI',
      icon: (
        <Image
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: '#',
    },
    {
      title: 'Volume Mixer',
      icon: (
        <IconChartCandle className="h-full w-full text-zinc-50 dark:text-neutral-300" />
      ),
      href: '#',
      onClick: () => {
        setToggleMixer(!toggleMixer)
        console.log(toggleMixer)
      },
    },
  ]
  return (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center w-auto">
      <FloatingDock items={links} />
    </div>
  )
}
