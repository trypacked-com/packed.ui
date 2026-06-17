"use client";

import { ToggleGroup, ToggleGroupItem } from "@/registry/ui/toggle-group";

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup type="single" defaultValue="departures" variant="outline">
      <ToggleGroupItem value="departures">Departures</ToggleGroupItem>
      <ToggleGroupItem value="arrivals">Arrivals</ToggleGroupItem>
    </ToggleGroup>
  );
}
