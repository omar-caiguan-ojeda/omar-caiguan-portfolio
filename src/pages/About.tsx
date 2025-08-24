import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { useState } from "react";
import CodeBackgroundAbout from "../components/CodeBackgroundAbout";
import { motion } from "framer-motion";
import TypewriterBlock from "../components/about/TypewriterBlock";
import TechCategory from "../components/about/TechCategory";
import ContactLinks from "../components/about/ContactLinks";
import ContactForm from "../components/about/ContactForm";
import TechCarousel from "../components/about/TechCarousel";
import { DomMarqueeBounce } from "../components/about/TechOrbit3D";
import { aboutParagraphs, skills as aboutSkills, techCategories as techCategoriesData, projects as projectsData } from "../data/about";

const About = () => {
  const navigate = useNavigate();

  const techCategories = techCategoriesData;

  const projects = projectsData;

  const [diluteAll, setDiluteAll] = useState(false);

  const [showSkills, setShowSkills] = useState(false);

  const handleDiluteAll = () => {
    if (diluteAll) return;
    setDiluteAll(true);
    setTimeout(() => {
      navigate("/");
    }, 1600);
  };

  return (
    <div className="min-h-screen bg-darkBg flex flex-col relative overflow-x-hidden">
      <CodeBackgroundAbout />
      <motion.div
        initial={{ x: -100, opacity: 0, filter: 'blur(12px)' }}
        animate={diluteAll ? { opacity: 0, filter: 'blur(8px)' } : { x: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="z-50 fixed top-0 left-0 w-full"
      >
        <Navbar onHomeClick={handleDiluteAll} diluteAll={diluteAll} />
      </motion.div>
      <div className="pt-16"></div>
      <motion.div
        initial={{ y: 100, opacity: 0, filter: 'blur(12px)' }}
        animate={diluteAll ? { y: 100, opacity: 0, filter: 'blur(8px)' } : { y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
        className="w-full max-w-4xl mx-auto p-4 sm:p-6 pt-16 flex-grow z-20"
      >
        <section id="about-section" className="mb-12">
          <motion.h2
            className="text-2xl xs:text-3xl font-bold text-textLight mb-6 cursor-pointer"
            onClick={handleDiluteAll}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Sobre Mí
          </motion.h2>
          <TypewriterBlock paragraphs={aboutParagraphs} onFinish={() => setShowSkills(true)} />
          {showSkills && (
            <motion.div
              className="flex flex-wrap gap-2 mt-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } }
              }}
            >
              {aboutSkills.map(skill => (
                <motion.span
                  key={skill}
                  className="bg-accent/10 text-accent px-2 xs:px-3 py-1 rounded-full text-xs xs:text-sm font-semibold shadow-sm"
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          )}
        </section>

        <section id="tech-section" className="mb-12">
          <motion.h2
            className="text-2xl xs:text-3xl font-bold text-textLight mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Tecnologías
          </motion.h2>
          {/* Fallback DOM sin WebGL: marquee con rebote */}
          <DomMarqueeBounce />
          {/* Mantener otros experimentos pero ocultos */}
          <div className="hidden">
            <TechCarousel />
          </div>
          {/* Mantener la grilla anterior pero oculta */}
          <div className="hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {techCategories.map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, scale: 0.8, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.15, type: 'spring' }}
                  viewport={{ once: true }}
                >
                  <TechCategory {...category} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects-section" className="py-8">
          <motion.h2
            className="text-2xl xs:text-3xl font-bold text-textLight mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Proyectos
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.12 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact-section" className="py-8">
          <motion.h2
            className="text-2xl xs:text-3xl font-bold text-textLight mb-6 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Contacto
          </motion.h2>
          <ContactLinks />
        </section>

        <ContactForm />

        <motion.button
          className="w-full max-w-[250px] px-4 py-2 xs:py-3 bg-darkBg/80 border-2 border-accent text-accent rounded-lg transition-all duration-300 mt-8 hover:bg-accent hover:text-darkBg hover:shadow-lg hover:shadow-accent/50 shadow-md shadow-accent/10 text-sm xs:text-base"
          onClick={handleDiluteAll}
          initial={false}
          animate={diluteAll ? { opacity: 0, filter: 'blur(8px)' } : { opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Volver al Inicio
        </motion.button>
      </motion.div>
      <motion.footer
        initial={{ opacity: 1 }}
        animate={diluteAll ? { opacity: 0, filter: 'blur(8px)' } : { opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
      >
        <Footer />
      </motion.footer>
    </div>
  );
};

export default About;