import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const skillCategories = [
  {
    title: 'Data Engineering & ETL',
    skills: ['ETL Development', 'Data Pipeline Development', 'Data Ingestion', 'Data Transformation', 'Data Integration', 'Data Modeling', 'Data Warehousing', 'Data Lake Architecture', 'Batch Processing', 'Incremental Data Processing', 'Data Migration']
  },
  {
    title: 'Programming & Querying',
    skills: ['Python (Pandas, NumPy)', 'SQL (Advanced Joins, Window Functions, CTEs, Query Optimization)', 'REST API Integration', 'Data Parsing']
  },
  {
    title: 'Big Data Technologies',
    skills: ['Distributed Data Processing', 'Big Data Processing']
  },
  {
    title: 'Cloud & Data Platforms',
    skills: ['AWS S3', 'AWS Glue (ETL)', 'AWS Lambda', 'Azure Data Factory (ADF)', 'Cloud Data Pipelines', 'Data Lakes']
  },
  {
    title: 'Databases & Storage',
    skills: ['MySQL', 'MongoDB', 'Relational Databases', 'NoSQL Databases', 'Data Storage Optimization']
  },
  {
    title: 'DataOps & Workflow Orchestration',
    skills: ['Data Pipeline Orchestration', 'CI/CD', 'Git', 'Data Validation', 'Data Quality Checks', 'Workflow Automation', 'Logging & Monitoring']
  },
  {
    title: 'Data Analytics & BI',
    skills: ['Power BI (DAX, Power Query)', 'Tableau', 'Dashboard Development', 'KPI Reporting']
  },
  {
    title: 'Tools & Technologies',
    skills: ['Advanced Excel', 'Jupyter Notebook', 'GIS Data Processing']
  }
];

const topSkills = [
  { name: 'SQL', percentage: 95 },
  { name: 'Python', percentage: 90 },
  { name: 'AWS', percentage: 85 },
  { name: 'ETL', percentage: 92 }
];

const ProgressRing = ({ skill }: { skill: typeof topSkills[0] }) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const size = 120;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setProgress(skill.percentage);
          }, 200);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [skill.percentage]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
          style={{ filter: 'drop-shadow(0 0 8px hsl(var(--sandstone)))' }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--champagne))" />
            <stop offset="100%" stopColor="hsl(var(--sandstone))" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-center">
        <div className="text-2xl font-heading text-gradient">{progress}%</div>
        <div className="text-xs text-muted-foreground">{skill.name}</div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-muted/20">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-champagne to-sandstone mx-auto" />
        </motion.div>

        {/* Top Skills with Progress Rings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-4xl mx-auto"
        >
          {topSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex justify-center"
            >
              <ProgressRing skill={skill} />
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass-effect p-6 rounded-lg group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-heading text-gradient mb-4 group-hover:animate-pulse">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (i * 0.05) }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1.5 text-sm bg-accent/20 text-accent rounded-full hover:bg-accent hover:text-accent-foreground transition-all cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
