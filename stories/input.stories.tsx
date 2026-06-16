import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/registry/ui/input";

const meta = {
  title: "Input",
  component: Input,
  args: {
    placeholder: "you@example.com",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="max-w-xs">
      <Input {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <div className="max-w-xs">
      <Input {...args} />
    </div>
  ),
};

export const Invalid: Story = {
  args: { "aria-invalid": true, defaultValue: "not-an-email" },
  render: (args) => (
    <div className="max-w-xs">
      <Input {...args} />
    </div>
  ),
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid max-w-xs gap-2">
      <label className="font-medium text-sm text-strong" htmlFor="email">
        Email
      </label>
      <Input {...args} id="email" />
    </div>
  ),
};
