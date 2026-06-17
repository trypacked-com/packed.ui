import type { Meta, StoryObj } from "@storybook/react";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/ui/field";
import { Input } from "@/registry/ui/input";

const meta: Meta<typeof Field> = {
  title: "UI/Field",
  component: Field,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="departure">Departure time</FieldLabel>
      <FieldContent>
        <Input id="departure" className="font-mono" defaultValue="08:45" />
        <FieldDescription>Local time at your origin airport.</FieldDescription>
      </FieldContent>
    </Field>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Field orientation="horizontal" className="max-w-sm">
      <FieldLabel htmlFor="gate-horizontal">Gate</FieldLabel>
      <FieldContent>
        <Input
          id="gate-horizontal"
          className="font-mono w-24"
          defaultValue="B7"
        />
      </FieldContent>
    </Field>
  ),
};
