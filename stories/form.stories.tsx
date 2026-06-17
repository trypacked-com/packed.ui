import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/registry/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/ui/form";
import { Input } from "@/registry/ui/input";

const formSchema = z.object({
  flightCode: z
    .string()
    .min(1, "Add a flight code to continue.")
    .regex(/^[A-Z]{2}\d{1,4}$/, "Use a code like TP1234."),
});

type FormValues = z.infer<typeof formSchema>;

function FormExample() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { flightCode: "" },
  });

  return (
    <Form {...form}>
      <form
        className="grid w-full max-w-xs gap-4"
        onSubmit={form.handleSubmit(() => undefined)}
      >
        <FormField
          control={form.control}
          name="flightCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Flight code</FormLabel>
              <FormControl>
                <Input
                  className="font-mono uppercase"
                  placeholder="TP1234"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                We&apos;ll watch this flight for gate and delay updates.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add flight</Button>
      </form>
    </Form>
  );
}

const meta: Meta<typeof FormExample> = {
  title: "UI/Form",
  component: FormExample,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
