"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface NavigationLoadingProps {
  children: React.ReactNode;
}

export default function NavigationLoading({ children }: NavigationLoadingProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isLoading, isClient]);

  useEffect(() => {
    if (!isClient) return;
    
    // Show loading when pathname changes
    setIsLoading(true);
    setLoadingProgress(0);

    // Hide loading after a short delay
    const timer = setTimeout(() => {
      setLoadingProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setLoadingProgress(0);
      }, 200);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname, isClient]);

  return (
    <>
      {children}
      {isClient && isLoading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
      )}
    </>
  );
}
