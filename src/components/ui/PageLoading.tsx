"use client";

import React from "react";
import LoadingSpinner from "./LoadingSpinner";

interface PageLoadingProps {
  title?: string;
  subtitle?: string;
  showProgress?: boolean;
  progress?: number;
  className?: string;
}

export default function PageLoading({
  title = "Loading...",
  subtitle = "Please wait while we load the page",
  showProgress = false,
  progress = 0,
  className = "",
}: PageLoadingProps) {
  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-50 ${className}`}>
      <div className="text-center max-w-md mx-auto px-4">
        {/* Logo or Icon */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">E</span>
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="mb-6">
          <LoadingSpinner size="lg" color="primary" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6">
          {subtitle}
        </p>

        {/* Progress Bar */}
        {showProgress && (
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            ></div>
          </div>
        )}

        {/* Progress Percentage */}
        {showProgress && (
          <p className="text-sm text-gray-500">
            {Math.round(progress)}%
          </p>
        )}

        {/* Loading Dots Animation */}
        <div className="flex justify-center space-x-1 mt-4">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    </div>
  );
}
