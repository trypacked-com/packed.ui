import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "@/registry/ui/slider";

const meta: Meta<typeof Slider> = {
  title: "UI/Slider",
  component: Slider,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="grid w-64 gap-3">
      <div className="flex items-center justify-between text-sm">
        <span>Check-in reminder</span>
        <span className="font-mono text-muted-text">3 days</span>
      </div>
      <Slider defaultValue={[3]} min={1} max={7} step={1} />
    </div>
  ),
};

export const Range: Story = {
  render: () => (
    <div className="grid w-64 gap-3">
      <div className="text-sm">Trip dates</div>
      <Slider defaultValue={[3, 10]} min={1} max={14} step={1} />
    </div>
  ),
};
