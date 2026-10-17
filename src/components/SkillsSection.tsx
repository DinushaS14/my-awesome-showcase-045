import { motion } from "framer-motion";

const skills = [
  {
    category: "Cyber Skills",
    items: [
      "Protocols",
      "TCP/IP",
      "OSI Model",
      "Networks",
      "Cyber Attacks",
      "SIEM Tools",
      "EDR Tools",
      "Vulnerability Scanning",
      "Network Traffic Analysis",
      "Virtualization (VirtualBox)",
      "Network Configurations",
      "Agile Methodologies",
    ],
  },
  {
    category: "Security Platforms",
    items: [
      "Microsoft Sentinel",
      "FortiSIEM",
      "Trellix (McAfee) SIEM",
      "CrowdStrike Falcon EDR",
      "CrowdStrike XDR",
      "Cortex XDR",
    ],
  },
  {
    category: "Security Operations",
    items: [
      "Security Monitoring",
      "Incident Triage",
      "Alert Investigation",
      "Case Escalation",
      "Log Analysis",
    ],
  },
  {
    category: "OS & Frameworks",
    items: ["Kali Linux", "Windows", "Ubuntu", "Metasploit"],
  },
  {
    category: "Servers",
    items: ["Windows Server 2016", "Windows Server 2022"],
  },
  {
    category: "Programming & Scripting",
    items: ["C", "Java", "Python", "R", "Bash/Linux Shell (basics)"],
  },
  {
    category: "Web Languages",
    items: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "PHP"],
  },
  {
    category: "Tools & Platforms",
    items: [
      "TryHackMe",
      "Hack The Box",
      "Burp Suite",
      "Nmap",
      "Wireshark",
      "GitHub",
      "PicoCTF",
      "SQL",
      "Microsoft 365",
      "Canva",
      "Figma",
      "LetsDefend",
      "Weka",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: ["Azure", "Google Cloud"],
  },
  {
    category: "Soft Skills",
    items: [
      "Good Communication",
      "Leadership",
      "Team Spirit",
      "Good Attitude",
      "Problem Solving",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 text-glow">
            {">"} cat skills.txt
          </p>
          <h2 className="font-heading text-4xl font-bold">
            Technical <span className="text-primary text-glow">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-sm p-6 hover:border-glow transition-all group"
            >
              <h3 className="font-mono text-primary text-sm mb-4 text-glow">
                // {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="bg-muted text-muted-foreground font-mono text-xs px-3 py-1.5 rounded-sm border border-border group-hover:border-primary/20 transition-colors"
                  >
                    {item}
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

export default SkillsSection;
