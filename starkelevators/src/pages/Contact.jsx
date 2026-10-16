import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
  Clock,
  CheckCircle2,
} from "lucide-react";

import  logoo from "../assets/logo.jpg"
function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Frontend validation succeeds, but no message is sent to a server.
    setSubmitted(true);
  };

  const contactDetails = [
    {
      icon: Phone,
      title: "Phone Number",
      lines: ["+91 95359 77898", "+91 8883393156"],
      href: "tel:+919535977898",
    },
    {
      icon: Mail,
      title: "Email Address",
      lines: ["starkindustriesltd20@gmail.com"],
      href: "mailto:starkindustriesltd20@gmail.com",
    },
    {
      icon: MapPin,
      title: "Our Location",
      lines: [
        "NO.124/1, Kachnayakanahalli,",
        "Bommasandra, Bengaluru.",
      ],
      href: "https://www.google.com/maps/search/?api=1&query=Kachnayakanahalli%2C+Bommasandra%2C+Bengaluru",
    },
  ];

  return (
    <>
    
    
   
    <main className="min-h-screen bg-white text-slate-900 mt-15">
        

      {/* PAGE HEADER */}
      <section className="relative overflow-hidden bg-[#101827] px-5 py-20 text-center sm:py-24 lg:py-28">

        <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-red-600/15 blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-4xl">

          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Get in Touch
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Contact <span className="text-red-500">Us.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            Have a project in mind or need an elevator solution?
            Get in touch with our team. We would be happy to discuss
            your requirements.
          </p>

        </div>
      </section>

      {/* MAIN CONTACT CONTENT */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        <div className="mx-auto max-w-7xl">

          {/* TOP ROW: LOGO / COMPANY INFO + CONTACT FORM */}
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">

            {/* LEFT: COMPANY LOGO AND INTRODUCTION */}
            <div className="lg:col-span-4">

              <div className="flex items-center gap-4">

                <div className="flex h-20 w-70 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
                  <img
                    src={logoo}
                    alt="STARK Next Gen Elevators logo"
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* <div>
                  <h2 className="text-2xl font-black tracking-wide text-[#101827] sm:text-3xl">
                    STARK
                  </h2>

                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-red-600">
                    Next Gen Elevators
                  </p>
                </div> */}

              </div>

              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                  Let's Connect
                </p>

                <h3 className="mt-4 text-3xl font-extrabold leading-tight text-[#101827] sm:text-4xl">
                  Let's discuss your
                  <span className="text-red-600"> next project.</span>
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
                  Whether you need a new elevator installation,
                  customized solutions, or maintenance support,
                  contact STARK Next Gen Elevators to discuss
                  your requirements.
                </p>
              </div>

              {/* Small highlight */}
              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                    <Clock size={21} />
                  </div>

                  <div>
                    <h4 className="font-bold text-[#101827]">
                      Need assistance?
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Send us your enquiry using the form. Include
                      your project details so our team can understand
                      what you need.
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* RIGHT: CONTACT FORM */}
            <div className="lg:col-span-8">

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_50px_rgba(15,23,42,0.05)] sm:p-9 lg:p-10">

                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                    Send an Enquiry
                  </p>

                  <h2 className="mt-3 text-2xl font-extrabold text-[#101827] sm:text-3xl">
                    We'd love to hear from you.
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Fill in the details below to tell us about your requirements.
                  </p>
                </div>

                {submitted ? (
                  <div
                    role="status"
                    className="rounded-2xl border border-green-200 bg-green-50 p-6"
                  >
                    <CheckCircle2
                      size={35}
                      className="text-green-600"
                    />

                    <h3 className="mt-4 text-xl font-bold text-green-900">
                      Form validated successfully!
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-green-800">
                      Your details have been validated in the browser,
                      but no email or server submission has been configured yet.
                    </p>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-5 text-sm font-bold text-green-800 underline underline-offset-4"
                    >
                      Back to form
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* NAME FIELDS */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                      <div>
                        <label
                          htmlFor="firstName"
                          className="mb-2 block text-sm font-semibold text-slate-700"
                        >
                          First Name <span className="text-red-600">*</span>
                        </label>

                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          autoComplete="given-name"
                          placeholder="Enter your first name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                        />
                      </div>

                     <div>
  <label
    htmlFor="mobileNumber"
    className="mb-2 block text-sm font-semibold text-slate-700"
  >
    Mobile Number <span className="text-red-600">*</span>
  </label>

  <input
    id="mobileNumber"
    name="mobileNumber"
    type="tel"
    autoComplete="tel"
    inputMode="numeric"
    pattern="[0-9]{10}"
    maxLength={10}
    placeholder="Enter your mobile number"
    value={formData.mobileNumber}
    onChange={(e) => {
      const value = e.target.value.replace(/\D/g, "").slice(0, 10);

      setFormData((previous) => ({
        ...previous,
        mobileNumber: value,
      }));
    }}
    required
    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
  />
</div>

                    </div>

                    {/* EMAIL */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Email Address <span className="text-red-600">*</span>
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                      />
                    </div>

                    {/* SUBJECT */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Subject
                      </label>

                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What is your enquiry about?"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                      />
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Your Message <span className="text-red-600">*</span>
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your project or requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                      />
                    </div>

                    {/* SUBMIT */}
                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 px-6 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20 sm:w-auto"
                    >
                      Submit Enquiry

                      <Send
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>

                    <p className="text-xs leading-5 text-slate-400">
                      Fields marked with * are required.
                    </p>

                  </form>
                )}

              </div>
            </div>

          </div>

          {/* DIVIDER */}
          <div className="my-16 h-px bg-slate-200 sm:my-20" />

          {/* BOTTOM ROW: MAP LEFT, CONTACT DETAILS RIGHT */}
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">

            {/* LEFT: GOOGLE MAP */}
            <div>

              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                  Find Us
                </p>

                <h2 className="mt-3 text-2xl font-extrabold text-[#101827] sm:text-3xl">
                  Visit Our Location
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Find our location in Bommasandra, Bengaluru.
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">

                <iframe
                  title="STARK Next Gen Elevators location in Bommasandra, Bengaluru"
                  src="https://www.google.com/maps?q=Kachnayakanahalli%2C+Bommasandra%2C+Bengaluru&output=embed"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="block w-full"
                />

              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Kachnayakanahalli%2C+Bommasandra%2C+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700"
              >
                Open in Google Maps

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

            </div>

            {/* RIGHT: CONTACT INFORMATION */}
            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                Contact Information
              </p>

              <h2 className="mt-3 text-2xl font-extrabold text-[#101827] sm:text-3xl">
                We're Here to Help.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Contact us by phone or email, or visit our location
                to discuss your elevator requirements.
              </p>

              <div className="mt-8 space-y-5">

                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target={
                        item.title === "Our Location"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.title === "Our Location"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex min-w-0 items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-red-200 hover:bg-red-50/30 sm:p-6"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                        <Icon size={21} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-[#101827]">
                          {item.title}
                        </h3>

                        {item.lines.map((line) => (
                          <p
                            key={line}
                            className="mt-1 break-words text-sm leading-6 text-slate-500"
                          >
                            {line}
                          </p>
                        ))}
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="mt-1 shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-red-600"
                      />
                    </a>
                  );
                })}

              </div>

              {/* EXTRA CTA */}
              <div className="mt-7 rounded-2xl bg-[#101827] p-6 text-white sm:p-8">

                <h3 className="text-xl font-bold">
                  Have a project in mind?
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Tell us what you need, and let's explore the right
                  elevator solution for your building.
                </p>

                <a
                  href="tel:+919535977898"
                  className="mt-5 inline-flex items-center gap-3 rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700"
                >
                  <Phone size={17} />
                  Call Our Team
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
     </>
  );
}

export default Contact;