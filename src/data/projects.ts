export type ProjectFeature = {
  title: string;
  text: string;
  image: string;
  imageAlt?: string;
};

export type Project = {
  slug: string;
  title: string;

  type: string;
  year: number;

  description: string;
  overview: string;

  image: string;
  imageAlt?: string;
  location?: string;

  keyFeatures: ProjectFeature[];

};

export const allProjectsLegacy: Project[] = [
  {
    slug: 'residential-deck-construction',
    title: 'Residential Deck Construction',
    type: 'Residential Services',
    year: 2023,
    description:
      'A modern deck build designed for everyday living and entertaining.',
    overview:
      'This project focused on creating an outdoor space that feels like a natural extension of the home. From framing to finishing touches, we prioritized durability, clean lines, and a practical layout suited to the site.',
    image: '/images/projects-1.a0aa19236ecca54f9555.jpg',
    imageAlt: 'Residential deck construction',
    location: 'Auckland',
    keyFeatures: [
      {
        title: 'Premium materials',
        text: 'Utilization of premium, sustainable materials for longevity and elegance.',
        image: '/images/key-1.e46c34cbaefe7edef656.png',
        imageAlt: 'Key feature image 1',
      },
      {
        title: 'Indoor-outdoor flow',
        text: 'Creation of open-concept living spaces that flow effortlessly from indoors to outdoors.',
        image: '/images/key-2.dfb856efe87b2e352f17.png',
        imageAlt: 'Key feature image 2',
      },
      {
        title: 'Smart detailing',
        text: 'Attention to finishing details that improve usability and visual appeal.',
        image: '/images/key-3.dc2bb9ddb8e4b89f8ec6.jpg',
        imageAlt: 'Key feature image 3',
      },
    ],
  },
  {
    slug: 'luxury-new-build-home-kumeu-auckland',
    title: 'Luxury New Build Home in Kumeu, Auckland',
    type: 'Residential Services',
    year: 2024,
    description:
      'A high-end new build focused on comfort, craftsmanship, and modern aesthetics.',
    overview:
      'A full new build delivered with careful planning and close coordination across trades. The goal was a refined finish, functional spaces, and a home that feels light, open, and timeless.',
    image: '/images/projects-2.77f7f3ce1e5c1f090839.jpg',
    imageAlt: 'Luxury new build home',
    location: 'Kumeu, Auckland',
    keyFeatures: [
      {
        title: 'Architectural framing',
        text: 'Custom architectural design that maximizes natural light and creates strong spatial flow.',
        image: '/images/key-1.3615352d0d5215f1892e.jpg',
        imageAlt: 'Key feature image 1',
      },
      {
        title: 'Clean modern lines',
        text: 'Crisp detailing and a consistent finish across the build for a premium look and feel.',
        image: '/images/key-2.707fdb9dac14179fa26a.jpg',
        imageAlt: 'Key feature image 2',
      },
      {
        title: 'Quality assurance',
        text: 'Process-led build with checks at each milestone to maintain quality standards.',
        image: '/images/key-3.18c08717aa25d85843b5.jpg',
        imageAlt: 'Key feature image 3',
      },
    ],
  },
  {
    slug: 'renovation-and-extension',
    title: 'Renovation & Extension',
    type: 'Residential Services',
    year: 2022,
    description:
      'A renovation and extension designed to improve layout, light, and everyday functionality.',
    overview:
      'We upgraded the internal layout while improving the exterior connections. The outcome is a refreshed, more functional home that better supports modern living.',
    image: '/images/projects-3.98fee79ecd7c013d9120.jpg',
    imageAlt: 'Renovation project',
    location: 'Auckland',
    keyFeatures: [
      {
        title: 'Better layout',
        text: 'Improved flow between living areas with practical storage and circulation.',
        image: '/images/key-1.75849f797a8a564e5613.png',
        imageAlt: 'Key feature image 1',
      },
      {
        title: 'Brighter spaces',
        text: 'More natural light through updated openings and improved sightlines.',
        image: '/images/key-2.331390654cc68d95ccb7.png',
        imageAlt: 'Key feature image 2',
      },
      {
        title: 'Refined finish',
        text: 'A cohesive finish with attention to trims, junctions, and detailing.',
        image: '/images/key-3.3cf807d1401315b8a111.png',
        imageAlt: 'Key feature image 3',
      },
    ],
  },
  {
    slug: 'castor-bay-renovation',
    title: 'Prestigious Home Renovation at Castor Bay',
    type: 'Residential Services',
    year: 2023,
    description:
      'A detailed renovation with a focus on quality finishing and a premium outcome.',
    overview:
      'This renovation required careful sequencing and a strong focus on detail. We maintained clean execution throughout and delivered a result that elevates the home’s comfort and style.',
    image: '/images/hero-project-3.05e835d7e5f9572d4fd6.png',
    imageAlt: 'Home renovation',
    location: 'Auckland',
    keyFeatures: [
      {
        title: 'Precision joinery',
        text: 'High-quality detailing to achieve crisp edges and durable finishes.',
        image: '/images/key-1.3161a5a1415b776ab626.jpg',
        imageAlt: 'Key feature image 1',
      },
      {
        title: 'Upgraded materials',
        text: 'Material selection aligned with longevity and overall home aesthetic.',
        image: '/images/key-2.036ce2e024dd8d710f66.jpg',
        imageAlt: 'Key feature image 2',
      },
      {
        title: 'Site coordination',
        text: 'Effective planning to keep progress steady and disruptions minimal.',
        image: '/images/key-3.1aad2040d4ad6cf2b2ad.png',
        imageAlt: 'Key feature image 3',
      },
    ],
  },
  {
    slug: 'st-heliers-house-transformation',
    title: 'Cozy House Transformation at St Heliers',
    type: 'Residential Services',
    year: 2023,
    description:
      'A home transformation project that blends functionality with a warm, modern feel.',
    overview:
      'Our journey with the home in St Heliers began with a blank canvas—a concrete slab awaiting transformation. We focused on creating a warm retreat that showcases versatility and commitment to excellence.',
    image: '/images/hero-project-4.e331717735ea51b8185b.png',
    imageAlt: 'House transformation',
    location: 'Auckland',
    keyFeatures: [
      {
        title: 'Premium materials',
        text: 'Utilization of premium, sustainable materials for longevity and elegance.',
        image: '/images/key-1.e46c34cbaefe7edef656.png',
        imageAlt: 'Key feature image 1',
      },
      {
        title: 'Indoor-outdoor living',
        text: 'Creation of open-concept living spaces that flow effortlessly from indoors to outdoors.',
        image: '/images/key-2.dfb856efe87b2e352f17.png',
        imageAlt: 'Key feature image 2',
      },
      {
        title: 'Architectural design',
        text: 'Custom architectural design that maximizes natural light and creates an inviting atmosphere.',
        image: '/images/key-3.dc2bb9ddb8e4b89f8ec6.jpg',
        imageAlt: 'Key feature image 3',
      },
    ],
  },
];

export const projectsShortlistLegacy = allProjectsLegacy.slice(0, 3);
