import type { Meta, StoryObj } from "@storybook/react";

import DatePickerDemo from "@/app/(docs)/demos/date-picker";

const meta = {
  title: "UI/Date Picker",
  component: DatePickerDemo,
  parameters: { layout: "centered" },
} satisfies Meta<typeof DatePickerDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <DatePickerDemo />,
};
