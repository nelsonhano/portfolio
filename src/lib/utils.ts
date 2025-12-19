import { 
  Home, 
  User, 
  Mail,
  FolderDot, 
  Wrench, 
  Briefcase, 
  LucideProps,
  Newspaper
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const words = ["Full stack", "Next.js", "Mern stack", "Pern stack"]
export const description = "I’m a Full-Stack Web Developer with expertise in building sleek, user-friendly, and scalable digital experiences. From crafting pixel-perfect interfaces with Next.js, React, and Tailwind CSS to engineering robust backends with Node.js, Express, MongoDB, and PostgreSQL, I bridge design and functionality seamlessly. With a strong eye for detail and a drive for innovation, I turn ideas into powerful web solutions that don’t just work"

export const technologiesImages = [
  {
    id: 1,
    src: "/asserts/accerty-ui.png",
    alt: "accerty-ui",
    description: "Accerty UI is a modern UI component library designed for developers who want to build fast, accessible, and visually consistent applications. It provides pre-built customizable components that reduce development time while maintaining design flexibility."
  },
  {
    id: 2,
    src: "/asserts/appwrite.jpeg",
    alt: "appwrite",
    description: "Appwrite is an open-source backend-as-a-service platform that offers authentication, databases, storage, and serverless functions out of the box. It simplifies backend development, enabling developers to focus more on building features rather than infrastructure."
  },
  {
    id: 3,
    src: "/asserts/better-auth.png",
    alt: "better-auth",
    description: "Better Auth is a lightweight authentication library built for modern web applications. It provides secure, scalable user login and session management with minimal setup, making it easier to integrate authentication without sacrificing security."
  },
  {
    id: 4,
    src: "/asserts/clerk.jpeg",
    alt: "clerk",
    description: "Clerk is a user management platform that provides authentication, authorization, and user profile features in one package. It supports passwordless login, multi-factor authentication, and social logins, making it perfect for production-grade applications."
  },
  {
    id: 5,
    src: "/asserts/cloudinary.png",
    alt: "cloudinary",
    description: "Cloudinary is a cloud-based media management platform for storing, optimizing, and delivering images and videos. It provides powerful APIs that handle transformations, responsive delivery, and performance optimization across devices."
  },
  {
    id: 6,
    src: "/asserts/convex.jpeg",
    alt: "convex",
    description: "Convex is a backend-as-a-service platform that focuses on real-time, reactive applications. It offers serverless data storage, queries, and APIs that update instantly, enabling developers to build live, collaborative apps without complex backend setups."
  },
  {
    id: 7,
    src: "/asserts/drizzle.png",
    alt: "drizzle",
    description: "Drizzle ORM is a type-safe, SQL-based ORM for JavaScript and TypeScript. It emphasizes simplicity, safety, and developer experience, providing strong typing and auto-completion for database queries to prevent runtime errors."
  },
  {
    id: 8,
    src: "/asserts/figma.jpeg",
    alt: "figma",
    description: "Figma is a collaborative design tool widely used for UI/UX design, prototyping, and wireframing. It enables real-time collaboration among designers and developers, making it easier to turn design ideas into functional products."
  },
  {
    id: 9,
    src: "/asserts/framer-motion.jpeg",
    alt: "framer-motion",
    description: "Framer Motion is a powerful animation library for React that enables developers to build fluid, interactive, and production-ready animations. It simplifies creating smooth transitions, gestures, and micro-interactions for better user experiences."
  },
  {
    id: 10,
    src: "/asserts/git.png",
    alt: "git",
  },
  {
    id: 11,
    src: "/asserts/github.png",
    alt: "github",
    description: "GitHub is a code hosting platform built on top of Git. It provides collaboration features like pull requests, issue tracking, CI/CD pipelines, and project management, making it a hub for open-source and enterprise development."
  },
  {
    id: 12,
    src: "/asserts/gsap.png",
    alt: "gsap",
    description: "GSAP (GreenSock Animation Platform) is a high-performance JavaScript library for building complex animations. It provides fine-grained control over motion, making it a favorite for creating immersive, visually appealing web experiences."
  },
  {
    id: 13,
    src: "/asserts/javascript.png",
    alt: "javascript",
    description: "JavaScript is the most widely used programming language for building dynamic and interactive web applications. It powers everything from frontend interactivity to backend services, making it the backbone of modern web development."
  },
  {
    id: 14,
    src: "/asserts/mongoDB.png",
    alt: "mongoDB",
    description: "MongoDB is a NoSQL document database designed for flexibility and scalability. It stores data in JSON-like documents, allowing developers to build fast, schema-less applications that handle large amounts of unstructured data."
  },
  {
    id: 15,
    src: "/asserts/neon.jpeg",
    alt: "neon",
    description: "Neon is a serverless Postgres platform optimized for scalability and performance. It offers features like auto-scaling, branching, and instant provisioning, making database management seamless for cloud-native applications."
  },
  {
    id: 16,
    src: "/asserts/netlify.jpeg",
    alt: "netlify",
    description: "Netlify is a modern web hosting platform that provides CI/CD, serverless functions, and edge deployments. It is widely used for deploying JAMstack applications due to its speed, scalability, and ease of use."
  },
  {
    id: 17,
    src: "/asserts/next-auth.jpeg",
    alt: "next-auth",
    description: "NextAuth.js is an authentication library for Next.js applications. It supports multiple authentication methods including OAuth, JWT, email-based login, and custom providers, making authentication seamless for developers."
  },
  {
    id: 18,
    src: "/asserts/nodejs.png",
    alt: "nodejs",
    description: "Node.js is a JavaScript runtime built on Chrome’s V8 engine that allows developers to run JavaScript on the server. It is known for its non-blocking, event-driven architecture, making it perfect for scalable backend services."
  },
  {
    id: 19,
    src: "/asserts/postgreSQL.png",
    alt: "postgreSQL",
    description: "PostgreSQL is a robust open-source relational database system known for its reliability, advanced features, and SQL compliance. It supports complex queries, indexing, and scalability for high-performance applications."
  },
  {
    id: 20,
    src: "/asserts/prisma.png",
    alt: "prisma",
    description: "Prisma is a next-generation ORM that simplifies database access in Node.js and TypeScript. It provides a declarative schema, auto-generated queries, and type safety, making database operations more efficient and secure."
  },
  {
    id: 21,
    src: "/asserts/reactjs.png",
    alt: "reactjs",
    description: "React.js is a JavaScript library for building interactive user interfaces using components. It powers some of the world’s largest applications due to its performance, scalability, and strong ecosystem."
  },
  {
    id: 22,
    src: "/asserts/sanity.png",
    alt: "sanity",
    description: "Sanity is a headless CMS that enables developers to build structured content workflows. It provides real-time collaboration, APIs, and a customizable studio for managing and delivering content across platforms."
  },
  {
    id: 23,
    src: "/asserts/shadcn.png",
    alt: "shadcn",
    description: "Shadcn UI is a collection of high-quality, accessible, and customizable components built with Tailwind CSS. It helps developers quickly build modern and consistent UI elements for their applications."
  },
  {
    id: 24,
    src: "/asserts/tailwindcss.png",
    alt: "tailwindcss",
    description: "Tailwind CSS is a utility-first CSS framework that speeds up styling by providing predefined classes. It allows developers to create responsive, scalable designs without writing custom CSS from scratch."
  },
  {
    id: 25,
    src: "/asserts/typescript.png",
    alt: "typescript",
    description: "TypeScript is a strongly typed superset of JavaScript that enhances developer productivity. It provides static typing, better tooling support, and reduces runtime errors, making it ideal for large-scale applications."
  },
  {
    id: 26,
    src: "/asserts/upload-thing.png",
    alt: "upload-thing",
    description: "UploadThing is a file upload utility that integrates with frameworks like Next.js. It simplifies handling, validating, and storing user-uploaded files with flexible APIs and cloud storage support."
  },
  {
    id: 27,
    src: "/asserts/vercel.png",
    alt: "vercel",
    description: "Vercel is a cloud platform for deploying web applications with ease. It is optimized for frontend frameworks like Next.js and offers serverless functions, edge delivery, and global scalability."
  },
  {
    id: 28,
    src: "/asserts/vercel-blob.png",
    alt: "vercel-blob",
    description: "Vercel Blob is a storage solution for handling large files and static assets within the Vercel ecosystem. It integrates seamlessly with deployments to provide reliable and efficient file delivery."
  },
  {
    id: 29,
    src: "/asserts/vite.jpeg",
    alt: "vite",
    description: "Vite is a next-generation frontend build tool that offers instant dev servers and optimized production builds. Its fast hot-module replacement (HMR) and simple configuration make it a favorite among developers."
  }
]

export type Section = {
  iconName: string;
  href: string;
  icon: ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>; // ✅ the icon type
};

export const post = [
  {
    id: 1,
    slug: "saas_web_application_1",
    title: "AI Image Generator",
    urlLive: "https://imaginify-koinyan-nelsons-projects.vercel.app/",
    repoUrl: "https://www.github.com/nelsonhano/imaginify",
    longDesc: "An AI-powered image editing platform that allows users to upload images, apply intelligent edits, and save both original and transformed versions, all within a secure and user-friendly environment.",
    shortDesc: "Imaginify is an AI powered saas application for picture",
    projectImgs: [
      "/asserts/project/image/imaginify-home-page.jpeg", 
      "/asserts/project/image/imaginify-profile-page.jpeg",
      "/asserts/project/image/imaginify-restore-page.jpeg",
      "/asserts/project/image/imaginify-credit-page.jpeg"  
    ],
    projectVideo: [],
    projectRequirement: [
      "Secure user authentication with sign-up and sign-in",
      "Image upload functionality with preview and validation",
      "AI-powered image transformation options (e.g., restoration, enhancement)",
      "Credit-based system for tracking and limiting AI usage",
      "User profile management with history of uploaded and transformed images",
      "Responsive design for optimal experience across devices",
      "Integration with third-party AI services for image processing(Cloudinary)",
      "Secure payment handling for premium features",
      "Scalable backend for image and user data"
    ],
    coreFunctionality: [
      "User authentication and profile management",
      "Uploading and storing images securely",
      "Applying AI transformations to images",
      "Credit system for managing AI usage",
      "Image transformation history tracking",
      "Access control for free and premium features",
      "Responsive and optimized user interface"
    ],
    techStack: [
      "Next.js – Full-stack framework for server-side rendering, routing, and API handling",
      "TypeScript – Ensures type safety and improves maintainability across the codebase",
      "React – Frontend library for building interactive user interfaces",
      "Tailwind CSS – Utility-first CSS framework for rapid UI development and responsive design",
      "Cloudinary – Cloud-based media management platform for storing, transforming, and delivering images",
      "MongoDB – NoSQL database for storing users, images, and metadata",
      "Mongoose – ODM used to model and manage MongoDB data",
      "Stripe – Manages secure payments and subscriptions",
      "Zod – Ensures schema validation for user input and API requests"
    ],
  },
  {
    id: 2,
    slug: "saas_web_application_2",
    title: "Social media web app",
    urlLive: "https://nextjs-social-media-app-lilac.vercel.app",
    repoUrl: "https://github.com/nelsonhano/nextjs-social-media-app",
    longDesc: "A full-featured social media web application inspired by Twitter, built to enable real-time conversations and community engagement. Users can securely sign up and sign in, create and interact with posts, follow other users, and explore trending content through hashtag discovery. The application emphasizes performance, scalability, and a smooth user experience through optimistic UI updates and efficient state management.",
    shortDesc: "A Twitter-inspired social media application for sharing posts and discovering trending conversations.",
    projectImgs: [
      "/asserts/project/image/social-home.jpeg", 
      "/asserts/project/image/social-login.jpeg",
      "/asserts/project/image/social-log-out.jpeg",
      "/asserts/project/image/social-profile.jpeg",
      "/asserts/project/image/social-notification.jpeg"  
    ],
    projectVideo: [],
    projectRequirement: [ 
      "Secure user authentication with sign-up and sign-in functionality", 
      "Persistent user profiles with follow and unfollow relationships", 
      "Post creation, editing, deletion, and interaction (likes, comments)", 
      "Hashtag support for content discovery", 
      "Real-time feed updates with optimistic UI rendering", 
      "Scalable state management for handling feeds, users, and interactions", 
      "Responsive and accessible UI across devices"
    ],
    coreFunctionality: [
      "User authentication and authorization", 
      "Create, read, and display tweets in a dynamic feed",
      "Follow/unfollow users and manage user profiles",
      "Like and comment on posts with real-time updates",
      "Hashtag parsing and content discovery",
      "Optimistic UI updates for seamless user experience",
      "Personalized feed generation based on followed users",
      "Trending posts algorithm based on activity and engagement",
      "State-driven UI updates for seamless user experience"
    ],
    techStack: [
      "Next.js – Full-stack framework used for server-side rendering, routing, and API handling", 
      "TypeScript – Ensures type safety and improves maintainability across the codebase",
      "React – Frontend library for building interactive user interfaces",
      "Tailwind CSS – Utility-first CSS framework for rapid UI development and responsive design",
      "Prisma – ORM for managing database models and queries efficiently",
      "PostgreSQL – Relational database for storing user data, posts, and relationships",
      "TanStack Query – Handles data fetching, caching, and optimistic UI updates",
      "UploadThing – Manages secure media uploads for profile images and post attachments",
      "Stream Chat – Powers real-time chat and messaging features",
      "Zod – Provides schema validation for forms, API requests, and user input"
    ],
  },
  {
    id: 3,
    slug: "saas_web_application_3",
    title: "Freelance job board",
    urlLive: "https://nextjs-job-board-beta.vercel.app",
    repoUrl: "https://github.com/nelsonhano/nextjs-job-board",
    longDesc: "A freelance job board platform that connects clients and freelancers by allowing job postings, job discovery, and an admin-controlled approval system to ensure quality and compliance.",
    shortDesc: "Imaginify is an AI powered saas application for picture",
    projectImgs: [
      "/asserts/project/image/jobboard-home-page.jpeg", 
      "/asserts/project/image/jobboard-upload-page.jpeg", 
      "/asserts/project/image/jobboard-job-detail-page.jpeg",
    ],
    projectVideo: [
    ],
    projectRequirement: [
      "Secure authentication for users and administrators",
      "Ability for clients to post freelance job listings",
      "Job browsing and filtering functionality",
      "Admin panel for reviewing and approving job posts",
      "File upload support for job-related documents",
      "Input validation and access control",
      "Scalable and maintainable database structure"
    ],
    coreFunctionality: [
      "User authentication and role-based access control",
      "Posting, editing, and viewing freelance jobs",
      "Job approval workflow managed by administrators",
      "Conditional job visibility based on approval status",
      "File uploads for job descriptions and attachments",
      "Admin dashboard for job moderation and management",
      "Responsive user interface for all device sizes"
    ],
    techStack: [
      "Next.js – Full-stack framework for routing, server-side rendering, and API handling",
      "TypeScript – Provides strong typing and improves reliability and maintainability",
      "Clerk – Handles secure authentication and user management",
      "Prisma – ORM for database modeling and efficient data access",
      "Vercel Blob – Used for storing and serving job-related files and attachments",
      "Zod – Schema validation for forms and server-side data integrity"
    ],
  },
  {
    id: 4,
    slug: "saas_web_application_4",
    title: "Library management system",
    urlLive: "https://library-management-system-six-khaki.vercel.app",
    repoUrl: "https://github.com/nelsonhano/hospital_management_system",
    longDesc: "A digital library management system that allows users to browse books, request borrows, track borrowing history, and enables administrators to manage book inventory and approve borrow requests.",
    shortDesc: "Imaginify is an AI powered saas application for picture",
    projectImgs: [
      "/asserts/project/image/library-home-page.jpeg",
      "/asserts/project/image/library-sign-in.jpeg",
      "/asserts/project/image/library-sign-up.jpeg",
      "/asserts/project/image/admin.jpeg",
      "/asserts/project/image/library-borrow.jpeg",
      "/asserts/project/image/library-desc-book.jpeg",
      "/asserts/project/image/library-latest-book.jpeg",  
    ],
    projectVideo: [],
    projectRequirement: [
      "Secure user authentication and role management",
      "Book catalog with search and filtering capabilities",
      "Borrow and return request workflow",
      "Admin panel for approving borrow requests",
      "Book upload and inventory management",
      "Borrowing history tracking with timestamps",
      "Input validation and error handling"
    ],
    coreFunctionality: [
      "Viewing available and borrowed books",
      "Requesting to borrow and return books",
      "Tracking borrow and return dates per user",
      "Admin approval system for borrow requests",
      "Uploading and managing books in the catalog",
      "Status-based availability control for books",
      "Responsive and accessible user interface"
    ],
    techStack: [
      "Next.js – Full-stack framework for routing, server-side rendering, and UI composition",
      "TypeScript – Ensures type safety and maintainable application logic",
      "TanStack Query – Manages data fetching, caching, and state synchronization",
      "Appwrite – Provides backend services for authentication, database, and file storage",
      "Zod – Handles schema validation for forms and API requests"
    ],
  },
  {
    id: 5,
    slug: "saas_web_application_5",
    title: "File storage app",
    urlLive: "https://store-it-kohl-eight.vercel.app",
    repoUrl: "https://github.com/nelsonhano/store_it",
    longDesc: "A secure file storage application with a personalized dashboard that allows users to upload, organize, manage, and share files with controlled access.",
    shortDesc: "Imaginify is an AI powered saas application for picture",
    projectImgs: [
      "/asserts/project/image/storeIt-sign-up.jpeg",
      "/asserts/project/image/storeIt-sign-in.jpeg",
      "/asserts/project/image/storeIt-otp.jpeg",
      "/asserts/project/image/storeIt-rename-page.jpeg",
      "/asserts/project/image/storeIt-img-page.jpeg",
      "/asserts/project/image/storeIt-detail-page.jpeg",
      "/asserts/project/image/storeIt-del-page.jpeg",  
    ],
    projectVideo: [],
    projectRequirement: [
      "Secure user authentication and personalized dashboard",
      "File upload, storage, and management system",
      "Support for multiple file types",
      "File sharing with access control (share and unshare)",
      "File filtering based on creation date",
      "File metadata management (name, type, size)",
      "Input validation and error handling"
    ],
    coreFunctionality: [
      "Uploading and storing files securely",
      "Viewing files by type and creation time",
      "Editing file names and managing metadata",
      "Deleting files from storage",
      "Sharing files via accessible links",
      "Revoking access to shared files",
      "Visual file insights and usage overview"
    ],
    techStack: [
      "Next.js – Full-stack framework for routing, server-side rendering, and UI development",
      "TypeScript – Ensures type safety and maintainable application logic",
      "Appwrite – Provides backend services for authentication, database, and file storage",
      "Recharts – Visualizes file usage and activity data in the dashboard",
      "Zod – Schema validation for forms and server-side data integrity"
    ],
  },
  {
    id: 6,
    slug: "saas_web_application_6",
    title: "Social media clone - Thread",
    urlLive: "https://thread-koinyan-nelsons-projects.vercel.app/",
    repoUrl: "https://github.com/nelsonhano/thread",
    longDesc: "A Threads-inspired social media platform that enables users to share posts, engage through comments and likes, and build communities around shared interests.",
    shortDesc: "Imaginify is an AI powered saas application for picture",
    projectImgs: [
      "/asserts/project/image/thread-home.jpeg",
      "/asserts/project/image/thread-activity.jpeg",
      "/asserts/project/image/thread-org.jpeg",
      "/asserts/project/image/thread-search.jpeg",
      "/asserts/project/image/thread-community.jpeg",
      "/asserts/project/image/create-thread.jpeg",  
    ],
    projectVideo: [],
    projectRequirement: [
      "Secure user authentication and profile management",
      "Ability to create and manage posts and comments",
      "Community creation and membership system",
      "Like and engagement tracking on posts",
      "Media upload support for posts and profiles",
      "User-specific feed and post history",
      "Input validation and error handling"
    ],
    coreFunctionality: [
      "Creating, viewing, and deleting posts",
      "Commenting on posts and threaded discussions",
      "Liking and interacting with posts",
      "Creating and managing communities",
      "Viewing all posts created by a user",
      "Uploading media content to posts",
      "Responsive and intuitive user interface"
    ],
    techStack: [
      "Next.js – Full-stack framework for routing, server-side rendering, and UI development",
      "TypeScript – Ensures strong typing and maintainable application logic",
      "Clerk – Handles authentication, authorization, and user management",
      "MongoDB – Stores users, posts, comments, and community data",
      "Mongoose – ODM for modeling and managing MongoDB schemas",
      "UploadThing – Manages secure media uploads for posts and profile images",
      "Zod – Provides schema validation for forms and API requests"
    ],
  }
];

export const sections: Section[] = [
  {
    iconName: "Home",
    href: "#hero",
    icon: Home,
  },
  {
    iconName: "About",
    href: "#about",
    icon: User,
  },
  {
    iconName: "Projects",
    href: "#projects",
    icon: FolderDot,
  },
  {
    iconName: "Blogs",
    href: "#blogs",
    icon: Newspaper,
  },
  {
    iconName: "Skills",
    href: "#skills",
    icon: Wrench,
  },
  {
    iconName: "Experience",
    href: "#experience",
    icon: Briefcase,
  },
  {
    iconName: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

export const projectRequirement = [];

export const coreFunctionality = [];

export const techStack = [];

export const skillSets = [
  {
    category: "Frontend",
    skills: [
      "React.js (Hooks, Context, Suspense, Error Boundaries)",
      "Next.js (App Router, SSR, SSG, ISR, Middleware, API Routes, Edge Functions)",
      "State Management (Redux Toolkit, Zustand, Jotai, TanStack Query)",
      "Tailwind CSS, Styled Components, CSS-in-JS",
      "Responsive Design & Component-driven Development",
      "Accessibility (a11y) and SEO Best Practices",
    ]
  },
  {
    category: "Backend",
    skills: [
      "Node.js & Express.js (Routing, Middleware, Error Handling)",
      "MongoDB (Mongoose, Indexing, Aggregations, Transactions)",
      "PostgreSQL/MySQL (Joins, Transactions, Normalization)",
      "Prisma/TypeORM/Sequelize (Migrations, Relations, Query Optimization)",
      "Drizzle ORM",

      "RESTful API Design",
      "Authentication & Authorization (JWT, OAuth, Better-Auth, Clerk, Auth0)",
      "File Uploads & Media Handling (Cloudinary, S3, UploadThing)",
    ]
  },
  {
    category: "Architecture & Design",
    skills: [
      "Clean Architecture & Domain-Driven Design (DDD)",
      "Caching Strategies (Redis, CDN, In-Memory)",
      "Design Patterns (Observer, Factory, Pub/Sub, Singleton)",
      "Testing (Jest, Vitest, Supertest, Cypress, Playwright)",
      "CI/CD Pipelines (GitHub Actions)"
    ]
  },
  {
    category: "DevOps & Infrastructure",
    skills: [
      "Deployment (Vercel, Netlify, AWS)",
      "Docker & Docker Compose",
      "Git Advanced Workflows",
      "Logging & Monitoring (Sentry)"
    ]
  },
  {
    category: "Databases & Data Handling",
    skills: [
      "MongoDB (Core MERN)",
      "PostgreSQL/MySQL (SQL Fundamentals)",
      "ORMs (Prisma, Drizzle)",
      "Query Optimization & Indexing"
    ]
  },
  {
    category: "Soft Skills & Leadership",
    skills: [
      "System Design for Large-Scale Apps",
      "Mentorship & Code Reviews",
      "Problem-Solving & Requirement Breakdown",
      "Effective Communication with Stakeholders"
    ]
  },
  {
    category: "Bonus Skills",
    skills: [
      "TypeScript (Strongly Recommended in 2025)",
      "AI/ML Integration Basics (LLMs, OpenAI, LangChain)",
      "Event-Driven Architecture (Kafka, RabbitMQ)",
      "Advanced CI/CD (GitOps)",
      "Web3 Fundamentals (Ethereum, Solidity, Wallet Integrations)"
    ]
  }
];

export type Project = (typeof post)[number];


export const buildProjectOverviewItems = (project: Project) => {
  switch (project.slug) {
    case "saas_web_application_1": {
      // Imaginify – AI image SaaS
      return [
        {
          id: 1,
          src: "/asserts/cloudinary.png",
          alt: "Project requirements",
          description:
            "Enable users to upload images, run AI-powered transformations, manage credits, and securely handle authentication and billing.",
        },
        {
          id: 2,
          src: "/asserts/reactjs.png",
          alt: "Core functionality",
          description:
            "Users can sign in, upload images, apply restore/transform actions, track history, and manage their profile in a responsive dashboard.",
        },
        {
          id: 3,
          src: "/asserts/tailwindcss.png",
          alt: "Tech stack & roles",
          description:
            "Next.js & React handle routing and UI, Tailwind CSS styles the dashboard, Cloudinary manages media storage and transformations, and an API layer orchestrates AI calls and credit logic.",
        },
      ];
    }
    case "saas_web_application_2": {
      // Social media app
      return [
        {
          id: 1,
          src: "/asserts/reactjs.png",
          alt: "Project requirements",
          description:
            "Provide a social platform where users can create accounts, post content, follow others, and interact via likes and comments.",
        },
        {
          id: 2,
          src: "/asserts/mongoDB.png",
          alt: "Core functionality",
          description:
            "Supports auth, real-time-like feeds, profile pages, notifications, and search, optimized for mobile and desktop.",
        },
        {
          id: 3,
          src: "/asserts/typescript.png",
          alt: "Tech stack & roles",
          description:
            "Next.js & React render the UI, TypeScript adds type safety, a Node.js API persists posts and relationships in a database, and Tailwind CSS ensures a consistent design system.",
        },
      ];
    }
    case "saas_web_application_3": {
      // Job board
      return [
        {
          id: 1,
          src: "/asserts/postgreSQL.png",
          alt: "Project requirements",
          description:
            "Let companies publish jobs and candidates search, filter, and apply to roles with structured job metadata.",
        },
        {
          id: 2,
          src: "/asserts/drizzle.png",
          alt: "Core functionality",
          description:
            "Implements job creation, listing, search by keywords/location, and detailed job pages with application flows.",
        },
        {
          id: 3,
          src: "/asserts/prisma.png",
          alt: "Tech stack & roles",
          description:
            "Next.js handles server-side rendering and routing, an ORM manages relational job data, and a SQL database like PostgreSQL stores jobs, companies, and applications.",
        },
      ];
    }
    case "saas_web_application_4": {
      // Library management system
      return [
        {
          id: 1,
          src: "/asserts/postgreSQL.png",
          alt: "Project requirements",
          description:
            "Digitize library operations: manage books, members, borrowing, returns, and admin reporting.",
        },
        {
          id: 2,
          src: "/asserts/nodejs.png",
          alt: "Core functionality",
          description:
            "Provides auth for admins and members, book catalog browsing, borrow/return flows, and tracking of latest and popular titles.",
        },
        {
          id: 3,
          src: "/asserts/typescript.png",
          alt: "Tech stack & roles",
          description:
            "Next.js & React power the UI, a Node.js/TypeScript backend enforces business rules, and a relational database stores inventory, member, and transaction records.",
        },
      ];
    }
    case "saas_web_application_5": {
      // Store-it file storage app (and thread clone shares slug but different UI)
      return [
        {
          id: 1,
          src: "/asserts/vercel-blob.png",
          alt: "Project requirements",
          description:
            "Offer a secure, user-friendly interface for uploading, organizing, renaming, and deleting user files.",
        },
        {
          id: 2,
          src: "/asserts/upload-thing.png",
          alt: "Core functionality",
          description:
            "Includes auth-protected storage, OTP/verification during sign-up, folder-style organization, and detailed file views.",
        },
        {
          id: 3,
          src: "/asserts/typescript.png",
          alt: "Tech stack & roles",
          description:
            "Next.js routes and server actions handle uploads, UploadThing or blob storage persists files, and TypeScript, React, and Tailwind CSS keep the UI robust and responsive.",
        },
      ];
    }
    default: {
      // Fallback generic description
      return [
        {
          id: 1,
          src: "/asserts/reactjs.png",
          alt: "Project requirements",
          description:
            "A modern full-stack web application focused on a clean UX and clear business requirements.",
        },
        {
          id: 2,
          src: "/asserts/nodejs.png",
          alt: "Core functionality",
          description:
            "Implements authentication, domain-specific features, and fast, reliable data access.",
        },
        {
          id: 3,
          src: "/asserts/typescript.png",
          alt: "Tech stack & roles",
          description:
            "Next.js & React render the UI, a Node/TypeScript backend handles business logic, and a database stores persistent state.",
        },
      ];
    }
  }
}


export function getProjectBreakdown(project: Project) {
  switch (project.slug) {
    case "saas_web_application_1":
      return {
        requirements:
          "Build an AI-powered SaaS where users can upload images, apply intelligent transformations, and manage usage through a credit-based system.",
        functionality:
          "Supports secure authentication, image upload, history, profile management, and AI actions like restore or enhance, all in a responsive dashboard UI.",
        techStack:
          "Next.js & React render the dashboard and routes, Cloudinary (or similar) stores and transforms media, Tailwind CSS styles the UI, and a Node.js/TypeScript backend coordinates AI requests and credit logic.",
      };
    case "saas_web_application_2":
      return {
        requirements:
          "Provide a social platform where users can create accounts, post content, follow others, and engage via likes and comments.",
        functionality:
          "Implements authentication, user profiles, timelines, notifications, and an experience optimized for both mobile and desktop users.",
        techStack:
          "Next.js handles routing and data fetching, React renders interactive feeds, Tailwind CSS provides consistent styling, and a Node.js/TypeScript API persists users, posts, and relationships in a database like MongoDB or PostgreSQL.",
      };
    case "saas_web_application_3":
      return {
        requirements:
          "Create a job board where companies can publish roles and candidates can search, filter, and apply to jobs.",
        functionality:
          "Includes job creation and management, listing pages, search and filtering, and detailed job views with clear application calls-to-action.",
        techStack:
          "Next.js provides server-side rendering for SEO-friendly job listings, an ORM like Prisma or Drizzle manages relational job data, and PostgreSQL stores jobs, companies, and applications.",
      };
    case "saas_web_application_4":
      return {
        requirements:
          "Digitize library or hospital-style resource management: track items, members/users, borrowing, returns, and administration.",
        functionality:
          "Offers authentication for admins and members, catalog browsing, borrowing/return flows, dashboards for latest items, and admin controls.",
        techStack:
          "Next.js & React build the management interface, a Node.js/TypeScript backend enforces business rules, and a relational database like PostgreSQL keeps records of inventory, members, and transactions.",
      };
    case "saas_web_application_5":
      return {
        requirements:
          "Provide a secure file-storage SaaS where users can sign up, verify accounts, upload, organize, and delete files.",
        functionality:
          "Handles sign-up/sign-in with OTP verification, folder-style organization, renaming and deleting items, and detailed file views with previews.",
        techStack:
          "Next.js routes and server actions orchestrate uploads and file operations, UploadThing or blob storage persists files, and React, Tailwind CSS, and TypeScript deliver a polished, robust user experience.",
      };
    default:
      return {
        requirements:
          "Deliver a modern full-stack web application with clear business goals and user journeys.",
        functionality:
          "Implements auth, domain-specific actions, and fast, reliable access to data with a responsive UI.",
        techStack:
          "Next.js & React handle the frontend, a Node.js/TypeScript backend encapsulates business logic, and a database like PostgreSQL or MongoDB stores persistent data.",
      };
  }
}

