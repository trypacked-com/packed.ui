import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="grid w-full max-w-xs gap-4">
      <div className="grid gap-2">
        <Label htmlFor="destination">Destination</Label>
        <Input id="destination" placeholder="Where to?" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="flight-code">Flight code</Label>
        <Input
          id="flight-code"
          className="font-mono"
          placeholder="TP1234"
          defaultValue="TP1234"
        />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "TP1234",
    className: "font-mono max-w-xs",
  },
};

export const Invalid: Story = {
  args: {
    "aria-invalid": true,
    defaultValue: "not-a-code",
    className: "font-mono max-w-xs",
  },
};
