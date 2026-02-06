import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <Link href="/" className="  text-3xl font-semibold text-background">
            AmberPrint
          </Link>

          <nav className="flex flex-wrap justify-center gap-6 lg:gap-8">
            <Link href="#collection" className="text-sm text-background/70 transition-colors hover:text-background">
              Collection
            </Link>
            <Link href="#about" className="text-sm text-background/70 transition-colors hover:text-background">
              About
            </Link>
            <Link href="#process" className="text-sm text-background/70 transition-colors hover:text-background">
              Process
            </Link>
            <Link href="#contact" className="text-sm text-background/70 transition-colors hover:text-background">
              Contact
            </Link>
          </nav>

          <div className="h-px w-full max-w-xs bg-background/20" />

          <p className="text-sm text-background/60">
            © {currentYear} AmberPrint. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
