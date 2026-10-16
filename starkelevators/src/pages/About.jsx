import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Gauge,
  Users,
  Target,
  Eye,
  Award,
  Settings,
  Headset,
  CheckCircle2,
  Building2,
  MoveUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
function About() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Safety First",
      description:
        "Safety-focused solutions designed to support reliable elevator operation and passenger confidence.",
    },
    {
      icon: Gauge,
      title: "Modern Technology",
      description:
        "Innovative elevator technologies designed for smooth movement and efficient performance.",
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      description:
        "Elevator solutions tailored to different building layouts and project requirements.",
    },
    {
      icon: Headset,
      title: "Customer Support",
      description:
        "Responsive service and maintenance support to help keep your elevator systems running.",
    },
  ];

  const commitments = [
    "Quality-focused engineering",
    "Customer-oriented solutions",
    "Reliable service and support",
    "Continuous improvement and innovation",
  ];

  return (
    <main className="overflow-hidden bg-white text-slate-900 mt-20">

      {/* ========================================
          HERO SECTION
      ======================================== */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden bg-[#101827] px-5 py-20 sm:px-8 lg:min-h-[600px] lg:px-12">

        {/* Background decorations */}
        <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-red-600/20 blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Hero content */}
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-red-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
                About STARK
              </span>
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Moving You
              <br />
              <span className="text-red-500">Towards</span> The Future.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              At STARK Next Gen Elevators, we focus on delivering
              modern elevator solutions that bring together technology,
              quality, and dependable service for today's buildings.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

             <Link
  to="/contact"
  className="group inline-flex w-fit items-center justify-center gap-3 rounded-full bg-red-600 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/20"
>
  Work With Us

  <ArrowUpRight
    size={19}
    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  />
</Link>

              {/* <a
                href="#our-story"
                className="inline-flex w-fit items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/5"
              >
                Discover Our Story

                <ArrowRight size={18} />
              </a> */}

            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">

            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-tr-[40px] border-r-2 border-t-2 border-red-500/70 sm:-right-6 sm:-top-6" />

            <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-bl-[40px] border-b-2 border-l-2 border-white/20 sm:-bottom-6 sm:-left-6" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-3 shadow-2xl">

              <img
                src="/images/about-elevator.jpg"
                alt="Modern elevator installation"
                className="h-[320px] w-full rounded-[20px] object-cover sm:h-[400px] lg:h-[450px]"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              {/* Visual overlay */}
              <div className="pointer-events-none absolute inset-3 rounded-[20px] bg-gradient-to-t from-[#101827]/80 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7">
                <div className="flex items-end justify-between gap-4">

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
                      STARK Next Gen Elevators
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                      Elevating Standards.
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                    <Building2 size={23} />
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================
          COMPANY INTRODUCTION
      ======================================== */}
      

      {/* ========================================
          OUR CORE VALUES
      ======================================== */}
      <section className="bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-2xl text-center">

            <p className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-red-600">
              <span className="h-1 w-8 rounded-full bg-red-600" />
              What Defines Us
              <span className="h-1 w-8 rounded-full bg-red-600" />
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#101827] sm:text-4xl lg:text-5xl">
              Our Core Values
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-500">
              The principles that guide our approach to elevator
              technology, customer relationships, and service.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl hover:shadow-slate-200/60 sm:p-8"
                >

                  <div className="absolute right-5 top-5 text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-red-50">
                    0{index + 1}
                  </div>

                  <div className="relative z-10">

                    <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                      <Icon size={25} />
                    </div>

                    <h3 className="text-xl font-bold text-[#101827]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>

                    <div className="mt-6 h-1 w-10 rounded-full bg-red-600 transition-all duration-300 group-hover:w-20" />

                  </div>
                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* ========================================
          MISSION & VISION
      ======================================== */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">

            {/* Mission */}
            <article className="relative overflow-hidden rounded-[28px] bg-[#101827] p-8 sm:p-10 lg:p-12">

              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border-[35px] border-white/[0.04]" />

              <div className="relative z-10">

                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white">
                  <Target size={27} />
                </div>

                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
                  Our Purpose
                </p>

                <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Our Mission
                </h3>

                <p className="mt-6 text-base leading-8 text-gray-400">
                  To provide dependable, quality-focused elevator
                  solutions that address customer requirements while
                  emphasizing safety, performance, service, and
                  continuous improvement.
                </p>

              </div>
            </article>

            {/* Vision */}
            <article className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 sm:p-10 lg:p-12">

              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-red-50" />

              <div className="relative z-10">

                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                  <Eye size={27} />
                </div>

                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                  Our Direction
                </p>

                <h3 className="text-3xl font-extrabold text-[#101827] sm:text-4xl">
                  Our Vision
                </h3>

                <p className="mt-6 text-base leading-8 text-slate-500">
                  To work towards a future where elevator systems
                  combine modern technology, thoughtful design,
                  dependable performance, and improved user
                  experiences across different building environments.
                </p>

              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ========================================
          FINAL CTA
      ======================================== */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-red-600 px-6 py-14 text-center sm:px-12 sm:py-16 lg:px-20 lg:py-20">

          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border-[40px] border-white/10" />

          <div className="pointer-events-none absolute -bottom-32 -right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10">

            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-white/75">
              Let's Move Forward
            </p>

            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-6xl">
              Ready to Elevate Your Next Project?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              Contact our team to discuss your elevator requirements
              and explore a solution tailored to your building.
            </p>

            <Link
              to="/contact"
              className="group mx-auto mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-red-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Get in Touch

              <MoveUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}

export default About;