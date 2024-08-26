'use client'
import React, { useState } from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem } from '../ui/navbar-menu'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  )
}

function Navbar({ className }: { className?: string }) {
  const { setTheme } = useTheme()
  const [active, setActive] = useState<string | null>(null)
  return (
    <div
      className={cn(
        'fixed top-10 inset-x-0 max-w-lg mx-auto z-50 border border-gray-100 dark:border-slate-900 shadow-lg shadow-slate-200 dark:shadow-gray-950 rounded-full', // Added border and shadow classes
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://srujanr40.github.io/personal_website/" target="_blank">Website</HoveredLink>
            <HoveredLink href="https://github.com/srujanr40">GitHub</HoveredLink>
            <HoveredLink href="mailto:srujanr40@gmail.com">Email</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Suggestions">
          <div className="text-sm p-4">
            <ProductItem
              title="Want to hear more?"
              href="https://algochurn.com"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVTWL4dqk9ZokaiRQe0kdV3_dNvkB7A3xTw&s"
              description="Send me suggestions for sounds that you would like to hear on Soundscapes"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Theme">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="" onClick={() => setTheme('light')}>
              Light
            </HoveredLink>
            <HoveredLink href="" onClick={() => setTheme('dark')}>
              Dark
            </HoveredLink>
            <HoveredLink href="" onClick={() => setTheme('system')}>
              System
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}
