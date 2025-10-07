'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { experiencesData } from '@/lib/data';
import { cn } from '@/lib/utils';

export const Experience = () => {
  const { ref: sectionRef } = useSectionInView('Experience');

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative my-10 scroll-mt-28 md:mb-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300 opacity-20 blur-3xl"></div>

      <SectionHeading
        heading="My Experience"
        content="Professional experience that I have accumulated in my learning journey."
      />

      <div className="relative max-w-screen-md mx-auto">
        {experiencesData.map(
          ({ title, description, company, period, technologies }) => (
            <div
              key={company}
              className="relative pl-8 [&:not(:last-child)]:pb-10"
            >
              {/* Timeline Line */}
              <div className="bg-muted absolute left-0 top-2.5 h-full w-[2px]">
                <div className="border-primary bg-background absolute left-[-5px] top-0 size-3 rounded-full border-2" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={cn('space-y-3')}
              >
                {/* Company */}
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full border">
                    <Icons.building className="size-5" />
                  </div>
                  <span className="text-lg font-semibold">{company}</span>
                </div>

                {/* Title and Period */}
                <div>
                  <h3 className="text-xl font-medium">{title}</h3>
                  <div className="mt-1 flex items-center gap-2 text-sm">
                    <Icons.calendar className="size-4" />
                    <span>{period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground">{description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <div
                      key={tech}
                      className="rounded-full border px-3 py-1 text-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
