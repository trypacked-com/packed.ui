import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "next-themes";
import { toast } from "sonner";

import { Button } from "@/registry/ui/button";
import { Toaster } from "@/registry/ui/sonner";

const meta: Meta<typeof Toaster> = {
  title: "UI/Sonner",
  component: Toaster,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="light">
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <Toaster />
      <Button
        onClick={() =>
          toast("Gate change", {
            description: (
              <>
                <span className="font-mono">TP1234</span> now departs from{" "}
                <span className="font-mono">B7</span>.
              </>
            ),
          })
        }
      >
        Show toast
      </Button>
    </>
  ),
};
