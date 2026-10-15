import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

/* =========================================
   TECHNOLOGY FEATURES
========================================= */

const technologyItems = [
  {
    title: "Bottom Suspension Design",
    description:
      "Our advanced bottom suspension offers a smoother, more stable ride by reducing vibrations and enhancing passenger safety.",
  },
  {
    title: "Pythagoras Rail Alignment",
    description:
      "Precision-focused rail alignment supports smooth elevator movement and helps maintain consistent performance.",
  },
  {
    title: "Energy Efficiency",
    description:
      "Our elevator solutions focus on efficient operation and optimized performance to support modern buildings.",
  },
];

/* =========================================
   MAINTENANCE FEATURES
========================================= */

const maintenanceItems = [
  {
    title: "Breakdown and Elevator Repair",
    description: [
      "At STARK Elevators, we bring our expertise to every installation, using quality materials and technology to support reliability and safety.",
      "Our experienced technicians handle elevator repairs, from minor issues to major breakdowns, with responsive and cost-effective solutions.",
      "We aim to minimize downtime by providing timely repairs so your business can run smoothly.",
    ],
  },
  {
    title: "Elevator Maintenance & Servicing",
    description: [
      "Regular maintenance helps identify potential issues and supports the reliable operation of your elevator system.",
      "Our servicing focuses on inspecting key components, checking system performance, and addressing maintenance needs.",
      "Contact our team to discuss a maintenance schedule suitable for your building.",
    ],
  },
  {
    title: "Elevator Modernization",
    description: [
      "Modernization can help improve the performance, appearance, and functionality of existing elevator systems.",
      "We assess your requirements and discuss suitable upgrades for your building and elevator equipment.",
    ],
  },
];

/* =========================================
   ACCORDION ITEM
========================================= */

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-300 sm:px-6 ${
          isOpen
            ? "bg-[#0b173b] text-white"
            : "bg-white text-[#0b173b] hover:bg-gray-50"
        }`}
      >
        <span className="flex items-center gap-3">

          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              isOpen
                ? "bg-white/10 text-cyan-300"
                : "bg-gray-100 text-[#0b173b]"
            }`}
          >
            {isOpen ? <Minus size={17} /> : <Plus size={17} />}
          </span>

          <span
            className={`text-sm font-semibold sm:text-base ${
              isOpen ? "text-cyan-300" : "text-[#0b173b]"
            }`}
          >
            {item.title}
          </span>

        </span>

        <ArrowUpRight
          size={18}
          className={`shrink-0 transition-transform duration-300 ${
            isOpen
              ? "rotate-45 text-cyan-300"
              : "text-gray-400"
          }`}
        />

      </button>

      {/* EXPANDABLE CONTENT */}

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">

          <div
            className={`bg-gray-50 px-5 transition-all duration-300 sm:px-6 ${
              isOpen
                ? "py-5 opacity-100"
                : "py-0 opacity-0"
            }`}
          >

            {Array.isArray(item.description) ? (
              <ul className="space-y-3">

                {item.description.map((paragraph, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-7 text-gray-600"
                  >
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />

                    <span>{paragraph}</span>
                  </li>
                ))}

              </ul>
            ) : (
              <p className="text-sm leading-7 text-gray-600">
                {item.description}
              </p>
            )}

          </div>

        </div>
      </div>

    </div>
  );
}

/* =========================================
   ACCORDION CARD
========================================= */

function AccordionCard({ title, items, initialOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(initialOpen);

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">

      {/* CARD HEADER */}

      <div className="relative border-b border-gray-200 bg-white px-5 py-6 sm:px-7">

        <div className="absolute left-0 top-0 h-1 w-16 bg-red-600 transition-all duration-500 group-hover:w-full" />

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
          STARK NEXTGEN ELEVATORS
        </p>

        <h3 className="mt-3 text-xl font-extrabold text-[#0b173b] sm:text-2xl">
          {title}
        </h3>

        <div className="mt-3 h-1 w-12 rounded-full bg-red-600" />

      </div>

      {/* ACCORDION ITEMS */}

      <div>
        {items.map((item, index) => (
          <AccordionItem
            key={item.title}
            item={item}
            isOpen={openIndex === index}
            onToggle={() =>
              setOpenIndex(openIndex === index ? -1 : index)
            }
          />
        ))}
      </div>

    </div>
  );
}

/* =========================================
   MAIN ELEVATOR TECHNOLOGY COMPONENT
========================================= */

export default function ElevatorTechnology() {
  return (
    <section className="elevator-tech-bg relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">

      {/* =====================================
          ANIMATED BACKGROUND
      ===================================== */}

      <div
        className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden"
        aria-hidden="true"
      >

        {/* BLUE FLOATING ORB */}

        <div className="tech-orb tech-orb-blue absolute -left-32 top-16 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

        {/* RED FLOATING ORB */}

        <div className="tech-orb tech-orb-red absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />

        {/* CYAN FLOATING ORB */}

        <div className="tech-orb tech-orb-light absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        {/* ANIMATED GRID */}

        <div className="tech-grid absolute inset-0" />

        {/* FLOATING SHAPES */}

        <div className="tech-shape tech-shape-one absolute left-[8%] top-[15%] h-16 w-16 rounded-xl border border-cyan-300/20" />

        <div className="tech-shape tech-shape-two absolute right-[10%] top-[18%] h-24 w-24 rounded-full border border-red-400/20" />

        <div className="tech-shape tech-shape-three absolute bottom-[12%] left-[45%] h-20 w-20 rounded-2xl border border-blue-300/20" />

        <div className="tech-shape tech-shape-four absolute bottom-[20%] right-[18%] h-12 w-12 rounded-full border border-cyan-200/20" />

      </div>

      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TECHNOLOGY SECTION */}

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT */}

          <div className="lg:sticky lg:top-28">

            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-red-400">
              <span className="h-px w-10 bg-red-500" />
              Engineering Excellence
            </p>

            <h2 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">

              Advanced Bottom Suspension

              <span className="mt-2 block font-light text-gray-400">
                Technology
              </span>

            </h2>

            <div className="mt-6 h-1 w-24 rounded-full bg-red-500" />

            <p className="mt-6 max-w-lg text-base leading-8 text-gray-300">
              Discover thoughtfully engineered elevator technology
              designed to support smooth operation, reliable performance,
              and passenger comfort.
            </p>

          </div>

          {/* TECHNOLOGY ACCORDION */}

          <AccordionCard
            title="Technology Features"
            items={technologyItems}
            initialOpen={0}
          />

        </div>

        {/* =====================================
            MAINTENANCE SECTION
        ===================================== */}

        <div className="mx-auto mt-20 max-w-5xl lg:mt-28">

          {/* SECTION HEADING */}

          <div className="mb-10 text-center">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-red-400">
              Dependable Service
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Maintenance & Support
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
              Explore our repair, maintenance, and modernization
              services for your elevator systems.
            </p>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-red-500" />

          </div>

          {/* MAINTENANCE ACCORDION */}

          <AccordionCard
            title="Our Maintenance Services"
            items={maintenanceItems}
            initialOpen={0}
          />

        </div>

      </div>

    </section>
  );
}