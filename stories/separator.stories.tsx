import type { Meta, StoryObj } from "@storybook/react";

import { Separator } from "@/registry/ui/separator";

const meta: Meta<typeof Separator> = {
  title: "UI/Separator",
  component: Separator,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <div className="space-y-1">
        <p className="text-sm font-medium">Flights</p>
        <p className="text-sm text-muted-foreground">
          <span className="font-mono">TP1234</span> to Lisbon
        </p>
      </div>
      <Separator />
      <div className="space-y-1">
        <p className="text-sm font-medium">Hotels</p>
        <p className="text-sm text-muted-foreground">Bairro Alto, 3 nights</p>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-8 items-center gap-4 text-sm">
      <span>Flights</span>
      <Separator orientation="vertical" />
      <span>Hotels</span>
      <Separator orientation="vertical" />
      <span>Activities</span>
    </div>
  ),
};
