"use client";

import { Button } from "@/registry/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/ui/sheet";

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Trip details</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Lisbon trip</SheetTitle>
          <SheetDescription>
            Departure <span className="font-mono">TP1234</span>
          </SheetDescription>
        </SheetHeader>
        <p className="px-4 text-sm text-muted-text">
          Gate <span className="font-mono">B7</span> · Boarding at{" "}
          <span className="font-mono">08:15</span>
        </p>
      </SheetContent>
    </Sheet>
  );
}
