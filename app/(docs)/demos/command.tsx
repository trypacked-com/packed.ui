"use client";

import { CalendarIcon, MapPinIcon, PlaneIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/registry/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/ui/command";

export default function CommandDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Search trip
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search trip"
        description="Find flights, gates, and trip actions"
      >
        <CommandInput placeholder="Search flights, gates, trips..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <PlaneIcon />
              Add flight
            </CommandItem>
            <CommandItem>
              <CalendarIcon />
              View itinerary
            </CommandItem>
            <CommandItem>
              <MapPinIcon />
              Find gate
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Flights">
            <CommandItem>
              <span className="font-mono">TP1234</span> to Lisbon
              <CommandShortcut>⌘1</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span className="font-mono">TP5678</span> return
              <CommandShortcut>⌘2</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
