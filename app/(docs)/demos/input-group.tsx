"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/ui/input-group";
import { Label } from "@/registry/ui/label";

export default function InputGroupDemo() {
  return (
    <div className="grid w-full max-w-xs gap-2">
      <Label htmlFor="flight-number">Flight number</Label>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText className="font-mono">TP</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          id="flight-number"
          className="font-mono"
          placeholder="1234"
        />
      </InputGroup>
    </div>
  );
}
