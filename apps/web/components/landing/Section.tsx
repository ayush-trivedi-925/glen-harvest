import type { ComponentPropsWithoutRef, ReactNode } from "react";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
  tone?: "cream" | "green" | "light" | "warm" | "deep";
};

const tones: Record<NonNullable<SectionProps["tone"]>, string> = {
  cream: "bg-cream text-forest",
  green: "bg-[#eaf0df] text-forest",
  light: "bg-[#fbf7ee] text-forest",
  warm: "bg-[#f1ddbf] text-forest",
  deep: "bg-botanical text-cream",
};

export function Section({
  children,
  className = "",
  tone = "cream",
  ...props
}: SectionProps) {
  return (
    <section
      className={`relative min-h-screen overflow-hidden ${tones[tone]} ${className}`}
      {...props}
    >
      <div className="noise-overlay absolute inset-0" />
      {children}
    </section>
  );
}
