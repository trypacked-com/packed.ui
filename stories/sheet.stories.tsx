import type { Meta, StoryObj } from "@storybook/react";

import SheetDemo from "@/app/(docs)/demos/sheet";
import { Button } from "@/registry/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/ui/sheet";

const meta = {
  title: "UI/Sheet",
  component: Sheet,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Sheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SheetDemo />,
};

export const Left: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Boarding pass</SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <span className="font-mono">TP1234</span>
          </SheetTitle>
          <SheetDescription>
            Show this at the gate — boarding starts at{" "}
            <span className="font-mono">08:15</span>.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};
