import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@/registry/ui/badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "3 updates",
  },
};

export const Brand: Story = {
  args: {
    variant: "brand",
    children: "Packed",
  },
};

export const Tag: Story = {
  args: {
    variant: "tag",
    children: "Beach",
  },
};

export const TagBrand: Story = {
  args: {
    variant: "tagBrand",
    children: "Priority",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "On time",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Delayed 40m",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Badge>3 updates</Badge>
        <Badge variant="brand">Packed</Badge>
        <Badge variant="tag">Beach</Badge>
        <Badge variant="tagBrand">Priority</Badge>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Badge variant="success">On time</Badge>
        <Badge variant="warning">Delayed 40m</Badge>
      </div>
    </div>
  ),
};
