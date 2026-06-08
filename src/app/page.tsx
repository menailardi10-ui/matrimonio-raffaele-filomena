import MusicPlayer from "@/components/MusicPlayer";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="relative h-screen overflow-hidden">
        <img
          src="/images/hero.jpeg"
          alt="Raffaele e Filomena"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

       <div className="relative z-10 flex h-full animate-fadeUp flex-col items-center justify-center px-6 text-center text-white">
          <p className="mb-4 text-sm uppercase tracking-[0.4em]">
            24 Ottobre 2026
          </p>

          <h1 className="font-title text-6xl md:text-8xl">
            Raffaele
            <br />
            &
            <br />
            Filomena
          </h1>

          <p className="mt-8 max-w-md text-lg">
            Ti aspettiamo
          </p>

          <Link
            href="/evento"
            className="mt-10 rounded-full bg-[#0F6B6B] px-8 py-4 text-white"
          >
            Scopri di più
          </Link>
         <MusicPlayer />
        </div>
      </section>
    </main>
  );
}