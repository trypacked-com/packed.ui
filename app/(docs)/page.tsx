import Link from "next/link";

import registry from "@/registry.json";

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
          bunx shadcn@latest add https://ui.trypacked.com/r/button.json
        </pre>
      </section>

      <section className="space-y-5">
        <h2 className="font-serif font-semibold text-strong text-xl tracking-tight">
          Components
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {components.map((item) => (
            <li key={item.name}>
              <Link
                href={`/components/${item.name}/`}
                className="group flex h-full flex-col gap-2 rounded-lg border border-border-subtle bg-card p-5 shadow-sm transition-all duration-[var(--dur-fast)] ease-[var(--ease-out)] hover:-translate-y-px hover:shadow-md"
              >
                <span className="font-serif font-semibold text-base text-strong">
                  {item.title ?? item.name}
                </span>
                {item.description ? (
                  <span className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
