// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-scroll';
// import { Menu, X, Moon, Sun } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isDark, setIsDark] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [isDark]);

//   const navItems = [
//     { name: 'Home', to: 'hero' },
//     { name: 'About', to: 'about' },
//     { name: 'Experience', to: 'experience' },
//     { name: 'Projects', to: 'projects' },
//     { name: 'Skills', to: 'skills' },
//     { name: 'Certification', to: 'certifications' },
//     { name: 'Education', to: 'education' },
//     { name: 'Contact', to: 'contact' },
//   ];

//   return (
//     <>
//       <motion.header
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//         className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
//           isScrolled ? 'glass-effect shadow-lg py-3' : 'bg-transparent py-5'
//         }`}
//       >
//         <div className="container mx-auto px-4 flex items-center justify-between">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-2xl font-heading font-bold text-gradient"
//           >
//             CHANDINI
//           </motion.div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navItems.map((item, index) => (
//               <Link
//                 key={item.name}
//                 to={item.to}
//                 spy={true}
//                 smooth={true}
//                 offset={-80}
//                 duration={500}
//                 className="relative cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors group"
//               >
//                 {item.name}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-champagne to-sandstone transition-all duration-300 group-hover:w-full" />
//               </Link>
//             ))}
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsDark(!isDark)}
//               className="btn-glow"
//             >
//               {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//             </Button>
//           </nav>

//           {/* Mobile Menu Button */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="md:hidden"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <X /> : <Menu />}
//           </Button>
//         </div>
//       </motion.header>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-xl md:hidden"
//         >
//           <div className="flex flex-col items-center justify-center h-full gap-8">
//             <Button
//               variant="ghost"
//               size="icon"
//               className="absolute top-6 right-6"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <X className="h-6 w-6" />
//             </Button>
            
//             {navItems.map((item, index) => (
//               <Link
//                 key={item.name}
//                 to={item.to}
//                 spy={true}
//                 smooth={true}
//                 offset={-80}
//                 duration={500}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="text-2xl font-heading text-ivory hover:text-gradient transition-all cursor-pointer"
//               >
//                 {item.name}
//               </Link>
//             ))}
            
//             <Button
//               variant="outline"
//               size="lg"
//               onClick={() => setIsDark(!isDark)}
//               className="btn-glow mt-4"
//             >
//               {isDark ? (
//                 <>
//                   <Sun className="mr-2 h-5 w-5" /> Light Mode
//                 </>
//               ) : (
//                 <>
//                   <Moon className="mr-2 h-5 w-5" /> Dark Mode
//                 </>
//               )}
//             </Button>
//           </div>
//         </motion.div>
//       )}
//     </>
//   );
// };

// export default Header;































// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-scroll';
// import { Menu, X, Moon, Sun } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isDark, setIsDark] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [isDark]);

//   const navItems = [
//     { name: 'Home', to: 'hero' },
//     { name: 'About', to: 'about' },
//     { name: 'Experience', to: 'experience' },
//     { name: 'Projects', to: 'projects' },
//     { name: 'Skills', to: 'skills' },
//     { name: 'Certification', to: 'certifications' },
//     { name: 'Education', to: 'education' },
//     { name: 'Contact', to: 'contact' },
//   ];

//   return (
//     <>
//       <motion.header
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//         className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
//           isScrolled ? 'glass-effect shadow-lg py-3' : 'bg-transparent py-5'
//         }`}
//       >
//         <div className="container mx-auto px-4 flex items-center justify-between">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-2xl font-heading font-bold text-gradient"
//           >
//             CHANDINI
//           </motion.div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.to}
//                 spy={true}
//                 smooth={true}
//                 offset={-80}
//                 duration={500}
//                 className="relative cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors group"
//               >
//                 {item.name}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-champagne to-sandstone transition-all duration-300 group-hover:w-full" />
//               </Link>
//             ))}
//             {/* Desktop Theme Toggle */}
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsDark(!isDark)}
//               className="btn-glow"
//             >
//               {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//             </Button>
//           </nav>

//           {/* Mobile Right Side: Theme Toggle + Menu */}
//           <div className="flex items-center gap-2 md:hidden">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsDark(!isDark)}
//               className="btn-glow"
//               aria-label="Toggle theme"
//             >
//               {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//             </Button>

//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               aria-label="Toggle mobile menu"
//             >
//               {isMobileMenuOpen ? <X /> : <Menu />}
//             </Button>
//           </div>
//         </div>
//       </motion.header>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-xl md:hidden"
//         >
//           <div className="flex flex-col items-center justify-center h-full gap-8">
//             <Button
//               variant="ghost"
//               size="icon"
//               className="absolute top-6 right-6"
//               onClick={() => setIsMobileMenuOpen(false)}
//               aria-label="Close menu"
//             >
//               <X className="h-6 w-6" />
//             </Button>

//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.to}
//                 spy={true}
//                 smooth={true}
//                 offset={-80}
//                 duration={500}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="text-2xl font-heading text-ivory hover:text-gradient transition-all cursor-pointer"
//               >
//                 {item.name}
//               </Link>
//             ))}

//             {/* Keep the theme toggle inside mobile overlay too (optional) */}
//             <Button
//               variant="outline"
//               size="lg"
//               onClick={() => setIsDark(!isDark)}
//               className="btn-glow mt-4"
//             >
//               {isDark ? (
//                 <>
//                   <Sun className="mr-2 h-5 w-5" /> Light Mode
//                 </>
//               ) : (
//                 <>
//                   <Moon className="mr-2 h-5 w-5" /> Dark Mode
//                 </>
//               )}
//             </Button>
//           </div>
//         </motion.div>
//       )}
//     </>
//   );
// };

// export default Header;

























import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // ✅ Default to dark mode

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // ✅ Ensure the HTML root has dark mode applied initially
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Certification', to: 'certifications' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-xl bg-gradient-to-br from-charcoal/80 to-obsidian/80 border-b border shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-heading font-bold text-gradient"
          >
            CHANDINI
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="relative cursor-pointer text-sm font-medium text-ivory hover:text-champagne transition-colors group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-champagne to-sandstone transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            {/* Desktop Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="btn-glow text-ivory hover:text-champagne"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>

          {/* Mobile Right Side: Theme Toggle + Menu */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="btn-glow text-ivory hover:text-champagne"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="text-ivory hover:text-champagne"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-xl md:hidden border-t border-purple-500/40"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-6 right-6 text-ivory hover:text-champagne"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>

            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-heading text-ivory hover:text-gradient transition-all cursor-pointer"
              >
                {item.name}
              </Link>
            ))}

            {/* Theme Toggle inside mobile overlay */}
            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsDark(!isDark)}
              className="btn-glow mt-4 border-purple-500/50 text-ivory hover:text-champagne"
            >
              {isDark ? (
                <>
                  <Sun className="mr-2 h-5 w-5" /> Light Mode
                </>
              ) : (
                <>
                  <Moon className="mr-2 h-5 w-5" /> Dark Mode
                </>
              )}
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Header;
