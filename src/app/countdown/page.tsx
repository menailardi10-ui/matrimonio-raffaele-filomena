"use client";

import { useEffect, useState } from "react";

export default function CountdownPage() {
  const weddingDate = new Date("2026-10-24T11:00:00");

  const [timeLeft, setTimeLeft] = useState({
    giorni: 0,
    ore: 0,
    minuti: 0,
    secondi: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        giorni: Math.floor(distance / (1000 * 60 * 60 * 24)),
        ore: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minuti: Math.floor(
          (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        secondi: Math.floor(
          (distance % (1000 * 60)) / 1000
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#F8F5F0] px-6 py-10 pb-28">
      <div className="mx-auto max-w-md text-center">

        <h1 className="font-title text-6xl text-[#0F6B6B]">
          Countdown
        </h1>

        <div className="my-4 flex items-center justify-center gap-2">
          <div className="h-px w-12 bg-[#0F6B6B]/30" />
          <span className="text-[#0F6B6B]">♡</span>
          <div className="h-px w-12 bg-[#0F6B6B]/30" />
        </div>

        <p className="mb-10 text-gray-600">
          Ogni secondo ci avvicina al sì
        </p>

        <div className="grid grid-cols-2 gap-4">

          <div className="rounded-3xl bg-white p-6 shadow-md border border-[#0F6B6B]/10 ">
            <p className="text-6xl font-bold text-[#0F6B6B]">
              {timeLeft.giorni}
            </p>
            <p className="mt-2 text-sm uppercase tracking-wider text-gray-500">
              Giorni
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md border border-[#0F6B6B]/10">
            <p className="text-6xl font-bold text-[#0F6B6B]">
              {timeLeft.ore}
            </p>
            <p className="mt-2 text-sm uppercase tracking-wider text-gray-500">
              Ore
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md border border-[#0F6B6B]/10">
            <p className="text-6xl font-bold text-[#0F6B6B]">
              {timeLeft.minuti}
            </p>
            <p className="mt-2 text-sm uppercase tracking-wider text-gray-500">
              Minuti
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md border border-[#0F6B6B]/10">
            <p className="text-6xl font-bold text-[#0F6B6B]">
              {timeLeft.secondi}
            </p>
            <p className="mt-2 text-sm uppercase tracking-wider text-gray-500">
              Secondi
            </p>
          </div>

        </div>

        <div className="mt-10">
          <p className="font-title text-3xl text-[#0F6B6B]">
            24 Ottobre 2026
          </p>

          <p className="mt-4 font-title text-2xl text-[#0F6B6B]">
  Raffaele & Filomena
</p>

          <p className="mt-2 text-gray-500 italic">
            Non vediamo l'ora di festeggiare con voi.
          </p>
        </div>

      </div>
    </main>
  );
}