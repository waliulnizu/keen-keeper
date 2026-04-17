"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const active = isActive(href);

  return (
    <Link
      href={href}
      className={
        active
          ? "font-bold bg-green-900 text-white px-3 py-2 rounded"
          : "hover:text-green-900"
      }
    >
      {children}
    </Link>
  );
};

export default MyNavLink;
