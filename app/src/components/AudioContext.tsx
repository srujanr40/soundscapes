'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface AudioContextType {
  playingIndices: { [key: number]: number } // 0 = default, 1 = playing, 2 = paused
  handlePlayPauseClick: (index: number, pause?: boolean) => void
  setPlayingIndices: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>
  masterVolume: number
  setMasterVolume: React.Dispatch<React.SetStateAction<number>>
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function useAudio() {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const [playingIndices, setPlayingIndices] = useState<{ [key: number]: number }>({})
  const [masterVolume, setMasterVolume] = useState<number>(1)

  const handlePlayPauseClick = (index: number) => {
    setPlayingIndices((prev) => {
      const newState = { ...prev }
      const currentState = newState[index] || 0 // Default to 0 if undefined

      if (currentState === 1) {
        newState[index] = 0 // Toggle to default if currently playing
      } else if (currentState === 0 || currentState === 2) {
        newState[index] = 1 // Toggle to playing if currently default
      } else {
        newState[index] = 0
      }

      return newState
    })
  }

  return (
    <AudioContext.Provider value={{ playingIndices, handlePlayPauseClick, setPlayingIndices, masterVolume, setMasterVolume }}>
      {children}
    </AudioContext.Provider>
  )
}
