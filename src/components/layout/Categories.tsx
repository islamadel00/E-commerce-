"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import exclusiveImage from "@/assets/images/exclusive.jpeg";
import iphoneImage from "@/assets/images/iphoneImage.jpeg";

export default function Categories() {
  const swiperNavPrevRef = useRef<HTMLDivElement>(null);
  const swiperNavNextRef = useRef<HTMLDivElement>(null);

  return (
    <section className="px-[135px] py-4">
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #9CA3AF !important;
          opacity: 1 !important;
          width: 8px !important;
          height: 8px !important;
          margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
          background: #DB4444 !important;
        }
      `}</style>
      <div className="flex gap-4">
        <div className="flex h-[344px]">
          <div className="w-[217px] h-[344px] pr-4">
            <ul className="flex flex-col justify-between h-full">
              <li className="flex items-center justify-between">
                <a href="#" className="hover:underline">Woman&apos;s Fashion</a>
                <ChevronRight />
              </li>
              <li className="flex items-center justify-between">
                <a href="#" className="hover:underline">Men&apos;s Fashion</a>
                <ChevronRight />
              </li>
              <li className="flex items-center justify-between">
                <a href="#" className="hover:underline">Electronics</a>
              </li>
              <li className="flex items-center justify-between">
                <a href="#" className="hover:underline">Home & Lifestyle</a>
              </li>
              <li className="flex items-center justify-between">
                <a href="#" className="hover:underline">Medicine</a>
              </li>
              <li className="flex items-center justify-between">
                <a href="#" className="hover:underline">Sports & Outdoor</a>
              </li>
              <li className="flex items-center justify-between">
                <a href="#" className="hover:underline">Baby&apos;s & Toys</a>
              </li>
              <li className="flex items-center justify-between">
                <a href="#" className="hover:underline">Groceries & Pets</a>
              </li>
              <li className="flex items-center justify-between">
                <a href="#" className="hover:underline">Health & Beauty</a>
              </li>
            </ul>
          </div>
          <div className="h-[344px] border-r border-gray-300"></div>
        </div>
        <div className="max-w-[892px] h-[344px] px-5 flex items-center relative">
          {/* Navigation Buttons */}
          <div className="absolute top-4 right-4 z-10 flex gap-2">
            <div
              ref={swiperNavPrevRef}
              className="bg-white p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="rotate-180" size={20} color="black" />
            </div>
            <div
              ref={swiperNavNextRef}
              className="bg-white p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <ChevronRight size={20} color="black" />
            </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              prevEl: swiperNavPrevRef.current,
              nextEl: swiperNavNextRef.current,
            }}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active'
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
            <SwiperSlide>
              <div className="flex items-center justify-between bg-black text-white p-8 px-10 h-[344px]">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={exclusiveImage}
                      alt="Exclusive Offer"
                      width={50}
                      height={50}
                    />
                    <p className="font-inter">iPhone 14 Series</p>
                  </div>
                  <p className="text-6xl font-inter">Up to 10% off Voucher</p>
                  <a href="#" className="text-lg font-bold underline">
                    Shop Now{" "}
                  </a>
                </div>
                <div>
                  <Image
                    src={iphoneImage}
                    alt="iPhone"
                    width={496}
                    height={352}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 px-10 h-[344px] flex items-center justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💻</span>
                    </div>
                    <p className="font-inter text-lg">Electronics Sale</p>
                  </div>
                  <p className="text-5xl font-inter">Up to 30% off</p>
                  <p className="text-lg">Laptops & Computers</p>
                  <a href="#" className="text-lg font-bold underline">
                    Shop Now
                  </a>
                </div>
                <div className="text-8xl opacity-50">
                  💻
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-8 px-10 h-[344px] flex items-center justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👗</span>
                    </div>
                    <p className="font-inter text-lg">Fashion Week</p>
                  </div>
                  <p className="text-5xl font-inter">50% off</p>
                  <p className="text-lg">Women&apos;s & Men&apos;s Fashion</p>
                  <a href="#" className="text-lg font-bold underline">
                    Shop Now
                  </a>
                </div>
                <div className="text-8xl opacity-50">
                  👗
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-8 px-10 h-[344px] flex items-center justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <p className="font-inter text-lg">Home & Lifestyle</p>
                  </div>
                  <p className="text-5xl font-inter">25% off</p>
                  <p className="text-lg">Furniture & Decor</p>
                  <a href="#" className="text-lg font-bold underline">
                    Shop Now
                  </a>
                </div>
                <div className="text-8xl opacity-50">
                  🏠
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}