import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Turkish local display: `0xxx xxx xx xx` (e.g. 0542 676 46 00). */
export function formatPhoneDisplay(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const local = digits.startsWith("90") && digits.length >= 12
    ? `0${digits.slice(2, 12)}`
    : digits.startsWith("0")
      ? digits.slice(0, 11)
      : digits.length === 10
        ? `0${digits}`
        : digits;
  const m = local.match(/^(\d{4})(\d{3})(\d{2})(\d{2})$/);
  return m ? `${m[1]} ${m[2]} ${m[3]} ${m[4]}` : phone;
}
