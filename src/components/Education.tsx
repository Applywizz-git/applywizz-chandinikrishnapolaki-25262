import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'West Chester University',
    location: 'West Chester, PA',
    period: 'May 2025',
    icon: '🎓'
  },
  {
    degree: 'Bachelor of Technology in Electrical and Electronics Engineering',
    school: 'Jawaharlal Nehru Technological University',
    location: 'Andhra Pradesh, India',
    period: 'May 2022',
    icon: '🎓'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden bg-muted/20">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-champagne to-sandstone mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass-effect p-8 rounded-lg group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-6xl mb-4 group-hover:animate-float"
              >
                {edu.icon}
              </motion.div>

              <div className="flex items-start gap-3 mb-3">
                <GraduationCap className="w-6 h-6 text-accent mt-1 group-hover:text-champagne transition-colors" />
                <h3 className="text-xl font-heading text-gradient group-hover:animate-pulse">
                  {edu.degree}
                </h3>
              </div>

              <p className="text-lg font-medium mb-4">{edu.school}</p>

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span>{edu.period}</span>
                </div>
              </div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none rounded-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
