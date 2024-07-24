import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    LIS_logo,
    UNL_logo,
    tableau_works,
    final_journey,
    c_sharp,
    vs,
    dot_net,
    mysql,
    MSTR,
    SNOW,
    dot_net_core,
    python, 
    vs_code,
    sql_server,
    excel,
    tableau,
    cannibals,
    tfbs,
    defaultImg
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
      title: "Data Professional",
      icon: web,
    },
    {
      title: ".NET C# Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C#",
      icon: c_sharp,
    },
    {
      name: ".NET",
      icon: dot_net,
    },
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      name: "Tableau",
      icon: tableau,
    },
    // {
    //   name: "MSTR",
    //   icon: MSTR,
    // },
    {
      name: "Excel",
      icon: excel,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Snowflake",
    //   icon: SNOW,
    // },
    // {
    //   name: "My SQL",
    //   icon: mysql,
    // }, 
    // {
    //   name: "SQL Server",
    //   icon: sql_server,
    // },
    // {
    //   name: "Visual Studio",
    //   icon: vs,
    // },
    // {
    //   name: "Visual Studio Code",
    //   icon: vs_code,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
  ];
  
  const experiences = [
    {
      title: "Intern .NET Developer",
      company_name: "SCP, Lincoln, NE",
      icon: defaultImg,
      iconBg: "#E6DEDD",
      date: "August 2022 - Present",
      points: [
        "Design and develop web applications using ASP.NET to improve user experience, resulting in a 70% increase in user engagement.",
        "Utilize C# and Entity Framework for backend development, enhancing database performance and reducing query execution time by 20%.",
        "Implement RESTful APIs to enable seamless data communication and integration.",
        "Resolve complex technical issues and improved application performance through debugging.",
        "Maintain version control using Git and participating in agile development processes.",
        "Implement unit and integration testing for controllers and database context to ensure code reliability",
      ],
    },
    {
      title: "Student Research Worker",
      company_name: "University of Nebraska-Lincoln (UNL)",
      icon: UNL_logo,
      iconBg: "#383E56",
      date: "August 2022 - April 2023",
      points: [
        "Gathered and effectively organized a substantial dataset, resulting in a 30% reduction in analysis time.",
        "Facilitated a smooth integration process for new team members by providing guidance and fostering a positive team environment, resulting in quick and confident contributions to the team's success.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company_name: "LIS Nepal",
      icon: LIS_logo,
      iconBg: "#E6DEDD",
      date: "September 2019 - September 2020",
      points: [
        "Leveraged expertise in Python, SQL and Snowflake to execute intricate ETL processes to help drive successful implementation of two substantial big data warehouse projects generating millions in cost savings.",
        "Developed comprehensive analytical reports in MicroStrategy and Looker utilizing a keen eye for detail and a strategic approach for data-informed business decisions resulting in $5 million revenue growth.",
        "Proposed the addition of a project manager to the team and the implementation of biweekly scrum meetings, resulting in an impressive 80% increase in on-time project deliverables upon approval.",
        "Built strong and collaborative relationships with offshore clients, demonstrating a customer-focused mindset and ensuring timely delivery of high-quality work.",
        "Spearheaded successful deployment of a cutting-edge workflow management system for the company utilizing React JS and leading cross-functional teams to streamline processes and increase operational efficiency by an impressive 50%.",
      ],
    },
    {
      title: "Intern Software Engineer",
      company_name: "LIS Nepal",
      icon: LIS_logo,
      iconBg: "#383E56",
      date: "July 2019 - September 2019",
      points: [
        "Designed and developed dashboards in MicroStrategy, delivering valuable insights to stakeholders and enabling data-driven decision-making demonstrating proficiency in data visualization and analytics tools.",
        "Conducted continuous integration and deployment (CI/CD) processes and thorough ad-hoc testing.",
        "Leveraged proficiency with industry-standard tools such as Git for version control and Jira for issue tracking and project management.",
        "Maintained ETL python scripts to ensure data accuracy, showcasing strong attention to detail and technical expertise and contributing to smoother operations and optimized performance by efficiently identifying and fixing issues.",
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
      name: "Tableau Visualizations",
      description:
        "Check out some of my Tableau visualizations where I craft some visual stories and dashboards that turn data into meaningful insights. I had a lot of fun exploring the secrets data can hold, hopefully you will experience the same.  ",
      tags: [
        {
          name: "Tableau",
          color: "blue-text-gradient",
        },
        {
          name: "Data_Vizs",
          color: "green-text-gradient",
        },
        {
          name: "Data_analytics",
          color: "pink-text-gradient",
        },
      ],
      image: tableau_works,
      source_code_link: "https://public.tableau.com/app/profile/shrestha.samyam",
    },
    {
      name: "Missonaries and Cannibal game AI Solver",
      description:
        "A machine learning approach to solve the popular classic game missionaries and cannibals.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "Machine_learning",
          color: "green-text-gradient",
        },
        {
          name: "Optimization",
          color: "pink-text-gradient",
        },
      ],
      image: cannibals,
      source_code_link: "https://github.com/SamyamS/Cannibal-AI-solver",
    },
    {
      name: "Final Journey: a turn based rpg made in pygame",
      description:
        "A fun project I worked in to create a turn-based rpg game in pygame.",
      tags: [
        {
          name: "pygame",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "game_dev",
          color: "pink-text-gradient",
        },
      ],
      image: final_journey,
      source_code_link: "https://github.com/SamyamS/Final-journey",
    },
    {
      name: "Neural network modeling for transcription factor binding site prediction",
      description:
        "Built and compared different neural network model design to predict the transcription factor binding site. Main model inspired by DeepGenBind.",
      tags: [
        {
          name: "neural network",
          color: "blue-text-gradient",
        },
        {
          name: "bioinformatics",
          color: "green-text-gradient",
        },
        {
          name: "machine learning",
          color: "pink-text-gradient",
        },
      ],
      image: tfbs,
      source_code_link: "https://github.com/SamyamS/TFBS_prediction",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };