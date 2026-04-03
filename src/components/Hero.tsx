// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-scroll';
// import { Download } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import profileImage from '@/assets/profile.jpg';

// const Hero = () => {
//   const [currentTech, setCurrentTech] = useState(0);
//   const technologies = ['AWS', 'Spark', 'Python', 'SQL', 'GCP'];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTech((prev) => (prev + 1) % technologies.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
//       {/* Parallax Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-charcoal to-graphite opacity-50" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--champagne)/0.1),transparent_50%)]" />

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left: Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="space-y-6"
//           >
//             <motion.h1 
//               className="text-5xl md:text-7xl font-heading leading-tight"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//             >
//               Building Scalable <br />
//               <span className="text-gradient">Data Systems</span>
//               <br />
//               with Modern{' '}
//               <motion.span
//                 key={currentTech}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 className="text-gradient"
//               >
//                 {technologies[currentTech]}
//               </motion.span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.7 }}
//               className="text-xl text-muted-foreground max-w-xl"
//             >
//               Data Engineer with 11 years of experience building scalable, high-performance data platforms.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9 }}
//               className="flex flex-wrap gap-4"
//             >
//               <Link to="projects" smooth={true} offset={-80} duration={500}>
//                 <Button size="lg" className="btn-glow text-lg">
//                   View Projects
//                 </Button>
//               </Link>

//               <a href="/assets/resume.pdf" download>
//                 <Button variant="outline" size="lg" className="btn-glow text-lg">
//                   <Download className="mr-2 h-5 w-5" />
//                   Download Resume
//                 </Button>
//               </a>
//             </motion.div>
//           </motion.div>

//           {/* Right: Profile Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
//             animate={{ opacity: 1, scale: 1, rotate: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="relative"
//           >
//             <motion.div
//               animate={{ 
//                 y: [0, -20, 0],
//                 rotate: [0, 3, 0, -3, 0]
//               }}
//               transition={{ 
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//               className="relative"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-champagne to-sandstone rounded-full blur-3xl opacity-30 animate-pulse" />
//               <img
//                 src={profileImage}
//                 alt="Chandini Krishna Polaki - Data Engineer"
//                 className="relative rounded-full w-full max-w-lg mx-auto shadow-2xl border-4 border-champagne/30"
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//           className="w-6 h-10 border-2 border-champagne rounded-full flex items-start justify-center p-2"
//         >
//           <motion.div
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             className="w-1.5 h-1.5 bg-champagne rounded-full"
//           />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;




























// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-scroll';
// import { Download } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import profileImage from '@/assets/profile.jpg';

// const Hero = () => {
//   const [currentTech, setCurrentTech] = useState(0);
//   const [displayedName, setDisplayedName] = useState('');
//   const [nameIndex, setNameIndex] = useState(0);
//   const technologies = ['AWS', 'Spark', 'Python', 'SQL', 'GCP'];
//   const fullName = 'Akhil';

//   // Typing animation for name
//   useEffect(() => {
//     if (nameIndex < fullName.length) {
//       const timer = setTimeout(() => {
//         setDisplayedName(fullName.slice(0, nameIndex + 1));
//         setNameIndex(nameIndex + 1);
//       }, 150);
//       return () => clearTimeout(timer);
//     }
//   }, [nameIndex]);

//   // Technology rotation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTech((prev) => (prev + 1) % technologies.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
//       {/* Parallax Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-charcoal to-graphite opacity-50" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--champagne)/0.1),transparent_50%)]" />

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left: Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="space-y-6"
//           >
//             {/* Hello, I'm section with typing name */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="mb-4"
//             >
//               {/* <h2 className="text-2xl md:text-3xl font-heading text-muted-foreground">
//                 Hello, I'm<br/>{' '}
//                 <span className="text-gradient">
//                   {displayedName}
//                   <motion.span
//                     animate={{ opacity: [1, 0] }}
//                     transition={{ duration: 0.8, repeat: Infinity }}
//                     className="ml-1"
//                   >
//                     |
//                   </motion.span>
//                 </span>
//               </h2> */}
//               <h2 className="font-heading text-muted-foreground">
//   <span className="text-xl md:text-2xl font-semibold mb-6">Hello, I'm</span>
//   <br/>{' '}
//   <span className="text-4xl md:text-5xl lg:text-7xl text-gradient">
//     {displayedName}
//     <motion.span
//       animate={{ opacity: [1, 0] }}
//       transition={{ duration: 0.8, repeat: Infinity }}
//       className="ml-1"
//     >
//       |
//     </motion.span>
//   </span>
// </h2>
//             </motion.div>

//             <motion.h1 
//               className="text-5xl md:text-7xl lg:text-5xl font-heading leading-tight"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//             >
//               Building Scalable <br />
//               <span className="text-gradient">Data Systems</span>
//               <br />
//               with Modern{' '}
//               <motion.span
//                 key={currentTech}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 className="text-gradient"
//               >
//                 {technologies[currentTech]}
//               </motion.span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.7 }}
//               className="text-xl text-muted-foreground max-w-xl"
//             >
//               Data Engineer with 11 years of experience building scalable, high-performance data platforms.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9 }}
//               className="flex flex-wrap gap-4"
//             >
//               <Link to="projects" smooth={true} offset={-80} duration={500}>
//                 <Button size="lg" className="btn-glow text-lg">
//                   View Projects
//                 </Button>
//               </Link>

//               <a href="/assets/resume.pdf" download>
//                 <Button variant="outline" size="lg" className="btn-glow text-lg">
//                   <Download className="mr-2 h-5 w-5" />
//                   Download Resume
//                 </Button>
//               </a>
//             </motion.div>
//           </motion.div>

//           {/* Right: Profile Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
//             animate={{ opacity: 1, scale: 1, rotate: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="relative"
//           >
//             <motion.div
//               animate={{ 
//                 y: [0, -20, 0],
//                 rotate: [0, 3, 0, -3, 0]
//               }}
//               transition={{ 
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//               className="relative"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-champagne to-sandstone rounded-full blur-3xl opacity-30 animate-pulse" />
//               <img
//                 src={profileImage}
//                 alt="Chandini Krishna Polaki - Data Engineer"
//                 className="relative rounded-full w-full max-w-lg mx-auto shadow-2xl border-4 border-champagne/30"
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//           className="w-6 h-10 border-2 border-champagne rounded-full flex items-start justify-center p-2"
//         >
//           <motion.div
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             className="w-1.5 h-1.5 bg-champagne rounded-full"
//           />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;



















// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-scroll';
// import { Download } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import profileImage from '@/assets/profile.jpg';

// const Hero = () => {
//   const [currentTech, setCurrentTech] = useState(0);
//   const [displayedName, setDisplayedName] = useState('');
//   const [nameIndex, setNameIndex] = useState(0);
//   const technologies = ['AWS', 'Spark', 'Python', 'SQL', 'GCP'];
//   const fullName = 'Akhil';

//   // Floating elements data
//   const floatingElements = [
//     { icon: '⚡', size: 'w-12 h-12', delay: 0, duration: 4, x: -80, y: -60 },
//     { icon: '🔍', size: 'w-10 h-10', delay: 1, duration: 5, x: 100, y: -40 },
//     { icon: '🚀', size: 'w-14 h-14', delay: 2, duration: 6, x: -60, y: 80 },
//     { icon: '💡', size: 'w-8 h-8', delay: 0.5, duration: 4.5, x: 80, y: 70 },
//     { icon: '📊', size: 'w-11 h-11', delay: 1.5, duration: 5.5, x: 120, y: -80 },
//     { icon: '🔧', size: 'w-9 h-9', delay: 2.5, duration: 4, x: -100, y: -20 },
//   ];

//   // Typing animation for name
//   useEffect(() => {
//     if (nameIndex < fullName.length) {
//       const timer = setTimeout(() => {
//         setDisplayedName(fullName.slice(0, nameIndex + 1));
//         setNameIndex(nameIndex + 1);
//       }, 150);
//       return () => clearTimeout(timer);
//     }
//   }, [nameIndex]);

//   // Technology rotation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTech((prev) => (prev + 1) % technologies.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
//       {/* Parallax Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-charcoal to-graphite opacity-50" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--champagne)/0.1),transparent_50%)]" />

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left: Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="space-y-6"
//           >
//             {/* Hello, I'm section with typing name */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="mb-4"
//             >
//               <h2 className="font-heading text-muted-foreground">
//                 <span className="text-xl md:text-2xl font-semibold mb-6">Hello, I'm</span>
//                 <br/>{' '}
//                 <span className="text-4xl md:text-5xl lg:text-7xl text-gradient">
//                   {displayedName}
//                   <motion.span
//                     animate={{ opacity: [1, 0] }}
//                     transition={{ duration: 0.8, repeat: Infinity }}
//                     className="ml-1"
//                   >
//                     |
//                   </motion.span>
//                 </span>
//               </h2>
//             </motion.div>

//             <motion.h1 
//               className="text-5xl md:text-7xl lg:text-5xl font-heading leading-tight"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//             >
//               Building Scalable <br />
//               <span className="text-gradient">Data Systems</span>
//               <br />
//               with Modern{' '}
//               <motion.span
//                 key={currentTech}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 className="text-gradient"
//               >
//                 {technologies[currentTech]}
//               </motion.span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.7 }}
//               className="text-xl text-muted-foreground max-w-xl"
//             >
//               Data Engineer with 11 years of experience building scalable, high-performance data platforms.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9 }}
//               className="flex flex-wrap gap-4"
//             >
//               <Link to="projects" smooth={true} offset={-80} duration={500}>
//                 <Button size="lg" className="btn-glow text-lg">
//                   View Projects
//                 </Button>
//               </Link>

//               <a href="/assets/resume.pdf" download>
//                 <Button variant="outline" size="lg" className="btn-glow text-lg">
//                   <Download className="mr-2 h-5 w-5" />
//                   Download Resume
//                 </Button>
//               </a>
//             </motion.div>
//           </motion.div>

//           {/* Right: Profile Image with Floating Elements */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
//             animate={{ opacity: 1, scale: 1, rotate: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="relative"
//           >
//             {/* Floating Elements */}
//             {floatingElements.map((element, index) => (
//               <motion.div
//                 key={index}
//                 className={`absolute ${element.size} flex items-center justify-center text-2xl bg-champagne/20 backdrop-blur-sm rounded-full border border-champagne/30 z-20`}
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: element.delay + 0.8 }}
//               >
//                 <motion.div
//                   animate={{
//                     y: [0, -20, 0],
//                     x: [0, element.x * 0.3, 0],
//                     rotate: [0, 10, -10, 0],
//                   }}
//                   transition={{
//                     duration: element.duration,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     delay: element.delay,
//                   }}
//                   className="flex items-center justify-center w-full h-full"
//                 >
//                   {element.icon}
//                 </motion.div>
//               </motion.div>
//             ))}

//             <motion.div
//               animate={{ 
//                 y: [0, -20, 0],
//                 rotate: [0, 3, 0, -3, 0]
//               }}
//               transition={{ 
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//               className="relative z-10"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-champagne to-sandstone rounded-full blur-3xl opacity-30 animate-pulse" />
//               <img
//                 src={profileImage}
//                 alt="Chandini Krishna Polaki - Data Engineer"
//                 className="relative rounded-full w-full max-w-lg mx-auto shadow-2xl border-4 border-champagne/30"
//               />
//             </motion.div>

//             {/* Additional floating dots */}
//             {[1, 2, 3, 4].map((dot) => (
//               <motion.div
//                 key={dot}
//                 className="absolute w-3 h-3 bg-sandstone/40 rounded-full"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1 + dot * 0.2 }}
//               >
//                 <motion.div
//                   animate={{
//                     x: Math.sin(dot) * 100,
//                     y: Math.cos(dot) * 100,
//                     scale: [1, 1.5, 1],
//                   }}
//                   transition={{
//                     duration: 3 + dot,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     delay: dot * 0.5,
//                   }}
//                   className="w-full h-full rounded-full"
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//           className="w-6 h-10 border-2 border-champagne rounded-full flex items-start justify-center p-2"
//         >
//           <motion.div
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             className="w-1.5 h-1.5 bg-champagne rounded-full"
//           />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;















// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-scroll';
// import { Download } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import profileImage from '@/assets/profile.jpg';

// const Hero = () => {
//   const [currentTech, setCurrentTech] = useState(0);
//   const [displayedName, setDisplayedName] = useState('');
//   const [nameIndex, setNameIndex] = useState(0);
//   const technologies = ['AWS', 'Spark', 'Python', 'SQL', 'GCP'];
//   const fullName = 'Akhil';

//   // Typing animation for name
//   useEffect(() => {
//     if (nameIndex < fullName.length) {
//       const timer = setTimeout(() => {
//         setDisplayedName(fullName.slice(0, nameIndex + 1));
//         setNameIndex(nameIndex + 1);
//       }, 150);
//       return () => clearTimeout(timer);
//     }
//   }, [nameIndex]);

//   // Technology rotation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTech((prev) => (prev + 1) % technologies.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   // Floating elements data
//   const floatingElements = [
//     {
//       id: 1,
//       content: "11+ Years",
//       subtext: "Experience",
//       position: "top-left",
//       delay: 0.2
//     },
//     {
//       id: 2,
//       content: "Top Skill",
//       subtext: "Data Engineering",
//       position: "top-right",
//       delay: 0.4
//     },
//     {
//       id: 3,
//       content: "AWS",
//       subtext: "Expert",
//       position: "bottom-left",
//       delay: 0.6
//     },
//     {
//       id: 4,
//       content: "Spark",
//       subtext: "Specialist",
//       position: "bottom-right",
//       delay: 0.8
//     }
//   ];

//   const getPositionClasses = (position) => {
//     switch (position) {
//       case 'top-left':
//         return '-top-4 -left-4';
//       case 'top-right':
//         return '-top-4 -right-4';
//       case 'bottom-left':
//         return '-bottom-4 -left-4';
//       case 'bottom-right':
//         return '-bottom-4 -right-4';
//       default:
//         return '';
//     }
//   };

//   return (
//     <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
//       {/* Parallax Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-charcoal to-graphite opacity-50" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--champagne)/0.1),transparent_50%)]" />

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left: Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="space-y-6"
//           >
//             {/* Hello, I'm section with typing name */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="mb-4"
//             >
//               <h2 className="font-heading text-muted-foreground">
//                 <span className="text-xl md:text-2xl font-semibold mb-6">Hello, I'm</span>
//                 <br/>{' '}
//                 <span className="text-4xl md:text-5xl lg:text-7xl text-gradient">
//                   {displayedName}
//                   <motion.span
//                     animate={{ opacity: [1, 0] }}
//                     transition={{ duration: 0.8, repeat: Infinity }}
//                     className="ml-1"
//                   >
//                     |
//                   </motion.span>
//                 </span>
//               </h2>
//             </motion.div>

//             <motion.h1 
//               className="text-5xl md:text-7xl lg:text-5xl font-heading leading-tight"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//             >
//               Building Scalable <br />
//               <span className="text-gradient">Data Systems</span>
//               <br />
//               with Modern{' '}
//               <motion.span
//                 key={currentTech}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 className="text-gradient"
//               >
//                 {technologies[currentTech]}
//               </motion.span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.7 }}
//               className="text-xl text-muted-foreground max-w-xl"
//             >
//               Data Engineer with 11 years of experience building scalable, high-performance data platforms.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9 }}
//               className="flex flex-wrap gap-4"
//             >
//               <Link to="projects" smooth={true} offset={-80} duration={500}>
//                 <Button size="lg" className="btn-glow text-lg">
//                   View Projects
//                 </Button>
//               </Link>

//               <a href="/assets/resume.pdf" download>
//                 <Button variant="outline" size="lg" className="btn-glow text-lg">
//                   <Download className="mr-2 h-5 w-5" />
//                   Download Resume
//                 </Button>
//               </a>
//             </motion.div>
//           </motion.div>

//           {/* Right: Profile Image with Floating Elements */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
//             animate={{ opacity: 1, scale: 1, rotate: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="relative"
//           >
//             <motion.div
//               animate={{ 
//                 y: [0, -20, 0],
//                 rotate: [0, 3, 0, -3, 0]
//               }}
//               transition={{ 
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//               className="relative"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-champagne to-sandstone rounded-full blur-3xl opacity-30 animate-pulse" />

//               {/* Profile Image */}
//               <div className="relative rounded-full w-full max-w-lg mx-auto shadow-2xl border-4 border-champagne/30 overflow-hidden">
//                 <img
//                   src={profileImage}
//                   alt="Chandini Krishna Polaki - Data Engineer"
//                   className="w-full h-full object-cover"
//                 />

//                 {/* Floating Elements */}
//                 {floatingElements.map((element) => (
//                   <motion.div
//                     key={element.id}
//                     initial={{ opacity: 0, scale: 0 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ 
//                       duration: 0.6, 
//                       delay: element.delay,
//                       type: "spring",
//                       stiffness: 100
//                     }}
//                     whileHover={{ scale: 1.1 }}
//                     className={`absolute ${getPositionClasses(element.position)} bg-obsidian/80 backdrop-blur-sm border border-champagne/30 rounded-lg p-3 shadow-2xl min-w-[100px] text-center`}
//                   >
//                     <div className="text-champagne font-bold text-sm md:text-base">
//                       {element.content}
//                     </div>
//                     <div className="text-sandstone text-xs md:text-sm">
//                       {element.subtext}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//           className="w-6 h-10 border-2 border-champagne rounded-full flex items-start justify-center p-2"
//         >
//           <motion.div
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             className="w-1.5 h-1.5 bg-champagne rounded-full"
//           />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;




















// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-scroll';
// import { Download } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import profileImage from '/akhil2222.jpg';

// const Hero = () => {
//   const [currentTech, setCurrentTech] = useState(0);
//   const [displayedName, setDisplayedName] = useState('');
//   const [nameIndex, setNameIndex] = useState(0);
//   const technologies = ['java','AWS', 'Spark', 'Python', 'SQL', 'GCP'];
//   const fullName = 'Akhil';

//   // Typing animation for name
//   useEffect(() => {
//     if (nameIndex < fullName.length) {
//       const timer = setTimeout(() => {
//         setDisplayedName(fullName.slice(0, nameIndex + 1));
//         setNameIndex(nameIndex + 1);
//       }, 150);
//       return () => clearTimeout(timer);
//     }
//   }, [nameIndex]);

//   // Technology rotation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTech((prev) => (prev + 1) % technologies.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
//     >
//       {/* Parallax Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-charcoal to-graphite opacity-50" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--champagne)/0.1),transparent_50%)]" />

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left: Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="space-y-6"
//           >
//             {/* Hello, I'm section with typing name */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="mb-4"
//             >
//               <h2 className="font-heading text-muted-foreground">
//                 <span className="text-xl md:text-2xl font-semibold mb-6">
//                   Hello, I'm
//                 </span>
//                 <br />{' '}
//                 <span className="text-4xl md:text-5xl lg:text-7xl text-gradient">
//                   {displayedName}
//                   <motion.span
//                     animate={{ opacity: [1, 0] }}
//                     transition={{ duration: 0.8, repeat: Infinity }}
//                     className="ml-1"
//                   >
//                     |
//                   </motion.span>
//                 </span>
//               </h2>
//             </motion.div>

//             <motion.h1
//               className="text-5xl md:text-5xl lg:text-5xl font-heading leading-tight"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//             >
//               Building Scalable <br />
//               <span className="text-gradient">Data Systems</span>
//               <br />
//               with Modern{' '}
//               <motion.span
//                 key={currentTech}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 className="text-gradient"
//               >
//                 {technologies[currentTech]}
//               </motion.span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.7 }}
//               className="text-xl text-muted-foreground max-w-xl"
//             >
//               Data Engineer with 11 years of experience building scalable,
//               high-performance data platforms.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9 }}
//               className="flex flex-wrap gap-4"
//             >
//               <Link to="projects" smooth={true} offset={-80} duration={500}>
//                 <Button size="lg" className="btn-glow text-lg">
//                   View Projects
//                 </Button>
//               </Link>

//               <a href="/akhil.pdf" download>
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   className="btn-glow text-lg"
//                 >
//                   <Download className="mr-2 h-5 w-5" />
//                   Download Resume
//                 </Button>
//               </a>
//             </motion.div>
//           </motion.div>

//           {/* Right: Profile Image + Floating Elements */}
//           <motion.div
//             // initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
//             // animate={{ opacity: 1, scale: 1, rotate: 0 }}
//             // transition={{ duration: 0.8, delay: 0.5 }}
//             className="relative"
//           >
//             <motion.div
//               // animate={{
//               //   y: [0, -20, 0],
//               //   // rotate: [0, 3, 0, -3, 0],
//               // }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//               }}
//               className="relative"
//             >
//               {/* Glow background */}
//               <div className="absolute inset-0 bg-gradient-to-br from-champagne to-sandstone rounded-full blur-3xl opacity-30 animate-pulse" />

//               {/* Profile Image */}
//               <img
//                 src={profileImage}
//                 alt="Chandini Krishna Polaki - Data Engineer"
//                 // className="relative rounded-full w-full max-w-lg  h-max mx-auto shadow-2xl border-4 border-champagne/30"
//                 className="relative rounded-full w-96 h-96 mx-auto shadow-2xl border-4 border-champagne/30 object-cover"

//               />

//               {/* 🌟 Floating Badges */}
//               <motion.div
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 4, repeat: Infinity }}
//                 className="absolute -top-1 -left-2 bg-gradient-to-r from-champagne to-sandstone text-obsidian px-4 py-2 rounded-full shadow-lg font-semibold text-sm md:text-base"
//               >
//                 11+ Years Experience
//               </motion.div>

//               {/* <motion.div
//                 animate={{ y: [0, 10, 0] }}
//                 transition={{ duration: 5, repeat: Infinity, delay: 1 }}
//                 className="absolute top-12 -right-4 bg-gradient-to-r from-sandstone to-champagne text-obsidian px-4 py-2 rounded-full shadow-lg font-semibold text-sm md:text-base"
//               >
//                AWS
//               </motion.div> */}

//               {/* <motion.div
//                 animate={{ y: [-8, 8, -8] }}
//                 transition={{ duration: 6, repeat: Infinity, delay: 2 }}
//                 className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-sandstone to-champagne text-obsidian px-4 py-2 rounded-full shadow-lg font-semibold text-sm md:text-base"
//               >
//                 Data Engineer
//               </motion.div> */}
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//           className="w-6 h-10 border-2 border-champagne rounded-full flex items-start justify-center p-2"
//         >
//           <motion.div
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             className="w-1.5 h-1.5 bg-champagne rounded-full"
//           />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;





























































import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '/chandini.png';

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

