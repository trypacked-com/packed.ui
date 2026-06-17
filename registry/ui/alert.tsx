import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/registry/lib/utils";

const alertVariants = cva(
  "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border border-subtle px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5",
  {
    variants: {
      variant: {
        default: "bg-card [&>svg]:text-brand",
        destructive:
          "bg-card border-destructive [&>svg]:text-destructive *:data-[slot=alert-title]:text-destructive *:data-[slot=alert-description]:text-destructive/90",
        info: "bg-status-info-bg border-status-info-fg/20 [&>svg]:text-status-info-fg *:data-[slot=alert-title]:text-status-info-fg",
        success:
          "bg-status-ontime-bg border-status-ontime-fg/20 [&>svg]:text-status-ontime-fg *:data-[slot=alert-title]:text-status-ontime-fg",
        warning:
          "bg-status-delay-bg border-status-delay-fg/20 [&>svg]:text-status-delay-fg *:data-[slot=alert-title]:text-status-delay-fg",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight text-strong",
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 grid justify-items-start gap-1 text-sm text-muted-text [&_p]:leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

export { Alert, AlertDescription, AlertTitle };
