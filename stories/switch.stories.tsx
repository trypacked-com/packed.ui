import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@/registry/ui/label";
import { Switch } from "@/registry/ui/switch";

const meta: Meta<typeof Switch> = {
  title: "UI/Switch",
  component: Switch,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Switch id="flight-alerts" defaultChecked />
      <Label htmlFor="flight-alerts">Flight alerts</Label>
    </div>
  ),
};

export const Small: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Switch id="delay-alerts" size="sm" />
      <Label htmlFor="delay-alerts">Delay alerts</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Switch id="disabled-switch" disabled />
      <Label htmlFor="disabled-switch">Unavailable</Label>
    </div>
  ),
};
