"use client";

import React from "react";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div className={`skeleton ${className}`}></div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white border rounded-lg p-4 animate-pulse">
      <div className="skeleton h-48 w-full mb-4 rounded-lg"></div>
      <div className="skeleton h-4 w-3/4 mb-2"></div>
      <div className="skeleton h-4 w-1/2 mb-2"></div>
      <div className="skeleton h-6 w-1/3 mb-4"></div>
      <div className="flex justify-between items-center">
        <div className="skeleton h-8 w-20"></div>
        <div className="skeleton h-8 w-8 rounded-full"></div>
      </div>
    </div>
  );
}

export function CategoryCardSkeleton() {
  return (
    <div className="bg-white border rounded-lg p-6 text-center animate-pulse">
      <div className="skeleton-avatar mx-auto mb-4"></div>
      <div className="skeleton h-4 w-3/4 mx-auto"></div>
    </div>
  );
}

export function TeamMemberSkeleton() {
  return (
    <div className="bg-white border rounded-2xl shadow-sm p-8 text-center animate-pulse">
      <div className="skeleton-avatar mx-auto mb-6"></div>
      <div className="skeleton h-6 w-3/4 mx-auto mb-2"></div>
      <div className="skeleton h-4 w-1/2 mx-auto mb-4"></div>
      <div className="flex justify-center space-x-4">
        <div className="skeleton h-6 w-6 rounded"></div>
        <div className="skeleton h-6 w-6 rounded"></div>
        <div className="skeleton h-6 w-6 rounded"></div>
      </div>
    </div>
  );
}

export function StatisticsSkeleton() {
  return (
    <div className="bg-white border rounded-2xl shadow-sm p-8 text-center animate-pulse">
      <div className="skeleton h-8 w-20 mx-auto mb-2"></div>
      <div className="skeleton h-4 w-3/4 mx-auto"></div>
    </div>
  );
}

export function NavigationSkeleton() {
  return (
    <div className="flex items-center space-x-4 animate-pulse">
      <div className="skeleton h-8 w-20"></div>
      <div className="skeleton h-8 w-16"></div>
      <div className="skeleton h-8 w-16"></div>
      <div className="skeleton h-8 w-16"></div>
    </div>
  );
}

export function FooterSkeleton() {
  return (
    <div className="bg-black text-white py-16 animate-pulse">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="skeleton h-6 w-24"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-3/4"></div>
              <div className="skeleton h-4 w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FormSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="skeleton h-4 w-1/4"></div>
      <div className="skeleton h-10 w-full"></div>
      <div className="skeleton h-4 w-1/4"></div>
      <div className="skeleton h-10 w-full"></div>
      <div className="skeleton h-10 w-1/3"></div>
    </div>
  );
}

export function TableSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="skeleton h-10 w-full mb-4"></div>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="skeleton h-12 w-full mb-2"></div>
      ))}
    </div>
  );
}

export function ImageSkeleton({ width = "w-full", height = "h-48" }: { width?: string; height?: string }) {
  return (
    <div className={`skeleton ${width} ${height} rounded-lg animate-pulse`}></div>
  );
}

export function TextSkeleton({ lines = 3, className = "" }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {[...Array(lines)].map((_, i) => (
        <div key={i} className="skeleton h-4 w-full"></div>
      ))}
    </div>
  );
}
