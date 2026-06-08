"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-10-24T10:30:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference =
        targetDate.getTime() - now.getTime();

      if (difference <= 0) return;

      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );

      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );

      const seconds = Math.floor(
        (difference / 1000) % 60
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    {
      label: "GIORNI",
      value: timeLeft.days,
    },
    {
      label: "ORE",
      value: timeLeft.hours,
    },
    {
      label: "MINUTI",
      value: timeLeft.minutes,
    },
    {
      label: "SECONDI",
      value: timeLeft.seconds,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-3xl border border-[#C8A96B]/30 bg-white p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="mb-4 h-[3px] w-12 mx-auto bg-[#C8A96B]" />

          <div className="text-5xl font-bold text-[#0F6B6B] md:text-6xl">
            {String(item.value).padStart(2, "0")}
          </div>

          <div className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-500">
            {item.label}
          </div>

          <div className="mt-4 h-[3px] w-12 mx-auto bg-[#C8A96B]" />
        </div>
      ))}
    </div>
  );
}