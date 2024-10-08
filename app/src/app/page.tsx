import NavbarContainer from '../components/NavigationBar/navigationbar'
import HoverCard from '../components/HoverCard/hovercard'
import Footer from '../components/Footer/footer'
import TitleCard from '../components/TitleCard/title-card'
import Dock from '../components/Dock/dock'
import { AudioProvider } from '../components/AudioContext';

export default function Home() {
  return (
    <div className="min-h-screen w-full dark:bg-neutral-950 bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col overflow-y-scroll">
      <div className="absolute pointer-events-none inset-0 flex dark:bg-neutral-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <NavbarContainer />
      <div className="flex flex-col justify-center items-center h-[75vh]">
        <TitleCard />
      </div>
      <AudioProvider>
        <HoverCard />
        <Dock />
      </AudioProvider>
      <Footer />
    </div>
  )
}
