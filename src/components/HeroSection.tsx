import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profileAvatar from "@/assets/profile-avatar.png";

const phrases = [
  "Junior SOC Analyst",
  "Cyber Security Graduate",
  "Threat Intelligence",
  "Security Monitoring",
];

const HeroSection = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentPhrase.slice(0, text.length + 1));
          if (text.length === currentPhrase.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(currentPhrase.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-px bg-primary/10 animate-scan-line" />
      </div>

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(140 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(140 100% 50%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 px-6 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl flex-1"
        >
          <p className="font-mono text-primary text-sm mb-4 text-glow">
            {">"} initializing portfolio...
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-foreground">Dinusha</span>
            <br />
            <span className="text-primary text-glow">Sewwandi</span>
          </h1>
          <div className="font-mono text-xl md:text-2xl text-muted-foreground mb-8 h-8">
            <span className="text-primary/70">$</span> {text}
            <span className="text-primary animate-blink">█</span>
          </div>
          <p className="text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Cyber Security graduate and Junior SOC Analyst at Cryptogen, with
            hands-on experience in SIEM/XDR monitoring, threat intelligence, and
            incident response.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono text-sm px-6 py-3 rounded-sm hover:box-glow-strong transition-shadow"
            >
              {">"} view_projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-primary/30 text-primary font-mono text-sm px-6 py-3 rounded-sm hover:border-glow transition-all"
            >
              {">"} contact_me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-primary/30 box-glow overflow-hidden">
            <img
              src={profileAvatar}
              alt="Dinusha Sewwandi"
              width={512}
              height={512}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
