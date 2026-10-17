import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "ShieldX: Unified Identity Protection System",
    description:
      "Full-stack email security platform built as my final year project. Checks domain authentication (SPF, DKIM, DMARC), flags blacklisted mail servers, and uses NLP to detect phishing and BEC emails. Suspicious emails are auto-quarantined, and each domain gets a Security DNA risk score shown on an admin dashboard.",
    tech: ["Python", "FastAPI", "React", "Tailwind CSS", "PostgreSQL", "Docker", "NLP"],
    tag: "Final Year Project",
  },
  {
    title: "Research Project (5G & 6G Security)",
    description:
      "Academic study on next-generation security threats and defense mechanisms in 5G and emerging 6G networks. Identified key vulnerabilities and proposed a multi-layered security framework using advanced cryptographic and trust models.",
    tech: [
      "5G Security",
      "6G Threat Modeling",
      "Post-Quantum Cryptography",
      "Zero Trust Architecture",
      "AI-Enhanced Security",
    ],
    tag: "Research",
  },
  {
    title: "Network Forensic Investigation Project",
    description:
      "Performed a full forensic analysis on a PCAP file to identify malicious activity and reconstruct network topology. Analyzed over 94,000 packets while maintaining forensic integrity through evidence hashing.",
    tech: [
      "Wireshark",
      "HTTP/TCP Analysis",
      "ARP",
      "DNS Correlation",
      "SHA-1",
      "MD5",
      "SHA-256",
    ],
    tag: "Forensics",
  },
  {
    title: "URL Phishing Detector",
    description:
      "Developed a Python-based tool to detect phishing URLs using domain age checks, keyword analysis, and risk scoring. Designed for penetration testing workflows in a Kali Linux environment.",
    tech: ["Python", "Kali Linux", "WHOIS Analysis", "URL Parsing", "Phishing Detection"],
    tag: "Tooling",
  },
  {
    title: "Simple Keylogger (Educational Project)",
    description:
      "Built an educational Python keylogger to understand event-driven programming and system input monitoring. Implemented real-time keystroke logging with ethical and academic use considerations.",
    tech: ["Python", "pynput", "Event-Driven Programming", "Cross-Platform Development"],
    tag: "Learning",
  },
  {
    title: "Cyber Security Essentials – Lab Work",
    description:
      "Hands-on cybersecurity lab work covering ethical hacking, web attacks, cryptography, and system security. Gained practical experience identifying vulnerabilities, exploiting them ethically, and applying security controls.",
    tech: [
      "Kali Linux",
      "Metasploit Framework",
      "OpenSSL",
      "XSS",
      "SQL Injection",
      "Cryptography",
      "Steganography",
      "Linux Permissions",
    ],
    tag: "Lab Work",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 text-glow">
            {">"} ls ~/projects
          </p>
          <h2 className="font-heading text-4xl font-bold">
            Featured <span className="text-primary text-glow">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-sm p-6 hover:border-glow transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="inline-block font-mono text-[10px] uppercase tracking-wider text-primary/70 bg-primary/5 border border-primary/10 px-2 py-0.5 rounded-sm mb-2">
                    {project.tag}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-primary/70 bg-primary/5 border border-primary/10 px-2 py-1 rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
