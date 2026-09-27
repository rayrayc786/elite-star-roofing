import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol
        className="flex items-center flex-wrap gap-1.5 text-sm"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          className="flex items-center gap-1.5"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link
            href="/"
            className="text-text-muted hover:text-accent transition-colors flex items-center gap-1"
            itemProp="item"
          >
            <Home className="w-3.5 h-3.5" />
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-1.5"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <ChevronRight className="w-3.5 h-3.5 text-text-muted/50" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-text-muted hover:text-accent transition-colors"
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span className="text-text font-medium" itemProp="name">
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
