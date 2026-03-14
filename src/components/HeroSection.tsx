import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-roof-2.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BG Image with Ken Burns effect */}
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "linear" }}
        src={heroImg}
        alt="Luxury home with pristine roof at golden hour"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Multi-layer overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-overlay-hero)" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-radial-glow)" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-primary/30 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-body text-xs font-medium tracking-widest text-primary uppercase">
              Licensed & Insured — Phoenix, AZ
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6"
          >
            Premium Roofing
            <br />
            <span className="text-gradient-gold italic">Craftsmanship</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10"
          >
            Expert installation, repair & maintenance for residential and
            commercial properties. Trusted by homeowners across the Valley
            for over a decade.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href="tel:+16233132212"
              className="group flex items-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-lg font-body text-sm font-semibold tracking-wide shadow-gold-lg hover:scale-[1.03] transition-all duration-300"
            >
              <Phone size={18} />
              Get Free Estimate
            </a>
            <a
              href="https://wa.me/+16233132212"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-lg font-body text-sm font-semibold tracking-wide hover:scale-[1.03] transition-all duration-300 text-white"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg viewBox="0 0 32 32" width="18" height="18" fill="white">
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.96A15.93 15.93 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.31 22.606c-.39 1.1-2.274 2.104-3.128 2.168-.854.064-1.644.386-5.544-1.154-4.7-1.856-7.666-6.698-7.898-7.008-.232-.31-1.892-2.514-1.892-4.796s1.196-3.404 1.62-3.868c.424-.464.926-.58 1.234-.58.308 0 .616.002.886.016.284.014.666-.108.942.718.308.886 1.04 3.014 1.13 3.234.09.22.15.478.03.77-.12.294-.18.476-.354.734-.174.258-.366.576-.522.774-.174.22-.356.458-.152.898.204.44.906 1.496 1.944 2.422 1.334 1.19 2.458 1.558 2.808 1.732.35.174.554.146.758-.088.204-.234.874-.978 1.106-1.316.232-.338.464-.278.782-.168.318.11 2.016.95 2.362 1.124.346.174.578.262.662.406.084.144.084.834-.306 1.934z"/>
              </svg>
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="font-body text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
