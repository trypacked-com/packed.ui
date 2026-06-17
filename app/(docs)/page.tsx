import Link from "next/link";

import registry from "@/registry.json";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";

const components = registry.items.filter((item) => item.type === "registry:ui");

export default function LandingPage() {
  return (
    <div className="space-y-16">
      <section className="space-y-5">
        <p className="pk-eyebrow">Packed design system</p>
        <h1 className="text-balance font-serif font-semibold text-[2.5rem] text-strong leading-tight tracking-tight">
          Warm, sunset-led React components.
        </h1>
        <p className="max-w-xl text-base text-muted-foreground leading-relaxed">
          A standalone shadcn registry. Add any component straight into your app
          with the shadcn CLI — it lands in{" "}
          <code className="font-mono text-sm">components/ui</code> and resolves
          its dependencies for you.
        </p>
        <pre className="overflow-x-auto rounded-md bg-surface-sunken p-4 font-mono text-sm text-strong">
          bunx shadcn@latest add https://ui.trypacked.dev/r/button.json
        </pre>
      </section>

      <section className="space-y-5">
        <h2 className="font-serif font-semibold text-strong text-xl tracking-tight">
          Components
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {components.map((item) => (
            <li key={item.name}>
              <Card interactive asChild>
                <Link
                  href={`/components/${item.name}/`}
                  className="h-full no-underline"
                >
                  <CardHeader>
                    <CardTitle className="font-serif text-base">
                      {item.title ?? item.name}
                    </CardTitle>
                    {item.description ? (
                      <CardDescription>{item.description}</CardDescription>
                    ) : null}
                  </CardHeader>
                </Link>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
