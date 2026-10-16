import { useState } from "react";
import { Link } from "react-router-dom";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Images,
  Maximize2,
} from "lucide-react";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  // Add your gallery images here
  const galleryImages = [
    {
      id: 1,
      title: "Modern Passenger Elevator",
      category: "Passenger Elevators",
      image: "/images/gallery/elevator-1.jpg",
    },
    {
      id: 2,
      title: "Premium Elevator Interior",
      category: "Interiors",
      image: "/images/gallery/elevator-2.jpg",
    },
    {
      id: 3,
      title: "Residential Elevator",
      category: "Residential",
      image: "/images/gallery/elevator-3.jpg",
    },
    {
      id: 4,
      title: "Commercial Elevator",
      category: "Passenger Elevators",
      image: "/images/gallery/elevator-4.jpg",
    },
    {
      id: 5,
      title: "Elegant Elevator Design",
      category: "Interiors",
      image: "/images/gallery/elevator-5.jpg",
    },
    {
      id: 6,
      title: "Home Elevator Installation",
      category: "Residential",
      image: "/images/gallery/elevator-6.jpg",
    },
    {
      id: 7,
      title: "Contemporary Elevator",
      category: "Passenger Elevators",
      image: "/images/gallery/elevator-7.jpg",
    },
    {
      id: 8,
      title: "Luxury Elevator Interior",
      category: "Interiors",
      image: "/images/gallery/elevator-8.jpg",
    },
  ];

  const categories = [
    "All",
    "Passenger Elevators",
    "Interiors",
    "Residential",
  ];

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        );

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const showPrevious = () => {
    const currentIndex = filteredImages.findIndex(
      (item) => item.id === selectedImage.id
    );

    const previousIndex =
      (currentIndex - 1 + filteredImages.length) %
      filteredImages.length;

    setSelectedImage(filteredImages[previousIndex]);
  };

  const showNext = () => {
    const currentIndex = filteredImages.findIndex(
      (item) => item.id === selectedImage.id
    );

    const nextIndex = (currentIndex + 1) % filteredImages.length;

    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 mt-20">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#101827] px-5 py-20 text-center sm:px-8 sm:py-24 lg:px-12 lg:py-28">

        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-red-600/15 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-4xl">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
            <Images size={16} className="text-red-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
              Our Gallery
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Our Work,
            <span className="text-red-500"> Our Gallery.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            Explore our collection of elevator designs, interiors,
            installations, and projects from STARK Next Gen Elevators.
          </p>

        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADING */}
          <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                Discover Our Collection
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-[#101827] sm:text-4xl">
                Our Projects
              </h2>
            </div>

            <p className="text-sm text-slate-500">
              {filteredImages.length} images
            </p>

          </div>

          {/* CATEGORY FILTERS */}
          <div className="mb-10 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "border-red-600 bg-red-600 text-white shadow-lg shadow-red-600/20"
                    : "border-slate-200 bg-white text-slate-600 hover:border-red-300 hover:text-red-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredImages.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => openImage(item)}
                aria-label={`View ${item.title}`}
                className="group relative overflow-hidden rounded-2xl bg-slate-100 text-left outline-none ring-red-500 focus-visible:ring-4"
              >

                {/* Image */}
                <div className="relative h-72 overflow-hidden sm:h-80">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      event.currentTarget.nextElementSibling.style.display =
                        "flex";
                    }}
                  />

                  {/* Fallback if image is missing */}
                  <div className="absolute inset-0 hidden flex-col items-center justify-center bg-slate-100 text-slate-400">
                    <Images size={36} />

                    <span className="mt-3 text-sm">
                      Add your elevator image
                    </span>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101827]/90 via-[#101827]/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* View icon */}
                  <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-[#101827] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Maximize2 size={18} />
                  </div>

                  {/* Image details */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">

                    <span className="inline-block rounded-full bg-red-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      {item.category}
                    </span>

                    <h3 className="mt-3 text-lg font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs text-gray-300">
                      View Image ↗
                    </p>

                  </div>

                </div>
              </button>
            ))}

          </div>

          {/* EMPTY STATE */}
          {filteredImages.length === 0 && (
            <div className="py-16 text-center">
              <Images
                size={40}
                className="mx-auto text-slate-300"
              />

              <p className="mt-4 text-slate-500">
                No images found in this category.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* IMAGE LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080d17]/95 p-4 backdrop-blur-md sm:p-8"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >

          {/* Close button */}
          <button
            type="button"
            onClick={closeImage}
            aria-label="Close image preview"
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-red-600"
          >
            <X size={23} />
          </button>

          {/* Previous */}
          {filteredImages.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-red-600 sm:left-6 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={26} />
            </button>
          )}

          {/* Selected image */}
          <div
            className="relative flex max-h-[90vh] w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[72vh] max-w-full rounded-xl object-contain shadow-2xl"
            />

            <div className="mt-5 text-center">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
                {selectedImage.category}
              </span>

              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                {selectedImage.title}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {filteredImages.findIndex(
                  (item) => item.id === selectedImage.id
                ) + 1}{" "}
                / {filteredImages.length}
              </p>

            </div>

          </div>

          {/* Next */}
          {filteredImages.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-red-600 sm:right-6 sm:h-12 sm:w-12"
            >
              <ChevronRight size={26} />
            </button>
          )}

        </div>
      )}

      {/* BOTTOM CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 rounded-3xl bg-[#101827] p-8 text-center sm:p-12 lg:flex-row lg:text-left">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
              Have a Project in Mind?
            </p>

            <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
              Let's build something exceptional.
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              Contact our team to discuss your elevator requirements.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-red-600 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
          >
            Contact Us

            <ChevronRight size={19} />
          </Link>

        </div>
      </section>

    </main>
  );
}

export default Gallery;