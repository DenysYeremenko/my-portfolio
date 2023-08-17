import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  vue,
  goit,
  freelance,
  pvls,
  webpack,
  vuex,
  sass,
  nuxt,
  next,
  github,
  babel,
  axios,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Vue Developer",
    icon: vue,
  },
  {
    title: "JavaScript Developer",
    icon: javascript,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: typescript,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Node.js",
    icon: nodejs,
    link: "https://nodejs.org/",
  },
  {
    name: "Three.js",
    icon: threejs,
    link: "https://threejs.org/",
  },
  {
    name: "React.js",
    icon: reactjs,
    link: "https://reactjs.org/",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    link: "https://redux.js.org/",
  },
  {
    name: "Next.js",
    icon: next,
    link: "https://nextjs.org/",
  },
  {
    name: "Vue",
    icon: vue,
    link: "https://vuejs.org/",
  },
  {
    name: "Vuex",
    icon: vuex,
    link: "https://vuex.vuejs.org/",
  },
  {
    name: "Nuxt.js",
    icon: nuxt,
    link: "https://nuxtjs.org/",
  },
  {
    name: "HTML5",
    icon: html,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS3",
    icon: css,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    link: "https://tailwindcss.com/",
  },
  {
    name: "Sass",
    icon: sass,
    link: "https://sass-lang.com/",
  },
  {
    name: "Figma",
    icon: figma,
    link: "https://www.figma.com/",
  },
  {
    name: "Git",
    icon: git,
    link: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/",
  },
  {
    name: "Axios",
    icon: axios,
    link: "https://axios-http.com/",
  },
  {
    name: "Webpack",
    icon: webpack,
    link: "https://webpack.js.org/",
  },
  {
    name: "Babel",
    icon: babel,
    link: "https://babeljs.io/",
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "GoIT",
    icon: goit,
    iconBg: "#383E56",
    date: "Dec 2021 - Dec 2022",
    points: [
      "Proficient in HTML and CSS fundamentals, including a strong grasp of tags, attributes, styling techniques, and layout principles.",
      "Solid understanding of JavaScript concepts, covering variables, functions, arrays, objects, DOM manipulation, and handling asynchronous operations.",
      "Experienced in developing dynamic web applications using React, demonstrating expertise in component-based architecture, effective state management, and seamless API integration.",
      "Collaborative team player with practical project experience, poised to contribute effectively to web development initiatives. Equipped with expertise in HTML, CSS, JavaScript, and React to enhance project outcomes.",
    ],
  },
  {
    title: "React Developer at Freelance",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Present",
    points: [
      "Worked as a freelance React developer, where I designed and built interactive web interfaces.",
      "Have experience in implementing new features, enhancing performance and debugging code.",
      "Made active use of React and Redux, as well as other modern development tools for creating reactive and scalable web applications.",
    ],
  },
  {
    title: "Vue Developer",
    company_name: "pvls",
    icon: pvls,
    iconBg: "#000",
    date: "Jan 2023 - Present",
    points: [
      "As a Vue Frontend Developer working at WorkQuest, the world's decentralized job market integrating DeFi and recruitment, I play a key role in developing the user interface.",
      "Using technologies such as Vue, Vuex, Vee-validate, Nuxt.js, and Web3, I create an intuitive and efficient UI that ensures security and transparency in the hiring process.",
      "Joining forces with the WorkQuest team, I contribute to revolutionizing the way employers and job seekers interact globally.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
