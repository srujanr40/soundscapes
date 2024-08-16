import NavbarDemo from "../components/NavigationBar/navigationbar"

export default function Home() {
  return (
    <div className="container h-[60rem] w-[600rem] dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col overflow-auto">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <NavbarDemo />
      <p className="container mx-auto my-36 text-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        Backgrounds
        <br />
        text here
      </p>
    </div>
  );
}
