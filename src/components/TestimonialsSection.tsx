import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Homeowner, Scottsdale",
    text: "LMG Roofing did an incredible job on our tile roof replacement. The crew was professional, clean, and finished ahead of schedule. Couldn't be happier!",
    rating: 5,
  },
  {
    name: "James R.",
    role: "Property Manager, Phoenix",
    text: "I manage multiple commercial properties and LMG is my go-to roofer. Their flat roof work is top-notch and their pricing is always fair and transparent.",
    rating: 5,
  },
  {
    name: "Maria L.",
    role: "Homeowner, Chandler",
    text: "After the monsoon damaged our roof, LMG responded within hours. They handled the insurance paperwork and had our roof looking brand new in no time.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="line-gold mx-auto mb-4" />
          <p className="font-body text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-3">
            Testimonials
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
            What Our Clients <br />
            <span className="text-gradient-gold italic">Say About Us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-gradient-dark-card border border-border rounded-xl p-8 shadow-card hover:border-primary/20 transition-all duration-500 relative"
            >
              {/* Quote icon */}
              <Quote className="text-primary/10 absolute top-6 right-6" size={40} />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star
                    key={si}
                    size={16}
                    className="text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-sm text-foreground/80 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center font-heading text-sm font-bold text-primary-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-body text-sm font-semibold">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
