import Link from "next/link";

export default function GraziePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8F5F0] px-6">
      <div className="text-center">
        <h1 className="font-title text-6xl">
          Grazie
        </h1>

        <p className="mt-6 text-xl">
          Non vediamo l'ora di festeggiare insieme a voi.
        </p>

        <p className="mt-10 text-2xl">
          Raffaele & Filomena
        </p>

        <Link
          href="/"
          className="mt-10 inline-block rounded-full bg-[#0F6B6B] px-8 py-4 text-white"
        >
          Torna alla Home
        </Link>
      </div>
    </main>
  );
}