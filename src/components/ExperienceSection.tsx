import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const roles = [
  {
    title: "Junior SOC Analyst",
    company: "Cryptogen, Sri Lanka",
    period: "June 2026 – Present",
    points: [
      "Monitored and analyzed security events using SIEM and XDR platforms, including Microsoft Sentinel, Trellix SIEM, FortiSIEM, CrowdStrike EDR and Cortex XDR.",
      "Performed log analysis and investigation of suspicious activities and potential IOCs.",
      "Escalated security incidents and supported incident response activities through effective documentation.",
    ],
  },
  {
    title: "Cyber Security Trainee",
    company: "Cryptogen, Sri Lanka",
    period: "April 2026 – June 2026",
    points: [
      "Assisted with Cyber Threat Intelligence (CTI) research, analysis, and reporting to support proactive threat detection.",
      "Shadowed SOC analysts during live security monitoring operations to gain hands-on exposure to real-world incident workflows.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 text-glow">
            {">"} tail -f /var/log/experience
          </p>
          <h2 className="font-heading text-4xl font-bold">
            Work <span className="text-primary text-glow">History</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {roles.map((role, i) => (
            <motion.div
              key={role.title + role.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-sm p-6 hover:border-glow transition-all group relative"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {role.title}
                    </h3>
                    <p className="font-mono text-xs text-muted-foreground">
                      {role.company}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-primary/70 bg-primary/5 border border-primary/10 px-3 py-1 rounded-sm">
                  {role.period}
                </span>
              </div>
              <ul className="space-y-2 pl-8">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="text-muted-foreground text-sm leading-relaxed"
                  >
                    <span className="text-primary/50 mr-2">-</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
