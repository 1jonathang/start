import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// functions to help make everything easier

// cn(class names)
// npm install clsx tailwind-merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


