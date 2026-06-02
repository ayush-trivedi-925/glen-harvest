import { flavors } from "@/lib/landing-data";
import { ProductPack } from "./ProductPack";

export function ProductStage() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-1/2 h-0 w-0">
        {flavors.map((flavor) => (
          <div
            key={flavor.id}
            className="product-journey absolute left-0 top-0"
            data-product={flavor.id}
            aria-label={`${flavor.name} pack`}
          >
            <ProductPack flavor={flavor} />
          </div>
        ))}
      </div>
    </div>
  );
}
