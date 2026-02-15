export type Project = {
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  location?: string;
};

export const allProjects: Project[] = [
  {
    slug: 'residential-deck-construction',
    title: 'Residential Deck Construction',
    description:
      'Short project description goes here. Replace this with the final copy from the design/content.',
    imageSrc: '/images/projects-1.a0aa19236ecca54f9555.jpg',
    imageAlt: 'Residential deck construction',
    location: 'Auckland',
  },
  {
    slug: 'luxury-new-build-home-kumeu-auckland',
    title: 'Luxury New Build Home in Kumeu, Auckland',
    description:
      'Short project description goes here. Replace this with the final copy from the design/content.',
    imageSrc: '/images/projects-2.77f7f3ce1e5c1f090839.jpg',
    imageAlt: 'Luxury new build home',
    location: 'Kumeu, Auckland',
  },
  {
    slug: 'renovation-and-extension',
    title: 'Renovation & Extension',
    description:
      'Short project description goes here. Replace this with the final copy from the design/content.',
    imageSrc: '/images/projects-3.98fee79ecd7c013d9120.jpg',
    imageAlt: 'Renovation project',
    location: 'Auckland',
  },
];
