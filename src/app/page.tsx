export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] pb-24">
      <div className="mx-auto max-w-md px-5 pt-5">

        {/* HERO */}
        <section className="mb-3 flex items-start gap-3">

          {/* SINISTRA */}
          <div className="flex-1">

            <img
              src="/images/logo-rf.svg"
              alt="Logo RF"
              className="mb-3 w-16"
            />

            <h1 className="font-title text-[3rem] leading-[0.9] text-[#0F6B6B]">
              Raffaele
              <br />
              <span className="text-gray-400">&</span>
              <br />
              Filomena
            </h1>

            <div className="my-2 flex items-center gap-2">
              <div className="h-px flex-1 bg-gray-300" />
              <span className="text-gray-400">♡</span>
              <div className="h-px flex-1 bg-gray-300" />
            </div>

            <p className="whitespace-nowrap text-xs uppercase tracking-[0.25em] text-[#0F6B6B]">
              24 OTTOBRE 2026
            </p>

          </div>

          {/* DESTRA */}
          <div className="w-40 overflow-hidden rounded-bl-[70px] rounded-tl-[70px]">

            <img
              src="/images/hero.jpeg"
              alt="Raffaele e Filomena"
              className="h-44 w-full object-cover"
            />

          </div>

        </section>

        {/* BENVENUTI */}
        <section className="mb-3 text-center">

          <h2 className="font-title text-2xl text-[#0F6B6B]">
            Benvenuti
          </h2>

          <div className="my-2 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-[#0F6B6B]/30" />
            <span className="text-[#0F6B6B]">♡</span>
            <div className="h-px w-12 bg-[#0F6B6B]/30" />
          </div>

        </section>

        {/* CONFERMA */}
        <section className="rounded-3xl border border-[#0F6B6B]/10 bg-white p-2.5 shadow-md">

          <h3 className="text-center font-title text-lg text-[#0F6B6B]">
            Conferma la tua presenza
          </h3>

          <p className="mt-1 text-center text-[10px] leading-tight text-gray-600">
            entro il
            <span className="font-semibold text-[#0F6B6B]">
              {" "}31 Agosto 2026
            </span>
          </p>

          <div className="my-3 flex items-center gap-2">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-gray-300">♡</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <p className="text-center text-xs leading-4 text-gray-700">
            La vostra presenza renderà
            ancora più speciale questo giorno.
          </p>

          <p className="mt-2 text-center text-xs font-medium text-[#0F6B6B]">
            Tocca il cuore qui sotto
            <br />
            per confermare
          </p>

          <div className="mt-1 flex justify-end pr-2">
            <div className="animate-bounce text-2xl text-[#0F6B6B]">
              ↘
            </div>
          </div>

        </section>

      </div>
    </main>
  );
}
