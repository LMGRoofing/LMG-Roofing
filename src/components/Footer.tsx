import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main footer */}
        <div className="grid md:grid-cols-3 gap-12 py-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded bg-gradient-gold flex items-center justify-center font-heading text-lg font-bold text-primary-foreground">
                L
              </div>
              <div>
                <span className="font-heading text-xl font-bold tracking-wide">
                  LMG
                </span>
                <span className="block text-[10px] font-body tracking-[0.35em] text-muted-foreground uppercase -mt-1">
                  Roofing
                </span>
              </div>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
              Phoenix's trusted roofing contractor. Licensed, insured, and
              committed to excellence on every project.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold tracking-wider uppercase mb-5">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {["Services", "Projects", "About", "Reviews", "FAQ", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold tracking-wider uppercase mb-5">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+16233132212"
                className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={15} />
                (623) 313-2212
              </a>
              <a
                href="https://share.google/vuEkzHsCfDMfzoZvB"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin size={15} />
                Phoenix, Arizona
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © {currentYear} LMG Roofing. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.yelp.com/biz/lmg-roofing-phoenix"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Yelp
            </a>
            <a
              href="https://wa.me/+16233132212"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://share.google/vuEkzHsCfDMfzoZvB"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
