import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Arbin",
  lastName: "Shrestha",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web Developer",
  avatar: "/images/avatar.jpg",
  email: "arbinshrestha98@gmail.com",
  location: "America/Toronto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/arbeen",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/arbinshrestha/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">momentsnlens</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Arbin, a full stack web developer and student at Lambton College. I build modern, user-friendly apps with React, Node.js, and Flask, and love turning ideas into real-world solutions.
    </>
  ),
};
const about = {
  path: "/about",
  label: "About",
  title: `About – Arbin Shrestha`,
  description: `Meet Arbin Shrestha, Full Stack Developer and student based in Ottawa, Canada`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com", // Replace with your actual booking link if available
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Arbin is a passionate full stack developer and Lambton College student based in Ottawa. 
        With over 3 years of professional experience across international teams, he has contributed 
        to frontend systems, cross-platform apps, and blockchain solutions using modern tools 
        like React, Next.js, Flutter, and the MERN stack. He thrives on solving complex problems with elegant code.
      </>
    ),
  },
  work: {
    display: true,
    title: "Professional Experience",
    experiences: [
      {
        company: "Yuvoice (Freelance & Volunteer)",
        timeframe: "2019 – Present",
        role: "Frontend Developer",
        achievements: [
          <>Assisting in frontend development and improving platform usability.</>,
        ],
        images: [],
      },
      {
        company: "Ramailo Tech",
        timeframe: "Dec 2022 – June 2023",
        role: "Tech Lead",
        achievements: [
          <>
            Spearheaded development of an inter-device file transfer app using Next.js and Flutter.
          </>,
          <>Led UI/UX design initiatives and requirement gathering sessions.</>,
        ],
        images: [],
      },
      {
        company: "Xcellab",
        timeframe: "June 2021 – Dec 2022",
        role: "Frontend Developer",
        achievements: [
          <>
            Optimized MERN stack applications to enhance performance and maintainability.
          </>,
          <>Built portfolio sites using Strapi and contributed to blockchain-based projects.</>,
        ],
        images: [],
      },
      {
        company: "Axios Softworks",
        timeframe: "Nov 2019 – Apr 2021",
        role: "Frontend Developer",
        achievements: [
          <>
            Developed responsive web apps, boosting user engagement and accessibility.
          </>,
          <>
            Gained experience in Python and DevOps on enterprise-level applications.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Lambton College, Ottawa, ON",
        description: <>Post-Graduate Diploma in Full Stack Software Development (In Progress, expected Aug 2025)</>,
      },
      {
        name: "Tribhuvan University, Nepal",
        description: <>B.Sc. in Computer Science & Information Technology, Graduated 2019</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "React & Next.js",
        description: <>Building fast, scalable web interfaces with React, Vite, and Next.js.</>,
        images: [],
      },
      {
        title: "Flutter",
        description: <>Cross-platform mobile app development with Flutter and Dart.</>,
        images: [],
      },
      {
        title: "MERN Stack",
        description: <>Full-stack development using MongoDB, Express, React, and Node.js.</>,
        images: [],
      },
      {
        title: "Strapi & CMS",
        description: <>Content management and backend APIs using Strapi and headless CMS.</>,
        images: [],
      },
      {
        title: "DevOps & Python",
        description: <>Hands-on with CI/CD pipelines and Python scripting for backend services.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
