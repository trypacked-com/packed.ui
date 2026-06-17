import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "@/registry/ui/skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "UI/Skeleton",
  component: Skeleton,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "h-4 w-48",
  },
};

export const TripCard: Story = {
  render: () => (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center gap-3">
        <Skeleton className="size-10 rounded-pill" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-20 w-full rounded-lg" />
    </div>
  ),
};
