import { Award } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  title: string;
  type: "certification";
  year: string;
  description: string;
  icon: LucideIcon;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Schema Patterns And AntiPatterns - MongoDB",
    type: "certification",
    year: "",
    description: "Certification on MongoDB schema patterns.",
    icon: Award,
    link: "https://github.com/Raiden126/certificates/blob/main/Mongodb_schema_patterns_and_antiPatterns.jpg",
  },
  {
    title: "Relational To Document Model - MongoDB",
    type: "certification",
    year: "",
    description: "Certification on migrating from relational to document databases.",
    icon: Award,
    link: "https://github.com/Raiden126/certificates/blob/main/Mongodb_relational_to_document_model.jpg",
  },
  {
    title: "Fundamentals of Data Transformation - MongoDB",
    type: "certification",
    year: "",
    description: "Certification on data transformation techniques.",
    icon: Award,
    link: "https://github.com/Raiden126/certificates/blob/main/Mongodb_fundamentals_of_data_transformation.jpg",
  },
  {
    title: "Next Js: The Complete Developer's Guide - Udemy",
    type: "certification",
    year: "",
    description: "Comprehensive Next.js certification.",
    icon: Award,
    link: "https://github.com/Raiden126/certificates/blob/main/Udemy_nextjs.jpg",
  },
  {
    title: "The Modern Javascript Bootcamp Course - Udemy",
    type: "certification",
    year: "",
    description: "Modern JavaScript concepts and bootcamp.",
    icon: Award,
    link: "https://github.com/Raiden126/certificates/blob/main/Udemy_js.jpg",
  },
  {
    title: "Helsinki Full Stack Open - University Of Helsinki",
    type: "certification",
    year: "",
    description: "Deep dive into React, Redux, Node.js, MongoDB, GraphQL and TypeScript.",
    icon: Award,
    link: "https://github.com/Raiden126/certificates/blob/main/Helsinki_react_fullstack.jpg",
  }
];
