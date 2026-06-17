import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "@/registry/ui/checkbox";
import { Label } from "@/registry/ui/label";

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="gate-alerts" defaultChecked />
      <Label htmlFor="gate-alerts">Notify me on gate change</Label>
    </div>
  ),
};

export const Unchecked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="baggage-alerts" />
      <Label htmlFor="baggage-alerts">Baggage carousel updates</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="disabled" disabled />
      <Label htmlFor="disabled">Unavailable on this route</Label>
    </div>
  ),
};
