import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: response } = await supabase
    .from("responses")
    .select("*")
    .eq("id", id)
    .single();

  const { data: participants } = await supabase
    .from("participants")
    .select("*")
    .eq("response_id", id);

  return (
    <main className="min-h-screen bg-[#F8F5F0] p-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/admin"
          className="mb-8 inline-block rounded-xl bg-[#0F6B6B] px-6 py-3 text-white"
        >
          ← Torna alla Dashboard
        </Link>

        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h1 className="mb-6 text-4xl font-bold text-[#0F6B6B]">
            {response?.nome_referente}{" "}
            {response?.cognome_referente}
          </h1>

          <div className="mb-8">
            <p className="text-xl">
              Stato:
              {" "}
              {response?.partecipa
                ? "✅ Presente"
                : "❌ Assente"}
            </p>

            <p className="mt-2 text-xl">
              Partecipanti:
              {" "}
              {response?.numero_partecipanti}
            </p>
          </div>

          <h2 className="mb-6 text-3xl font-semibold">
            Partecipanti
          </h2>

          <div className="space-y-4">
            {participants?.map((p) => (
              <div
                key={p.id}
                className="rounded-2xl border bg-[#F8F5F0] p-6"
              >
                <h3 className="text-xl font-semibold">
                  {p.nome} {p.cognome}
                </h3>

                <p className="mt-2">
                  Fascia età: {p.fascia_eta}
                </p>

                {p.ha_allergie && (
                  <div className="mt-4 rounded-xl bg-red-50 p-4">
                    <p className="font-semibold text-red-600">
                      ⚠️ Allergie / Intolleranze
                    </p>

                    <p className="mt-2">
                      {p.descrizione_allergie}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}