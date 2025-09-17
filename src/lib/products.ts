// src/lib/data.ts
"use server";

import { Product, ProductResponse } from "@/interfaces/product.interface";

export async function fetchProducts({
  page = 1,
  brandId,
  categoryId,
}: { page?: number, brandId?: string, categoryId?: string } = {}): Promise<ProductResponse> {
  // Use the actual working API URL
  const baseUrl = process.env.NEXT_EXTERNAL_URL || 'https://ecommerce.routemisr.com';
  let url = `${baseUrl}/api/v1/products?limit=10&page=${page}`;
  if (brandId) {
    url += `&brand=${brandId}`;
  }
  if (categoryId) {
    url += `&category=${categoryId}`;
  }

  try {
    const response = await fetch(url,
      {
        cache: "force-cache",
        // Add timeout to prevent hanging
        signal: AbortSignal.timeout(10000), // 10 second timeout
      }
    );

    if (!response.ok) {
      // Handle non-2xx responses
      const errorText = await response.text();
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in server data fetching function:", error);
    
    // Return mock data when API is not available
    return {
      data: [],
      metadata: {
        currentPage: page,
        limit: 10,
        numberOfPages: 1
      },
      results: 0
    };
  }
}

export async function fetchProductById(id: string): Promise<{ data: Product }> {
  try {
    const baseUrl = process.env.NEXT_EXTERNAL_URL || 'https://ecommerce.routemisr.com';
    const response = await fetch(
      `${baseUrl}/api/v1/products/${id}`,
      {
        cache: "force-cache",
        signal: AbortSignal.timeout(10000), // 10 second timeout
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in server data fetching function:", error);
    
    // Return mock data when API is not available
    return {
      data: {
        _id: id,
        id: id,
        title: "Product Not Available",
        slug: "product-not-available",
        description: "This product is currently unavailable",
        imageCover: "/placeholder-image.jpg",
        images: [],
        price: 0,
        ratingsAverage: 0,
        ratingsQuantity: 0,
        category: { _id: "1", name: "Unavailable", slug: "unavailable", image: "" },
        brand: { _id: "1", name: "Unknown", slug: "unknown", image: "" },
        subcategory: [],
        quantity: 0,
        sold: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    };
  }
}