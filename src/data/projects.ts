export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  imgset: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Titan Travel - Escorted Tour Company",
    description: "Enterprise platform enabling seamless holiday bookings. Integrated Tigerbay core travel management system to handle flights, tours, and itineraries.",
    image: "/imgs/titan.png",
    imgset: [],
    tags: ["Next.js", "Tigerbay", "Node.js"],
    links: {
      github: "",
      live: "https://www.titantravel.co.uk/",
    },
  },
  {
    id: 2,
    title: "Dertour Explore - Travel & Holiday Booking Platform",
    description: "Customer-facing travel features using Vue.js and Nuxt.js. Integrated Algolia Search for fast destination and holiday search.",
    image: "/imgs/explore.png",
    imgset: ["/imgs/explore2.png"],
    tags: ["Vue.js", "Nuxt.js", "Algolia Search", "Umbraco CMS"],
    links: {
      github: "",
      live: "https://www.explore.co.uk/"
    },
  },
  {
    id: 3,
    title: "DertourInghams - UK Walking & Holiday Travel Platform",
    description: "Developed responsive travel and resort experiences with reusable components, integrated WAPI APIs and Umbraco CMS for dynamic travel content.",
    image: "/imgs/Inghams.png",
    imgset: ["/imgs/inghams2.png"],
    tags: ["Vue.js", "Nuxt.js", "Pinia", "WAPI APIs", "Umbraco CMS"],
    links: {
      github: "",
      live: "https://www.inghams.co.uk/"
    },
  },
  {
    id: 4,
    title: "AutoXCarCare - Car Service Platform",
    description: "Large-scale membership platform with robust multi-role admin panel and membership subscription workflows using Stripe.",
    image: "/imgs/autoxcar.png",
    imgset: [],
    tags: ["Next.js", "NestJS", "Stripe"],
    links: {
      github: "",
      live: "https://autoxcarcare.com.au/",
    },
  },
  {
    id: 5,
    title: "GPG Plumbing - On Demand Service Platform",
    description: "Admin panel using NestJS and Next.js, implementing RBAC, booking workflows. Scalable backend operations using BullMQ queues.",
    image: "/imgs/gpg.png",
    imgset: [],
    tags: ["Next.js", "NestJS", "Xero", "AWS S3", "BullMQ"],
    links: {
      github: "",
      live: "https://gpgplumbing.com.au/",
    },
  },
  {
    id: 6,
    title: "Forest Fire Weather Index (FWI) Prediction",
    description: "A Machine Learning web application built using Flask that predicts the Fire Weather Index (FWI) based on meteorological parameters. Deployed on AWS Elastic Beanstalk using AWS CodePipeline for Continuous Deployment.",
    image: "/placeholder.svg",
    imgset: [],
    tags: ["Python", "Flask", "Scikit-Learn", "AWS Elastic Beanstalk", "AWS CodePipeline"],
    links: {
      github: "https://github.com/Raiden126/test_ml",
      live: "http://testml-env.eba-uamyuyja.eu-north-1.elasticbeanstalk.com/predictdata",
    },
  },
  {
    id: 7,
    title: "Machine Learning Regression Practice",
    description: "A machine learning regression project based on the Kaggle House Prices dataset, featuring data preprocessing, EDA, feature engineering, model training, and performance evaluation.",
    image: "/placeholder.svg",
    imgset: [],
    tags: ["Python", "Scikit-Learn", "Pandas", "NumPy", "EDA"],
    links: {
      github: "https://github.com/Raiden126/regression_practice",
      live: "",
    },
  },
  {
    id: 8,
    title: "Email Template Web Component",
    description: "Framework-agnostic email template component published as NPM package enabling developers to instantly embed reusable professional builders.",
    image: "/placeholder.svg",
    imgset: [],
    tags: ["TypeScript", "Shadow DOM", "React", "Vue", "Angular"],
    links: {
      github: "",
      live: "https://www.npmjs.com/package/email-template-component",
    },
  },
  {
    id: 9,
    title: "Vonage Video Meeting Widget",
    description: "Cross-platform video meeting widget using Vonage Video API, packaged as a React/Web Component hybrid with full CDN support.",
    image: "/placeholder.svg",
    imgset: [],
    tags: ["React", "Vonage API", "Tailwind CSS"],
    links: {
      github: "",
      live: "https://www.npmjs.com/package/vonage-video-meeting-widget",
    },
  }
];
