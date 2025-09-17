import Image from "next/image";
import Categories from "@/components/layout/Categories";
import FlashSales from "@/components/layout/FlashSales";
import { fetchProducts } from "@/lib/products";
import { ProductResponse } from "@/interfaces/product.interface";
import BrowseByCategories from "@/components/layout/BrowseByCategories";
import BestSellingProducts from "@/components/layout/BestSellingProducts";
import lineBetweenSections from "@/assets/images/lineBetweenSections.jpeg";
import SpeakerSection from "@/components/layout/SpeakerSection";
import OurProducts from "@/components/layout/OurProducts";
import NewArrivalsSection from "@/components/layout/NewArrivalsSection";
import Features from "@/components/layout/Features";

export default async function Landing() {
  let items: ProductResponse | null = null;

  try {
    items = await fetchProducts();
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("An unknown error occurred");
    }
    // Return empty data instead of showing loading
    items = {
      data: [],
      metadata: {
        currentPage: 1,
        limit: 10,
        numberOfPages: 1
      },
      results: 0
    };
  }

  const products = items?.data || [];

  return (
    <>
      <div className="wrapper mx-auto">
      </div>
      <Categories />
      <FlashSales products={products} />
      <div className="px-[135px] my-8">
        <Image
          src={lineBetweenSections}
          alt="line separator"
          width={1200}
          height={50}
          className="w-full h-auto"
        />
      </div>
      <BrowseByCategories />
      <div className="px-[135px] my-8">
        <Image
          src={lineBetweenSections}
          alt="line separator"
          width={1200}
          height={50}
          className="w-full h-auto"
        />
      </div>
      <BestSellingProducts />
      <SpeakerSection />
      <OurProducts />
      <NewArrivalsSection />
      <Features />
    </>
  );
}