import AdminLogout from "@/components/AdminLogout";
import ExportExcelButton from "@/components/ExportExcelButton";
import AdminTable from "@/components/AdminTable";
import AdminLogin from "@/components/AdminLogin";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AdminPage() {
  const { data: responses } = await supabase
    .from("responses")
    .select("*");

  const { data: participants } = await supabase
    .from("participants")
    .select("*");

  const totaleInvitati = 174;

  const confermati =
    responses?.filter((r) => r.partecipa).length || 0;

  const assenti =
    responses?.filter((r) => !r.partecipa).length || 0;

  const ricevute =
    responses?.length || 0;

  const daRispondere =
    totaleInvitati - ricevute;

  const adulti =
    participants?.filter(
      (p) => p.fascia_eta === "ADULTO"
    ).length || 0;

  const bambini =
    participants?.filter(
      (p) => p.fascia_eta === "BAMBINO"
    ).length || 0;

  const neonati =
    participants?.filter(
      (p) => p.fascia_eta === "NEONATO"
    ).length || 0;

  const allergie =
    participants?.filter(
      (p) => p.ha_allergie
    ).length || 0;
    const personePresenti =
  responses
    ?.filter((r) => r.partecipa)
    .reduce(
      (tot, r) =>
        tot + r.numero_partecipanti,
      0
    ) || 0;

  return (
    <AdminLogin>
      <main className="min-h-screen bg-[#F8F5F0] p-8">
        <h1 className="mb-8 text-center font-title text-5xl">
          Dashboard Matrimonio TEST 123
        </h1>

       <div className="mb-8 flex justify-center gap-4">
  <ExportExcelButton
    participants={participants || []}
  />

  <AdminLogout />
</div>

       <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-9">
  <div className="rounded-3xl bg-white p-6 shadow">
    <p>Invitati Totali</p>
    <h2 className="text-4xl font-bold">
      {totaleInvitati}
    </h2>
  </div>

  <div className="rounded-3xl bg-white p-6 shadow">
    <p>Confermati</p>
    <h2 className="text-4xl font-bold text-green-600">
      {confermati}
    </h2>
  </div>

  <div className="rounded-3xl bg-white p-6 shadow">
    <p>Persone Presenti</p>
    <h2 className="text-4xl font-bold text-[#0F6B6B]">
      {personePresenti}
    </h2>
  </div>

  <div className="rounded-3xl bg-white p-6 shadow">
    <p>Assenti</p>
    <h2 className="text-4xl font-bold text-red-600">
      {assenti}
    </h2>
  </div>

  <div className="rounded-3xl bg-white p-6 shadow">
    <p>Da Rispondere</p>
    <h2 className="text-4xl font-bold text-[#0F6B6B]">
      {daRispondere}
    </h2>
  </div>

  <div className="rounded-3xl bg-white p-6 shadow">
    <p>Adulti</p>
    <h2 className="text-4xl font-bold text-blue-600">
      {adulti}
    </h2>
  </div>

  <div className="rounded-3xl bg-white p-6 shadow">
    <p>Bambini</p>
    <h2 className="text-4xl font-bold text-orange-500">
      {bambini}
    </h2>
  </div>

  <div className="rounded-3xl bg-white p-6 shadow">
    <p>Neonati</p>
    <h2 className="text-4xl font-bold text-pink-500">
      {neonati}
    </h2>
  </div>

  <div className="rounded-3xl bg-white p-6 shadow">
    <p>Allergie</p>
    <h2 className="text-4xl font-bold text-yellow-500">
      {allergie}
    </h2>
  </div>
</div>
        <AdminTable
          responses={responses || []}
        />
      </main>
    </AdminLogin>
  );
}