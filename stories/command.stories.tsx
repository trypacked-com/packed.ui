import type { Meta, StoryObj } from "@storybook/react";
import { CalendarIcon, MapPinIcon, PlaneIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/registry/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/ui/command";

const meta: Meta<typeof Command> = {
  title: "UI/Command",
  component: Command,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function CommandPaletteStory() {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Search trip
        </Button>
        <CommandDialog
          open={open}
          onOpenChange={setOpen}
          title="Search trip"
          description="Find flights, gates, and trip actions"
        >
          <CommandInput placeholder="Search flights, gates, trips..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <PlaneIcon />
                Add flight
              </CommandItem>
              <CommandItem>
                <CalendarIcon />
                View itinerary
              </CommandItem>
              <CommandItem>
                <MapPinIcon />
                Find gate
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Flights">
              <CommandItem>
                <span className="font-mono">TP1234</span> to Lisbon
                <CommandShortcut>⌘1</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <span className="font-mono">TP5678</span> return
                <CommandShortcut>⌘2</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    );
  },
};

export const Standalone: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <Command className="max-w-md">
      <CommandInput placeholder="Search flights, gates, trips..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Flights">
          <CommandItem>
            <PlaneIcon />
            <span className="font-mono">TP1234</span> to Lisbon
          </CommandItem>
          <CommandItem>
            <PlaneIcon />
            <span className="font-mono">TP5678</span> return
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
