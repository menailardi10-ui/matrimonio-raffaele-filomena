export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] pb-24">
      <div className="mx-auto max-w-md px-6 pt-8">

        {/* HERO */}
        <section className="mb-3 flex items-start gap-3">

          {/* SINISTRA */}
          <div className="flex-1">

            <img
              src="/images/logo-rf.svg"
              alt="Logo RF"
              className="mb-3 w-16"
            />

            <h1 className="font-title text-[3.4rem] leading-[0.9] text-[#0F6B6B]">
              Raffaele
              <br />
              <span className="text-gray-400">&</span>
              <br />
              Filomena
            </h1>

            <div className="my-4 flex items-center gap-2">
              <div className="h-px flex-1 bg-gray-300" />
              <span className="text-gray-400">♡</span>
              <div className="h-px flex-1 bg-gray-300" />
            </div>

            <p className="whitespace-nowrap text-sm uppercase tracking-[0.25em] text-[#0F6B6B]">
              24 OTTOBRE 2026
            </p>

            
          </div>

          {/* DESTRA */}
          <div className="w-44 overflow-hidden rounded-bl-[80px] rounded-tl-[80px]">

            <img
              src="/images/hero.jpeg"
              alt="Raffaele e Filomena"
              className="h-52 w-full object-cover"
            />

          </div>

        </section>

        {/* BENVENUTI */}
        <section className="mb-4 text-center">

          <h2 className="font-title text-2xl text-[#0F6B6B]">
            Benvenuti
          </h2>

          <div className="my-2 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-[#0F6B6B]/30" />
            <span className="text-[#0F6B6B]">♡</span>
            <div className="h-px w-12 bg-[#0F6B6B]/30" />
          </div>

          <p className="mx-auto max-w-xs text-[11px] leading-5 text-gray-700">
            Siamo felici di condividere con voi
il nostro giorno speciale.

Qui troverete tutte le informazioni
per vivere insieme a noi questo giorno
indimenticabile.
          </p>

        </section>

        {/* RSVP */}
        <section className="rounded-3xl bg-white p-3 shadow-lg">

          <h3 className="font-title text-xl text-[#0F6B6B] text-center">
            Conferma la tua presenza
          </h3>

          <p className="mt-1 text-[10px] leading-tight text-center">
            entro il
            <span className="font-semibold text-[#0F6B6B]">
              {" "}31 Agosto 2026
            </span>
          </p>

          <div className="my-4 flex items-center gap-2">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-gray-300">♡</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <p className="text-center text-xs leading-5 text-gray-700">
            La vostra presenza renderà
            ancora più speciale questo giorno.
          </p>

          <p className="mt-2 text-center text-xs font-medium text-[#0F6B6B]">
            Tocca il cuore qui sotto
            <br />
            per confermare.
          </p>

          <div className="mt-2 flex justify-end pr-2">
  <div className="text-3xl text-[#0F6B6B] animate-bounce">
    ↘
  </div>
</div>

        </section>

      </div>
    </main>
  );
}