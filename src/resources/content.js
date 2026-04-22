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
  description: `Portfolio website showcasing the work, writing, and projects of ${person.name}`,
  headline: <>Building thoughtful web products from idea to launch</>,
  featured: {
    display: true,
    title: <>Featured project: <strong>Moments & Lens</strong></>,
    href: "/work/momentsnlens",
  },
  subline: (
    <>
      I’m Arbin, a full stack web developer and student at Lambton College. I build modern,
      user-focused apps with React, Next.js, Node.js, and Flask, and I enjoy turning ideas into
      clear, dependable products.
    </>
  ),
};
const about = {
  path: "/about",
  label: "About",
  title: `About – Arbin Shrestha`,
  description: `Meet Arbin Shrestha, a full stack developer and student based in Ottawa, Canada`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Arbin is a full stack developer and Lambton College student based in Ottawa. With 3+ years
        of professional experience across international teams, he has contributed to frontend
        systems, cross-platform apps, and blockchain-related products using React, Next.js,
        Flutter, and the MERN stack. He focuses on building clean, reliable interfaces that solve
        real problems.
      </>
    ),
  },
  work: {
    display: true,
    title: "Professional Experience",
    experiences: [
      {
        company: "Yuvoice (Freelance & Volunteer)",
        timeframe: "Nov 2024 – Jan 2025",
        role: "Frontend Developer",
        achievements: [
          <>Contributed to frontend development and refined key user flows to improve usability.</>,
        ],
        images: [],
      },
      {
        company: "Ramailo Tech",
        timeframe: "Dec 2022 – June 2023",
        role: "Tech Lead",
        achievements: [
          <>
            Led development of an inter-device file transfer app using Next.js and Flutter.
          </>,
          <>Guided UI/UX direction and facilitated requirement gathering with stakeholders.</>,
        ],
        images: [],
      },
      {
        company: "Xcellab",
        timeframe: "June 2021 – Dec 2022",
        role: "Frontend Developer",
        achievements: [
          <>
            Optimized MERN stack applications to improve performance and maintainability.
          </>,
          <>Built portfolio sites with Strapi and contributed to blockchain-based projects.</>,
        ],
        images: [],
      },
      {
        company: "Axios Softworks",
        timeframe: "Nov 2019 – Apr 2021",
        role: "Frontend Developer",
        achievements: [
          <>
            Developed responsive web apps that improved engagement and accessibility.
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
  title: "Writing about design, code, and what I’m learning",
  description: `Read the latest writing and technical notes from ${person.name}`,
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


export { person, social, newsletter, home, about, blog, work };
