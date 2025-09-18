import { fetchBrandById } from "@/lib/brands";
import { fetchProducts } from "@/lib/products";

import Image from "next/image";
import Item from "@/components/ui/Item";

export default async function LabelPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: brand } = await fetchBrandById(id);
  const { data: products } = await fetchProducts({ brandId: id });

  return (
    <div className="wrapper mx-auto px-[135px] py-8">
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-48 h-48 mb-4">
          <Image
            src={brand.image}
            alt={brand.name}
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl font-bold">{brand.name}</h1>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Products from {brand.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Item key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
