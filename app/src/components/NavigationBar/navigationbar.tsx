'use client'
import React, { useState, useRef, useEffect } from 'react';
import { HoveredLink, Menu, MenuItem, ProductItem } from '../ui/navbar-menu';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import SuggestionsForm from '../SuggestionsForm/suggestions-form';

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const { setTheme } = useTheme();
  const [active, setActive] = useState<string | null>(null);
  const [isSuggestionsFormVisible, setIsSuggestionsFormVisible] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(event.target as Node)) {
      setIsSuggestionsFormVisible(false);
    }
  };

  useEffect(() => {
    if (isSuggestionsFormVisible) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSuggestionsFormVisible]);

  return (
    <div className={isSuggestionsFormVisible ? 'blur-background' : ''}>
      <div
        className={cn(
          'fixed top-10 inset-x-0 max-w-sm mx-auto z-50 border border-gray-100 dark:border-slate-900 shadow-lg shadow-slate-200 dark:shadow-gray-950 rounded-full', // Added border and shadow classes
          className
        )}
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink
                href="https://srujanr40.github.io/personal_website/"
                target="_blank"
              >
                Website
              </HoveredLink>
              <HoveredLink href="https://github.com/srujanr40" target="_blank">
                GitHub
              </HoveredLink>
              <HoveredLink href="mailto:srujanr40@gmail.com">Email</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Suggestions">
            <div className="text-sm p-4" onClick={() => setIsSuggestionsFormVisible(true)}>
              <ProductItem
                title="Want to hear more?"
                href="#"
                src="/suggestions.png"
                description="Send me suggestions for sounds that you would like to hear on Soundscapes"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Theme">
            <div className="flex flex-col space-y-4 text-sm">
              <div className="cursor-pointer" onClick={() => setTheme('light')}>
                Light
              </div>
              <div className="cursor-pointer" onClick={() => setTheme('dark')}>
                Dark
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setTheme('system')}
              >
                System
              </div>
            </div>
          </MenuItem>
        </Menu>
      </div>
      {isSuggestionsFormVisible && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="rounded-lg shadow-lg z-60" ref={formRef}>
            <SuggestionsForm closeModal={() => setIsSuggestionsFormVisible(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
