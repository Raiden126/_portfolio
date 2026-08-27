import { Code, Database, Layout, Terminal, Cpu, Palette, Cloud, Shield } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: Terminal,
    skills: ["JavaScript", "TypeScript", "Python", "HTML (PUG)", "CSS (Sass)"],
  },
  {
    name: "Frameworks & Libraries",
    icon: Layout,
    skills: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "Node.js", "Express.js", "NestJS", "Tailwind CSS", "Redux"],
  },
  {
    name: "Backend & APIs",
    icon: Code,
    skills: ["REST APIs", "GraphQL", "WebSocket", "Microservices", "FlaskAPI"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["MongoDB (NoSQL)", "MySQL (SQL)", "SQLite", "Redis", "Mongoose", "Sequelize"],
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Docker", "AWS S3", "AWS Elastic Beanstalk", "Heroku", "Vercel", "Netlify", "NGINX"],
  },
  {
    name: "Tools & Others",
    icon: Cpu,
    skills: ["Git", "GitHub", "Jira", "Postman", "Stripe", "Supabase", "BullMQ"],
  }
];
