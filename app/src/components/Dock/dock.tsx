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
import { useAudio } from '@/components/AudioContext'

export default function Dock() {
  const [toggleMixer, setToggleMixer] = React.useState(false)
  const { playingIndices, handlePlayPauseClick, setPlayingIndices } = useAudio()

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
      onClick: () => {
        setPlayingIndices((prevIndices: { [key: number]: number }) => {
          const updatedIndices: { [key: number]: number } = {}; // Create a new object to avoid direct mutation
        
          Object.keys(prevIndices).forEach((key) => {
            updatedIndices[Number(key)] = 0; // Convert key to number and set value to 0
          });
        
          return updatedIndices; // Return the updated state
        });
      },
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
