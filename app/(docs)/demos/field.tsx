"use client";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/ui/field";
import { Input } from "@/registry/ui/input";

export default function FieldDemo() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="departure">Departure time</FieldLabel>
      <FieldContent>
        <Input id="departure" className="font-mono" defaultValue="08:45" />
        <FieldDescription>Local time at your origin airport.</FieldDescription>
      </FieldContent>
    </Field>
  );
}
