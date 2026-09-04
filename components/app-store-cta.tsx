import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

type Props = {
  className?: string;
  label?: string;
};

export function AppStoreCta({ className = "button button-primary", label = "Download on the App Store" }: Props) {
  if (!site.skypad.appStoreUrl) {
    return null;
  }

  return (
    <a className={className} href={site.skypad.appStoreUrl} target="_blank" rel="noopener noreferrer">
      {label} <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}
