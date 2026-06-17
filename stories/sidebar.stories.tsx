import type { Meta, StoryObj } from "@storybook/react";
import { Luggage, Plane } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/registry/ui/sidebar";

function SidebarPreview() {
  return (
    <SidebarProvider className="flex min-h-0 w-64">
      <Sidebar collapsible="none" className="h-auto min-h-40 w-full">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>
                    <Plane />
                    <span>Flights</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Luggage />
                    <span>Trips</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}

const meta: Meta<typeof SidebarProvider> = {
  title: "UI/Sidebar",
  component: SidebarProvider,
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SidebarPreview />,
};
