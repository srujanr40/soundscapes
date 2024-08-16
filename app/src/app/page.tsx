import NavbarDemo from "../components/NavigationBar/navigationbar"
import Card from '../components/Card/card'
import Footer from '../components/Footer/footer'

export default function Home() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col overflow-y-scroll">
      <div className="absolute pointer-events-none inset-0 flex dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <NavbarDemo />
      <h1 className="container mx-auto my-36 text-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-primary">
        Backgrounds
        <br />
        text here
      </h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Footer />
    </div>
  );
}