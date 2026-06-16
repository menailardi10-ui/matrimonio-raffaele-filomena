import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <main className="bg-[#F8F5F0]">
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Testi */}
            <div className="text-center md:text-left">
              <img
  src="/images/logo-rf.svg"
  alt="Logo RF"
  className="mx-auto mb-8 w-36 md:mx-0"
/>

              <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#0F6B6B]">
                24 Ottobre 2026
              </p>

              <h1 className="font-title text-6xl text-[#0F6B6B] md:text-8xl">
                Raffaele
                <br />
                &
                <br />
                Filomena
              </h1>

              <p className="mt-8 text-xl italic text-gray-600">
                L'inizio di per sempre.
              </p>

              <div className="mt-8 flex justify-center md:justify-start">
                <MusicPlayer />
              </div>
            </div>

            {/* Foto */}
            <div className="flex justify-center">
              <img
                src="/images/hero.jpeg"
                alt="Raffaele e Filomena"
                className="w-full max-w-md rounded-[3rem] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}