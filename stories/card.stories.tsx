import type { Meta, StoryObj } from "@storybook/react";
import {
  Calendar,
  ChevronRight,
  Compass,
  Moon,
  Plane,
  Users,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
} from "@/registry/ui/avatar";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardIcon,
  CardMedia,
  CardMediaAction,
  CardMediaOverlay,
  CardMeta,
  CardTitle,
} from "@/registry/ui/card";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TripCard: Story = {
  render: () => (
    <Card padded={false} interactive className="w-full max-w-xs">
      <CardMedia>
        <div className="size-full bg-linear-to-br from-sky-400 via-sky-500 to-brand" />
        <CardMediaAction>
          <span className="inline-flex items-center gap-1.5 rounded-pill bg-card px-2.5 py-1 text-xs font-semibold text-strong shadow-sm">
            <span
              className="size-1.5 rounded-full"
              style={{ background: "var(--sky-500)" }}
            />
            In progress
          </span>
        </CardMediaAction>
        <CardMediaOverlay>
          <div>
            <p className="font-serif font-semibold text-2xl text-white tracking-tight">
              Lisbon
            </p>
            <p className="text-sm text-white/85">Portugal</p>
          </div>
        </CardMediaOverlay>
      </CardMedia>
      <CardHeader className="gap-3">
        <div className="flex items-center gap-2.5">
          <Avatar size="sm">
            <AvatarFallback className="bg-brand text-on-brand">MQ</AvatarFallback>
          </Avatar>
          <CardTitle className="text-base">Mara Quinn</CardTitle>
        </div>
        <CardMeta>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="size-4 text-subtle" />
            Jun 14 – 21
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users className="size-4 text-subtle" />
            4
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Moon className="size-4 text-subtle" />
            7 n
          </span>
        </CardMeta>
      </CardHeader>
      <CardFooter className="border-t">
        <Plane className="size-4 shrink-0 text-brand" />
        <p className="min-w-0 flex-1 truncate text-sm text-muted-text">
          Boarding <span className="font-mono">TP1234</span> · Gate{" "}
          <span className="font-mono">B7</span>
        </p>
        <ChevronRight className="size-4 shrink-0 text-subtle" />
      </CardFooter>
    </Card>
  ),
};

export const StatCard: Story = {
  render: () => (
    <Card interactive className="w-full max-w-xs flex-row items-center gap-4">
      <CardIcon>
        <Compass />
      </CardIcon>
      <CardHeader className="gap-0.5 p-0">
        <CardTitle className="font-serif text-3xl tracking-tight">8</CardTitle>
        <CardDescription>Active trips</CardDescription>
      </CardHeader>
    </Card>
  ),
};
