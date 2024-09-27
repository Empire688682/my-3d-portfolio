import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  divas,
  empireKitchen,
  empirestore,
  hallmark2,
  homefittings,
  ideajoter,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },

  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining dynamic, user-centric websites using modern web technologies such as HTML5, CSS3, and JavaScript, Tailwind, and React.",
      "Collaborating with designers and content creators to build engaging, responsive, and accessible websites.",
      "Optimizing website performance and ensuring cross-browser compatibility for a seamless user experience.",
      "Utilizing version control systems (Git) and participating in collaborative workflows with feedback-driven code reviews.",
    ],
  },
  {
    title: "Full stack Developer",
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Designing, developing, and maintaining scalable web applications using both front-end (React.js) and back-end (Node.js, Express, MongoDB) technologies.",
      "Collaborating with cross-functional teams to deliver comprehensive full-stack solutions, from UI/UX to server-side logic and databases.",
      "Implementing secure, efficient APIs and ensuring proper communication between front-end and back-end systems.",
      "Conducting code reviews and offering constructive feedback, ensuring high standards for code quality and performance across all layers of the stack.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I was skeptical about creating a website that could truly reflect the elegance of our product, but Juwon not only exceeded my expectations but also shifted my belief from relying on WhatsApp sellers to owning a stunning e-commerce site.",
    name: "Sara Lee",
    designation: "Founder",
    company: "Divas Collection",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    testimonial:
      "I've never encountered a web developer as dedicated to their clients' success as Juwon.",
    name: "Mr Samson",
    designation: "CEO",
    company: "of HomeFittings",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
 {
  testimonial: "We never imagined our website could attract so much traffic until Juwon worked his magic. Highly recommend!",
  name: "Emma Johnson",
  designation: "Sales Executive",
  company: "SamJunctions",
  image: "https://randomuser.me/api/portraits/women/60.jpg",
},
{
  testimonial: "Juwon's attention to detail and commitment to our goals helped elevate our website beyond our expectations!",
  name: "David Smith",
  designation: "Product Manager",
  company: "Tech Innovations",
  image: "https://randomuser.me/api/portraits/men/45.jpg",
},

];

const projects = [
  {
    name: "EmpireKitchen",
    description:
      "EmpireKitchen is a food delivery platform that lets users easily browse, order, and manage meals from local restaurants. Enjoy quick, convenient service with a user-friendly interface and real-time order tracking.",
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
        name: "express.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "blue-text-gradient",
      },
    ],
    image: empireKitchen,
    source_code_link: "https://github.com/Empire688682/Empire-Kitchen",
  },
  {
    name: "Divas Collection",
    description:
      "Divas Collection is your go-to platform for fashion, featuring a portfolio of stylish collections, an online shop for easy purchases, and a blog for the latest trends and tips.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "paystack",
        color: "pink-text-gradient",
      },
    ],
    image: divas,
    source_code_link: "https://github.com/Empire688682/Home-of-Divas",
  },
  {
    name: "Hallmark Studio",
    description:
      "Hallmark Studio is a premier architecture firm specializing in innovative design and sustainable solutions. Their portfolio showcases a range of projects that blend creativity with functionality",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: hallmark2,
    source_code_link: "https://github.com/Empire688682/hallmarkStudio",
  },
  {
    name: "Empire Store",
    description:
      "Empire Store offers a curated selection of quality products, combining convenience with style. Discover and shop our exclusive collection today.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: empirestore,
    source_code_link: "https://github.com/Empire688682/E-Commerce",
  },
  {
    name: "Idea Jotter",
    description:
      "Idea Jotter is your go-to platform for brainstorming and organizing ideas effortlessly. Capture thoughts, create lists, and turn inspirations into actionable plans, all in one place.",
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
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
    ],
    image: ideajoter,
    source_code_link: "https://github.com/Empire688682/ideajotterJSX",
  },
  {
    name: "Home-Fittings",
    description:
      "Homefittings is a premier destination for high-quality building materials and professional estate management services. Offering a wide range of products and expert guidance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: homefittings,
    source_code_link: "https://github.com/Empire688682/HomeFittings-Project",
  },
];

export { services, technologies, experiences, testimonials, projects };