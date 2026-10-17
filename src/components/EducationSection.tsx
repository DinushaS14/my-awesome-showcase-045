import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "NSBM Green University (Victoria University)",
    detail: "Bachelor of Information Technology, Major in Cyber Security",
    period: "2023 – 2026",
  },
  {
    school: "NSBM Green University (Victoria University)",
    detail: "Foundation Program – Computing",
    period: "2022 – 2023",
  },
  {
    school: "R/Gankanda Cetal College",
    detail: "Advanced & Ordinary Level Education",
    period: "2016 – 2022",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 text-glow">
            {">"} ./get_education.sh
          </p>
          <h2 className="font-heading text-4xl font-bold">
            <span className="text-primary text-glow">Education</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((item, i) => (
            <motion.div
              key={item.detail + item.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-sm p-6 hover:border-glow transition-all group"
            >
              <GraduationCap className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-heading text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.school}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {item.detail}
              </p>
              <span className="font-mono text-xs text-primary/70 bg-primary/5 border border-primary/10 px-3 py-1 rounded-sm">
                {item.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
