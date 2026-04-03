// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { Mail, Github, Linkedin, Send } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { toast } from 'sonner';
// import confetti from 'canvas-confetti';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Trigger confetti
//     confetti({
//       particleCount: 100,
//       spread: 70,
//       origin: { y: 0.6 }
//     });

//     // Show success toast
//     toast.success('Message sent successfully! I\'ll get back to you soon.');

//     // Reset form
//     setFormData({ name: '', email: '', message: '' });
//   };

//   const socialLinks = [
//     // { icon: Github, label: 'GitHub', href: 'https://github.com', color: 'hover:text-[#333]' },
//     // { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-[#0077b5]' },
//     { icon: Mail, label: 'Email', href: 'mailto:akhilds991@gmail.com', color: 'hover:text-accent' }
//   ];

//   return (
//     <section id="contact" className="py-20 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-6xl font-heading mb-4">
//             Get In <span className="text-gradient">Touch</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-champagne to-sandstone mx-auto mb-6" />
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Have a project in mind or want to discuss data engineering opportunities? Let's connect!
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="relative">
//                 <Input
//                   type="text"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   required
//                   className="glass-effect border-accent/30 focus:border-accent transition-all"
//                 />
//               </div>

//               <div className="relative">
//                 <Input
//                   type="email"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   required
//                   className="glass-effect border-accent/30 focus:border-accent transition-all"
//                 />
//               </div>

//               <div className="relative">
//                 <Textarea
//                   placeholder="Your Message"
//                   value={formData.message}
//                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                   required
//                   rows={6}
//                   className="glass-effect border-accent/30 focus:border-accent transition-all resize-none"
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 size="lg"
//                 className="w-full btn-glow group"
//               >
//                 <motion.span
//                   className="flex items-center justify-center gap-2"
//                   whileHover={{ x: 5 }}
//                 >
//                   Send Message
//                   <Send className="w-5 h-5 group-hover:animate-bounce" />
//                 </motion.span>
//               </Button>
//             </form>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4 }}
//             className="space-y-8"
//           >
//             <div className="glass-effect p-8 rounded-lg">
//               <motion.div
//                 animate={{ 
//                   y: [0, -10, 0]
//                 }}
//                 transition={{ 
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//                 className="mb-6"
//               >
//                 <Mail className="w-16 h-16 text-accent mx-auto" />
//               </motion.div>
              
//               <h3 className="text-2xl font-heading text-gradient mb-4 text-center">
//                 Let's Connect
//               </h3>
              
//               <p className="text-muted-foreground text-center mb-6">
//                 I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
//               </p>

//               <div className="space-y-4">
//                 <a 
//                   href="mailto:akhilds991@gmail.com"
//                   className="block text-center text-accent hover:text-champagne transition-colors"
//                 >
//                   akhilds991@gmail.com
//                 </a>
//                 <a 
//                   href="tel:+13133845266"
//                   className="block text-center text-accent hover:text-champagne transition-colors"
//                 >
//                   +1 (313) 384-5266
//                 </a>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="flex justify-center gap-6">
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={social.label}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   initial={{ opacity: 0, scale: 0 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.6 + index * 0.1 }}
//                   whileHover={{ scale: 1.2, rotate: 360 }}
//                   className={`glass-effect p-4 rounded-full ${social.color} transition-all`}
//                 >
//                   <social.icon className="w-6 h-6" />
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



























import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Show success toast
    toast.success('Message sent successfully! I\'ll get back to you soon.');

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/chandini-krishna-p-847176287/', color: 'hover:text-[#0077b5]' },
    { icon: Mail, label: 'Email', href: 'mailto:cpolaki01@gmail.com', color: 'hover:text-accent' }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-champagne to-sandstone mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss data engineering opportunities? Let's connect!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="glass-effect border-accent/30 focus:border-accent transition-all"
                />
              </div>

              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="glass-effect border-accent/30 focus:border-accent transition-all"
                />
              </div>

              <div className="relative">
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="glass-effect border-accent/30 focus:border-accent transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full btn-glow group"
              >
                <motion.span
                  className="flex items-center justify-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:animate-bounce" />
                </motion.span>
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-effect p-8 rounded-lg">
              <motion.div
                animate={{ 
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mb-6"
              >
                <Mail className="w-16 h-16 text-accent mx-auto" />
              </motion.div>
              
              <h3 className="text-2xl font-heading text-gradient mb-4 text-center">
                Let's Connect
              </h3>
              
              <p className="text-muted-foreground text-center mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>

              <div className="space-y-4">
                <a 
                  href="mailto:cpolaki01@gmail.com"
                  className="block text-center text-accent hover:text-champagne transition-colors"
                >
                  cpolaki01@gmail.com
                </a>
                <a 
                  href="tel:+15513270696"
                  className="block text-center text-accent hover:text-champagne transition-colors"
                >
                  +1 (551) 327-0696
                </a>
                <div className="flex items-center justify-center gap-2 text-accent hover:text-champagne transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span>Exton, PA</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className={`glass-effect p-4 rounded-full ${social.color} transition-all`}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
