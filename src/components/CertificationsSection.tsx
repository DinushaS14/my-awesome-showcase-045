import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  "CPPS",
  "CCEP",
  "CCSC",
  "Intro to Security Principles in Cloud Computing (Google Skill Boost)",
  "Intro to Cyber (CISCO)",
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 text-glow">
            {">"} cat certifications.log
          </p>
          <h2 className="font-heading text-4xl font-bold">
            <span className="text-primary text-glow">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 bg-card border border-border rounded-sm p-4 hover:border-glow transition-all"
            >
              <Award className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="font-mono text-sm text-foreground">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
