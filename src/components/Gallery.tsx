"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "/images/gallery-1.jpeg",
  "/images/gallery-2.jpeg",
  "/images/gallery-3.jpeg",
  "/images/gallery-4.jpeg",
];

export default function Gallery() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: true,
      }),
    ]
  );

  return (
    <div className="rounded-3xl bg-[#0F6B6B] p-6 md:p-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex min-w-full items-center justify-center px-2"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="mx-auto max-h-[80vh] w-auto rounded-3xl shadow-2xl"
              />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 text-center text-sm tracking-[0.3em] text-white/70 uppercase">
        Scorri per vedere altri momenti
      </p>
    </div>
  );
}