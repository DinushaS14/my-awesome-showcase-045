import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 text-glow">
            {">"} echo "Let's connect"
          </p>
          <h2 className="font-heading text-4xl font-bold">
            Get In <span className="text-primary text-glow">Touch</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing cybersecurity, new opportunities, or
              interesting projects. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:sdinusha902@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-5 h-5 text-primary/50 group-hover:text-primary" />
                <span className="font-mono text-sm">sdinusha902@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary/50" />
                <span className="font-mono text-sm">+94 74 352 7066</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary/50" />
                <span className="font-mono text-sm">Maharagama, Sri Lanka</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/DinushaS14"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border rounded-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-glow transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/dinusha-sewwandi-377b5a252/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border rounded-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-glow transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-sm p-6"
          >
            <div className="font-mono text-xs text-muted-foreground mb-4">
              // terminal output
            </div>
            <div className="font-mono text-sm space-y-2">
              <p>
                <span className="text-primary">dinusha@portfolio</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-secondary">~</span>
                <span className="text-muted-foreground">$ </span>
                <span className="text-foreground">whoami</span>
              </p>
              <p className="text-muted-foreground pl-4">
                Cyber Security Undergraduate @ NSBM Green University
              </p>
              <p className="mt-4">
                <span className="text-primary">dinusha@portfolio</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-secondary">~</span>
                <span className="text-muted-foreground">$ </span>
                <span className="text-foreground">cat interests.txt</span>
              </p>
              <p className="text-muted-foreground pl-4">
                Network Security, Ethical Hacking, Threat Analysis, CTF Challenges
              </p>
              <p className="mt-4">
                <span className="text-primary">dinusha@portfolio</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-secondary">~</span>
                <span className="text-muted-foreground">$ </span>
                <span className="text-foreground">echo $STATUS</span>
              </p>
              <p className="text-primary pl-4">
                Open to opportunities ✓
              </p>
              <p className="mt-4">
                <span className="text-primary">dinusha@portfolio</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-secondary">~</span>
                <span className="text-muted-foreground">$ </span>
                <span className="text-primary animate-blink">█</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
