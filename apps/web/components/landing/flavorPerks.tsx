import type { ReactNode } from "react";

/* Product-wide perks — shown as labelled badges in the section header
   and as compact icons on each pack. Mirrors the claims on the pack. */
export type Perk = { label: string; color: string; icon: ReactNode };

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[55%] w-[55%]">
      <path
        d="M13 2 5 13h5l-1 9 9-12h-5l1-8z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSprout() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[55%] w-[55%]">
      <path
        d="M12 21v-9m0 0C9 12 7 10 7 6c4 0 5 2 5 6zm0 0c0-4 2-6 6-6 0 4-3 6-6 6z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[55%] w-[55%]">
      <path
        d="M12 3 5 6v5c0 4 3 7 7 8 4-1 7-4 7-8V6l-7-3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const perks: Perk[] = [
  { label: "High Protein", color: "#b7914a", icon: <IconBolt /> },
  { label: "Gluten Free", color: "#1d705d", icon: <IconSprout /> },
  { label: "No Preservatives", color: "#7d593d", icon: <IconShield /> },
];
