import type { Meta, StoryObj } from "@storybook/react";

import PopoverDemo from "@/app/(docs)/demos/popover";
import { Popover } from "@/registry/ui/popover";

const meta = {
  title: "UI/Popover",
  component: Popover,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <PopoverDemo />,
};
