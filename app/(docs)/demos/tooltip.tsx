"use client";

import { Button } from "@/registry/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/ui/tooltip";

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          Gate info
        </TooltipTrigger>
        <TooltipContent>
          Gate <span className="font-mono">B7</span> — Terminal 2, north wing
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
