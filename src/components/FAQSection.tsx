import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How much does a new roof cost?",
    a: "Every roof is different. Cost depends on size, material, and complexity. We provide free, detailed estimates with no hidden fees. Call us at (623) 313-2212 for a personalized quote.",
  },
  {
    q: "How long does a roof replacement take?",
    a: "Most residential roofs are completed in 1-3 days, depending on the size and material. We'll provide an exact timeline during your consultation.",
  },
  {
    q: "Do you offer financing options?",
    a: "Yes! We work with several financing partners to help make your new roof affordable. Ask us about our flexible payment plans.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. LMG Roofing is fully licensed, bonded, and insured in the state of Arizona. We carry full liability and workers' compensation insurance.",
  },
  {
    q: "Do you handle insurance claims?",
    a: "Yes, we have extensive experience working with insurance companies. We'll guide you through the entire claims process from documentation to final inspection.",
  },
  {
    q: "What types of roofing materials do you use?",
    a: "We work with all major roofing materials including asphalt shingles, clay and concrete tile, TPO, modified bitumen, and foam coatings — all from top manufacturers.",
  },
];

const FAQItem = ({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div
    className={`border border-border rounded-xl overflow-hidden transition-colors duration-300 ${
      isOpen ? "border-primary/30 bg-card" : "bg-transparent hover:border-muted"
    }`}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-6 text-left"
    >
      <h3 className="font-heading text-base md:text-lg font-semibold pr-4">
        {faq.q}
      </h3>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary/20' : 'bg-muted'}`}>
        {isOpen ? (
          <Minus size={16} className="text-primary" />
        ) : (
          <Plus size={16} className="text-muted-foreground" />
        )}
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="px-6 pb-6 font-body text-sm text-muted-foreground leading-relaxed">
            {faq.a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="section-padding bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="line-gold mb-4" />
            <p className="font-body text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-3">
              FAQ
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-6">
              Common <br />
              <span className="text-gradient-gold italic">Questions</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Got questions? We've got answers. If you don't see what you're
              looking for, don't hesitate to reach out.
            </p>
            <a
              href="tel:+16233132212"
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-lg font-body text-sm font-semibold shadow-gold hover:scale-[1.02] transition-transform"
            >
              Call Us for More Info
            </a>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
