import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: "dark" | "light";
  className?: string;
}

export default function Breadcrumbs({
  items,
  variant = "dark",
  className = "",
}: BreadcrumbsProps) {
  const isDark = variant === "dark";

  const linkColor = isDark
    ? "text-white/80 hover:text-accent"
    : "text-text-muted hover:text-accent";

  const activeColor = isDark
    ? "text-cream font-bold drop-shadow-sm"
    : "text-primary font-bold";

  const chevronColor = isDark ? "text-white/40" : "text-text-muted/40";

  return (
    <nav aria-label="Breadcrumb" className={`mb-6 ${className}`}>
      <ol
        className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium tracking-wide"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          className="flex items-center gap-1.5 sm:gap-2"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link
            href="/"
            className={`transition-colors flex items-center gap-1.5 ${linkColor}`}
            itemProp="item"
          >
            <Home className="w-3.5 h-3.5 shrink-0" />
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-1.5 sm:gap-2"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${chevronColor}`} />
            {item.href ? (
              <Link
                href={item.href}
                className={`transition-colors ${linkColor}`}
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span
                className={activeColor}
                itemProp="name"
                aria-current="page"
              >
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(idx + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
