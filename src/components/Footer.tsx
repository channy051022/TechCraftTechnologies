import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Company: [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ],
  Resources: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  Social: [
    { name: "LinkedIn", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "X", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-background pt-24 pb-12 border-t border-zinc-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-24">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-6 group">
              <Image
                src="/techcraftlogo-light.png"
                alt="TechCraft Technologies"
                width={260}
                height={116}
                className="h-13 sm:h-14 md:h-16 w-auto dark:hidden block transition-opacity group-hover:opacity-85"
              />
              <Image
                src="/techcraftlogo.png"
                alt="TechCraft Technologies"
                width={260}
                height={116}
                className="h-13 sm:h-14 md:h-16 w-auto dark:block hidden transition-opacity group-hover:opacity-85"
              />
            </Link>
            <p className="text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-400 mb-8 max-w-sm">
              Build What’s Next.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-zinc-950 dark:text-white tracking-wider uppercase mb-6">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      {category === "Social" && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-zinc-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} TechCraft Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span>Designed with</span>
            <span className="text-red-500 animate-pulse">♥</span>
            <span>for the future.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
