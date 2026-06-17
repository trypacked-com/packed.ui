"use client";

import { Slider } from "@/registry/ui/slider";

export default function SliderDemo() {
  return (
    <div className="grid w-full max-w-xs gap-3">
      <div className="flex items-center justify-between text-sm">
        <span>Check-in reminder</span>
        <span className="font-mono text-muted-text">3 days</span>
      </div>
      <Slider defaultValue={[3]} min={1} max={7} step={1} />
    </div>
  );
}
