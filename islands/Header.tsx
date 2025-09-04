// /** components/Header.tsx – Bigger header + bigger buttons */
// import { useSignal } from "@preact/signals";
// import { IS_BROWSER } from "$fresh/runtime.ts";

// export default function Header() {
//   const open = useSignal(false);
//   const linkBase =
//     "block px-6 py-3 lg:py-0 text-neutral-900 hover:text-primary-600";

//   return (
//     <header class="bg-white border-b border-surface-100">
//       <nav class="container mx-auto px-4 flex items-center justify-between h-24">
//         <a href="/" className="flex-shrink-0">
//           <img
//             src="/images/logo.png" // point to your actual logo file
//             alt="FM Logo"
//             className="h-12 w-auto" // adjust height to fit your 24‑unit nav
//           />
//         </a>

//         {/* Mobile toggle – larger touch target */}
//         <button
//           type="button"
//           class="lg:hidden text-4xl p-3"
//           onClick={() => IS_BROWSER && (open.value = !open.value)}
//           aria-label="Toggle navigation"
//         >
//           ☰
//         </button>

//         {/* Desktop menu */}
//         <ul class="hidden lg:flex items-center gap-8 text-lg">
//           <li>
//             <a href="/why-headless" class={linkBase}>Why Headless</a>
//           </li>
//           <li>
//             <a href="/platform" class={linkBase}>Platform</a>
//           </li>
//           <li>
//             <a href="/solutions" class={linkBase}>Solutions</a>
//           </li>
//           <li>
//             <a href="/pricing" class={linkBase}>Pricing</a>
//           </li>
//           <li>
//             <a href="/docs" class={linkBase}>Docs</a>
//           </li>
//           <li>
//             <a href="/blog" class={linkBase}>Blog</a>
//           </li>
          
//           <li>
//             <a
//               href="/contact"
//               class="ml-4 inline-block bg-primary-500 hover:bg-primary-600  
//                      text-white text-lg font-semibold px-8 py-4 rounded-lg  
//                      shadow-md transition ease-in-out duration-150"
//             >
//              Discovery Call
//             </a>
//           </li>
//         </ul>
//       </nav>

//       {/* Mobile drawer */}
//       {open.value && (
//         <ul class="lg:hidden bg-white border-t border-surface-100">
//           {[
//             ["Why HeadlessPro", "/why"],
//             ["Platform", "/platform"],
//             ["Solutions", "/solutions"],
//             ["Pricing", "/pricing"],
//             ["Docs", "/docs"],
//             ["Blog", "/blog"],
//             ["Product Stories", "/product-story"],
//           ].map(([label, href]) => (
//             <li key={href}>
//               <a
//                 href={href}
//                 class="block px-6 py-4 border-b border-surface-100  
//                        text-neutral-900 hover:bg-surface-100 text-lg"
//                 onClick={() => (open.value = false)}
//               >
//                 {label}
//               </a>
//             </li>
//           ))}
//           <li class="p-4">
//             <a
//               href="/signup"
//               class="block text-center bg-primary-500 hover:bg-primary-600  
//                      text-white text-lg font-semibold px-8 py-4 rounded-lg  
//                      shadow-md transition ease-in-out duration-150"
//             >
//               Start Free Trial
//             </a>
//           </li>
//         </ul>
//       )}
//     </header>
//   );
// }

/** components/Header.tsx
 * Single-page, One-Page-Love-inspired header
 * - sticky
 * - mobile hamburger
 * - smooth scroll to anchors
 * - active link highlighting via IntersectionObserver
 */

// This is for one page
import { h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Automation", href: "#automation" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" }
  // { label: "Contact", href: "#contact" },
];

function safeQuery(id: string) {
  try {
    return document.querySelector(id);
  } catch {
    return null;
  }
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // close mobile menu on route/hash change / outside click
    const onDocClick = (e: MouseEvent) => {
      if (!open) return;
      const target = e.target as Node;
      if (!navRef.current) return;
      if (!navRef.current.contains(target)) setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href);
    const elems = ids.map((id) => ({ id, el: safeQuery(id) })).filter((x) => x.el);
    if (!elems.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // choose the most visible section
        let best: IntersectionObserverEntry | null = null;
        for (const e of entries) {
          if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
        }
        if (best && best.target && (best.target as Element).id) {
          setActive(`#${(best.target as Element).id}`);
        }
      },
      { root: null, rootMargin: "0px 0px -40% 0px", threshold: [0, 0.1, 0.3, 0.6] }
    );

    elems.forEach((x) => observer.observe(x.el as Element));
    return () => observer.disconnect();
  }, []);

  const handleNav = (e: MouseEvent, href: string) => {
    // allow external / mailto / tel
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
    e.preventDefault();
    const id = href.startsWith("#") ? href : `#${href}`;
    const el = safeQuery(id);
    setOpen(false);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      try { history.replaceState(null, "", id); } catch {}
    } else {
      // fallback to top
      window.scrollTo({ top: 0, behavior: "smooth" });
      try { window.location.hash = id; } catch {}
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm bg-white/60 border-b border-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNav(e as any, "#hero")}
            className="flex items-center gap-3"
            aria-label="Go to top"
          >
            <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
            <span className="hidden sm:inline font-semibold text-neutral-800">Headless Engine</span>
          </a>

          {/* Desktop nav */}
          <nav ref={navRef as any} className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => {
                const isActive = active === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNav(e as any, link.href)}
                      className={
                        "text-sm transition-colors duration-150 " +
                        (isActive ? "text-neutral-900 font-semibold" : "text-neutral-600 hover:text-neutral-900")
                      }
                      aria-current={isActive ? "true" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href="#contact"
              onClick={(e) => handleNav(e as any, "#contact")}
              className="ml-4 inline-flex items-center rounded-full bg-neutral-900 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:opacity-95"
            >
              Contact
            </a>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:bg-neutral-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden transition-max-h duration-300 ease-in-out overflow-hidden ${open ? "max-h-[400px]" : "max-h-0"}`}
      >
        <div className="px-4 pb-6 pt-2 space-y-3">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e as any, link.href)}
                    className={
                      "block px-3 py-2 rounded-md text-base " +
                      (isActive ? "text-neutral-900 font-semibold" : "text-neutral-700 hover:bg-neutral-100")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleNav(e as any, "#contact")}
              className="block w-full text-center rounded-full bg-neutral-900 text-white px-4 py-2 font-semibold"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
