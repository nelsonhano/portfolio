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

import MessageCircle from "@/svg/MessageCircle";
import FileText from "@/svg/FileText";
import FilePlus from "@/svg/FilePlus";
import Folder from "@/svg/Folder";

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
    description: "Git is a distributed version control system that tracks code changes and supports collaboration across teams. It enables branching, merging, and rollback of code, making it essential for modern software development workflows."
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

export const adminRoutes = [
  {
    id: 1,
    name: "Projects",
    url: "/admin/project",
    icon: Folder
  },
  {
    id: 2,
    name: "Create Project",
    url: "/admin/project/upload-project",
    icon: FilePlus
  },
  {
    id: 3,
    name: "Blogs",
    url: "/admin/blog",
    icon: FileText
  },
  {
    id: 4,
    name: "Create Blog",
    url: "/admin/create-blog",
    icon: FilePlus
  },
  {
    id: 5,
    name: "Contact",
    url: "/admin/contact",
    icon: Mail
  },
  {
    id: 6,
    name: "Messages",
    url: "/admin/messages",
    icon: MessageCircle
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
    title: "Saas web application",
    version: "1.2",
    urlLive: "https://www.imaginify.vercel.app",
    repoUrl: "https://www.github.com/nelsonhano/imaginify",
    videoUrl: "https://www.github.com/nelsonhano/imaginify",
    longDesc: "Imaginify is an AI powered saas application for picture Imaginify is an AI powered saas application for picture Imaginify is an AI powered saas application for picture",
    shortDesc: "Imaginify is an AI powered saas application for picture",
    createdAt: "",
    updatedAt: "",
    featuredImage: "/asserts/nodejs.png",
  },
  {
    id: 2,
    slug: "saas_web_application_2",
    title: "Saas web application",
    version: "1.2",
    urlLive: "https://www.imaginify.vercel.app",
    repoUrl: "https://www.github.com/nelsonhano/imaginify",
    videoUrl: "https://www.github.com/nelsonhano/imaginify",
    longDesc: "Imaginify is an AI powered saas application for picture Imaginify is an AI powered saas application for picture Imaginify is an AI powered saas application for picture",
    shortDesc: "Imaginify is an AI powered saas application for picture",
    createdAt: "",
    updatedAt: "",
    featuredImage: "/asserts/nodejs.png",
  },
  {
    id: 3,
    slug: "saas_web_application_3",
    title: "Saas web application",
    version: "1.2",
    urlLive: "https://www.imaginify.vercel.app",
    repoUrl: "https://www.github.com/nelsonhano/imaginify",
    videoUrl: "https://www.github.com/nelsonhano/imaginify",
    longDesc: "Imaginify is an AI powered saas application for picture Imaginify is an AI powered saas application for picture Imaginify is an AI powered saas application for picture",
    shortDesc: "Imaginify is an AI powered saas application for picture",
    createdAt: "",
    updatedAt: "",
    featuredImage: "/asserts/nodejs.png",
  },
  {
    id: 4,
    slug: "saas_web_application_4",
    title: "Saas web application",
    version: "1.2",
    urlLive: "https://www.imaginify.vercel.app",
    repoUrl: "https://www.github.com/nelsonhano/imaginify",
    videoUrl: "https://www.github.com/nelsonhano/imaginify",
    longDesc: "Imaginify is an AI powered saas application for picture Imaginify is an AI powered saas application for picture Imaginify is an AI powered saas application for picture",
    shortDesc: "Imaginify is an AI powered saas application for picture",
    createdAt: "",
    updatedAt: "",
    featuredImage: "/asserts/nodejs.png",
  },
  {
    id: 5,
    slug: "saas_web_application_5",
    title: "Saas web application",
    version: "1.2",
    urlLive: "https://www.imaginify.vercel.app",
    repoUrl: "https://www.github.com/nelsonhano/imaginify",
    videoUrl: "https://www.github.com/nelsonhano/imaginify",
    longDesc: "Imaginify is an AI powered saas application for picture Imaginify is an AI powered saas application for picture Imaginify is an AI powered saas application for picture",
    shortDesc: "Imaginify is an AI powered saas application for picture",
    createdAt: "",
    updatedAt: "",
    featuredImage: "/asserts/nodejs.png",
  },
  {
    id: 6,
    slug: "saas_web_application_6",
    title: "Saas web application",
    version: "1.2",
    urlLive: "https://www.imaginify.vercel.app",
    repoUrl: "https://www.github.com/nelsonhano/imaginify",
    videoUrl: "https://www.github.com/nelsonhano/imaginify",
    longDesc: "Imaginify is an AI powered saas application for picture Imaginify is an AI powered saas application for picture Imaginify is an AI powered saas application for picture",
    shortDesc: "Imaginify is an AI powered saas application for picture",
    createdAt: "",
    updatedAt: "",
    featuredImage: "/asserts/nodejs.png",
  },
  {
    id: 7,
    slug: "saas_web_application_7",
    title: "Saas web application",
    version: "1.2",
    urlLive: "https://www.imaginify.vercel.app",
    repoUrl: "https://www.github.com/nelsonhano/imaginify",
    videoUrl: "https://www.github.com/nelsonhano/imaginify",
    longDesc: "Imaginify is an AI powered saas application for picture Imaginify is an AI powered saas application for picture Imaginify is an AI powered saas application for picture",
    shortDesc: "Imaginify is an AI powered saas application for picture",
    createdAt: "",
    updatedAt: "",
    featuredImage: "/asserts/nodejs.png",
  },
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
      "API Versioning & Documentation (Swagger, Postman)",
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

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}