// import { motion } from 'framer-motion';
// import { Briefcase, MapPin, Calendar } from 'lucide-react';

// const experiences = [
//   {
//     title: 'Data Engineer',
//     company: 'CVS Healthcare',
//     location: 'Buffalo Grove, IL',
//     period: 'May 2022 - Present',
//     highlights: [
//       'Designed scalable ETL pipelines using <span class="tech-highlight">Python, Java, and Apache Spark</span>, processing multi-terabyte pharmacy datasets, reducing data ingestion latency by 35%',
//       'Built REST APIs and microservices with <span class="tech-highlight">Spring Boot and NodeJS</span> to unify pharmacy data, improving interoperability by 40%',
//       'Implemented streaming pipelines with <span class="tech-highlight">Kafka and RabbitMQ</span> to process real-time pharmacy transactions',
//       'Optimized database operations by tuning SQL queries, indexing, and partitioning, improving query performance by 50%',
//       'Orchestrated cloud-based workflows on <span class="tech-highlight">AWS S3, Lambda, and Glue</span>, reducing manual intervention by 30%'
//     ]
//   },
//   {
//     title: 'Data Engineer',
//     company: 'Subaru',
//     location: 'Camden, NJ',
//     period: 'Oct 2021 - May 2022',
//     highlights: [
//       'Designed batch ETL pipelines using <span class="tech-highlight">Python, SQL, and Airflow</span>, consolidating vehicle telemetry and service records',
//       'Exposed vehicle telemetry data through RESTful APIs and <span class="tech-highlight">Spring Boot</span> microservices',
//       'Developed real-time streaming pipelines with <span class="tech-highlight">Apache Kafka</span>, increasing alert delivery by 35%',
//       'Leveraged <span class="tech-highlight">AWS Redshift, S3, and Lambda</span> for large-scale telemetry data pipelines'
//     ]
//   },
//   {
//     title: 'SQL Developer',
//     company: 'Goldman Sachs',
//     location: 'Salt Lake City, UT',
//     period: 'May 2018 - Sep 2021',
//     highlights: [
//       'Engineered complex SQL queries in <span class="tech-highlight">Oracle and Snowflake</span>, improving portfolio report generation by 45%',
//       'Created relational and dimensional data models with star and snowflake schemas',
//       'Developed ETL pipelines using <span class="tech-highlight">SQL, Spark SQL, and Python</span> for investment data',
//       'Constructed interactive <span class="tech-highlight">Tableau and Power BI</span> dashboards for wealth advisors',
//       'Implemented database performance tuning, raising analytics throughput by 50%'
//     ]
//   },
//   {
//     title: 'ETL Developer',
//     company: 'Edutech Information',
//     location: 'Hyderabad, India',
//     period: 'Aug 2016 - Apr 2018',
//     highlights: [
//       'Designed end-to-end ETL workflows with <span class="tech-highlight">Java, Spring, and JDBC</span> to merge HR and project datasets',
//       'Built RESTful APIs to provide processed HR data, reducing retrieval latency by 25%',
//       'Automated ETL build and deployment using <span class="tech-highlight">Maven and Jenkins</span>',
//       'Created unit and integration tests achieving 95% pipeline reliability'
//     ]
//   },
//   {
//     title: 'Data Platform Engineer',
//     company: 'Codon Software Pvt Ltd',
//     location: 'Hyderabad, India',
//     period: 'Oct 2014 - Aug 2016',
//     highlights: [
//       'Engineered batch and real-time ETL pipelines with <span class="tech-highlight">Java and Shell scripting</span>',
//       'Streamlined relational schemas and optimized <span class="tech-highlight">Oracle 11g and MySQL</span> queries',
//       'Developed RESTful and SOAP APIs to deliver processed retail data',
//       'Deployed <span class="tech-highlight">Jenkins-based CI/CD pipelines</span>, accelerating release cycles by 30%'
//     ]
//   }
// ];

// const Experience = () => {
//   return (
//     <section id="experience" className="py-20 relative overflow-hidden bg-muted/20">
//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-6xl font-heading mb-4">
//             Professional <span className="text-gradient">Experience</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-champagne to-sandstone mx-auto" />
//         </motion.div>

//         <div className="relative max-w-6xl mx-auto">
//           {/* Timeline Line */}
//           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-champagne via-sandstone to-champagne" />

//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className={`relative mb-12 ${
//                 index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'
//               } md:w-1/2`}
//               data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
//             >
//               {/* Timeline Dot */}
//               <div className="hidden md:block absolute top-0 w-4 h-4 bg-gradient-to-br from-champagne to-sandstone rounded-full shadow-glow"
//                 style={{
//                   [index % 2 === 0 ? 'right' : 'left']: '-8px',
//                   boxShadow: '0 0 20px hsl(var(--sandstone))'
//                 }}
//               />

//               <motion.div
//                 whileHover={{ scale: 1.02, y: -5 }}
//                 className="glass-effect p-6 rounded-lg group cursor-pointer"
//               >
//                 <div className="flex items-center gap-2 mb-3 justify-start md:justify-end md:group-odd:justify-start">
//                   <Briefcase className="w-5 h-5 text-accent" />
//                   <h3 className="text-2xl font-heading text-gradient">{exp.title}</h3>
//                 </div>

//                 <div className="space-y-2 mb-4">
//                   <div className="flex items-center gap-2 text-sm text-muted-foreground justify-start md:justify-end md:group-odd:justify-start">
//                     <span className="font-semibold">{exp.company}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-muted-foreground justify-start md:justify-end md:group-odd:justify-start">
//                     <MapPin className="w-4 h-4" />
//                     <span>{exp.location}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-accent justify-start md:justify-end md:group-odd:justify-start">
//                     <Calendar className="w-4 h-4" />
//                     <span>{exp.period}</span>
//                   </div>
//                 </div>

//                 <ul className="space-y-3 text-left">
//                   {exp.highlights.map((highlight, i) => (
//                     <li 
//                       key={i} 
//                       className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
//                     >
//                       <span className="text-accent mt-1.5">▹</span>
//                       <span dangerouslySetInnerHTML={{ 
//                         __html: highlight.replace(
//                           /<span class="tech-highlight">(.*?)<\/span>/g, 
//                           '<span class="text-champagne font-medium">$1</span>'
//                         )
//                       }} />
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
























// import { motion } from 'framer-motion';
// import { Briefcase, MapPin, Calendar } from 'lucide-react';

// const experiences = [
//   {
//     title: 'Data Engineer',
//     company: 'CVS Healthcare',
//     location: 'Buffalo Grove, IL',
//     period: 'May 2022 - Present',
//     highlights: [
//       'Designed scalable ETL pipelines using <span class="tech-highlight">Python, Java, and Apache Spark</span>, processing multi-terabyte pharmacy datasets, reducing data ingestion latency by 35%',
//       'Built REST APIs and microservices with <span class="tech-highlight">Spring Boot and NodeJS</span> to unify pharmacy data, improving interoperability by 40%',
//       'Implemented streaming pipelines with <span class="tech-highlight">Kafka and RabbitMQ</span> to process real-time pharmacy transactions',
//       'Optimized database operations by tuning SQL queries, indexing, and partitioning, improving query performance by 50%',
//       'Orchestrated cloud-based workflows on <span class="tech-highlight">AWS S3, Lambda, and Glue</span>, reducing manual intervention by 30%'
//     ]
//   },
//   {
//     title: 'Data Engineer',
//     company: 'Subaru',
//     location: 'Camden, NJ',
//     period: 'Oct 2021 - May 2022',
//     highlights: [
//       'Designed batch ETL pipelines using <span class="tech-highlight">Python, SQL, and Airflow</span>, consolidating vehicle telemetry and service records',
//       'Exposed vehicle telemetry data through RESTful APIs and <span class="tech-highlight">Spring Boot</span> microservices',
//       'Developed real-time streaming pipelines with <span class="tech-highlight">Apache Kafka</span>, increasing alert delivery by 35%',
//       'Leveraged <span class="tech-highlight">AWS Redshift, S3, and Lambda</span> for large-scale telemetry data pipelines'
//     ]
//   },
//   {
//     title: 'SQL Developer',
//     company: 'Goldman Sachs',
//     location: 'Salt Lake City, UT',
//     period: 'May 2018 - Sep 2021',
//     highlights: [
//       'Engineered complex SQL queries in <span class="tech-highlight">Oracle and Snowflake</span>, improving portfolio report generation by 45%',
//       'Created relational and dimensional data models with star and snowflake schemas',
//       'Developed ETL pipelines using <span class="tech-highlight">SQL, Spark SQL, and Python</span> for investment data',
//       'Constructed interactive <span class="tech-highlight">Tableau and Power BI</span> dashboards for wealth advisors',
//       'Implemented database performance tuning, raising analytics throughput by 50%'
//     ]
//   },
//   {
//     title: 'ETL Developer',
//     company: 'Edutech Information',
//     location: 'Hyderabad, India',
//     period: 'Aug 2016 - Apr 2018',
//     highlights: [
//       'Designed end-to-end ETL workflows with <span class="tech-highlight">Java, Spring, and JDBC</span> to merge HR and project datasets',
//       'Built RESTful APIs to provide processed HR data, reducing retrieval latency by 25%',
//       'Automated ETL build and deployment using <span class="tech-highlight">Maven and Jenkins</span>',
//       'Created unit and integration tests achieving 95% pipeline reliability'
//     ]
//   },
//   {
//     title: 'Data Platform Engineer',
//     company: 'Codon Software Pvt Ltd',
//     location: 'Hyderabad, India',
//     period: 'Oct 2014 - Aug 2016',
//     highlights: [
//       'Engineered batch and real-time ETL pipelines with <span class="tech-highlight">Java and Shell scripting</span>',
//       'Streamlined relational schemas and optimized <span class="tech-highlight">Oracle 11g and MySQL</span> queries',
//       'Developed RESTful and SOAP APIs to deliver processed retail data',
//       'Deployed <span class="tech-highlight">Jenkins-based CI/CD pipelines</span>, accelerating release cycles by 30%'
//     ]
//   }
// ];

// const Experience = () => {
//   return (
//     <section id="experience" className="py-20 relative overflow-hidden bg-muted/20">
//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-6xl font-heading mb-4">
//             Professional <span className="text-gradient">Experience</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-champagne to-sandstone mx-auto" />
//         </motion.div>

//         <div className="relative max-w-6xl mx-auto">
//           {/* Timeline Line */}
//           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-champagne via-sandstone to-champagne" />

//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className={`relative mb-12 ${
//                 index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'
//               } md:w-1/2`}
//               data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
//             >
//               {/* Timeline Dot */}
//               <div className="hidden md:block absolute top-0 w-4 h-4 bg-gradient-to-br from-champagne to-sandstone rounded-full shadow-glow"
//                 style={{
//                   [index % 2 === 0 ? 'right' : 'left']: '-8px',
//                   boxShadow: '0 0 20px hsl(var(--sandstone))'
//                 }}
//               />

//               <motion.div
//                 whileHover={{ scale: 1.02, y: -5 }}
//                 className="glass-effect p-6 rounded-lg group cursor-pointer"
//               >
//                 <div className="flex items-center gap-2 mb-3 justify-start">
//                   <Briefcase className="w-5 h-5 text-orange-500" />
//                   <h3 className="text-2xl font-heading text-gradient">{exp.title}</h3>
//                 </div>

//                 <div className="space-y-2 mb-4">
//                   <div className="flex items-center gap-2 text-sm text-muted-foreground justify-start">
//                     <span className="font-semibold">{exp.company}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-muted-foreground justify-start">
//                     <MapPin className="w-4 h-4" />
//                     <span>{exp.location}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-purple-500 justify-start">
//                     <Calendar className="w-4 h-4" />
//                     <span>{exp.period}</span>
//                   </div>
//                 </div>

//                 <ul className="space-y-3 text-left">
//                   {exp.highlights.map((highlight, i) => (
//                     <li 
//                       key={i} 
//                       className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
//                     >
//                       <span className="text-accent mt-1.5">▹</span>
//                       <span dangerouslySetInnerHTML={{ 
//                         __html: highlight.replace(
//                           /<span class="tech-highlight">(.*?)<\/span>/g, 
//                           '<span class="text-purple-700 font-medium">$1</span>'
//                         )
//                       }} />
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;














































import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Data Engineer',
    company: 'Kona Engineering',
    location: 'Exton, PA',
    period: 'May 2025 - Present',
    highlights: [
      'Designed and built <span class="tech-highlight">SQL-based ETL pipelines</span> to ingest and transform GIS and PECO Virtual Desktop data into structured data warehouse layers using batch processing, improving data availability by 40%.',
      'Integrated multi-source engineering and cost datasets into centralized <span class="tech-highlight">data models</span> using data warehousing techniques and data integration frameworks, improving forecasting accuracy by 30%.',
      'Developed transformation logic in <span class="tech-highlight">SQL</span> to standardize and normalize raw datasets, creating clean analytical data layers that improved downstream dashboard reliability and reduced data inconsistencies by 25%.',
      'Applied advanced <span class="tech-highlight">SQL aggregations</span> to process large geospatial datasets into KPI-ready datasets, enabling faster performance tracking and improving operational visibility by 35%.',
      'Implemented <span class="tech-highlight">data quality checks</span> within ETL workflows using SQL and supported ETL pipeline orchestration, ensuring accuracy and minimizing reporting errors across teams.',
      'Collaborated with engineering and business stakeholders to translate requirements into scalable <span class="tech-highlight">data pipelines</span>, enabling efficient data integration frameworks across operational and analytics systems.',
      'Structured data flows and maintained <span class="tech-highlight">source-to-target mappings</span> and metadata documentation, strengthening data lineage tracking and improving governance across pipeline processes.',
      'Optimized <span class="tech-highlight">SQL queries</span> and underlying data structures to handle high-volume datasets efficiently, reducing query execution time by up to 35% and improving overall pipeline performance.'
    ]
  },
  {
    title: 'Data Engineer',
    company: 'Miracle Software Systems',
    location: 'India',
    period: 'Aug 2022 - Mar 2023',
    highlights: [
      'Reworked <span class="tech-highlight">SQL queries</span> on MySQL tables by adjusting joins and adding indexes based on usage patterns, which reduced execution time by 30% and improved responsiveness for BI reporting.',
      'Built and maintained <span class="tech-highlight">ETL pipelines</span> using SQL and Python to ingest data from databases and REST APIs into <span class="tech-highlight">AWS S3</span>, which ensured stable data flow and reduced manual data handling across teams.',
      'Structured raw datasets into analytics-ready tables using <span class="tech-highlight">CTEs and window functions</span>, which improved consistency of data consumed by Power BI and Tableau dashboards.',
      'Introduced <span class="tech-highlight">incremental loading logic</span> in Python-based ingestion workflows, which reduced processing time by 25% and ensured up-to-date data availability for business reporting.',
      'Applied <span class="tech-highlight">validation checks</span> within SQL transformations to detect data inconsistencies early, which reduced reporting errors by 20% and improved trust in dashboard outputs.',
      'Partnered with data analysts to understand reporting requirements and delivered curated datasets using <span class="tech-highlight">SQL</span>, which improved dashboard accuracy and reduced rework cycles.',
      'Analyzed pipeline execution patterns and optimized transformation steps using <span class="tech-highlight">SQL and Python</span>, which improved overall pipeline efficiency by 20% and minimized delays in data delivery.',
      'Created and maintained documentation for <span class="tech-highlight">ETL workflows</span>, data mappings, and transformation logic, which improved knowledge sharing and reduced onboarding time for new team members.'
    ]
  },
  {
    title: 'Data Engineer Intern',
    company: 'Miracle Software Systems',
    location: 'India',
    period: 'Jan 2022 - Aug 2022',
    highlights: [
      'Built <span class="tech-highlight">ETL workflows</span> using SQL and Python (Pandas) to extract data from relational databases and REST APIs into <span class="tech-highlight">AWS S3</span>, improving data availability and reducing manual effort by 30%.',
      'Processed large datasets in <span class="tech-highlight">Python</span> by cleaning and standardizing inconsistent records, improving data quality by 25% and reducing downstream processing issues.',
      'Developed <span class="tech-highlight">SQL transformation logic</span> using joins, CTEs, and aggregations to convert raw data into structured reporting tables, ensuring consistency across datasets used in dashboards.',
      'Integrated <span class="tech-highlight">REST API data</span> into ingestion pipelines using incremental data processing techniques, improving data freshness and reducing reporting delays by 20%.',
      'Performed <span class="tech-highlight">data validation checks</span> in SQL to identify inconsistencies before loading into reporting layers, reducing data discrepancies and improving reporting accuracy.',
      'Collaborated with data engineers and analysts to deliver structured datasets for <span class="tech-highlight">Power BI and Tableau</span> dashboards, improving reporting turnaround time and aligning outputs with business requirements.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-muted/20">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-champagne to-sandstone mx-auto" />
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-champagne via-sandstone to-champagne" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'
              } md:w-1/2`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute top-0 w-4 h-4 bg-gradient-to-br from-champagne to-sandstone rounded-full shadow-glow"
                style={{
                  [index % 2 === 0 ? 'right' : 'left']: '-8px',
                  boxShadow: '0 0 20px hsl(var(--sandstone))'
                }}
              />

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-effect p-6 rounded-lg group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-3 justify-start">
                  <Briefcase className="w-5 h-5 text-orange-500" />
                  <h3 className="text-2xl font-heading text-gradient">{exp.title}</h3>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground justify-start">
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground justify-start">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-purple-500 justify-start">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 text-left">
                  {exp.highlights.map((highlight, i) => (
                    <li 
                      key={i} 
                      className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-accent mt-1.5">▹</span>
                      <span dangerouslySetInnerHTML={{ 
                        __html: highlight.replace(
                          /<span class="tech-highlight">(.*?)<\/span>/g, 
                          '<span class="text-purple-700 font-medium">$1</span>'
                        )
                      }} />
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
