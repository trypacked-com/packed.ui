"use client";

import { Label } from "@/registry/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="window" className="max-w-xs">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="window" id="seat-window" />
        <Label htmlFor="seat-window">Window</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="aisle" id="seat-aisle" />
        <Label htmlFor="seat-aisle">Aisle</Label>
      </div>
    </RadioGroup>
  );
}
