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
  threejs,
  vue,
  goit,
  freelance,
  pvls,
  techstore,
  workquest,
  portfolio,
  worldofcats,
  telegrambot,
  webpack,
  vuex,
  sass,
  nuxt,
  next,
  github,
  babel,
  axios,
} from "@/assets";



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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
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

const projects = [
  {
    name: "Tech Store",
    description:
      "An online store offering a wide range of monitors, mice, and keyboards. Customers can browse through various, read detailed specifications, and make informed purchasing decisions.",
    technologies: [
      {
        name: "vue",
        icon: vue,
      },
      {
        name: "vuex",
        icon: vuex,
      },
      {
        name: "scss",
        icon: sass,
      },
      {
        name: "axios",
        icon: axios,
      },
    ],
    image: techstore,
    public_link: "https://denysyeremenko.github.io/techstore/",
    source_code_link: "https://github.com/DenysYeremenko/techstore",
  },
  {
    name: "JS Trainer Telegram Bot",
    description:
      "JavaScript Trainer is a Telegram bot designed to help users learn and test their JavaScript knowledge. The bot offers multiple-choice questions and provides explanations for the correct answers.",
    technologies: [
      {
        name: "node.js",
        icon: reactjs,
      },
      {
        name: "node-telegram-bot-api",
        icon: redux,
      },
      {
        name: "mongodb",
        icon: sass,
      },
      {
        name: "vercel",
        icon: axios,
      },

    ],
    image: telegrambot,
    public_link: "https://t.me/JS_TRAINER_BOT",
    source_code_link: "https://github.com/DenysYeremenko/js-trainer-telegram-bot",
  },
  {
    name: "WorkQuest",
    description:
      "WorkQuest is an innovative blockchain-based marketplace that connects employers and employees globally. The platform offers unique DeFi products, ensuring transparency and security in transactions.",
    technologies: [
      {
        name: "vue",
        icon: vue,
      },
      {
        name: "vuex",
        icon: vuex,
      },
      {
        name: "nuxt.js",
        icon: nuxt,
      },
      {
        name: "sass",
        icon: sass,
      },

    ],
    image: workquest,
    public_link: "https://workquest.co/",
    source_code_link: "https://github.com/WorkQuest",
  },
  {
    name: "Portfolio",
    description:
      "Explore a dynamic frontend developer's portfolio with an eye-catching 3D design. This site features a brief biography, extensive work experience, and a showcase of notable projects",
    technologies: [
      {
        name: "react",
        icon: reactjs,
      },
      {
        name: "react-three",
        icon: threejs,
      },
      {
        name: "tailwind",
        icon: tailwind,
      },
    ],
    image: portfolio,
    public_link: "https://den-dev.com/",
    source_code_link: "https://github.com/DenysYeremenko/my-portfolio",
  },
  {
    name: "World of Cats",
    description:
      "A web application for cat lovers to vote on cat photos and search for breed-specific information. Users can categorize photos into likes, favorites, and dislikes, and explore detailed breed data.",
    technologies: [
      {
        name: "react",
        icon: reactjs,
      },
      {
        name: "redux",
        icon: redux,
      },
      {
        name: "scss",
        icon: sass,
      },
      {
        name: "axios",
        icon: axios,
      },

    ],
    image: worldofcats,
    public_link: "https://denysyeremenko.github.io/world-of-cats/",
    source_code_link: "https://github.com/DenysYeremenko/world-of-cats",
  },


];

export { technologies, experiences, projects };
