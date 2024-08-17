import NavbarDemo from '../components/NavigationBar/navigationbar'
import Card from '../components/Card/card'
import HoverCard from '../components/HoverCard/hovercard'
import Footer from '../components/Footer/footer'
import { ModeToggle } from '../components/DarkModeToggle/dark-mode-toggle'

export default function Home() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col overflow-y-scroll">
      <div className="absolute pointer-events-none inset-0 flex dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <NavbarDemo />
      <div className="flex justify-center items-center h-[90vh]">
        <h1 className="text-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-primary">
          Backgrounds
          <br />
          text here
        </h1>
      </div>
      <HoverCard />
      <Footer />
      <ModeToggle />
    </div>
  )
}
