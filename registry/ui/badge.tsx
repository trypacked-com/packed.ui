import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type * as React from "react";

import { cn } from "@/registry/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-pill border border-transparent px-2.5 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-brand text-on-brand [a&]:hover:bg-brand-hover",
        secondary:
          "bg-secondary text-secondary-foreground [a&]:hover:bg-brand-subtle",
        destructive:
          "bg-destructive text-white focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90",
        outline: "border-border text-foreground [a&]:hover:bg-brand-subtle",
        ghost: "[a&]:hover:bg-brand-subtle",
        link: "text-link underline-offset-4 [a&]:hover:underline",
        // Soft brand badge (Badge handoff: brand tone)
        brand: "bg-brand-subtle text-link [a&]:hover:bg-brand-subtle",
        // Tag handoff — neutral / branded chips
        tag: "border-border bg-card text-foreground text-sm [a&]:hover:bg-brand-subtle",
        tagBrand: "border-brand bg-brand-subtle text-link text-sm",
        // StatusPill handoff — functional status fg/bg pairs
        ontime: "bg-status-ontime-bg text-status-ontime-fg font-semibold",
        boarding: "bg-status-info-bg text-status-info-fg font-semibold",
        delayed: "bg-status-delay-bg text-status-delay-fg font-semibold",
        cancelled: "bg-status-cancel-bg text-status-cancel-fg font-semibold",
        landed: "bg-muted text-muted-text font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
