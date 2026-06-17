"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  Camera,
  Church,
  UtensilsCrossed,
  Clock3,
  HeartHandshake,
} from "lucide-react";

const items = [
  {
    href: "/",
    label: "Home",
    icon: House,
  },
  {
    href: "/momenti",
    label: "Momenti",
    icon: Camera,
  },
  {
    href: "/cerimonia",
    label: "Cerimonia",
    icon: Church,
  },
  {
    href: "/ricevimento",
    label: "Ricevimento",
    icon: UtensilsCrossed,
  },
  {
    href: "/countdown",
    label: "Countdown",
    icon: Clock3,
  },
  {
    href: "/rsvp",
    label: "Conferma",
    icon: HeartHandshake,
  },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden">
      <div className="grid grid-cols-6">
        {items.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-3 transition-all ${
                active
                  ? "text-[#0F6B6B]"
                  : "text-gray-400"
              }`}
            >
              <Icon
                size={28}
                strokeWidth={1.8}
              />

              <span className="mt-1 text-[8px] leading-tight text-center">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}