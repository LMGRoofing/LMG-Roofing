import { motion } from "framer-motion";
import { Shield, Clock, Award, ThumbsUp, Wrench, HeartHandshake } from "lucide-react";
import teamWork from "@/assets/team-work.jpg";

const reasons = [
  { icon: Shield, title: "Licensed & Insured", desc: "Full coverage for your peace of mind on every project." },
  { icon: Clock, title: "On-Time Delivery", desc: "We respect your schedule and complete work when promised." },
  { icon: Award, title: "Premium Materials", desc: "Only top-tier materials from leading manufacturers." },
  { icon: ThumbsUp, title: "5-Star Rated", desc: "Consistently rated 5 stars by homeowners across Phoenix." },
  { icon: Wrench, title: "Expert Crews", desc: "Trained, certified professionals with years of experience." },
  { icon: HeartHandshake, title: "Warranty Backed", desc: "Comprehensive warranties on all materials and labor." },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/3 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={teamWork}
                alt="LMG Roofing team working together"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-4 md:right-6 bg-gradient-gold text-primary-foreground rounded-xl p-5 shadow-gold-lg"
            >
              <div className="font-heading text-3xl font-bold">15+</div>
              <div className="font-body text-xs font-medium tracking-wide">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="line-gold mb-4" />
            <p className="font-body text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-3">
              Why Choose LMG
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-8">
              Built on Trust, <br />
              <span className="text-gradient-gold italic">Driven by Quality</span>
            </h2>

            <div className="grid grid-cols-2 gap-6">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <r.icon className="text-primary" size={18} />
                    </div>
                    <h3 className="font-heading text-sm font-semibold">{r.title}</h3>
                  </div>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed pl-12">
                    {r.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
