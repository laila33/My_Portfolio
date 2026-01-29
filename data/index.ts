import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#workExperience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Banking App with Finance Management Dashboard",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "MegaMart Seamless Shopping Experience",
    des: "A modern e-commerce platform built with pure JavaScript, focusing on speed, responsiveness, and a smooth checkout flow for the modern shopper.",
    img: "/img12.png",

    iconLists: [
      "/html-5-svgrepo-com.svg ",
      "/css-document-extension-file-file-format-file-type-svgrepo-com.svg",
      "/javascript-logo-svgrepo-com.svg",
      "/tail.svg",
    ],
    link: "https://mega-markett-65h2-rbs05brmh-lilas-projects-189ec97b.vercel.app/",
  },
  {
    id: 2,
    title: "FreshMart Your Daily Grocery Partner",
    des: "A dedicated grocery e-commerce application designed to make shopping for essentials effortless. Featuring real-time inventory, categorized aisles, and a super-fast checkout to bring the supermarket experience to your screen.",
    img: "/img3.png",
    iconLists: [
      "/reactjs-svgrepo-com.svg",
      "/tail.svg",
      "/javascript-logo-svgrepo-com.svg",
      "/css-document-extension-file-file-format-file-type-svgrepo-com.svg",
      "/html-5-svgrepo-com.svg ",
    ],
    link: "https://fresh-cart-erul-m76yji1sz-lilas-projects-189ec97b.vercel.app/",
  },
  {
    id: 3,
    title: "DineSmart Gourmet Experience & Reservations",
    des: "Description: A full-featured restaurant platform where flavors meet convenience. Explore a dynamic menu, read authentic customer reviews, and secure your table with an integrated real-time reservation system.",
    img: "/img11.png",
    iconLists: [
      "/reactjs-svgrepo-com.svg",
      "/tail.svg",
      "/javascript-logo-svgrepo-com.svg",
      "/css-document-extension-file-file-format-file-type-svgrepo-com.svg",
      "/html-5-svgrepo-com.svg ",
    ],
    link: "https://restaurantusing-react-c4kv8d3ls-lilas-projects-189ec97b.vercel.app/",
  },
  {
    id: 4,
    title: "MemoryGame Interactive Card Flipping Game",
    des: "A fun and engaging brain-teaser built to test your memory. This project features smooth card-flip animations, score tracking, and logic-based matching, providing a playful yet challenging user experience.",
    img: "/13.png",
    iconLists: [
      "/html-5-svgrepo-com.svg ",
      "/css-document-extension-file-file-format-file-type-svgrepo-com.svg",
      "/javascript-logo-svgrepo-com.svg",
      "/tail.svg",
    ],
    link: "https://laila33.github.io/Memory_game/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Development Trainee - ITI",
    desc: "Intensive 9-month program specializing in Frontend Development Built robust applications with React, Next.js, and integrated REST APIs.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Front-End Development Diploma - Eraa Soft",
    desc: "Mastered building modern, responsive web interfaces and reusable UI components using JavaScript (ES6+), React.js, and Tailwind CSS.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Data Structures & Algorithms - Coach Academy",
    desc: "Strengthened problem-solving skills and optimized code efficiency through deep study of algorithms and data structures.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Foundations & Self-Study",
    desc: "Built a solid foundation in Computer Science through self-study, mastering OOP principles and Data Structures to write clean, efficient, and scalable code.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:'https://github.com/laila33',
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  // },
  {
    id: 3,
    img: "/link.svg",
    link:'https://www.linkedin.com/in/lila-abdelnaser-514806267/',
  },
];
