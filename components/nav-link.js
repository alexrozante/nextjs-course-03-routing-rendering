'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"

export default function Navlink({ href, children }) {
  const path = usePathname();
  const active = path.includes(href);
  return (
    <Link href={href} className={active ? "active" : undefined}>
      {children}
    </Link>
  );
};
