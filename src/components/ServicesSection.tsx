import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import rooferWork from "@/assets/roofer-work.jpg";
import tileRoof from "@/assets/tile-roof.jpg";
import flatRoof from "@/assets/flat-roof.jpg";
import roofRepair from "@/assets/roof-repair.jpg";

const services = [
  {
    title: "Shingle Roofing",
    desc: "Premium asphalt shingle installation with manufacturer-certified techniques. Built to handle Arizona's extreme heat and monsoon storms.",
    img: rooferWork,
    tag: "Most Popular",
  },
  {
    title: "Tile Roofing",
    desc: "Elegant clay and concrete tile solutions that combine timeless beauty with decades of protection for your home.",
    img: tileRoof,
    tag: "Residential",
  },
  {
    title: "Flat Roofing",
    desc: "Commercial-grade TPO, modified bitumen, and foam coating systems for flat and low-slope roofs.",
    img: flatRoof,
    tag: "Commercial",
  },
  {
    title: "Roof Repair",
    desc: "Emergency leak repair, storm damage restoration, and preventative maintenance to extend your roof's lifespan.",
    img: roofRepair,
    tag: "Emergency",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <div className="line-gold mb-4" />
          <p className="font-body text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-3">
            Our Services
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-4">
            Roofing Solutions <br />
            <span className="text-gradient-gold italic">For Every Need</span>
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            From new installations to emergency repairs, we deliver quality
            craftsmanship with materials that stand the test of time.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden bg-gradient-dark-card border border-border hover:border-primary/30 transition-all duration-500 shadow-card hover:shadow-card-hover"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-2/5 h-56 md:h-auto overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                  <span className="inline-block w-fit font-body text-[10px] font-semibold tracking-[0.2em] text-primary uppercase bg-primary/10 px-3 py-1 rounded-full mb-4">
                    {s.tag}
                  </span>
                  <h3 className="font-heading text-2xl font-bold mb-3">
                    {s.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">
                    {s.desc}
                  </p>
                  <a
                    href="tel:+16233132212"
                    className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:gap-3 transition-all duration-300"
                  >
                    Get a Quote <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
