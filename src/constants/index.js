const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Safari", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS", "GSAP"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f13b2d",
    link: "https://github.com/h-ars",
  },
  {
    id: 2,
    text: "Email Me",
    icon: "/icons/gmail.svg",
    bg: "#025028",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=dev.harsh.contact@gmail.com&su=Let's%20Work%20Together&body=Hi%20Harsh%2C%0A%0AI%20saw%20your%20portfolio%20and...",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#0f0f00",
    link: "https://x.com/so_hars",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0b65c3",
    link: "https://www.linkedin.com/in/harsh-bhardwaj-b83b33405/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Nomadista",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Nomadista-Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Production-ready travel administration platform with AI-powered trip generation, real-time analytics, and enterprise-grade admin dashboard. Built for travel agencies to automate itinerary planning and boost user engagement.",
            "Key Features include :",
            "- AI-Powered Trip Generation : Integrated Gemini API to generate personalized trip ideas on-the-fly, increasing user engagement by 40%.",
            "- Scalable Admin Dashboard : Built with React + TypeScript + Syncfusion UI components, improving data visualization and decision-making speed by 60%.",
            "- Optimized Performance : Fine-tuned Appwrite API calls, reducing latency from 850ms → 320ms (62% faster).",
            "- Authentication & Authorization : Secure Google OAuth + role-based access control for admin/user management.",
            "- Responsive Design : Mobile-first layout with collapsible sidebar and mobile navigation.",
            "- Enterprise UI Components : Syncfusion data grids, buttons, and navigation for polished user experience."
          ],
        },
        {
          id: 2,
          name: "Nomadista.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://nomadista.vercel.app/sign-in",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Nomadista.jpeg",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.jpeg",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Subscriptum",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Subscriptum.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A scalable backend system for managing subscriptions, built with Node.js, Express.js, and MongoDB. Subscriptum automates recurring subscription workflows, enforces secure access control, and integrates request-level security to guard against malicious traffic.",
            "Features :",
            "- Automated Subscription Workflows : Transactional email-based reminders and renewal notifications, eliminating an estimated 10–15 hours/week of manual effort (based on a manual task frequency of ~3–4 reminders/day at ~5 minutes each).",
            "- JWT-Based Authentication & Role-Based Authorization : Secure user sessions with granular access control, reducing the risk of unauthorized access.",
            "- Request-Level Security with Arcjet : Middleware integration for rate-limiting and bot detection, designed to block an estimated ~95% of malicious requests (based on Arcjet's documented rate-limiting and bot-detection standards).",
            "- Scalable Architecture : Built with a modular Node.js/Express.js structure and MongoDB for flexible, schema-based data modeling."
          ],
        },
        {
          id: 2,
          name: "Subscriptum-Github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/h-ars/Subscriptum",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Subscriptum-HTTpie-Screenshot.jpeg",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.jpeg",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "ScoobyMovy",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "ScoobyMovy.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Scooby Movy is a sleek React-based movie search app using TMDB API, styled with Tailwind CSS and powered by Appwrite for database tracking.",
            "Developed a movie discovery app using React, Tailwind CSS, and TMDB API. Implemented search debouncing (500ms delay), cutting unnecessary API calls by ~40-50% during typical user searches (manual test: 20 searches reduced from 45 calls → 24 calls).", 
            "Used Appwrite to track user interactions, enabling real-time adjustments to trending movie results."
          ],
        },
        {
          id: 2,
          name: "ScoobyMovy-Github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/h-ars/ScoobyMovy",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "ScoobyMovy.jpg",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.jpg",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/Harsh-1.jpeg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/Harsh-3.jpg",
    },
    {
      id: 3,
      name: "friends-n-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/gal-8.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/Harsh-2.jpeg",
      description: [
        "Hey! I'm Harsh 👋, a fullstack developer who likes building things that feel as good to use as they look.",
        "I work mainly in React, Node.js, TypeScript, and MongoDB—recent projects include Subscriptum, Nomadista, and ScoobyMovy, each one me chasing a slightly different problem I found interesting.",
        "I care a lot about clean UI, systems that actually scale, and writing backend logic I can still explain to myself six months later.",
        "Outside of code, I'm usually in the kitchen testing a recipe that has no business working, elbow-deep in a bike or car mod, or down a rabbit hole about cosmology, mythology, or whatever unsolved mystery caught my attention that week 🍳🏍️",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };