// // /** components/Footer.tsx – Professional responsive footer */
// // export default function Footer() {
// //   const sections = [
// //     {
// //       title: "Product",
// //       links: [
// //         { label: "Features", href: "/#features" },
// //         { label: "Pricing", href: "/pricing" },
// //         { label: "Docs", href: "/docs" },
// //         { label: "API Status", href: "/API_Status" },
// //       ],
// //     },
// //     {
// //       title: "Company",
// //       links: [
// //         { label: "About", href: "/about" },
// //         { label: "Careers", href: "/careers" },
// //         { label: "Blog", href: "/blog" },
// //         { label: "Contact", href: "/contact" },
// //       ],
// //     },
// //     {
// //       title: "Resources",
// //       links: [
// //         { label: "Help Center", href: "/help" },
// //         { label: "Community", href: "/community" },
// //         { label: "Tutorials", href: "/tutorials" },
// //         { label: "Partners", href: "/partners" },
// //       ],
// //     },
// //     {
// //       title: "Legal",
// //       links: [
// //         { label: "Terms of Service", href: "/legal/terms" },
// //         { label: "Privacy Policy", href: "/legal/privacy" },
// //         { label: "Service Level Agreement", href: "/legal/sla" },
// //       ],
// //     },
// //   ] as const;

// //   return (
// //     <footer className="bg-neutral-900 text-white">
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
// //           {/* Logo + tagline */}
// //           <div className="lg:col-span-1">
// //             <a href="/" className="inline-block mb-6">
// //               <img
// //                 src="/images/logo.png"
// //                 alt="HeadlessPro Logo"
// //                 className="h-8 w-auto"
// //               />
// //             </a>
// //              {/* Address block */}
// //             <div className="mt-6 space-y-4">
// //               <h5 className="text-xs font-semibold uppercase tracking-wide text-neutral-300">
// //                 Office
// //               </h5>
// //               <address className="not-italic text-neutral-400 text-sm leading-6">
// //                 No. 18 Zhongguancun Street<br />
// //                 Haidian District, Beijing, China 100080
// //                 {/* Optional: local-language line below */}
// //                 {/* <div className="text-neutral-500">北京市海淀区中关村大街18号</div> */}
// //               </address>
             
// //             </div>

           

// //             <div className="mt-6 flex space-x-4">
// //               <a
// //                 href="#"
// //                 className="text-neutral-400 hover:text-white transition-colors duration-200"
// //               >
// //                 <span className="sr-only">Twitter</span>
// //                 <svg
// //                   className="w-5 h-5"
// //                   fill="currentColor"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
// //                 </svg>
// //               </a>
// //               <a
// //                 href="#"
// //                 className="text-neutral-400 hover:text-white transition-colors duration-200"
// //               >
// //                 <span className="sr-only">LinkedIn</span>
// //                 <svg
// //                   className="w-5 h-5"
// //                   fill="currentColor"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
// //                 </svg>
// //               </a>
// //               <a
// //                 href="#"
// //                 className="text-neutral-400 hover:text-white transition-colors duration-200"
// //               >
// //                 <span className="sr-only">GitHub</span>
// //                 <svg
// //                   className="w-5 h-5"
// //                   fill="currentColor"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
// //                 </svg>
// //               </a>
// //             </div>
// //           </div>

// //           {/* Link sections */}
// //           {sections.map(({ title, links }) => (
// //             <div key={title} className="space-y-4">
// //               <h4 className="font-semibold text-white text-sm uppercase tracking-wide">
// //                 {title}
// //               </h4>
// //               <ul className="space-y-3">
// //                 {links.map(({ label, href }) => (
// //                   <li key={label}>
// //                     <a
// //                       href={href}
// //                       className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm"
// //                     >
// //                       {label}
// //                     </a>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
// //           <p className="text-neutral-400 text-sm">
// //             © {new Date().getFullYear()} Fast & Modern. All rights reserved.
// //           </p>
// //           <div className="mt-4 sm:mt-0 flex space-x-6 text-sm">
// //             <a
// //               href="/legal/terms"
// //               className="text-neutral-400 hover:text-white transition-colors duration-200"
// //             >
// //               Terms
// //             </a>
// //             <a
// //               href="/legal/privacy"
// //               className="text-neutral-400 hover:text-white transition-colors duration-200"
// //             >
// //               Privacy
// //             </a>
// //             <a
// //               href="/legal/cookies"
// //               className="text-neutral-400 hover:text-white transition-colors duration-200"
// //             >
// //               Cookies
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }

// /** components/Footer.tsx – Single page friendly footer */
// export default function Footer() {
//   const sections = [
//     {
//       title: "Product",
//       links: [
//         { label: "Features", href: "#features" },
//         { label: "Automation", href: "#automation" },
//         { label: "Pricing", href: "#pricing" },
//       ],
//     },
//     {
//       title: "Company",
//       links: [
//         { label: "About", href: "#about" },
//         { label: "Careers", href: "#careers" },
//         { label: "Contact", href: "#contact" },
//       ],
//     },
//     {
//       title: "Resources",
//       links: [
//         { label: "Docs", href: "#docs" },
//         { label: "Help Center", href: "#help" },
//         { label: "Partners", href: "#partners" },
//       ],
//     },
//   ] as const;

//   // Smooth scroll helper for single page navigation
//   const handleNav = (e: any, href: string) => {
//     // allow external links (mailto, tel, web) to proceed normally
//     if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
//       return;
//     }
//     e.preventDefault();
//     try {
//       const id = href.startsWith("#") ? href : `#${href}`;
//       const el = document.querySelector(id);
//       if (el) {
//         el.scrollIntoView({ behavior: "smooth", block: "start" });
//         // update the hash without jumping
//         history.replaceState(null, "", id);
//       } else {
//         // fallback: change location hash (works for static build)
//         window.location.hash = id;
//       }
//     } catch {
//       // last resort
//       window.location.href = href;
//     }
//   };

//   return (
//     <footer className="bg-neutral-900 text-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
//           {/* Logo + tagline + office */}
//           <div className="lg:col-span-1">
//             <a href="#hero" onClick={(e) => handleNav(e, "#hero")} className="inline-block mb-4">
//               <img src="/images/logo.png" alt="HeadlessPro logo" className="h-8 w-auto" />
//             </a>

//             <p className="text-sm text-neutral-400 max-w-xs">
//               Launch once. Grow everywhere. A lightweight headless commerce platform
//               built for scale, observability, and fast iteration.
//             </p>

//             <div className="mt-6 space-y-3">
//               <h5 className="text-xs font-semibold uppercase tracking-wide text-neutral-300">Office</h5>
//               <address className="not-italic text-neutral-400 text-sm leading-6">
//                 No. 18 Zhongguancun Street<br />
//                 Haidian District, Beijing, China 100080
//               </address>
//             </div>

//             <div className="mt-6 flex space-x-4">
//               <a
//                 href="https://twitter.com/"
//                 aria-label="Twitter"
//                 className="text-neutral-400 hover:text-white transition-colors duration-200"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
//               </a>
//               <a
//                 href="https://www.linkedin.com/"
//                 aria-label="LinkedIn"
//                 className="text-neutral-400 hover:text-white transition-colors duration-200"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
//               </a>
//               <a
//                 href="https://github.com/"
//                 aria-label="GitHub"
//                 className="text-neutral-400 hover:text-white transition-colors duration-200"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
//               </a>
//             </div>
//           </div>

//           {/* Column link sections (single page anchors) */}
//           {sections.map(({ title, links }) => (
//             <div key={title} className="space-y-4">
//               <h4 className="font-semibold text-white text-sm uppercase tracking-wide">
//                 {title}
//               </h4>
//               <ul className="space-y-3">
//                 {links.map(({ label, href }) => (
//                   <li key={label}>
//                     <a
//                       href={href}
//                       onClick={(e) => handleNav(e, href)}
//                       className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm"
//                     >
//                       {label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}

//           {/* Compact Legal + CTA area in wide layouts */}
//           <div className="space-y-4">
//             <h4 className="font-semibold text-white text-sm uppercase tracking-wide">Legal</h4>
//             <ul className="space-y-3">
//               <li>
//                 <a
//                   href="#privacy"
//                   onClick={(e) => handleNav(e, "#privacy")}
//                   className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm"
//                 >
//                   Privacy
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#terms"
//                   onClick={(e) => handleNav(e, "#terms")}
//                   className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm"
//                 >
//                   Terms
//                 </a>
//               </li>
//             </ul>

//             <div className="mt-6">
//               <a
//                 href="#contact"
//                 onClick={(e) => handleNav(e, "#contact")}
//                 className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-4 py-2 text-sm font-semibold shadow hover:opacity-95 transition"
//               >
//                 Contact sales
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="border-t border-neutral-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
//           <p className="text-neutral-400 text-sm">
//             © {new Date().getFullYear()} Fast & Modern. All rights reserved.
//           </p>

//           <div className="mt-4 sm:mt-0 flex space-x-6 text-sm">
//             <a
//               href="#cookies"
//               onClick={(e) => handleNav(e, "#cookies")}
//               className="text-neutral-400 hover:text-white transition-colors duration-200"
//             >
//               Cookies
//             </a>
//             <a
//               href="mailto:support@example.com"
//               className="text-neutral-400 hover:text-white transition-colors duration-200"
//             >
//               support@example.com
//             </a>
//             <a
//               href="tel:+12223334444"
//               className="text-neutral-400 hover:text-white transition-colors duration-200"
//             >
//               +1 (222) 333-4444
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


/** components/Footer.tsx
 * Minimal, single-page footer inspired by OnePageLove / modern microsites
 * - anchors that scroll to sections
 * - small legal row
 */
/** components/Footer.tsx
 * Minimal, single-page footer inspired by OnePageLove / modern microsites
 * - anchors that scroll to sections
 * - small legal row
 */
// components/Footer.tsx
/** Minimal single-page footer (SSR-safe; Preact/TSX) */
import { h } from "preact";

export default function Footer() {
  const nowYear = new Date().getFullYear();

  return (
    <footer class="bg-neutral-900 text-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: brand + small tagline */}
          <div class="flex items-center gap-4">
            <a href="#home" class="inline-flex items-center">
              <img src="/images/logo.png" alt="Logo" class="h-8 w-auto" />
            </a>
            <div class="hidden sm:block text-neutral-400 text-sm">
              Fast & Modern — headless commerce, thoughtfully designed.
            </div>
          </div>

          {/* Center: minimal nav (in-page anchors) */}
          <nav aria-label="Footer navigation">
            <ul class="flex gap-6 text-sm">
              <li><a href="#home" class="text-neutral-300 hover:text-white">Home</a></li>
              <li><a href="#features" class="text-neutral-300 hover:text-white">Features</a></li>
              <li><a href="#contact" class="text-neutral-300 hover:text-white">Contact</a></li>
            </ul>
          </nav>

          {/* Right: CTA / social compact */}
          <div class="flex items-center gap-4">
            <a
              href="#contact"
              class="inline-flex items-center rounded-full bg-white text-neutral-900 px-4 py-2 text-sm font-semibold shadow-sm hover:opacity-95"
            >
              Get in touch
            </a>

            <div class="flex gap-3">
              <a href="#" class="text-neutral-400 hover:text-white" aria-label="Twitter">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.25c7.55 0 11.67-6.25 11.67-11.67 0-.18 0-.35-.01-.53A8.35 8.35 0 0022 5.92a8.19 8.19 0 01-2.36.65 4.11 4.11 0 001.80-2.27 8.22 8.22 0 01-2.60.99 4.10 4.10 0 00-6.99 3.74 11.65 11.65 0 01-8.46-4.29 4.11 4.11 0 001.27 5.48 4.07 4.07 0 01-1.86-.51v.05a4.11 4.11 0 003.29 4.02c-.42.11-.86.17-1.31.17-.32 0-.63-.03-.93-.09a4.11 4.11 0 003.84 2.85A8.23 8.23 0 012 18.41a11.62 11.62 0 006.29 1.84"/></svg>
              </a>
              <a href="#" class="text-neutral-400 hover:text-white" aria-label="GitHub">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56v-2.09c-3.2.7-3.88-1.55-3.88-1.55-.53-1.35-1.29-1.71-1.29-1.71-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.29 1.8 1.29 1.04 1.78 2.73 1.33 3.4 1 .11-.78.41-1.31.74-1.6-2.56-.29-5.25-1.28-5.25-5.72 0-1.26.45-2.28 1.19-3.08-.12-.3-.52-1.53.11-3.19 0 0 .98-.31 3.22 1.2a11.18 11.18 0 015.86 0c2.23-1.51 3.21-1.2 3.21-1.2.64 1.66.24 2.89.12 3.19.74.8 1.19 1.82 1.19 3.08 0 4.45-2.7 5.42-5.28 5.7.42.36.8 1.08.8 2.18v3.23c0 .31.21.68.8.56A11.54 11.54 0 0023.5 12c0-6.36-5.15-11.5-11.5-11.5z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* bottom legal row */}
        <div class="mt-8 border-t border-neutral-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          <div>© {nowYear} Fast & Modern. All rights reserved.</div>
          <div class="flex gap-6">
            <a href="#privacy" class="hover:text-white">Privacy</a>
            <a href="#terms" class="hover:text-white">Terms</a>
            <a href="#cookies" class="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
