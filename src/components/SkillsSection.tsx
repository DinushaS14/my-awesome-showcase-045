import { motion } from "framer-motion";

const skills = [
  {
    category: "Cyber Skills",
    items: ["TCP/IP", "OSI Model", "SIEM Tools", "EDR Tools", "Vulnerability Scanning", "Network Traffic Analysis"],
  },
  {
    category: "OS & Frameworks",
    items: ["Kali Linux", "Windows", "Ubuntu", "Metasploit"],
  },
  {
    category: "Programming",
    items: ["C", "Java", "Python", "Bash/Shell"],
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "PHP"],
  },
  {
    category: "Tools & Platforms",
    items: ["Burp Suite", "Nmap", "Wireshark", "TryHackMe", "HackTheBox", "PicoCTF"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Azure", "Google Cloud"],
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
              transition={{ delay: i * 0.1 }}
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
