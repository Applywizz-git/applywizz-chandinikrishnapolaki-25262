import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/chandini-krishna-p-847176287/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:cpolaki01@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="py-12 bg-obsidian relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--sandstone)/0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.2,
                  y: -5,
                  boxShadow: '0 0 20px hsl(var(--champagne) / 0.5)'
                }}
                className="p-3 glass-effect rounded-full hover:bg-accent/20 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-ivory hover:text-champagne transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <p className="text-sm text-platinum/60 flex items-center gap-2">
              © {currentYear} CHANDINI KRISHNA POLAKI. All rights reserved 
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
          
              </motion.span>
              
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <p className="text-xs text-gradient font-heading tracking-wider">
              BUILDING THE FUTURE, ONE PIPELINE AT A TIME
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
