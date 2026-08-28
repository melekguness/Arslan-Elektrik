import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneDisplay(phone: string) {
  return phone.replace(/(\+90)(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5");
}
