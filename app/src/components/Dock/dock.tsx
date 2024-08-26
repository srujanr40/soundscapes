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

export default function Dock() {
  const [toggleMixer, setToggleMixer] = React.useState(false)

  const links = [
    {
      title: 'Play',
      icon: (
        <IconPlayerPlay className="h-full w-full text-zinc-50 dark:text-neutral-300" />
      ),
      onClick: () => null,
    },

    {
      title: 'Pause',
      icon: (
        <IconPlayerPause className="h-full w-full text-zinc-50 dark:text-neutral-300" />
      ),
      onClick: () => null,
    },
    {
      title: 'Master Volume',
      icon: (
        <IconVolume className="h-full w-full text-zinc-50 dark:text-neutral-300" />
      ),
      onClick: () => null,
    },
    {
      title: 'Volume Mixer',
      icon: (
        <IconChartCandle className="h-full w-full text-zinc-50 dark:text-neutral-300" />
      ),
      onClick: () => {
        setToggleMixer(!toggleMixer)
        console.log(toggleMixer)
      },
    },
  ]

  return (
    <div>
      {toggleMixer && <AudioDrawer />}
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center w-auto">
        <FloatingDock items={links} />
      </div>
    </div>
  )
}
