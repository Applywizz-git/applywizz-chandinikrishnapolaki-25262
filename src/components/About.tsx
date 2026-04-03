// import { motion, useInView } from 'framer-motion';
// import { useRef, useEffect, useState } from 'react';
// import { Cloud, Database, Workflow, Code } from 'lucide-react';

// const Counter = ({ target, label }: { target: number; label: string }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (isInView) {
//       let start = 0;
//       const duration = 2000;
//       const increment = target / (duration / 16);
      
//       const timer = setInterval(() => {
//         start += increment;
//         if (start >= target) {
//           setCount(target);
//           clearInterval(timer);
//         } else {
//           setCount(Math.floor(start));
//         }
//       }, 16);

//       return () => clearInterval(timer);
//     }
//   }, [isInView, target]);

//   return (
//     <div ref={ref} className="text-center">
//       <div className="text-5xl font-heading text-gradient mb-2">
//         {count}+
//       </div>
//       <div className="text-muted-foreground">{label}</div>
//     </div>
//   );
// };

// const About = () => {
//   const highlights = [
//     { icon: Cloud, label: 'Cloud Platforms', desc: 'AWS, GCP, Azure' },
//     { icon: Database, label: 'Databases', desc: 'SQL, NoSQL, DWH' },
//     { icon: Workflow, label: 'ETL Tools', desc: 'Spark, Airflow, Kafka' },
//     { icon: Code, label: 'APIs', desc: 'REST, SOAP, Microservices' },
//   ];

//   return (
//     <section id="about" className="py-20 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-6xl font-heading mb-4">
//             About <span className="text-gradient">Me</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-champagne to-sandstone mx-auto" />
//         </motion.div>

//         <div className="max-w-4xl mx-auto space-y-8 mb-16">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-lg leading-relaxed text-muted-foreground"
//             data-aos="fade-up"
//           >
//             Highly skilled Data Engineer with 11 years of experience designing, developing, and optimizing scalable data pipelines, ETL frameworks, and cloud-based data platforms across AWS, GCP, and on-premises environments.
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//             className="text-lg leading-relaxed text-muted-foreground"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             Proven expertise in SQL, Python, Java, Spark, and Airflow for building batch and real-time data pipelines that process multi-terabyte datasets with high accuracy. Strong track record of delivering actionable insights and supporting analytics, reporting, and operational decision-making for healthcare, automotive, and financial domains.
//           </motion.p>
//         </div>

//         {/* Counters */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
//         >
//           <Counter target={3} label="Projects" />
//           <Counter target={11} label="Years Experience" />
//           <Counter target={100} label="Data Reliability" />
//         </motion.div>

//         {/* Highlights Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//         >
//           {highlights.map((item, index) => (
//             <motion.div
//               key={item.label}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 * index }}
//               whileHover={{ scale: 1.05, y: -5 }}
//               className="glass-effect p-6 rounded-lg text-center group cursor-pointer"
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
//               <item.icon className="w-12 h-12 mx-auto mb-4 text-purple-500 group-hover:text-champagne transition-colors group-hover:animate-float" />
//               <h3 className="text-lg font-heading mb-2">{item.label}</h3>
//               <p className="text-sm text-muted-foreground">{item.desc}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );






















import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Cloud, Database, Workflow, Code } from 'lucide-react';

const Counter = ({ target, label }: { target: number; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-heading text-gradient mb-2">
        {count}+
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

const About = () => {
  const highlights = [
    { icon: Cloud, label: 'Cloud Platforms', desc: 'AWS, GCP, Azure' },
    { icon: Database, label: 'Databases', desc: 'SQL, NoSQL, DWH' },
    { icon: Workflow, label: 'ETL Tools', desc: 'Spark, Airflow, Kafka' },
    { icon: Code, label: 'APIs', desc: 'REST, SOAP, Microservices' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-champagne to-sandstone mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed text-muted-foreground"
            data-aos="fade-up"
          >
            Data Engineer with 2+ years of experience developing ETL pipelines, data integration workflows, and analytical datasets using SQL and Python. Experienced in processing large-scale geospatial and operational data, improving data availability by 40% and reducing reporting errors by 25% through structured transformations and data quality checks.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg leading-relaxed text-muted-foreground"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Skilled in data modeling, data warehouse concepts, batch processing, and query optimization to enable efficient data ingestion and faster data access. Works closely with cross-functional teams to deliver reliable data pipelines and support reporting and business insights.
          </motion.p>
        </div>

        {/* Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <Counter target={3} label="Projects" />
          <Counter target={2} label="Years Experience" />
          <Counter target={100} label="Data Reliability" />
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect p-6 rounded-lg text-center group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <item.icon className="w-12 h-12 mx-auto mb-4 text-purple-500 group-hover:text-champagne transition-colors group-hover:animate-float" />
              <h3 className="text-lg font-heading mb-2">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

// };

// export default About;
