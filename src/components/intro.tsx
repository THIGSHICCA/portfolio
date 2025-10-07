'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const Intro = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="home"
      className="relative my-10 flex scroll-mt-96 flex-col items-center gap-5 text-center sm:mt-28"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-rose-500 via-purple-500 to-blue-500 opacity-20 blur-3xl"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-5"
      >
        {/* Availability Badge */}
        <motion.div variants={itemVariants}>
          <Link
            href="#contact"
            className="flex items-center gap-3 rounded border px-3 py-1 hover:scale-105 transition-transform"
          >
            <span className="relative flex size-2">
              <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative flex size-2 rounded-full bg-green-400"></span>
            </span>
            <span className="font-mono text-sm">Available for work!</span>
          </Link>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-heading max-w-3xl text-4xl font-extrabold md:text-5xl"
        >
          <span className="block">Hi, I&apos;m a</span>
          <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
            Fullstack
          </span>{' '}
          developer creating modern web apps.
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground max-w-xl text-center"
        >
          Aspiring Software Engineer | AI & ML enthusiast |{' '}
          <span>
            BSc(Hons) Computer Science & Software Engineering Undergraduate
          </span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-row gap-2 mt-4"
        >
          <Button
            asChild
            size="lg"
            className="hover:scale-105 transition-transform"
          >
            <Link href="#contact">
              Get in touch <Icons.arrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="hidden sm:flex hover:scale-105 transition-transform"
            asChild
          >
            <a href="/Thigshicca_CV.pdf" download>
              Download CV <Icons.download className="ml-2 size-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hover:rotate-12 transition-transform"
            asChild
          >
            <Link
              href="https://www.linkedin.com/in/thigshicca-vigneshwaramoorthy-a5aa7823a"
              aria-label="Linkedin"
              target="_blank"
            >
              <Icons.linkedin className="size-5" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hover:rotate-12 transition-transform"
            asChild
          >
            <Link
              href="https://github.com/THIGSHICCA"
              aria-label="Github"
              target="_blank"
            >
              <Icons.github className="size-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
