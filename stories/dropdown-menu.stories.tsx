import type { Meta, StoryObj } from "@storybook/react";
import {
  MoreHorizontalIcon,
  PlaneIcon,
  ShareIcon,
  TrashIcon,
} from "lucide-react";

import { Button } from "@/registry/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/ui/dropdown-menu";

const meta: Meta<typeof DropdownMenu> = {
  title: "UI/DropdownMenu",
  component: DropdownMenu,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <MoreHorizontalIcon />
          <span className="sr-only">Trip actions</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <PlaneIcon />
          Add flight
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ShareIcon />
          Share itinerary
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <TrashIcon />
          Remove trip
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
