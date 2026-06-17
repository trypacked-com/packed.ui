import { Loader2Icon } from "lucide-react";

import { cn } from "@/registry/lib/utils";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn(
        "size-4 animate-spin text-brand duration-slow motion-reduce:animate-none",
        className,
      )}
      {...props}
    />
  );
}

export { Spinner };
