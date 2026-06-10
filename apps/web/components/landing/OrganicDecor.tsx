/* Soft blurred blobs + floating leaf accents used as ambient section decor.
   The `.float-leaf` elements are animated by the LandingPage GSAP effect. */
export function OrganicDecor({
  variant = "hero",
}: {
  variant?: "hero" | "quiet" | "care";
}) {
  const muted = variant === "quiet";

  return (
    <>
      <div
        className="absolute -left-32 top-24 h-72 w-72 rounded-[48%_52%_61%_39%] bg-moss/10 blur-xl md:h-112 md:w-md"
        style={{ transform: "translateZ(0)", willChange: "transform" }}
      />
      <div
        className="absolute -right-28 bottom-12 h-80 w-80 rounded-[58%_42%_45%_55%] bg-gold/10 blur-xl md:h-120 md:w-120"
        style={{ transform: "translateZ(0)", willChange: "transform" }}
      />
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
