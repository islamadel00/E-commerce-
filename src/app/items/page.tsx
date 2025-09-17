import { fetchProducts } from "@/lib/products";
import { ProductResponse } from "@/interfaces/product.interface";
import ProductList from "@/components/ui/ProductList";
import PageLoading from "@/components/ui/PageLoading";

export default async function ItemsPage() {
  let data: ProductResponse | null = null;
  let error = null;

  try {
    // Fetch initial page
    data = await fetchProducts({ page: 1 });
  } catch (err: unknown) {
    error = err instanceof Error ? err.message : String(err);
  }

  const initialProducts = data?.data || [];

  if (error) {
    return (
      <PageLoading
        title="Error Loading Products"
        subtitle="There was an issue loading the products. Please try again later."
      />
    );
  }

  if (!data) {
    return (
      <PageLoading
        title="Loading Products..."
        subtitle="Please wait while we fetch all available products"
        showProgress={true}
        progress={50}
      />
    );
  }

  return (
    <div className="section-padding">
      <h1 className="text-3xl font-bold mb-8">All Items</h1>
      <ProductList initialProducts={initialProducts} />
    </div>
  );
}
