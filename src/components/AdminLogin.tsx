"use client";

import { useEffect, useState } from "react";

export default function AdminLogin({
  children,
}: {
  children: React.ReactNode;
}) {
  const [password, setPassword] = useState("");
  const [accessoConsentito, setAccessoConsentito] =
    useState(false);

  useEffect(() => {
    const auth =
      localStorage.getItem("admin-auth");

    if (auth === "true") {
      setAccessoConsentito(true);
    }
  }, []);

  const verificaPassword = () => {
    if (password === "100817") {
      localStorage.setItem(
        "admin-auth",
        "true"
      );

      setAccessoConsentito(true);
    } else {
      alert("Password errata");
    }
  };

  if (accessoConsentito) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F5F0]">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-center text-4xl font-bold text-[#0F6B6B]">
          Area Admin
        </h1>

        <p className="mb-6 text-center text-gray-600">
          Inserisci la password amministratore
        </p>

        <input
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full rounded-xl border p-4"
          placeholder="Password"
        />

        <button
          onClick={verificaPassword}
          className="mt-6 w-full rounded-xl bg-[#0F6B6B] py-4 text-white"
        >
          Accedi
        </button>
      </div>
    </div>
  );
}