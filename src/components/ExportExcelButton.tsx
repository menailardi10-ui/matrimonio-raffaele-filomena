"use client";

import * as XLSX from "xlsx";

export default function ExportExcelButton({
  participants,
}: {
  participants: any[];
}) {
  const exportExcel = () => {
    const data = participants.map((p) => ({
      Nome: p.nome,
      Cognome: p.cognome,
      "Fascia Età": p.fascia_eta,
      Allergie: p.ha_allergie ? "SI" : "NO",
      Descrizione:
        p.descrizione_allergie || "",
    }));

    const worksheet =
      XLSX.utils.json_to_sheet(data);

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Invitati"
    );

    XLSX.writeFile(
      workbook,
      "lista-invitati.xlsx"
    );
  };

  return (
    <button
      onClick={exportExcel}
      className="rounded-2xl bg-green-600 px-6 py-4 text-white shadow-lg transition hover:scale-105"
    >
      📥 Esporta Excel
    </button>
  );
}