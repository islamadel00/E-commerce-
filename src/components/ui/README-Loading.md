# Loading Components Documentation

This document describes the loading components and system implemented in the application.

## Components Overview

### 1. LoadingSpinner
A versatile spinner component with different sizes and colors.

**Props:**
- `size`: "xs" | "sm" | "md" | "lg" | "xl" (default: "md")
- `color`: "primary" | "secondary" | "white" | "gray" (default: "primary")
- `className`: string (optional)

**Usage:**
```tsx
import LoadingSpinner from "@/components/ui/LoadingSpinner";

<LoadingSpinner size="lg" color="primary" />
```

### 2. PageLoading
A full-page loading component with title, subtitle, and optional progress bar.

**Props:**
- `title`: string (default: "Loading...")
- `subtitle`: string (default: "Please wait while we load the page")
- `showProgress`: boolean (default: false)
- `progress`: number (default: 0)
- `className`: string (optional)

**Usage:**
```tsx
import PageLoading from "@/components/ui/PageLoading";

<PageLoading
  title="Loading Products..."
  subtitle="Please wait while we fetch the latest products"
  showProgress={true}
  progress={75}
/>
```

### 3. NavigationLoading
A wrapper component that shows a progress bar at the top when navigating between pages.

**Props:**
- `children`: React.ReactNode

**Usage:**
```tsx
import NavigationLoading from "@/components/ui/NavigationLoading";

<NavigationLoading>
  <YourAppContent />
</NavigationLoading>
```

### 4. LoadingSkeletons
Various skeleton components for different UI elements.

**Available Skeletons:**
- `ProductCardSkeleton`
- `CategoryCardSkeleton`
- `TeamMemberSkeleton`
- `StatisticsSkeleton`
- `NavigationSkeleton`
- `FooterSkeleton`
- `FormSkeleton`
- `TableSkeleton`
- `ImageSkeleton`
- `TextSkeleton`

**Usage:**
```tsx
import { ProductCardSkeleton, TextSkeleton } from "@/components/ui/LoadingSkeletons";

<ProductCardSkeleton />
<TextSkeleton lines={3} />
```

## CSS Classes

The loading system includes several CSS classes for animations:

- `.loading-spinner`: Spinning animation
- `.loading-pulse`: Pulsing animation
- `.loading-bounce`: Bouncing animation
- `.loading-fade-in`: Fade in animation
- `.loading-slide-in`: Slide in animation
- `.loading-shimmer`: Shimmer effect
- `.skeleton`: Base skeleton styling
- `.loading-overlay`: Full screen loading overlay

## Implementation

The loading system is integrated into the application through:

1. **Layout Integration**: `NavigationLoading` is wrapped around the main content in `layout.tsx`
2. **Page Components**: `PageLoading` is used in various pages for loading states
3. **CSS**: Loading animations are imported in `globals.css`
4. **Skeletons**: Used in components for better UX during data loading

## Features

- **Automatic Navigation Loading**: Shows progress bar when navigating between pages
- **Customizable Spinners**: Different sizes and colors
- **Progress Bars**: Visual progress indication
- **Skeleton Loading**: Placeholder content while loading
- **Responsive Design**: Works on all device sizes
- **Accessibility**: Proper ARIA labels and screen reader support

## Best Practices

1. Use `PageLoading` for full-page loading states
2. Use `LoadingSpinner` for inline loading indicators
3. Use appropriate skeleton components for content placeholders
4. Always provide meaningful titles and subtitles
5. Use progress bars for long-running operations
6. Test loading states on slow connections
