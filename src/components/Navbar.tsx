import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#why-us" },
    { label: "Reviews", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-4 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded bg-gradient-gold flex items-center justify-center font-heading text-lg font-bold text-primary-foreground">
            L
          </div>
          <div>
            <span className="font-heading text-xl font-bold tracking-wide text-foreground">
              LMG
            </span>
            <span className="block text-[10px] font-body tracking-[0.35em] text-muted-foreground uppercase -mt-1">
              Roofing
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative font-body text-[13px] font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="tel:+16233132212"
          className="hidden lg:flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-lg font-body text-sm font-semibold tracking-wide shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:scale-[1.02]"
        >
          <Phone size={15} />
          (623) 313-2212
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="flex flex-col items-center gap-5 py-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm font-medium tracking-wide text-muted-foreground hover:text-primary transition-colors uppercase"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:+16233132212"
                className="flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-lg font-body text-sm font-semibold shadow-gold mt-2"
              >
                <Phone size={15} />
                (623) 313-2212
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
