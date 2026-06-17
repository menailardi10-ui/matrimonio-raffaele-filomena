export default function CerimoniaPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* VIDEO SFONDO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/video-chiesa.mp4"
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENUTO */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-24">

        <div className="max-w-md text-center text-white">

          <h1 className="font-title text-5xl">
            Cerimonia
          </h1>

          <div className="my-4 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-white/40" />
            <span>♡</span>
            <div className="h-px w-12 bg-white/40" />
          </div>

          <p className="text-lg opacity-90">
            24 Ottobre 2026
          </p>

          <p className="mt-4 text-base leading-7 text-white/90">
            Gli sposi vi attendono
            <br />
            per celebrare insieme il loro matrimonio
          </p>

          <div className="mt-10 rounded-3xl bg-white/10 p-6 backdrop-blur-sm">

            <h2 className="font-title text-3xl">
              Basilica Santuario
              <br />
              Madonna della Neve
            </h2>

            <p className="mt-4 text-lg">
              Ore 10:30
            </p>

            <p className="mt-4 text-sm leading-6">
              Piazza Vincenzo Aprea, 2
              <br />
              80147 Napoli (NA)
            </p>

            <a
              href="https://maps.google.com/?q=Piazza+Vincenzo+Aprea+2+Napoli"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full border border-white/40 px-6 py-3 text-sm transition hover:bg-white hover:text-black"
            >
              📍 Apri Maps
            </a>

          </div>

        </div>

      </div>

    </main>
  );
}
