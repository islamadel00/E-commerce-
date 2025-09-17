"use client";

interface LoadingSpinnerProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "white" | "gray";
  className?: string;
}

export default function LoadingSpinner({
  size = "md",
  color = "primary",
  className = "",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    xs: "w-3 h-3",
    sm: "w-5 h-5",
    md: "w-10 h-10",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
  };

  const colorClasses = {
    primary: "bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-600",
    secondary: "bg-gradient-to-tr from-red-500 via-pink-400 to-orange-600",
    white: "bg-gradient-to-tr from-white via-gray-100 to-gray-200",
    gray: "bg-gradient-to-tr from-gray-400 via-gray-500 to-gray-600",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`
          ${sizeClasses[size]}
          rounded-full
          border-4
          border-transparent
          border-t-transparent
          animate-spin
          ${colorClasses[color]}
          [mask-image:radial-gradient(farthest-side,white_94%,transparent)]
        `}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
