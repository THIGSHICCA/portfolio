import React from 'react';

import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/project1.jpg',
    title: 'Curv Fi',
    description: 'AI powered project budgeting tool',
    technologies: ['Next.js', 'Tailwind', 'Node.js'],
    width: 600,
    height: 390,
  },

  {
    image: '/images/project5.jpg', // your mobile app screenshot
    title: 'Farmer App',
    description: 'Farmer E-commerce App with simple UI and easy handling.',
    technologies: ['React Native', 'Tailwind', 'Express.js'],
    width: 100, // narrower size for mobile screenshots
    height: 400, // taller aspect ratio for mobile view
  },
  {
    image: '/images/project6.jpg', // another mobile screenshot
    title: 'MediApp',
    description: 'This application is a doctor booking platform and also it will suggest the doctors based on the symptoms you enter',
    technologies: ['React Native', 'Tailwind', 'Python'],
    width: 100,
    height: 400,
  },
] as const;

export const experiencesData = [
  {
    title: 'Fullstack developer intern',
    company: 'TribeTek',
    description:
      'During this internship, I focused areas: Creating complete projects',
    period: '2025 - Present',
    technologies: ['React', 'React Native', 'Next.js', 'Tailwind.css'],
  },
  {
    title: 'Web developer',
    company: 'DreamSpace Academy',
    description:
      'As a freelancer, I specialized in graphic design using Figma and website development using Next.js with Sanity CMS. I undertook projects independently, from design conceptualization to final implementation, ensuring client satisfaction.',
    period: '2022 April - 2022 October',
    technologies: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Php', 'Python'],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
