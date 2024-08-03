import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Method 5: Combining multiple checks for higher accuracy
function isMobile() {
  return (
    isMobile1() || 
    isMobileByTouchPoints() || 
    isMobileByMediaQuery() ||
    ('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0)
  );
}

// Method 1: Using window.navigator.userAgent (most common)
function isMobile1() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Method 2: Using window.navigator.maxTouchPoints
function isMobileByTouchPoints() {
  return window.navigator.maxTouchPoints > 0;
}

// Method 3: Using CSS media queries
function isMobileByMediaQuery() {
  return window.matchMedia("(max-width: 767px)").matches;
}

export {isMobile};