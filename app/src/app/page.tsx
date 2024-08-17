import NavbarDemo from '../components/NavigationBar/navigationbar'
import HoverCard from '../components/HoverCard/hovercard'
import Footer from '../components/Footer/footer'
import FloatingCard from '../components/FloatingCard/floating-card'
import { ModeToggle } from '../components/DarkModeToggle/dark-mode-toggle'

export default function Home() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col overflow-y-scroll">
      <div className="absolute pointer-events-none inset-0 flex dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <NavbarDemo />
      <div className="flex flex-col justify-center items-center h-[75vh]">
      <FloatingCard />
      </div>
      <HoverCard />
      <Footer />
      <ModeToggle />
    </div>
  )
}
