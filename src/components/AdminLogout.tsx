"use client";

export default function AdminLogout() {
  const logout = () => {
    localStorage.removeItem("admin-auth");

    window.location.href = "/admin";
  };

  return (
    <button
      onClick={logout}
      className="rounded-2xl bg-red-500 px-6 py-4 text-white shadow-lg transition hover:scale-105"
    >
      🚪 Logout
    </button>
  );
}