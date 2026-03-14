import { motion } from "framer-motion";
import luxuryHome from "@/assets/luxury-home.jpg";
import commercialRoof from "@/assets/commercial-roof.jpg";
import heroRoof from "@/assets/hero-roof.jpg";
import tileRoof from "@/assets/tile-roof.jpg";

const projects = [
  { img: luxuryHome, title: "Luxury Tile Roof", location: "Scottsdale, AZ", type: "Residential" },
  { img: commercialRoof, title: "Commercial Flat Roof", location: "Phoenix, AZ", type: "Commercial" },
  { img: heroRoof, title: "Complete Re-Roof", location: "Chandler, AZ", type: "Residential" },
  { img: tileRoof, title: "Desert Home Tile", location: "Gilbert, AZ", type: "Residential" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="line-gold mx-auto mb-4" />
          <p className="font-body text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-3">
            Our Work
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
            Recent <span className="text-gradient-gold italic">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden cursor-pointer aspect-[3/4]"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-body text-[10px] font-semibold tracking-[0.2em] text-primary uppercase">
                  {p.type}
                </span>
                <h3 className="font-heading text-lg font-bold mt-1">
                  {p.title}
                </h3>
                <p className="font-body text-xs text-muted-foreground mt-1">
                  {p.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
