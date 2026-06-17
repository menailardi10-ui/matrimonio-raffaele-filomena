"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type Partecipante = {
  nome: string;
  cognome: string;
  fasciaEta: string;
  haAllergie: boolean;
  descrizioneAllergie: string;
};

export default function RsvpForm() {
  const RSVP_DEADLINE = new Date("2026-08-31");
const RSVP_CLOSED = new Date() > RSVP_DEADLINE;
  const [nomeReferente, setNomeReferente] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
const [loading, setLoading] = useState(false);
  const [cognomeReferente, setCognomeReferente] = useState("");

  const [partecipa, setPartecipa] = useState("");
  const [numeroPartecipanti, setNumeroPartecipanti] = useState(1);

 const [partecipanti, setPartecipanti] = useState<Partecipante[]>([
  {
    nome: "",
    cognome: "",
    fasciaEta: "",
    haAllergie: false,
    descrizioneAllergie: "",
  },
]);

 const generaPartecipanti = (numero: number) => {
  const nuovi = Array.from(
    { length: numero },
    (_, index) => ({
      nome: index === 0 ? nomeReferente : "",
      cognome: index === 0 ? cognomeReferente : "",
      fasciaEta: "",
      haAllergie: false,
      descrizioneAllergie: "",
    })
  );

  setPartecipanti(nuovi);
};

  const aggiornaPartecipante = (
    index: number,
    campo: keyof Partecipante,
    valore: string | boolean
  ) => {
    const copia = [...partecipanti];

    copia[index] = {
      ...copia[index],
      [campo]: valore,
    };

    setPartecipanti(copia);
  };

  const inviaConferma = async () => {
    try {setLoading(true);
    
      if (!nomeReferente || !cognomeReferente) {
        alert("Inserisci nome e cognome referente.");
        return;
      }

      if (!partecipa) {
        alert("Seleziona se parteciperai o meno.");
        return;
      }

      const { data: esistente } = await supabase
        .from("responses")
        .select("id")
        .eq("nome_referente", nomeReferente)
        .eq("cognome_referente", cognomeReferente)
        .maybeSingle();

      if (esistente) {
        alert(
          "Hai già inviato una conferma. Per eventuali modifiche contatta gli sposi."
        );
        return;
      }

      if (partecipa === "si") {
        for (const partecipante of partecipanti) {
          if (
            !partecipante.nome ||
            !partecipante.cognome ||
            !partecipante.fasciaEta
          ) {
            alert(
              "Compila nome, cognome e fascia età di tutti i partecipanti."
            );
            return;
          }
        }
      }

      const { data, error } = await supabase
        .from("responses")
        .insert({
          nome_referente: nomeReferente,
          cognome_referente: cognomeReferente,
          partecipa: partecipa === "si",
          numero_partecipanti:
            partecipa === "si"
              ? partecipanti.length
              : 0,
        })
        .select()
        .single();

      if (error) throw error;

      if (partecipa === "si") {
        const partecipantiDaSalvare = partecipanti.map(
          (p) => ({
            response_id: data.id,
            nome: p.nome,
            cognome: p.cognome,
            fascia_eta: p.fasciaEta,
            ha_allergie: p.haAllergie,
            descrizione_allergie:
              p.descrizioneAllergie,
          })
        );

        const { error: participantsError } =
          await supabase
            .from("participants")
            .insert(partecipantiDaSalvare);

        if (participantsError)
          throw participantsError;
      }

      setShowSuccess(true);

setTimeout(() => {
 window.location.href = "/grazie";
}, 3000);
    } catch (error) {
      console.error(error);

     setLoading(false);

alert(
  "Si è verificato un errore durante il salvataggio."
);
    }
  };

  if (RSVP_CLOSED) {
  return (
    <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl text-center">
      <h2 className="mb-6 text-4xl font-title">
        Conferme Chiuse
      </h2>

      <p className="text-lg text-gray-600">
        Le conferme online sono terminate.
      </p>

      <p className="mt-4 text-lg">
        Per modifiche o comunicazioni contattare
        direttamente gli sposi.
      </p>
    </div>
  );
}

return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-[#0F6B6B]/10 bg-white p-6 shadow-md">
      {showSuccess && (
  <div className="mb-8 rounded-3xl border-2 border-[#0F6B6B] bg-[#F8F5F0] p-8 text-center shadow-lg">
    <div className="mb-4 text-5xl">
      ✓
    </div>

    <h3 className="font-title text-3xl text-[#0F6B6B]">
      Conferma ricevuta
    </h3>

    <p className="mt-4 text-lg">
      Grazie per aver confermato la vostra partecipazione.
    </p>

    <p className="mt-2 text-lg">
      Verrai reindirizzato tra pochi secondi...
    </p>
  </div>
)}
      <div className="mb-10 text-center">

  <div className="mb-2 text-[#0F6B6B] text-xl">
    ♡
  </div>

  <h2 className="font-title text-4xl text-[#0F6B6B]">
    Conferma la tua presenza
  </h2>

  <div className="my-3 flex items-center justify-center gap-2">
    <div className="h-px w-10 bg-[#0F6B6B]/30" />
    <span className="text-[#0F6B6B]">♡</span>
    <div className="h-px w-10 bg-[#0F6B6B]/30" />
  </div>

  <p className="text-sm text-gray-500">
    Entro il
    <span className="font-semibold text-[#0F6B6B]">
      {" "}31 Agosto 2026
    </span>
  </p>

  <p className="mt-4 text-sm leading-6 text-gray-600">
    La vostra presenza renderà
    <br />
    ancora più speciale questo giorno.
  </p>

</div>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block">
            Nome referente *
          </label>

          <input
            type="text"
            value={nomeReferente}
            onChange={(e) =>
              setNomeReferente(e.target.value)
            }
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block">
            Cognome referente *
          </label>

          <input
            type="text"
            value={cognomeReferente}
            onChange={(e) =>
              setCognomeReferente(e.target.value)
            }
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block">
            Parteciperai?
          </label>

          <select
            value={partecipa}
            onChange={(e) => setPartecipa(e.target.value)}
            className="w-full rounded-xl border p-3"
          >
            <option value="">
              Seleziona
            </option>

            <option value="si">
              Parteciperò
            </option>

            <option value="no">
              Non parteciperò
            </option>
          </select>
        </div>

        {partecipa === "si" && (
          <>
            <div>
              <label className="mb-2 block">
                Numero partecipanti
              </label>

              <select
                value={numeroPartecipanti}
                onChange={(e) => {
                  const valore = Number(e.target.value);

                  setNumeroPartecipanti(valore);
                  generaPartecipanti(valore);
                }}
                className="w-full rounded-xl border p-3"
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map(
                  (num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  )
                )}
              </select>
            </div>

            {partecipanti.map((partecipante, index) => (
              <div
                key={index}
                className="rounded-2xl border bg-[#F8F5F0] p-6"
              >
               <h3 className="mb-4 text-xl font-semibold text-[#0F6B6B]">
  {index === 0
    ? "Referente"
    : `Partecipante ${index + 1}`}
</h3>

                <div className="grid gap-4">
                  <input
  type="text"
  placeholder="Nome"
  value={partecipante.nome}
  onChange={(e) =>
    aggiornaPartecipante(
      index,
      "nome",
      e.target.value
    )
  }
  className="rounded-xl border p-3"
/>
                  

                  <input
  type="text"
  placeholder="Cognome"
  value={partecipante.cognome}
  onChange={(e) =>
    aggiornaPartecipante(
      index,
      "cognome",
      e.target.value
    )
  }
  className="rounded-xl border p-3"
/>
                   

                  <select
                    value={partecipante.fasciaEta}
                    onChange={(e) =>
                      aggiornaPartecipante(
                        index,
                        "fasciaEta",
                        e.target.value
                      )
                    }
                    className="rounded-xl border p-3"
                  >
                    <option value="">
                      Seleziona fascia età
                    </option>

                    <option value="NEONATO">
                      Neonato (0-3 anni)
                    </option>

                    <option value="BAMBINO">
                      Bambino (4-10 anni)
                    </option>

                    <option value="ADULTO">
                      Adulto (11+ anni)
                    </option>
                  </select>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={partecipante.haAllergie}
                      onChange={(e) =>
                        aggiornaPartecipante(
                          index,
                          "haAllergie",
                          e.target.checked
                        )
                      }
                    />
                    Allergie o intolleranze
                  </label>

                  {partecipante.haAllergie && (
                    <textarea
                      placeholder="Specifica allergie/intolleranze"
                      value={partecipante.descrizioneAllergie}
                      onChange={(e) =>
                        aggiornaPartecipante(
                          index,
                          "descrizioneAllergie",
                          e.target.value
                        )
                      }
                      className="rounded-xl border p-3"
                    />
                  )}
                </div>
              </div>
            ))}
          </>
        )}

        <button
  onClick={inviaConferma}
  disabled={loading}
  className="w-full rounded-full bg-[#0F6B6B] py-4 text-white transition hover:opacity-90 disabled:opacity-50"
>
  {loading
    ? "Invio in corso..."
    : "Invia conferma"}
</button>
      </div>
    </div>
  );
}

