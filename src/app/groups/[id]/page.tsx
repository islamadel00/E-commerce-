import { fetchCategoryById } from '@/lib/categories';
import { fetchProducts } from '@/lib/products';

import Image from 'next/image';
import Item from '@/components/ui/Item';

export default async function GroupPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data: category } = await fetchCategoryById(id);
  const { data: products } = await fetchProducts({ categoryId: id });

  return (
    <div className="wrapper mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-48 h-48 mb-4">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl font-bold">{category.name}</h1>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Products in {category.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Item key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
