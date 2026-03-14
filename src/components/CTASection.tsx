import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Star, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/4 blur-[200px]" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-dark-card border border-border rounded-2xl p-10 md:p-16 shadow-card text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-primary/10 blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <div className="line-gold mx-auto mb-4" />
            <p className="font-body text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-3">
              Ready to Start?
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Get Your Free <br />
              <span className="text-gradient-gold italic">Roof Estimate</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              No obligation, no pressure — just honest advice from roofing
              experts who care about doing the job right.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="tel:+16233132212"
                className="group flex items-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-lg font-body text-sm font-semibold tracking-wide shadow-gold-lg hover:scale-[1.03] transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <Phone size={18} />
                Get Free Estimate
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="https://wa.me/+16233132212"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-lg font-body text-sm font-semibold tracking-wide hover:scale-[1.03] transition-all duration-300 w-full sm:w-auto justify-center text-white"
                style={{ backgroundColor: "#25D366" }}
              >
                <svg viewBox="0 0 32 32" width="18" height="18" fill="white">
                  <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.96A15.93 15.93 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.31 22.606c-.39 1.1-2.274 2.104-3.128 2.168-.854.064-1.644.386-5.544-1.154-4.7-1.856-7.666-6.698-7.898-7.008-.232-.31-1.892-2.514-1.892-4.796s1.196-3.404 1.62-3.868c.424-.464.926-.58 1.234-.58.308 0 .616.002.886.016.284.014.666-.108.942.718.308.886 1.04 3.014 1.13 3.234.09.22.15.478.03.77-.12.294-.18.476-.354.734-.174.258-.366.576-.522.774-.174.22-.356.458-.152.898.204.44.906 1.496 1.944 2.422 1.334 1.19 2.458 1.558 2.808 1.732.35.174.554.146.758-.088.204-.234.874-.978 1.106-1.316.232-.338.464-.278.782-.168.318.11 2.016.95 2.362 1.124.346.174.578.262.662.406.084.144.084.834-.306 1.934z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <a
                href="https://share.google/vuEkzHsCfDMfzoZvB"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
              >
                <MapPin size={15} />
                Google Maps
              </a>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/30" />
              <a
                href="https://www.yelp.com/biz/lmg-roofing-phoenix"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
              >
                <Star size={15} />
                Yelp Reviews
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
