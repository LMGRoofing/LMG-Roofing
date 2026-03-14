import { motion } from "framer-motion";
import { PhoneCall, ClipboardCheck, Hammer, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Free Consultation",
    desc: "Call us or send a message. We'll discuss your roofing needs and schedule a convenient time for inspection.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Roof Inspection",
    desc: "Our experts conduct a thorough inspection and provide a detailed, transparent estimate — no hidden costs.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Expert Installation",
    desc: "Our certified team completes the work on schedule using premium materials and industry best practices.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Final Walkthrough",
    desc: "We walk you through the completed project, ensure your satisfaction, and provide warranty documentation.",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="line-gold mx-auto mb-4" />
          <p className="font-body text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-3">
            How It Works
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
            Simple, Transparent <br />
            <span className="text-gradient-gold italic">Process</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+30px)] w-[calc(100%-60px)] h-[1px] bg-border" />
              )}

              <div className="text-center">
                {/* Step number */}
                <div className="font-heading text-6xl font-bold text-border/50 mb-4 group-hover:text-primary/20 transition-colors duration-500">
                  {s.step}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 mb-5 group-hover:shadow-gold transition-all duration-500">
                  <s.icon className="text-primary" size={26} />
                </div>

                <h3 className="font-heading text-xl font-bold mb-3">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
