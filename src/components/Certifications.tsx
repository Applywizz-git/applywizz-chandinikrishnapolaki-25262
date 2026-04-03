import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'SQL for Data Analysis',
    org: 'Coursera',
    date: '2024',
    link: '#'
  },
  {
    title: 'Power BI Essentials with DAX',
    org: 'LinkedIn Learning',
    date: '2024',
    link: '#'
  },
  {
    title: 'Data Visualization with Tableau',
    org: 'Udemy',
    date: '2024',
    link: '#'
  },
  {
    title: 'IBM Data Engineering Professional Certificate',
    org: 'Coursera',
    date: '2023',
    link: '#'
  },
  {
    title: 'Building Data Pipelines with Apache Spark',
    org: 'Coursera',
    date: '2023',
    link: '#'
  },
  {
    title: 'Data Engineering Foundations',
    org: 'LinkedIn Learning',
    date: '2023',
    link: '#'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-champagne to-sandstone mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                z: 50
              }}
              className="glass-effect p-6 rounded-lg group cursor-pointer perspective-1000"
              style={{ 
                transformStyle: 'preserve-3d',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              data-aos="flip-left"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-champagne to-sandstone rounded-lg group-hover:animate-pulse">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-heading mb-2 group-hover:text-gradient transition-all">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">{cert.org}</p>
                  {/* <p className="text-sm text-accent">{cert.date}</p> */}
                </div>
              </div>

              {/* <motion.a
                href={cert.link}
                whileHover={{ x: 5 }}
                className="mt-4 flex items-center gap-2 text-sm text-accent hover:text-champagne transition-colors"
              >
                <span>Verify</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a> */}

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
