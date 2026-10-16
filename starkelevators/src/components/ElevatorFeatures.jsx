import {
  Settings,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
const ElevatorFeatures = () => {
  const operationalFeatures = [
    "Transverse Methodology (MRL)",
    "Dynamic Braking Resistors",
    "Semi-Full Collective LOPS",
    "Sonic Call Buttons",
    "Battery Lowering Device",
    "Safety Ladder for pit access",
    "Anti-Egress Lock Device",
    "Voice Guidance System for Passenger",
    "Blower Fan",
    "Emergency Lighting System",
    "Brake Sensors",
    "Emergency Telecommunicating Devices",
    "Full Height Rear Mirrors on Cabin",
    "Car Top Safety Guards",
    "Emergency Evacuation Latch",
    "Magnetic Brakes on Top of Machine",
    "Ventilated cabin for Adequate Air Flow",
    "Advanced Car door Contractors",
  ];

  const safetyFeatures = [
    "CRISIS Stop Switches-Movement Analysis",
    "Twist Mitigation Car and Car Guide Shoes",
    "Safety Rope for Over Speed Governor",
    "Automatic Rescue Device (ARD)",
    "Full Length Infra Red Screen Sensor for Doors",
    "Progressive Safety Units on Car Bottom",
    "Sensor Type Final Limit Switches",
    "Buffer Spring Suspension for Car & Cwt",
    "Weight Frames",
    "Fire Protective doors",
  ];

  const optionalFeatures = [
    "Multi Features Camera",
    "RFID Access Control",
    "Biometric Access on COP",
    "Load Weighing Devices",
    "Feather Touch Operating Panel",
  ];

  const FeatureCard = ({
    title,
    icon: Icon,
    features,
    className = "",
  }) => (
    <div
      className={`group rounded-2xl border border-white/10 bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:shadow-2xl sm:p-8 ${className}`}
    >
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-950 text-white transition-colors duration-300 group-hover:bg-red-600">
          <Icon size={23} />
        </div>

        <div>
          <h3 className="text-lg font-extrabold text-blue-950 sm:text-xl">
            {title}
          </h3>

          <div className="mt-2 h-1 w-12 rounded-full bg-red-600 transition-all duration-300 group-hover:w-20" />
        </div>
      </div>

      <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
  {features.map((feature, index) => (
    <li
      key={`${feature}-${index}`}
      style={{
        animationDelay: `${index * 80}ms`,
      }}
      className="group flex items-start gap-3 rounded-lg px-3 py-2 text-2sm leading-6 text-gray-900 transition-all duration-300 hover:translate-x-1 hover:bg-red-50 hover:text-blue-950 animate-feature-in"
    >
      <CheckCircle2
        size={17}
        className="mt-1 shrink-0 text-red-600 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
      />

      <span className="transition-colors duration-300">
        {feature}
      </span>
    </li>
  ))}
</ul>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-[#091633] px-5 py-20 sm:px-8 lg:px-16 lg:py-28">

      {/* BACKGROUND DECORATION */}

      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full border border-white/10" />

      <div className="pointer-events-none absolute -right-20 top-32 h-72 w-72 rounded-full border border-red-500/10" />

      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* SECTION HEADER */}

        <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">

          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-red-400">
              <span className="h-px w-10 bg-red-500" />
              Engineering Excellence
            </p>

            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-6xl">
              World-Class Technology
              <span className="mt-2 block font-light text-gray-400">
                Is Yours.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300">
              Discover advanced elevator technology, carefully designed
              safety systems, and flexible features for modern buildings.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <div className="flex items-center gap-3">
              <Sparkles className="text-red-400" size={24} />

              <p className="text-sm font-semibold uppercase tracking-wider text-white">
                Installation Commitment
              </p>
            </div>

            <h3 className="mt-5 text-3xl font-bold text-white">
              Installation
            </h3>

            <p className="mt-2 text-lg font-medium text-red-400">
              Within 13 Days
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Discuss your project requirements with our team to confirm
              installation timelines and specifications.
            </p>
          </div>

        </div>


        {/* OPERATIONAL FEATURES */}

        <div className="mb-7">
          <FeatureCard
            title="Operational Features"
            icon={Settings}
            features={operationalFeatures}
          />
        </div>


        {/* SAFETY AND OPTIONAL FEATURES */}

        <div className="grid gap-7 lg:grid-cols-2">

          <FeatureCard
            title="Safety Features"
            icon={ShieldCheck}
            features={safetyFeatures}
          />

          <FeatureCard
            title="Optional Features"
            icon={Sparkles}
            features={optionalFeatures}
          />

        </div>


        {/* BOTTOM CTA */}

        <div className="mt-12 flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:p-8">

          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Looking for the right elevator solution?
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Contact our team to discuss your building and requirements.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-red-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-red-700"
          >
            Discuss Your Project
            <ArrowUpRight size={20} />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default ElevatorFeatures;