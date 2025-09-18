"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Laptop,
  Watch,
  Camera,
  Headphones,
  Gamepad2,
} from "lucide-react";

const categories = [
  { name: "Phone", icon: <Smartphone size={40} /> },
  { name: "Laptop", icon: <Laptop size={40} /> },
  { name: "Smartwatch", icon: <Watch size={40} /> },
  { name: "Camera", icon: <Camera size={40} /> },
  { name: "Headphone", icon: <Headphones size={40} /> },
  { name: "Gaming", icon: <Gamepad2 size={40} /> },
];

function CategoryItem({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow-sm cursor-pointer hover:shadow-md transition">
      <div className="mb-3">{icon}</div>
      <p className="text-sm font-medium text-center">{name}</p>
    </div>
  );
}

export default function BrowseByCategories() {
  const swiperNavPrevRef = useRef<HTMLDivElement>(null);
  const swiperNavNextRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-padding">
      {/* Title + Navigation */}
      <div className="flex items-center justify-between mt-4 mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Browse by Category
        </h2>
        <div className="hidden sm:flex gap-2">
          <div
            ref={swiperNavPrevRef}
            className="bg-gray-200 p-2 rounded-full cursor-pointer"
          >
            <ChevronLeft size={24} color="black" />
          </div>
          <div
            ref={swiperNavNextRef}
            className="bg-gray-200 p-2 rounded-full cursor-pointer"
          >
            <ChevronRight size={24} color="black" />
          </div>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2} // default for mobile
        breakpoints={{
          640: { slidesPerView: 3 }, // sm
          768: { slidesPerView: 4 }, // md
          1024: { slidesPerView: 5 }, // lg
          1280: { slidesPerView: 6 }, // xl
        }}
        navigation={{
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = swiperNavPrevRef.current;
            swiper.params.navigation.nextEl = swiperNavNextRef.current;
          }
        }}
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.name}>
            <CategoryItem name={cat.name} icon={cat.icon} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
