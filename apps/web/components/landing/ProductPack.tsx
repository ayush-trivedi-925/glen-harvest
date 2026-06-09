import Image from "next/image";
import type { Flavor } from "@/lib/landing-data";

type ProductPackProps = {
  flavor: Flavor;
  className?: string;
};

export function ProductPack({ flavor, className = "" }: ProductPackProps) {
  const imageSrc =
    flavor.id === "mint"
      ? "/images/products/mint-pack.png"
      : "/images/products/peri-pack.png";

  return (
    <div
      className={`product-pack relative h-104 w-[18rem] md:h-128 md:w-[24rem] ${className}`}
    >
      <Image
        src={imageSrc}
        alt={flavor.name}
        fill
        priority
        className="object-contain select-none"
        draggable={false}
      />
    </div>
  );
}
