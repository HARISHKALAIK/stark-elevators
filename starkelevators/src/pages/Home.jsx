import { ArrowRight } from "lucide-react";
import elevatorBg from "../assets/bg2.png";
import smart from "../assets/Smart.png"
import space from "../assets/Space.png"
import Emg from "../assets/em.png"
import cust from "../assets/Customized.png"
import ElevatorFeatures from "../components/ElevatorFeatures";
import ElevatorTechnology from "../components/ElevatorTechnology";

import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative flex min-h-[calc(100vh-100px)] items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat md:min-h-[calc(100vh-120px)] mt-20"
        style={{
          backgroundImage: `url(${elevatorBg})`,
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Centered Content */}
        <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-24 text-center text-white sm:px-8">

          {/* Tagline */}
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 sm:text-sm md:text-base">
            Changing the world for a better future
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
            STARK
            <span className="mt-2 block text-2xl font-semibold tracking-[0.12em] sm:text-3xl md:text-5xl">
              NEXT GEN ELEVATORS
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/90 sm:text-lg md:text-xl md:leading-8">
            Elevating your world with innovative technology,
            exceptional safety, and modern elevator solutions.
          </p>

          {/* Contact Button */}
          <Link
  to="/contact"
  className="group mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-amber-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-amber-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-600 hover:shadow-xl sm:px-10 sm:text-lg"
>
  Contact Us

  <ArrowRight
    size={20}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</Link>

          {/* Bottom Accent */}
          <div className="mx-auto mt-12 h-1 w-16 rounded-full bg-amber-400" />
        </div>
      </section>

      {/* Content Below Hero */}
      {/* Content Below Hero */}

{/* Services and Company Information Section */}

<section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50 px-5 py-20 md:px-10 lg:px-16 lg:py-28">

  {/* =====================================
      ANIMATED BACKGROUND
  ===================================== */}

  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

    {/* Large Blue Circle */}
    <div className="floating-circle circle-one absolute left-[4%] top-16 h-28 w-28 rounded-full border-[3px] border-blue-500 bg-blue-300/30" />

    {/* Large Red Circle */}
    <div className="floating-circle circle-two absolute right-[8%] top-28 h-36 w-36 rounded-full border-[3px] border-red-400 bg-red-300/30" />

    {/* Blue Square */}
    <div className="floating-square square-one absolute left-[35%] top-20 h-20 w-20 rounded-2xl border-[3px] border-blue-500 bg-blue-300/30" />

    {/* Red Square */}
    <div className="floating-square square-two absolute bottom-24 left-[12%] h-24 w-24 rounded-2xl border-[3px] border-red-400 bg-red-300/30" />

    {/* Small Blue Bubble */}
    <div className="floating-circle circle-three absolute left-[55%] top-[38%] h-14 w-14 rounded-full border-2 border-blue-500 bg-blue-400/40" />

    {/* Small Red Bubble */}
    <div className="floating-circle circle-four absolute bottom-20 right-[18%] h-16 w-16 rounded-full border-2 border-red-500 bg-red-300/40" />

    {/* Blue Decorative Square */}
    <div className="floating-square square-three absolute right-[30%] top-[60%] h-12 w-12 rounded-xl border-2 border-blue-400 bg-blue-300/30" />

    {/* Red Decorative Square */}
    <div className="floating-square square-four absolute right-[42%] top-12 h-10 w-10 rounded-lg border-2 border-red-400 bg-red-300/30" />

    {/* Small Floating Dots */}
    <div className="floating-circle circle-five absolute left-[25%] top-[55%] h-5 w-5 rounded-full bg-red-500/50" />

    <div className="floating-circle circle-six absolute right-[12%] bottom-[40%] h-6 w-6 rounded-full bg-blue-500/50" />

    <div className="floating-circle circle-seven absolute left-[70%] top-[18%] h-8 w-8 rounded-full border-2 border-red-400 bg-red-200/40" />

  </div>


  {/* =====================================
      MAIN CONTENT
  ===================================== */}

  <div className="relative z-10 mx-auto max-w-7xl ">

    {/* Introduction, Vision and Mission */}

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">

      {/* Introduction */}

      <div className="rounded-2xl border border-white/80 bg-white/75 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg lg:col-span-6">

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
          Who We Are
        </p>

        <h2 className="text-3xl font-bold leading-tight text-blue-950 md:text-4xl">
          We Provide
          <span className="block text-red-600">
            Professional Services.
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-gray-700">
          At STARK Elevators, we design cutting-edge, energy-efficient
          elevator solutions that enhance safety, reduce waiting times,
          and transform urban mobility. We help buildings move people
          smoothly, comfortably, and efficiently.
        </p>

      </div>


      {/* Vision */}

      <div className="rounded-2xl border border-white/80 bg-white/75 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg lg:col-span-3">

        <div className="mb-5 h-1 w-12 rounded-full bg-red-600" />

        <h3 className="text-2xl font-bold text-blue-950">
          Our Vision
        </h3>

        <p className="mt-5 text-base leading-8 text-gray-700">
          To redefine vertical mobility through innovative and sustainable
          elevator solutions that enhance urban living and establish
          new standards for efficiency, safety, and comfort.
        </p>

      </div>


      {/* Mission */}

      <div className="rounded-2xl border border-white/80 bg-white/75 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg lg:col-span-3">

        <div className="mb-5 h-1 w-12 rounded-full bg-red-600" />

        <h3 className="text-2xl font-bold text-blue-950">
          Our Mission
        </h3>

        <p className="mt-5 text-base leading-8 text-gray-700">
          To deliver dependable elevator systems that prioritize passenger
          safety, quality, and seamless user experiences while continuously
          improving our technology and services.
        </p>

      </div>

    </div>


    {/* =====================================
        PROFESSIONAL SERVICES
    ===================================== */}

    <div className="mt-20">

      {/* Services Heading */}

      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

        <div>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            What We Do
          </p>

          <h2 className="text-3xl font-bold text-blue-950 md:text-4xl">
            Our Professional Services
          </h2>

          <div className="mt-4 h-1 w-20 rounded-full bg-red-600" />

        </div>

        <p className="max-w-md text-base leading-7 text-gray-700">
          Complete elevator solutions designed for modern residential
          and commercial buildings.
        </p>

      </div>


      {/* Four Service Cards */}

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-2">


        {/* SERVICE 1: SMART ELEVATORS */}

        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white/95 shadow-md backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-xl">

          <div className="h-52 overflow-hidden">

            <img
              src={smart}
              alt="Smart elevator solutions"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

          </div>

          <div className="p-6">

            <h3 className="text-xl font-bold text-blue-950">
              Smart Elevator Solutions
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-700">
              Advanced technology for smoother rides, reduced waiting
              times, and an improved passenger experience.
            </p>

            <div className="mt-5 h-1 w-10 rounded-full bg-red-600 transition-all duration-500 group-hover:w-20" />

          </div>

        </div>


        {/* SERVICE 2: SPACE-SAVING DESIGNS */}

        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white/95 shadow-md backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-xl">

          <div className="h-52 overflow-hidden">

            <img
              src={space}
              alt="Space-saving elevator designs"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

          </div>

          <div className="p-6">

            <h3 className="text-xl font-bold text-blue-950">
              Space-Saving Designs
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-700">
              Compact, innovative layouts that maximize usable building
              space without compromising comfort or performance.
            </p>

            <div className="mt-5 h-1 w-10 rounded-full bg-red-600 transition-all duration-500 group-hover:w-20" />

          </div>

        </div>


        {/* SERVICE 3: CUSTOMIZED INSTALLATIONS */}

        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white/95 shadow-md backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-xl">

          <div className="h-52 overflow-hidden">

            <img
              src={cust}
              alt="Customized elevator installations"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

          </div>

          <div className="p-6">

            <h3 className="text-xl font-bold text-blue-950">
              Customized Installations
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-700">
              Elevator installation solutions tailored to building layouts
              and architectural requirements.
            </p>

            <div className="mt-5 h-1 w-10 rounded-full bg-red-600 transition-all duration-500 group-hover:w-20" />

          </div>

        </div>


        {/* SERVICE 4: MAINTENANCE AND SUPPORT */}

        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white/95 shadow-md backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-xl">

          <div className="h-52 overflow-hidden">

            <img
              src={Emg}
              alt="Elevator maintenance and support"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

          </div>

          <div className="p-6">

            <h3 className="text-xl font-bold text-blue-950">
              24/7 Maintenance & Support
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-700">
              Reliable maintenance and technical support to help keep
              elevator systems operating safely and efficiently.
            </p>

            <div className="mt-5 h-1 w-10 rounded-full bg-red-600 transition-all duration-500 group-hover:w-20" />

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
<ElevatorFeatures/>
<ElevatorTechnology/>
      
    </main>
  );
}

export default Home;