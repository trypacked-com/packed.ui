"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/registry/lib/utils";
import { Button } from "@/registry/ui/button";
import { Calendar } from "@/registry/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/ui/popover";

type DatePickerProps = {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
} & Pick<
  React.ComponentProps<typeof Calendar>,
  "captionLayout" | "startMonth" | "endMonth"
>;

function DatePicker({
  date,
  onDateChange,
  placeholder = "Pick a date",
  className,
  disabled,
  captionLayout,
  startMonth,
  endMonth,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        disabled={disabled}
        render={
          <Button
            variant="outline"
            data-empty={!date}
            className={cn(
              "w-56 justify-start font-normal data-[empty=true]:text-muted-text",
              className,
            )}
          />
        }
      >
        <CalendarIcon />
        {date ? format(date, "PPP") : <span>{placeholder}</span>}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          defaultMonth={date}
          captionLayout={captionLayout}
          startMonth={startMonth}
          endMonth={endMonth}
          onSelect={(nextDate) => {
            onDateChange?.(nextDate);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

export { DatePicker };
