export type Flavor = {
  id: string;
  name: string;
  shortName: string;
  eyebrow: string;
  description: string;
  price: string;
  image: string;
  palette: {
    base: string;
    deep: string;
    accent: string;
    soft: string;
  };
};

export type Benefit = {
  label: string;
  detail: string;
};

export type Feature = {
  title: string;
  body: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const flavors: Flavor[] = [
  {
    id: "mint",
    name: "Mint Masti",
    shortName: "Mint",
    eyebrow: "Cool garden spice",
    description:
      "A refreshing roast with deep mint, gentle herbs, and a clean savory finish.",
    price: "₹149",
    image: "/images/products/mint-pack.png",
    palette: {
      base: "#1d705d",
      deep: "#0f3a30",
      accent: "#b7d2ac",
      soft: "#d8ebe0",
    },
  },
  {
    id: "peri",
    name: "Peri Peri",
    shortName: "Peri",
    eyebrow: "Warm chili crunch",
    description:
      "A bold, slow-building spice with roasted chili warmth and a crisp airy bite.",
    price: "₹149",
    image: "/images/products/peri-pack.png",
    palette: {
      base: "#a33a2d",
      deep: "#622219",
      accent: "#f0a75e",
      soft: "#f2d5c4",
    },
  },
  {
    id: "pickle",
    name: "Pickle",
    shortName: "Pickle",
    eyebrow: "Tangy Indian spice",
    description:
      "A lively achari blend with bright tang, warming spices, and a deeply savory crunch.",
    price: "₹149",
    image: "/images/products/pickle-pack.png",
    palette: {
      base: "#4d7048",
      deep: "#243e29",
      accent: "#d2b66f",
      soft: "#dfe7d5",
    },
  },
  {
    id: "salt",
    name: "Salt & Pepper",
    shortName: "Salt",
    eyebrow: "Clean Himalayan seasoning",
    description:
      "A timeless pairing of mineral-rich salt and cracked pepper for a light, balanced bite.",
    price: "₹149",
    image: "/images/products/salt-pack.png",
    palette: {
      base: "#7d8586",
      deep: "#424b4c",
      accent: "#d8caa6",
      soft: "#e7e5df",
    },
  },
  {
    id: "cream",
    name: "Cream & Onion",
    shortName: "Cream",
    eyebrow: "Smooth savory comfort",
    description:
      "Creamy onion flavor with gentle herbs and a mellow finish made for easy snacking.",
    price: "₹149",
    image: "/images/products/cream-pack.png",
    palette: {
      base: "#86864e",
      deep: "#4d4e28",
      accent: "#e3d89e",
      soft: "#ece8cf",
    },
  },
  {
    id: "chocolate",
    name: "Protein Chocolate",
    shortName: "Chocolate",
    eyebrow: "Wholesome cocoa crunch",
    description:
      "A cocoa-rich makhana with a satisfying roast and an extra protein-forward twist.",
    price: "₹149",
    image: "/images/products/protien-pack.png",
    palette: {
      base: "#765039",
      deep: "#3d281c",
      accent: "#d6ae83",
      soft: "#eadaca",
    },
  },
  {
    id: "raw",
    name: "High Protein Makhana",
    shortName: "Protein",
    eyebrow: "Pure everyday nourishment",
    description:
      "A clean, versatile high-protein makhana with a delicate roast and naturally airy crunch.",
    price: "₹149",
    image: "/images/products/raw-pack.png",
    palette: {
      base: "#b7aa82",
      deep: "#746749",
      accent: "#f1dfb8",
      soft: "#f2ead8",
    },
  },
];

export const benefits: Benefit[] = [
  {
    label: "High Protein",
    detail: "Naturally nourishing and satisfying between meals.",
  },
  {
    label: "Rich In Antioxidants",
    detail: "A traditional super snack with modern everyday appeal.",
  },
  {
    label: "Light & Crunchy",
    detail: "Airy texture, clean roast, and a delicate crisp finish.",
  },
  {
    label: "Healthy Snack Alternative",
    detail: "A better choice for cravings, desk breaks, and late evenings.",
  },
];

export const features: Feature[] = [
  {
    title: "Farm Sourced Ingredients",
    body: "Selected makhana and spices chosen for freshness, texture, and natural character.",
  },
  {
    title: "Small Batch Roasting",
    body: "Roasted in considered batches for a balanced crunch and consistent flavor.",
  },
  {
    title: "No Artificial Preservatives",
    body: "Clean recipes focused on honest ingredients and nothing unnecessary.",
  },
  {
    title: "Packed Fresh",
    body: "Sealed for aroma, snap, and that just-opened feeling.",
  },
  {
    title: "Premium Quality Standards",
    body: "Every pack is checked for taste, finish, and satisfying lightness.",
  },
  {
    title: "Better Everyday Snacking",
    body: "Designed for mindful cravings without losing the joy of bold flavor.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "It feels indulgent without being heavy. The Mint Masti has become my afternoon ritual.",
    name: "Aarav Mehta",
    role: "Founder, wellness studio",
  },
  {
    quote:
      "The packaging, crunch, and seasoning all feel premium. Peri Peri has just the right heat.",
    name: "Nisha Rao",
    role: "Creative director",
  },
  {
    quote:
      "Finally, a snack that looks beautiful on the counter and actually disappears quickly.",
    name: "Devika S.",
    role: "Home chef",
  },
];
