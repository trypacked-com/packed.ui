import type { Meta, StoryObj } from "@storybook/react";

import DrawerDemo from "@/app/(docs)/demos/drawer";
import { Drawer } from "@/registry/ui/drawer";

const meta = {
  title: "UI/Drawer",
  component: Drawer,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <DrawerDemo />,
};
