import { Product, ProductResponse } from "@/interfaces/product.interface";
import Item from "../ui/Item";
import SectionTitle from "../ui/SectionTitle";
import { fetchProducts } from "@/lib/products";
import Link from "next/link";

export default async function BestSellingProducts() {
  let products: Product[] = [];
  let error: string | null = null;

  try {
    const data: ProductResponse = await fetchProducts({ page: 5 });
    products = data.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      error = err.message;
    } else {
      error = "An unknown error occurred";
    }
  }

  return (
    <section className="section-padding">
      <SectionTitle>This Month</SectionTitle>

      {/* Title + Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 mb-8 gap-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left">
          Best Selling Products
        </h2>
        <Link
          href="/items"
          className="bg-[var(--secondary-two)] text-white px-6 sm:px-12 py-3 sm:py-4 rounded text-center"
        >
          View all
        </Link>
      </div>

      {/* Error */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Products Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {products.slice(0, 4).map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
