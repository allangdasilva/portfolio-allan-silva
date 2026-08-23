import dogsMockup from '@/app/images/dogs-dark-noise.webp';
import kanbanMockup from '@/app/images/kanban-dark-noise.webp';
import planejaiMockup from '@/app/images/planejai-light-noise.webp';
import { StaticImageData } from 'next/image';

export interface ImageProps {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
}

export const portfolioCopy = [
  {
    id: 1,
    title: 'Dogs',
    href: 'https://react-dogs-steel.vercel.app/',
    description:
      'Aplicação reestruturada  do projeto “Rede Social Dogs” do curso da Origamid, adaptando para os padrões mais práticos atuais.',
    stack: [
      'React',
      'TypeScript',
      'Tailwind',
      'Tanstack Router',
      'Tanstack Query',
      'Zustand',
      'Zod',
      'Axios',
      'Radix UI',
      'Figma',
    ],
    image: {
      src: dogsMockup,
      alt: 'Mockup do projeto Dogs',
      width: 3072,
      height: 2048,
    } as ImageProps,
  },
  {
    id: 2,
    title: 'Planejai',
    href: 'https://planejai-three.vercel.app/',
    description:
      'Uma aplicação de planejamento financeiro que ajuda o usuário a simular metas e entender o impacto das despesas.',
    stack: [
      'React',
      'TypeScript',
      'Tailwind',
      'Tanstack Router',
      'React Loading Skeleton',
    ],
    image: {
      src: planejaiMockup,
      alt: 'Mockup do projeto Planejai',
      width: 3072,
      height: 2048,
    } as ImageProps,
  },
  {
    id: 3,
    title: 'Kanban',
    href: 'https://react-kanban-app-seven.vercel.app/',
    description:
      'Aplicação para gerenciar tarefas do dia a dia. Kanban interativo que exibe o andamento e o fluxo dos seus deveres',
    stack: ['React', 'TypeScript', 'Tailwind', 'Zustand', 'Zod', 'Figma'],
    image: {
      src: kanbanMockup,
      alt: 'Mockup do projeto Kanban',
      width: 3072,
      height: 2048,
    } as ImageProps,
  },
];
