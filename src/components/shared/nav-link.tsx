"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

type NavLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: "header" | "footer";
};

export function NavLink({ variant = "header", ...props }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className={cn(
        "text-neutral-10 transition hover:opacity-80",
        variant == "header"
          ? "text-[1.125rem] font-medium leading-6"
          : "text-sm font-normal",
        pathname == props.href && "opacity-80",
      )}
    />
  );
}
