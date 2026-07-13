"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Linkedin, CheckCircle2, AlertCircle } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";
import { sendEmail } from "@/app/actions";

const initialState = {
  success: false,
  message: "",
};

const TelegramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

export default function Contact() {
  const [state, formAction, isPending] = useActionState(sendEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state]);

  const contactItems = [
    { icon: Mail, label: "Email Me", value: "elshadaydagne480@gmail.com", href: "mailto:elshadaydagne480@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", value: "elshaday-dagne-b4a6b1238", href: "https://www.linkedin.com/in/elshaday-dagne-b4a6b1238/" },
    { icon: TelegramIcon, label: "Telegram", value: "@YeEl1221", href: "https://t.me/YeEl1221" },
    { icon: MapPin, label: "Location", value: "Addis Ababa, Ethiopia", href: null }
  ];

  return (
    <section id="contact" className="py-32 bg-background text-foreground relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-accent-gold" />
              <span className="text-accent-gold font-bold tracking-[0.2em] uppercase text-sm">
                Get In Touch
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-7xl font-heading font-extrabold mb-6 md:mb-8 leading-[1.1] tracking-tight text-foreground">
              Let's Create <br/> Something <span className="text-accent-gold italic font-light font-body">Extraordinary.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted mb-12 font-body leading-relaxed font-light max-w-lg">
              Whether you have a groundbreaking project in mind or just want to explore opportunities, my inbox is always open. 
            </p>

            <div className="space-y-8">
              {contactItems.map((item, i) => {
                const Content = (
                  <>
                    <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-accent-gold/30 transition-colors duration-500 text-foreground group-hover:text-accent-gold">
                      <item.icon size={24} className="relative z-10" />
                    </div>
                    <div>
                      <p className="text-muted text-xs font-bold uppercase tracking-[0.2em] mb-1">{item.label}</p>
                      <p className="text-xl font-heading font-semibold text-foreground group-hover:text-accent-gold transition-colors duration-300">{item.value}</p>
                    </div>
                  </>
                );

                if (item.href) {
                  return (
                    <motion.a 
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                      className="flex items-center gap-6 group cursor-pointer"
                    >
                      {Content}
                    </motion.a>
                  );
                }

                return (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                    className="flex items-center gap-6 group"
                  >
                    {Content}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card p-10 md:p-12 rounded-[2rem] border border-white/10">
              <p className="text-muted text-sm mb-8 leading-relaxed">
                Fill in the form below and I&apos;ll get back to you within a day.
              </p>
              <form ref={formRef} action={formAction} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-3 group/input">
                    <label className="text-xs font-bold text-muted uppercase tracking-[0.2em] ml-2 group-focus-within/input:text-accent-gold transition-colors">Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-background border border-white/10 focus:border-accent-gold rounded-xl outline-none transition-all placeholder:text-muted/40 font-body text-foreground"
                    />
                  </div>
                  <div className="space-y-3 group/input">
                    <label className="text-xs font-bold text-muted uppercase tracking-[0.2em] ml-2 group-focus-within/input:text-accent-gold transition-colors">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="hello@example.com"
                      className="w-full px-6 py-4 bg-background border border-white/10 focus:border-accent-gold rounded-xl outline-none transition-all placeholder:text-muted/40 font-body text-foreground"
                    />
                  </div>
                </div>
                <div className="space-y-3 group/input">
                  <label className="text-xs font-bold text-muted uppercase tracking-[0.2em] ml-2 group-focus-within/input:text-accent-gold transition-colors">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    required
                    placeholder="Project Inquiry"
                    className="w-full px-6 py-4 bg-background border border-white/10 focus:border-accent-gold rounded-xl outline-none transition-all placeholder:text-muted/40 font-body text-foreground"
                  />
                </div>
                <div className="space-y-3 group/input">
                  <label className="text-xs font-bold text-muted uppercase tracking-[0.2em] ml-2 group-focus-within/input:text-accent-gold transition-colors">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me about your vision..."
                    className="w-full px-6 py-4 bg-background border border-white/10 focus:border-accent-gold rounded-xl outline-none transition-all placeholder:text-muted/40 resize-none font-body text-foreground"
                  />
                </div>
                
                {state.message && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-3 p-4 rounded-xl ${
                      state.success ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"
                    }`}
                  >
                    {state.success ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                    <span className="text-sm font-medium">{state.message}</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isPending}
                  whileHover={!isPending ? { scale: 1.02 } : {}}
                  whileTap={!isPending ? { scale: 0.98 } : {}}
                  className={`w-full py-5 font-bold tracking-wide uppercase rounded-xl flex items-center justify-center gap-3 transition-all border border-transparent relative overflow-hidden group ${
                    isPending 
                      ? "bg-white/10 text-white/40 cursor-not-allowed" 
                      : "bg-accent-gold text-background"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {isPending ? "Sending..." : "Send Message"} 
                    {!isPending && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
}
