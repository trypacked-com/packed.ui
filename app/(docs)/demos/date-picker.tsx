"use client";

import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import * as React from "react";
import type { DateRange } from "react-day-picker";

import { DatePicker } from "@/registry/ui/date-picker";
import { Button } from "@/registry/ui/button";
import { Calendar } from "@/registry/ui/calendar";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/ui/popover";

export default function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>();
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <FieldGroup className="max-w-xs">
      <Field>
        <FieldLabel>Departure date</FieldLabel>
        <DatePicker
          date={date}
          onDateChange={setDate}
          placeholder="Pick a date"
        />
        <FieldDescription>
          We use this to line up flight and hotel reminders.
        </FieldDescription>
      </Field>

      <Field>
        <FieldLabel>Trip dates</FieldLabel>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              data-empty={!range?.from}
              className="w-full justify-start font-normal data-[empty=true]:text-muted-text"
            >
              <CalendarIcon />
              {range?.from ? (
                range.to ? (
                  <>
                    {format(range.from, "LLL dd, y")} –{" "}
                    {format(range.to, "LLL dd, y")}
                  </>
                ) : (
                  format(range.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date range</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="range"
              defaultMonth={range?.from}
              selected={range}
              onSelect={setRange}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
        <FieldDescription>
          Select your outbound and return dates.
        </FieldDescription>
      </Field>
    </FieldGroup>
  );
}
