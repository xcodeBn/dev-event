import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class name inputs into a single, deduplicated Tailwind CSS class string.
 *
 * Accepts any number of `ClassValue` items (strings, arrays, objects, etc.); falsy values are ignored.
 *
 * @param inputs - The class name inputs to merge and deduplicate
 * @returns A string of merged Tailwind CSS classes with conflicts resolved and duplicates removed
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}