import Image from "next/image";

/* ───────────────────────────────────────────────────────────
   Hero — static markup; the load-in animation is driven by the
   LandingPage GSAP intro via the data-hero-* hooks below.
   Asset mapping:
     raw.png         → product pack (big, right column)
     makhana 2.png   → woman with bowl (small, landscape)
     makhana.png     → bowl of laddoo-style makhana (landscape)
     bird.png        → archway + bird perched on top (far left of landscape)
     tree.png        → single tree element (landscape)
     tree-bg.png     → full-width tree-line backdrop (landscape)
     sun.png         → orange sun glyph (placed in sky, static)
     house.png       → small house (landscape)
     cow.png         → decorative cow (far right of landscape)
     lotus.png       → lotus flower (landscape)
     cloud.png       → small cloud (scattered in sky)

   Responsive note:
     Everything desktop (lg / xl / 2xl) is unchanged from the original.
     The mobile + tablet layer lives in the *base* and *sm:* classes only.
     The section is shorter below lg so it no longer leaves a tall empty gap.
─────────────────────────────────────────────────────────── */
export function HeroSection() {
  const HERO_IMG = "/images/home hero";

  // Static cloud placements — three on each side of the headline.
  const clouds = [
    { top: "18%", left: "-1%", width: 320, opacity: 0.55 },

    { top: "62%", left: "38%", width: 320, opacity: 0.55 },
    { top: "24%", left: "63%", width: 320, opacity: 0.6 },
    { top: "70%", left: "86%", width: 320, opacity: 0.5 },
  ];

  return (
    <section
      id="home"
      /* h / min-h: mobile + tablet are shorter; lg+ restores the original h-screen min-h-180 */
      className="hero-shell relative isolate h-[72vh] min-h-[30rem] overflow-hidden bg-cream text-forest sm:h-[50vh] sm:min-h-[12rem] lg:h-screen lg:min-h-180"
    >
      {/* Paper noise */}
      <div className="noise-overlay pointer-events-none absolute inset-0 z-0" />

      {/* ─── Sky: scattered clouds ─── */}
      <div
        data-hero-sky
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-1/2"
      >
        {clouds.map((c, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: c.top,
              left: c.left,
              // Fluid: shrinks below lg, stays pinned at c.width (320) from ~lg up,
              // so desktop is unchanged while phones don't get giant clouds.
              width: `clamp(110px, 32vw, ${c.width}px)`,
              opacity: c.opacity,
            }}
          >
            <Image
              src={`${HERO_IMG}/cloud.png`}
              alt=""
              width={c.width}
              height={Math.round(c.width * 0.55)}
              className="h-auto w-full select-none"
              draggable={false}
              priority={i < 2}
            />
          </div>
        ))}
      </div>

      {/* ─── Sun (static, sitting in the sky just above the landscape) ─── */}
      <div
        className="pointer-events-none absolute z-10 w-[52%] sm:w-[28%] lg:w-[22%]"
        style={{
          left: "34%",
          bottom: "min(22vh, 10rem)",
        }}
      >
        <Image
          src={`${HERO_IMG}/sun.png`}
          alt=""
          width={200}
          height={100}
          className="h-auto w-full select-none"
          draggable={false}
          data-hero-sun
        />
      </div>

      {/* ─── Content (wordmark + headline + CTAs + pack) ─── */}
      <div className="absolute inset-x-0 z-20 top-26 bottom-0 sm:bottom-[min(36vh,19rem)]">
        <div className="mx-auto flex h-full max-w-7xl flex-col px-6 sm:grid sm:items-center sm:gap-6 sm:grid-cols-[1.05fr_0.95fr] sm:px-10 lg:px-12 2xl:w-[78vw] 2xl:max-w-none 2xl:grid-cols-[0.9fr_1.1fr] 2xl:gap-[4vw] 2xl:px-0">
          {/* Left */}
          <div className="mx-auto flex max-w-xl flex-1 flex-col items-start justify-center text-left sm:mx-0 sm:block sm:flex-none sm:text-left 2xl:max-w-[30vw] 2xl:translate-y-[-12vh] 2xl:translate-x-[10vh]">
            <p
              data-hero-wordmark
              className=" font-serif text-4xl font-bold leading-[0.95] text-forest sm:block sm:text-5xl lg:text-[3.5rem] 2xl:text-[clamp(3rem,2.7vw,4.25rem)]"
              style={{ letterSpacing: "-0.015em" }}
            >
              <Image
                src={`${HERO_IMG}/glen-harvest.png`}
                width={200}
                height={200}
                alt="Glen harvest title"
              />
            </p>

            <h1
              data-hero-headline
              className="mt-5 font-serif text-[clamp(2rem,4.6vw,3.9rem)] leading-[1.02] 2xl:mt-6 2xl:text-[clamp(3.25rem,3vw,4.75rem)]"
            >
              <span className="block font-extrabold text-[#2C3D2A]">
                Tradition in <br className="lg:hidden" />
                every bite,
              </span>
              <span className="mt-1 block font-extrabold text-[#7A341E]">
                Nutrition in <br className="lg:hidden" />
                every grain.
              </span>
            </h1>
          </div>

          {/* Right — product pack (raw.png IS the pack) */}
          <div className="relative flex justify-center pb-[6vh] sm:h-full sm:items-end sm:pb-0 md:justify-center 2xl:translate-y-[5vh]">
            <div className="relative bottom-[-38%] sm:bottom-[-72%] lg:bottom-[-8%] left-[14%] w-[14rem] sm:left-[23%] sm:w-[18rem] md:w-[26rem] lg:w-[24rem]  xl:w-[42rem] 2xl:left-[18%] 2xl:w-[42vw] 2xl:max-w-[72rem]">
              <Image
                src={`${HERO_IMG}/raw.png`}
                alt="Glen Harvest High Protein Makhana"
                width={420}
                height={340}
                priority
                className="h-auto w-full select-none object-contain drop-shadow-[0_30px_50px_rgba(60,30,10,0.18)]"
                draggable={false}
                data-hero-pack
              />
            </div>
          </div>
        </div>
      </div>

      {/* ─── Landscape band ─── */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
        style={{ height: "min(34vh, 20rem)" }}
      >
        {/* Tree-line backdrop, full width */}
        <div className="absolute inset-x-0 bottom-0 h-full">
          <Image
            src={`${HERO_IMG}/tree-bg.png`}
            alt=""
            width={2172}
            height={724}
            sizes="100vw"
            className="absolute inset-x-0 bottom-0 h-full w-full select-none object-cover object-bottom 2xl:h-auto"
            draggable={false}
            priority
            data-hero-treebg
          />
        </div>

        {/* Diorama layered above the tree-line */}
        <div data-hero-diorama className="absolute inset-x-0 bottom-0 h-full">
          {/* Archway + bird (single asset) — far left */}
          <div className="absolute bottom-[-24px] sm:bottom-[-1%] lg:bottom-[-24px] left-[-6%] sm:left-[-1%] lg:left-[1%] w-[7.5rem] md:w-[10rem] lg:w-[16.5rem]">
            <Image
              src={`${HERO_IMG}/bird.png`}
              alt=""
              width={240}
              height={380}
              className="h-auto w-full select-none"
              draggable={false}
            />
          </div>

          {/* Lotus */}
          <div className="absolute bottom-[-24px] sm:bottom-[-4%] lg:bottom-[-24px] left-[14%] w-14 md:w-24 lg:w-34">
            <Image
              src={`${HERO_IMG}/lotus.png`}
              alt=""
              width={140}
              height={140}
              className="h-auto w-full select-none"
              draggable={false}
            />
          </div>

          {/* Woman with bowl (makhana 2) */}
          <div className="absolute bottom-1 left-[26%] sm:left-[30%] lg:left-[26%] w-[6.5rem] md:w-[8rem] lg:w-[11rem]">
            <Image
              src={`${HERO_IMG}/makhana 2.png`}
              alt=""
              width={260}
              height={200}
              className="h-auto w-full select-none"
              draggable={false}
            />
          </div>

          {/* Bowl of makhana (next to the woman) */}
          <div className=" absolute bottom-2 sm:bottom-0 lg:bottom-2 left-[42%] sm:left-[50%] lg:left-[42%] hidden w-14 lg:block md:w-23 lg:w-22">
            <Image
              src={`${HERO_IMG}/makhana.png`}
              alt=""
              width={160}
              height={140}
              className="h-auto w-full select-none"
              draggable={false}
            />
          </div>

          {/* House */}
          <div className="absolute bottom-[-1%] sm:bottom-[32] lg:bottom-[8] left-[77%] sm:left-[46%] lg:left-[47%] w-28 md:w-39 lg:w-39">
            <Image
              src={`${HERO_IMG}/house.png`}
              alt=""
              width={220}
              height={200}
              className="h-auto w-full select-none"
              draggable={false}
            />
          </div>

          {/* Mid tree */}
          <div className="absolute bottom-[-9%] lg:left-[58%] sm:left-[61%] hidden w-[5.5rem] sm:block md:w-[6.5rem] lg:w-[7.5rem]">
            <Image
              src={`${HERO_IMG}/tree.png`}
              alt=""
              width={180}
              height={300}
              className="h-auto w-full select-none"
              draggable={false}
            />
          </div>

          {/* Right tree */}
          <div className="absolute bottom-[-9%] left-[80%] sm:left-[90%] lg:left-[80%] hidden w-[5rem] sm:block md:w-[6rem] lg:w-[7rem]">
            <Image
              src={`${HERO_IMG}/tree.png`}
              alt=""
              width={180}
              height={300}
              className="h-auto w-full select-none"
              draggable={false}
            />
          </div>

          {/* Cow */}
          <div className=" hidden sm:block absolute bottom-[-12%] right-[-1%] sm:left-[46%] lg:left-[83%] w-[6.5rem] md:w-[8rem] lg:w-[14rem]">
            <Image
              src={`${HERO_IMG}/cow.png`}
              alt=""
              width={220}
              height={180}
              className="h-auto w-full select-none"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
