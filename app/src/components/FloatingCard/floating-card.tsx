'use client'

import Image from 'next/image'
import React from 'react'
import { CardBody, CardContainer, CardItem } from '../ui/3d-card'
import Link from 'next/link'

export default function FloatingCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl">
        <CardItem
          translateZ="100"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          <h1 className="text-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-br from-purple-500 via-pink-400 to-orange-200">
            Soundscapes
          </h1>
        </CardItem>
        <div className="flex justify-center items-center">
          <CardItem translateZ="30">
            <h2 className="text-center text-xl sm:text-3xl font-medium relative z-20 bg-clip-text text-transparent bg-muted-foreground">
              head in the clouds
            </h2>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}
