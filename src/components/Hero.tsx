import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '/chandini.jpeg';

const Hero = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [displayedName, setDisplayedName] = useState('');
  const [nameIndex, setNameIndex] = useState(0);
  const technologies = ['SQL', 'Python', 'AWS', 'ETL', 'Azure', 'Pandas'];
  const fullName = 'Chandini';

  // Typing animation for name
  useEffect(() => {
    if (nameIndex < fullName.length) {
      const timer = setTimeout(() => {
        setDisplayedName(fullName.slice(0, nameIndex + 1));
        setNameIndex(nameIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [nameIndex]);

  // Technology rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-charcoal to-graphite opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--champagne)/0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Hello, I'm section with typing name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-4"
            >
              <h2 className="font-heading text-muted-foreground">
                <span className="text-xl md:text-2xl font-semibold mb-6">
                  Hello, I'm
                </span>
                <br />{' '}
                <span className="text-4xl md:text-5xl lg:text-7xl text-gradient">
                  {displayedName}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="ml-1"
                  >
                    |
                  </motion.span>
                </span>
              </h2>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-5xl lg:text-5xl font-heading leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Building Scalable <br />
              <span className="text-gradient">Data Systems</span>
              <br />
              with Modern{' '}
              <motion.span
                key={currentTech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-gradient"
              >
                {technologies[currentTech]}
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-muted-foreground max-w-xl"
            >
              Data Engineer with over 2+ years of experience developing ETL pipelines,
              data integration workflows, and analytical datasets using SQL and Python.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="projects" smooth={true} offset={-80} duration={500}>
                <Button size="lg" className="btn-glow text-lg">
                  View Projects
                </Button>
              </Link>

              <a href="/resume.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="btn-glow text-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image + Floating Elements */}
          <motion.div
            // initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            // animate={{ opacity: 1, scale: 1, rotate: 0 }}
            // transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <motion.div
              // animate={{
              //   y: [0, -20, 0],
              //   // rotate: [0, 3, 0, -3, 0],
              // }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-champagne to-sandstone rounded-full blur-3xl opacity-30 animate-pulse" />

              {/* Profile Image */}
              <img
                src={profileImage}
                alt="Chandini Krishna Polaki - Data Engineer"
                // className="relative rounded-full w-full max-w-lg  h-max mx-auto shadow-2xl border-4 border-champagne/30"
                className="relative rounded-full w-96 h-96 mx-auto shadow-2xl border-4 border-champagne/30 object-cover"

              />

              {/* 🌟 Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-1 -left-2 bg-gradient-to-r from-champagne to-sandstone text-obsidian px-4 py-2 rounded-full shadow-lg font-semibold text-sm md:text-base"
              >
                2+ Years Experience
              </motion.div>

              {/* <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute top-12 -right-4 bg-gradient-to-r from-sandstone to-champagne text-obsidian px-4 py-2 rounded-full shadow-lg font-semibold text-sm md:text-base"
              >
               AWS
              </motion.div> */}

              {/* <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-sandstone to-champagne text-obsidian px-4 py-2 rounded-full shadow-lg font-semibold text-sm md:text-base"
              >
                Data Engineer
              </motion.div> */}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-champagne rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-champagne rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

