import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  ChevronUp,
} from "lucide-react";
import loo from "../assets/logo.jpg"
function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#101827] text-white">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-red-600/10 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-20 -left-32 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

      {/* CTA SECTION */}
      <section className="relative px-5 pb-12 pt-14 sm:px-8 lg:px-12 lg:pb-16 lg:pt-20">
        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[28px] bg-[#e92332] px-6 py-10 text-center sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14 lg:py-14 lg:text-left">

            <div className="pointer-events-none absolute -right-10 -top-20 h-56 w-56 rounded-full border-[35px] border-white/10" />

            <div className="relative z-10">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white/75">
                STARK Next Gen Elevators
              </p>

              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Let's take your
                <br className="hidden sm:block" /> building higher.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/80 lg:mx-0">
                Smart elevator solutions designed for comfort, safety,
                efficiency, and the future of vertical transportation.
              </p>
            </div>

            <a
              href="/contact"
              className="group relative z-10 mx-auto mt-7 inline-flex items-center gap-4 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#e92332] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:mx-0 lg:mt-0"
            >
              Contact Our Team

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e92332] text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={19} />
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <section className="relative px-5 pb-10 sm:px-8 lg:px-12 lg:pb-14">
        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">

            {/* COMPANY INFORMATION */}
            <div className="text-center sm:col-span-2 lg:col-span-4 lg:text-left">

              <a
                href="/"
                className="mb-5 inline-flex items-center justify-center gap-3 lg:justify-start"
              >
                <div className="flex items-center justify-center overflow-hidden rounded-xl bg-white p-1">
                  <img
                    src={loo}
                    alt="STARK Next Gen Elevators"
                    className="h-full w-full object-contain"
                  />
                </div>

                
              </a>

              <p className="mx-auto max-w-sm text-sm leading-7 text-gray-400 lg:mx-0">
                Elevating everyday experiences through innovative
                technology, reliable engineering, and quality elevator
                solutions tailored to modern buildings.
              </p>

              {/* SOCIAL LINKS */}
              <div className="mt-6 flex justify-center gap-3 lg:justify-start">

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xs font-bold transition-all duration-300 hover:border-red-500 hover:bg-red-600"
                >
                  IG
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm font-bold transition-all duration-300 hover:border-red-500 hover:bg-red-600"
                >
                  in
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-lg font-bold transition-all duration-300 hover:border-red-500 hover:bg-red-600"
                >
                  f
                </a>

              </div>
            </div>

            {/* NAVIGATION */}
            <div className="text-center lg:col-span-3 lg:text-left">

              <h3 className="mb-6 text-sm font-extrabold uppercase tracking-[0.15em]">
                Quick Links
                <span className="mx-auto mt-3 block h-1 w-10 rounded-full bg-red-500 lg:mx-0" />
              </h3>

              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center justify-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-white lg:justify-start"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500 transition-transform duration-300 group-hover:scale-150" />

                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div className="text-center sm:col-span-2 lg:col-span-5 lg:text-left">

              <h3 className="mb-6 text-sm font-extrabold uppercase tracking-[0.15em]">
                Get in Touch
                <span className="mx-auto mt-3 block h-1 w-10 rounded-full bg-red-500 lg:mx-0" />
              </h3>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1">

                {/* Phone */}
                <a
                  href="tel:+919535977898"
                  className="group flex flex-col items-center gap-3 sm:justify-start lg:flex-row lg:items-start lg:gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 transition-colors group-hover:bg-red-600 group-hover:text-white">
                    <Phone size={18} />
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Phone Number
                    </p>

                    <p className="text-sm text-gray-300 transition-colors group-hover:text-white">
                      +91 95359 77898
                    </p>

                    <p className="mt-1 text-sm text-gray-300 transition-colors group-hover:text-white">
                      +91 8883393156
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:starkindustriesltd20@gmail.com"
                  className="group flex flex-col items-center gap-3 sm:justify-start lg:flex-row lg:items-start lg:gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 transition-colors group-hover:bg-red-600 group-hover:text-white">
                    <Mail size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Email Address
                    </p>

                    <p className="break-all text-sm text-gray-300 transition-colors group-hover:text-white">
                      starkindustriesltd20@gmail.com
                    </p>
                  </div>
                </a>

                {/* Address */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kachnayakanahalli%2C+Bommasandra%2C+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 sm:justify-start lg:flex-row lg:items-start lg:gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 transition-colors group-hover:bg-red-600 group-hover:text-white">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Office Address
                    </p>

                    <p className="text-sm leading-6 text-gray-300 transition-colors group-hover:text-white">
                      NO.124/1, Kachnayakanahalli,
                      <br />
                      Bommasandra, Bengaluru.
                    </p>
                  </div>
                </a>

              </div>
            </div>

          </div>

          {/* BOTTOM BAR */}
          <div className="flex flex-col items-center gap-5 pt-7 text-center sm:flex-row sm:justify-between sm:text-left">

            <p className="text-xs leading-6 text-gray-500 sm:text-sm">
              © {year}{" "}
              <span className="font-semibold text-gray-300">
                STARK Next Gen Elevators
              </span>
              . All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-gray-500 sm:text-sm">
              <a
                href="/privacy-policy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                className="transition-colors hover:text-white"
              >
                Terms & Conditions
              </a>
            </div>

            <button
              type="button"
              aria-label="Back to top"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-all duration-300 hover:border-red-500 hover:bg-red-600 hover:text-white"
            >
              <ChevronUp size={20} />
            </button>

          </div>

        </div>
      </section>

    </footer>
  );
}

export default Footer;