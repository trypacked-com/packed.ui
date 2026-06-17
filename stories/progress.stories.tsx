import type { Meta, StoryObj } from "@storybook/react";

import { Progress } from "@/registry/ui/progress";

const meta: Meta<typeof Progress> = {
  title: "UI/Progress",
  component: Progress,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-64 space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-text">Packing for Lisbon</span>
        <span className="font-mono text-strong">65%</span>
      </div>
      <Progress value={65} />
    </div>
  ),
};
