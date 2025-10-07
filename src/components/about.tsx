'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="mt-5 max-w-2xl text-center leading-7 space-y-4">
        <p>
          Hi, I&apos;m Thigshicca Vigneswaramoorthy. I recently completed my
          Higher Diploma in Information Technology and am currently pursuing a
          BSc(Hons) in Computer Science & Software Engineering at SLIIT City
          University, affiliated with Bedfordshire University, UK.
        </p>

        <p>
          Throughout my learning journey, I&apos;ve had the opportunity to work
          on several exciting projects, from personal initiatives to
          collaborative ventures. My core tech stack includes Java, Python,
          React, React Native, Next.js, Express.js, TypeScript, and Tailwind
          CSS. I also have experience working with Next.js.
        </p>

        <p>
          Currently, I am focused on expanding my skills in modern web
          technologies and intelligent systems while gaining hands-on experience
          to prepare for the next steps in my tech career.
        </p>

        <p>🌱 Learning, building, and evolving every day.</p>
      </div>

      <Skills />
    </motion.section>
  );
};
