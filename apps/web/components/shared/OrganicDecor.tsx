type OrganicDecorProps = {
  variant?: "hero" | "quiet" | "care";
};

export default function OrganicDecor({ variant = "hero" }: OrganicDecorProps) {
  const muted = variant === "quiet";

  return (
    <>
      <div className="absolute -left-32 top-24 h-72 w-72 rounded-[48%_52%_61%_39%] bg-moss/10 blur-2xl md:h-128 md:w-lg" />
      <div className="absolute -right-28 bottom-12 h-80 w-80 rounded-[58%_42%_45%_55%] bg-gold/10 blur-2xl md:h-136 md:w-136" />
      <span
        className={`float-leaf absolute left-[10%] top-[22%] h-12 w-6 rounded-full border border-forest/12 ${muted ? "opacity-20" : "opacity-45"}`}
        style={{ transform: "rotate(-28deg)", borderRadius: "80% 12% 80% 12%" }}
      />
      <span
        className={`float-leaf absolute right-[12%] top-[34%] h-16 w-8 rounded-full border border-gold/24 ${muted ? "opacity-20" : "opacity-45"}`}
        style={{ transform: "rotate(22deg)", borderRadius: "14% 80% 12% 80%" }}
      />
      <span
        className={`float-leaf absolute bottom-[16%] left-[22%] h-10 w-5 rounded-full bg-forest/8 ${variant === "care" ? "opacity-45" : "opacity-25"}`}
        style={{ transform: "rotate(42deg)", borderRadius: "80% 12% 80% 12%" }}
      />
    </>
  );
}
