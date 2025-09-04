// components/AutomationSection.tsx
/** Apple/Adobe-style automation solutions section */
import { h } from "preact";
import { useId } from "preact/hooks";


export default function AutomationSection() {
  const id = useId();
  return (
    <section
      id={`automation-${id}`}
      class="py-20 lg:py-28 bg-gradient-to-br from-white via-slate-50 to-white"
      aria-labelledby={`automation-${id}-title`}
    >
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text & features */}
          <div class="space-y-6 max-w-xl">
            <p class="inline-block px-3 py-1 rounded-full text-sm font-medium text-primary-700 bg-primary-50 ring-1 ring-primary-100">
              Automation
            </p>

            <h2
              id={`automation-${id}-title`}
              class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-neutral-900"
            >
              Automate the work, focus on what matters.
            </h2>

            <p class="text-lg text-neutral-600 leading-relaxed">
              Turn repetitive flows into event-driven pipelines: automated promotions, inventory sync, order routing, returns handling, and personalized lifecycle campaigns — all orchestrated and observable.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {[
                {
                  title: "Smart Promotions",
                  desc:
                    "Auto-trigger targeted promotions when customers hit thresholds, with A/B control and real-time analytics.",
                  icon: (
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M3 12h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M12 3v18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  ),
                },
                {
                  title: "Fulfillment Routing",
                  desc:
                    "Route orders to the optimal fulfillment center automatically based on location, stock and SLA.",
                  icon: (
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M3 7h6l3-3 3 3h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" stroke-width="1.5"/>
                    </svg>
                  ),
                },
                {
                  title: "Returns & Refunds",
                  desc:
                    "Automatic refund eligibility checks, instant partial refunds or admin queueing with audit trails.",
                  icon: (
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M21 12a9 9 0 11-3.17-6.6L21 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M3 12h6v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  ),
                },
                {
                  title: "Lifecycle Orchestration",
                  desc:
                    "Define customer journeys (welcome, churn winback, VIP) with conditional rules and 3rd-party integrations.",
                  icon: (
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M12 3v6l4 2-4 2v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
                    </svg>
                  ),
                },
              ].map((f, i) => (
                <div
                  key={f.title}
                  class="flex gap-3 p-4 rounded-2xl bg-white/75 backdrop-blur-sm ring-1 ring-black/5 shadow-sm items-start"
                >
                  <div class="flex-none rounded-lg bg-primary-50 text-primary-700 p-2">
                    {f.icon}
                  </div>
                  <div>
                    <h4 class="font-semibold text-sm text-neutral-900">{f.title}</h4>
                    <p class="text-neutral-600 text-sm mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div class="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                onClick={(e: MouseEvent) => { e.preventDefault(); const el = document.getElementById("contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
                class="inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-3 text-white font-semibold shadow hover:bg-primary-700 transition"
                aria-label="Contact sales about automation"
              >
                Talk to sales
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>

              {/* <a
                href="#learn"
                onClick={(e: MouseEvent) => { e.preventDefault(); const el = document.getElementById("features"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
                class="inline-flex items-center gap-2 rounded-full px-5 py-3 text-primary-700 ring-1 ring-primary-100 bg-white/80 hover:bg-white transition"
                aria-label="Learn more about automation"
              >
                Learn more
              </a> */}
            </div>
          </div>

          {/* Right: Preview / screenshot card */}
          <div class="relative">
            <div class="rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <div class="bg-gradient-to-b from-white to-neutral-50 p-6">
                {/* preview header */}
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <div class="h-9 w-9 rounded-lg bg-gradient-to-br from-primary-600 to-primary-400 flex items-center justify-center text-white font-semibold">
                      A
                    </div>
                    <div>
                      <div class="text-sm font-semibold">Automation Studio</div>
                      <div class="text-xs text-neutral-500">Visual workflow builder</div>
                    </div>
                  </div>
                  <div class="text-xs text-neutral-500">Live • 13m</div>
                </div>

                {/* mock preview image (replace with real) */}
                <div class="rounded-xl bg-white/90 ring-1 ring-black/5 p-4">
                  <img
                    src="/images/automation_preview.png"
                    alt="Automation preview"
                    class="w-full h-64 object-cover rounded-md shadow-sm"
                    onError={(e: Event) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                  />

                  {/* graceful fallback card if image missing */}
                  <div class="hidden" aria-hidden>
                    {/* left intentionally blank — image should show */}
                  </div>
                </div>

                {/* small caption row */}
                <div class="mt-4 flex items-center justify-between text-sm text-neutral-600">
                  <div>Drag → Connect → Deploy</div>
                  <div>Observability included</div>
                </div>
              </div>
            </div>

            {/* decorative badge */}
            <div class="absolute -bottom-6 -left-6">
              <div class="rounded-full bg-white p-3 shadow-md ring-1 ring-black/5">
                <div class="text-xs text-neutral-700 font-medium">No-code • SDK • Webhooks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
