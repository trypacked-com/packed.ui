"use client";

import { Button } from "@/registry/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/ui/hover-card";

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger
        delay={200}
        render={<Button variant="link" className="font-mono" />}
      >
        TP1234
      </HoverCardTrigger>
      <HoverCardContent>
        <p className="text-sm font-medium">Lisbon · On time</p>
        <p className="text-sm text-muted-text">
          Departs <span className="font-mono">08:45</span> from gate{" "}
          <span className="font-mono">B7</span>
        </p>
      </HoverCardContent>
    </HoverCard>
  );
}
