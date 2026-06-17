import type { Meta, StoryObj } from "@storybook/react";

import DialogDemo from "@/app/(docs)/demos/dialog";
import { Dialog } from "@/registry/ui/dialog";

const meta = {
  title: "UI/Dialog",
  component: Dialog,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <DialogDemo />,
};
