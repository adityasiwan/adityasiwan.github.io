import {
  web,
  reactNative,
  uiux,
  fullStack,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  materialui,
  python,
  cpp,
  java,
  nodejs,
  mongodb,
  github,
  figma,
  creativecloud,
  docker,
  csm,
  mesabiotech,
  thermofisher,
  ethicable,
  tinytales,
  gymhaus,
  kingpin,
  scrunchies4sma,
  threejs,
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
    title: "Full Stack Software Engineer",
    icon: fullStack,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: reactNative,
  },
  {
    title: "UI/UX Designer",
    icon: uiux,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: materialui,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Adobe Creative Cloud",
    icon: creativecloud,
  },
  // {
  //     name: "GitHub",
  //     icon: github,
  // },
  // {
  //     name: "Blender",
  //     icon: docker,
  // },
];

const experiences = [
  {
    title: "Engineer (Frontend and UI/UX)",
    company_name: "Ethicable",
    icon: ethicable,
    iconBg: "#FFF8FC",
    date: "August 2023 - Present",
    points: [
      "Executed the majority of frontend/ui/ux decisions in a fast-paced startup environment",
      "Designed and coded the React.js portion of ethicable.ai and trustwrite.ai",
      "Rebranded color scheme and logo to better reflect company values and mission",
      "Worked on backend integration with GraphQL, Redis Pub/Sub, and AWS SQS and SNS",
    ],
  },
  {
    title: "Software Engineer II",
    company_name: "Thermo Fisher Scientific",
    icon: thermofisher,
    iconBg: "#FFF8FC",
    date: "July 2022 - June 2023",
    points: [
      "Collaborated cross-functionally to accelerate feature completion of an embedded systems medical PCR testing device by implementing user interface and new functionalities (such as exporting logs to a USB, scanning/saving barcode data, user authentication and persistent lockout if auth fails 3x)",
      "Troubleshooted/fixed bugs in firmware with hierarchical state machines & asynchronous processing",
      "Integrated and improved the device target line detection algorithm using smoothing, color contrast, and derivatives",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Thermo Fisher Scientific",
    icon: thermofisher,
    iconBg: "#FFF8FC",
    date: "Jan 2021 - August 2021",
    points: [
      "Built React Native mobile app that aids with recording mass PCR testing by scanning patient infobarcodes, takes pictures of result strips, and uploads to an AWS Cloud database",
      "Enhanced website used to view test results with company branding, test strip image viewing ability, and interactive customer stat graphs with various React APIs",
      "Created Power BI reports for marketing spends",
    ],
  },
  {
    title: "Software and User Interface Intern",
    company_name: "Mesa Biotech",
    icon: mesabiotech,
    iconBg: "#FFF8FC",
    date: "June 2020 - August 2021",
    points: [
      "Worked on the UI design and firmware development of touch screen PCR testing device",
      "Prototyped UI with Adobe XD and implemented with STemWin gui graphics library",
      "Developed the front-end and back-end of new features such a maintenance user with unique hashed passwords retrievable with an external app and a test result print functionality",
      "Implemented unit-testing with VS C++ NativeUnit Test framework",
      "Updated software requirements documentation",
    ],
  },
  {
    title: "CS Mentor",
    company_name: "Computer Science Mentors",
    icon: csm,
    iconBg: "#FFF8FC",
    date: "August 2019 - January 2021",
    points: [
      "Tutored small group every week on CS61A topics",
      "Created cribsheets on various topics for future mentors",
      "Encorporated different teaching strategies to adapt to different students such as scaffolding, peer learning, and using analogies",
      "Collaborated and communicated with other mentors with regular interaction and feedback.",
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
    name: "Tiny Tales",
    description:
      "This is an early childhood education app aimed at developing language skills while fostering creativity through storytelling. We use the Google Cloud Vision API to order images (previously imported by the user) based on similar keywords for continuity. Then the child is able to record a story with these 4 images. I was the front-end lead and part of the UI design team.",
    tags: [
      {
        name: "android application",
        color: "blue-text-gradient",
      },
      {
        name: "google api",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: tinytales,
    source_code_link: "/files/TinyTalesReport.pdf",
  },
  {
    name: "GymHaus",
    description:
      "This was my first website I made! During the summer, my friend designed Covid-19 t-shirts he wanted to sell to help donate funds for frontline workers. He asked me to design and create this website for him. Sadly, he wasn’t able to continue with this project, so we never launched the full website. Besides the pictures of the shirts, all other images are stock photos.",
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
        name: "web design",
        color: "pink-text-gradient",
      },
    ],
    image: gymhaus,
    source_code_link: "/files/GymHaus Website/gymhaus.html",
  },
  {
    name: "Scrunchies 4 SMA",
    description:
      "Spinal Muscular Atrophy (SMA) is a disease my brother has, and this is a passion project where scrunchies made from scrap fabric will raise funds for SMA cure research. It started as a project for a brand identity and graphic design class where I created stylescapes, logos, and other mockups. The color scheme is bright and sparkly to symbolize happiness and hope, and the logo is created with hand drawn hearts.",
    tags: [
      {
        name: "branding",
        color: "blue-text-gradient",
      },
      {
        name: "graphic design",
        color: "green-text-gradient",
      },
      {
        name: "adobe illustrator",
        color: "pink-text-gradient",
      },
    ],
    image: scrunchies4sma,
    source_code_link: "/files/Scrunchies4SMA.pdf",
  },
  {
    name: "KingPin Donuts Remake",
    description:
      "KingPin Donuts is a donut shop near UC Berkeley. They have great donuts; however, their website according to my web deisgn class needed improvement, so that was our assignment. This is my remake. I wanted it to be a simple design and put an emphasis on using mouthwatering pictures since luring customers in would be the goal of a donut website.",
    tags: [
      {
        name: "web design",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: kingpin,
    source_code_link: "/files/KingPin/index.html",
  },
  // {
  //     name: "Sleepy Cat Books Logo",
  //     description: "Come Make Your marK Designathon",
  //     tags: [{
  //             name: "branding",
  //             color: "blue-text-gradient",
  //         },
  //         {
  //             name: "graphic design",
  //             color: "green-text-gradient",
  //         },
  //         {
  //             name: "adobe illustrator",
  //             color: "pink-text-gradient",
  //         },
  //     ],
  //     image: kingpin,
  //     source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
