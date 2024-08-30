'use client'

import React, { useState } from 'react'
import { FloatingDock } from '@/components/ui/floating-dock'
import {
  IconPlayerPause,
  IconPlayerPlay,
  IconVolume,
  IconWiper,
} from '@tabler/icons-react'
import { useAudio } from '@/components/AudioContext'

// import './sliderStyles.css'; 

export default function Dock() {
  const { playingIndices, handlePlayPauseClick, setPlayingIndices, masterVolume, setMasterVolume } = useAudio()

  const [isVolumePopupVisible, setVolumePopupVisible] = useState(false);

  const links = [
    {
      title: 'Play',
      icon: (
        <IconPlayerPlay className="h-full w-full text-zinc-50 dark:text-neutral-300" />
      ),
      onClick: () => {
        setPlayingIndices((prevIndices: { [key: number]: number }) => {
          const updatedIndices: { [key: number]: number } = {}; // Create a new object to avoid direct mutation
        
          Object.keys(prevIndices).forEach((key) => {
            if (prevIndices[Number(key)] === 2 || prevIndices[Number(key)] === 1) {
              updatedIndices[Number(key)] = 1; // Convert key to number and set value to 1 (playing)
            } 
          });
        
          return updatedIndices; 
        });
      }
    },
    {
      title: 'Pause',
      icon: (
        <IconPlayerPause className="h-full w-full text-zinc-50 dark:text-neutral-300" />
      ),
      onClick: () => {
        setPlayingIndices((prevIndices: { [key: number]: number }) => {
          const updatedIndices: { [key: number]: number } = {}; 
        
          Object.keys(prevIndices).forEach((key) => {
            if (prevIndices[Number(key)] === 1 || prevIndices[Number(key)] === 2) {
              updatedIndices[Number(key)] = 2; // Convert key to number and set value to 2 (paused state)
            }
          });
        
          return updatedIndices; 
        });
      },
    },
    {
      title: 'Clear',
      icon: (
        <IconWiper className="h-full w-full text-zinc-50 dark:text-neutral-300" />
      ),
      onClick: () => {
        setPlayingIndices((prevIndices: { [key: number]: number }) => {
          const updatedIndices: { [key: number]: number } = {}; 
        
          Object.keys(prevIndices).forEach((key) => {
            updatedIndices[Number(key)] = 0; // Convert key to number and set value to 0 (default state)
          });
        
          return updatedIndices; 
        });
      },
    },
    {
      title: 'Master Volume',
      icon: (
        <IconVolume className="h-full w-full text-zinc-50 dark:text-neutral-300" />
      ),
      onClick: () => setVolumePopupVisible((prev) => !prev),
    },
  ]

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setMasterVolume(newVolume);
  }


  return (
    <div>
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center w-auto">
        <FloatingDock items={links} />
      </div>
      {isVolumePopupVisible && (
        <div className="fixed bottom-28 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center w-60 bg-gradient-to-br from-purple-500 via-pink-400 to-orange-200 p-2 rounded-xl shadow-md">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={masterVolume}
            onChange={handleVolumeChange}
            className="w-full"
          />
        </div>
      )}
    </div>
  )
}
