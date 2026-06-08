"use client";

import { useMemo, useState } from "react";

type Response = {
  id: number;
  nome_referente: string;
  cognome_referente: string;
  partecipa: boolean;
  numero_partecipanti: number;
};

export default function AdminTable({
  responses,
}: {
  responses: Response[];
}) {
  const [search, setSearch] = useState("");

  const filteredResponses = useMemo(() => {
    return responses.filter((r) =>
      `${r.nome_referente} ${r.cognome_referente}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [responses, search]);

  return (
    <div className="mt-12 rounded-3xl bg-white p-6 shadow">
      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 Cerca nome o cognome..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border p-4"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-left">
                Referente
              </th>

              <th className="p-3 text-left">
                Stato
              </th>

              <th className="p-3 text-left">
                Partecipanti
              </th>

              <th className="p-3 text-left">
                Dettaglio
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredResponses.map((response) => (
              <tr
                key={response.id}
                className="border-b"
              >
                <td className="p-3">
                  {response.nome_referente}{" "}
                  {response.cognome_referente}
                </td>

                <td className="p-3">
                  {response.partecipa
                    ? "✅ Presente"
                    : "❌ Assente"}
                </td>

                <td className="p-3">
                  {response.numero_partecipanti}
                </td>

                <td className="p-3">
                  <a
                    href={`/admin/${response.id}`}
                    className="rounded-xl bg-[#0F6B6B] px-4 py-2 text-white"
                  >
                    Visualizza
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}