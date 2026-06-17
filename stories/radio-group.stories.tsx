import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@/registry/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";

const meta: Meta<typeof RadioGroup> = {
  title: "UI/Radio Group",
  component: RadioGroup,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
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
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="window" disabled className="max-w-xs">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="window" id="seat-window-disabled" />
        <Label htmlFor="seat-window-disabled">Window</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="aisle" id="seat-aisle-disabled" />
        <Label htmlFor="seat-aisle-disabled">Aisle</Label>
      </div>
    </RadioGroup>
  ),
};
