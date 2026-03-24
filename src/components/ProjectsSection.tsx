import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "5G & 6G Security Research",
    description:
      "Academic study on next-generation security threats and defense mechanisms. Proposed a multi-layered security framework using post-quantum cryptography and zero trust architecture.",
    tech: ["5G Security", "Threat Modeling", "Post-Quantum Crypto", "Zero Trust", "AI Security"],
  },
  {
    title: "Network Traffic Analyzer",
    description:
      "Real-time network traffic capture and analysis tool to detect suspicious IP activity. Built an interactive web interface for protocol-level visualization.",
    tech: ["Wireshark", "Python", "Scapy", "React", "Tailwind CSS"],
  },
  {
    title: "Password Security Analyzer",
    description:
      "Web tool evaluating password strength via entropy analysis and breach detection using privacy-preserving k-anonymity with Have I Been Pwned API.",
    tech: ["Python", "Flask", "HIBP API", "SHA-1", "k-Anonymity"],
  },
  {
    title: "Network Forensic Investigation",
    description:
      "Full forensic analysis on a PCAP file to identify malicious activity. Analyzed 94,000+ packets while maintaining forensic integrity through evidence hashing.",
    tech: ["Wireshark", "TCP Analysis", "DNS Correlation", "SHA-256"],
  },
  {
    title: "URL Phishing Detector",
    description:
      "Python tool to detect phishing URLs using domain age checks, keyword analysis, and risk scoring. Designed for pen-testing workflows in Kali Linux.",
    tech: ["Python", "Kali Linux", "WHOIS", "URL Parsing"],
  },
  {
    title: "Cyber Security Lab Work",
    description:
      "Hands-on labs covering ethical hacking, web attacks, cryptography, and system security. Practical experience with real-world tools and defense techniques.",
    tech: ["Metasploit", "XSS", "SQL Injection", "Cryptography", "Steganography"],
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
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
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
