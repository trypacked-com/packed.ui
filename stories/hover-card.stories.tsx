import type { Meta, StoryObj } from "@storybook/react";

import HoverCardDemo from "@/app/(docs)/demos/hover-card";
import { HoverCard } from "@/registry/ui/hover-card";

const meta = {
  title: "UI/Hover Card",
  component: HoverCard,
  parameters: { layout: "centered" },
} satisfies Meta<typeof HoverCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <HoverCardDemo />,
};
