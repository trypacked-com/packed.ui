import type { Meta, StoryObj } from "@storybook/react";
import { LayoutGrid, List } from "lucide-react";

import { Toggle } from "@/registry/ui/toggle";

const meta: Meta<typeof Toggle> = {
  title: "UI/Toggle",
  component: Toggle,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle variant="outline" aria-label="List view">
        <List />
      </Toggle>
      <Toggle variant="outline" defaultPressed aria-label="Grid view">
        <LayoutGrid />
      </Toggle>
    </div>
  ),
};

export const Outline: Story = {
  render: () => (
    <Toggle variant="outline" aria-label="Toggle bold">
      Bold
    </Toggle>
  ),
};

export const Small: Story = {
  render: () => (
    <Toggle size="sm" variant="outline" aria-label="Compact toggle">
      Compact
    </Toggle>
  ),
};
