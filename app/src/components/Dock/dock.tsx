'use client'

import React from 'react'
import { FloatingDock } from '@/components/ui/floating-dock'
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from '@tabler/icons-react'
import Image from 'next/image'

export default function Dock() {
  const links = [
    {
      title: 'Home',
      icon: (
        <IconHome className="h-full w-full text-zinc-50 dark:text-neutral-300" />
      ),
      href: '#',
    },

    {
      title: 'Products',
      icon: (
        <IconTerminal2 className="h-full w-full text-zinc-50 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'Components',
      icon: (
        <IconNewSection className="h-full w-full text-zinc-50 dark:text-neutral-300" />
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
      title: 'Changelog',
      icon: (
        <IconExchange className="h-full w-full text-zinc-50 dark:text-neutral-300" />
      ),
      href: '#',
    },

    {
      title: 'Twitter',
      icon: (
        <IconBrandX className="h-full w-full text-zinc-50 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'GitHub',
      icon: (
        <IconBrandGithub className="h-full w-full text-zinc-50 dark:text-neutral-300" />
      ),
      href: '#',
    },
  ]
  return (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center w-auto">
      <FloatingDock items={links} />
    </div>
  )
}
