"use client";

import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function EventoPage() {
  const searchParams = useSearchParams();

  const success =
    searchParams.get("success") === "true";
  return (
    <main>
      {success && (
  <div className="bg-green-50 border-b border-green-200">
    <div className="mx-auto max-w-5xl px-6 py-6 text-center">
      <div className="mb-2 text-4xl">
        ✓
      </div>

      <h2 className="text-2xl font-semibold text-green-700">
        Conferma ricevuta
      </h2>

      <p className="mt-2 text-gray-700">
        Grazie per aver confermato la vostra partecipazione.
      </p>

      <p className="mt-1 text-gray-700">
        Non vediamo l'ora di festeggiare insieme a voi.
      </p>
    </div>
  </div>
)}
      <section className="bg-[#F8F5F0] px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="font-title text-6xl">
            Il Nostro Giorno
          </h1>

         <div className="mt-12">
  <Countdown />

  <div className="mt-12 text-center">
    <div className="mx-auto mb-6 h-[2px] w-24 bg-[#C8A96B]" />

    <p className="font-title text-3xl text-[#0F6B6B]">
      24 Ottobre 2026
    </p>

    <p className="mt-2 text-xl text-gray-600">
      Ore 10:30
    </p>

    <p className="mt-6 text-lg italic text-gray-500">
      Manca sempre meno al nostro giorno speciale
    </p>

    <div className="mx-auto mt-6 h-[2px] w-24 bg-[#C8A96B]" />
  </div>
</div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center font-title text-5xl">
            Dove si svolgerà
          </h2>

        <div className="grid gap-8 md:grid-cols-2">
  <div className="rounded-3xl bg-[#F8F5F0] p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
    <div className="mb-4 text-center text-6xl">
      ⛪
    </div>

    <h3 className="text-center text-3xl font-semibold text-[#0F6B6B]">
      Cerimonia
    </h3>

    <p className="mt-4 text-center text-xl">
      Basilica Santuario Madonna della Neve
    </p>

    <p className="mt-2 text-center text-lg text-gray-600">
      Ore 10:30
    </p>

    <a
      href="https://maps.app.goo.gl/j8Ch8Xe5Wb9Vmm269"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 flex items-center justify-center rounded-2xl bg-[#0F6B6B] px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      📍 Apri Navigatore
    </a>
  </div>

  <div className="rounded-3xl bg-[#F8F5F0] p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
    <div className="mb-4 text-center text-6xl">
      🍽️
    </div>

    <h3 className="text-center text-3xl font-semibold text-[#0F6B6B]">
      Ricevimento
    </h3>

    <p className="mt-4 text-center text-xl">
      Punta Castello
    </p>

    <p className="mt-2 text-center text-lg text-gray-600">
      Festeggeremo insieme il nostro giorno speciale
    </p>

    <a
      href="https://maps.app.goo.gl/L4bN7ZR9xmkzPswx9"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 flex items-center justify-center rounded-2xl bg-[#0F6B6B] px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      📍 Apri Navigatore
    </a>
  </div>
</div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center font-title text-5xl">
            I nostri momenti
          </h2>

          <Gallery />
        </div>
      </section>

      <section className="bg-[#F8F5F0] px-6 py-20">
  <div className="mx-auto max-w-4xl text-center">
    <p className="font-title text-4xl leading-relaxed text-[#0F6B6B] md:text-5xl">
      "Ogni storia d'amore è bella,
      <br />
      ma la nostra è la nostra preferita."
    </p>

    <div className="mx-auto mt-8 h-[2px] w-32 bg-[#C8A96B]" />

    <p className="mt-8 text-lg italic text-gray-600">
      Raffaele & Filomena
    </p>
  </div>
</section>

      <section className="bg-[#F8F5F0] px-6 py-20 text-center">
        <Link
          href="/rsvp"
          className="rounded-full bg-[#0F6B6B] px-8 py-4 text-white"
        >
          Conferma la tua presenza
        </Link>
      </section>
    </main>
  );
}