import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Parses blog dates written as MM-DD-YYYY or YYYY-MM-DD, as UTC so the day never shifts by timezone. */
export function parseDate(input: string | undefined): Date {
  if (!input) return new Date(NaN);
  const mdy = /^(\d{1,2})-(\d{1,2})-(\d{4})$/.exec(input);
  if (mdy) return new Date(Date.UTC(+mdy[3], +mdy[1] - 1, +mdy[2]));
  const ymd = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(input);
  if (ymd) return new Date(Date.UTC(+ymd[1], +ymd[2] - 1, +ymd[3]));
  return new Date(input);
}
