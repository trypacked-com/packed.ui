import type { Meta, StoryObj } from "@storybook/react";

import { Calendar } from "@/registry/ui/calendar";

const meta: Meta<typeof Calendar> = {
  title: "UI/Calendar",
  component: Calendar,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Calendar />,
};
