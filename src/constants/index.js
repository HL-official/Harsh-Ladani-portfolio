import project1 from "../assets/projects/project-1.jpeg";
import psuLogo from "../assets/PSU_logo.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I'm a dedicated full-stack developer with a passion for building intuitive, scalable, and innovative web applications. With hands-on experience at FedEx Corporation and a solid academic background from The Pennsylvania State University, I specialize in transforming complex problems into elegant digital solutions. Whether it's enhancing user interfaces or integrating cutting-edge machine learning techniques, I thrive on the challenge of driving innovation in every project I undertake.`;

export const ABOUT_TEXT = {
  personalJourney: {
    title: 'Personal Journey',
    content: `My journey into technology began with a fascination for how software can simplify everyday tasks and drive global innovation. I pursued a Bachelor's of Science in Computer Science at Penn State, where I immersed myself in both theoretical studies and real-world applications. This blend of rigorous academics and practical experience has been the foundation of my professional growth.`
  },
  professionalPassion: {
    title: 'Professional Passion',
    content: `I am continually inspired by the ever-evolving landscape of technology. My work at FedEx Corporation has allowed me to work on large-scale systems—from designing user-facing features with Angular and Spring Boot to automating CI/CD pipelines using Jenkins. I'm equally passionate about machine learning, as evidenced by projects like my Part-Of-Speech Tagging System and AI-Powered PDF Query System, which merge data science with software engineering to create intelligent solutions.`
  },
  valuesAndVision: {
    title: 'Values & Vision',
    content: `Integrity, continuous learning, and collaboration are at the core of my work ethic. I believe that technology should not only solve problems but also enrich user experiences and drive meaningful change. Outside of coding, I enjoy mentoring and sharing knowledge, whether it's through teaching or contributing to open-source projects.`
  }
};

export const EXPERIENCES = [
  {
    year: "June 2024 - Current",
    role: "Full-Stack Developer I",
    company: "FedEx Corporation",
    location: "Remote",
    description: `Designed and implemented responsive features using Angular and Spring Boot for a shipment management application. Engineered robust server-side logic and scalable databases with Python on Databricks. Integrated third-party APIs using ReadyAPI and automated CI/CD pipeline with Jenkins.`,
    technologies: ["Angular", "Spring Boot", "Python", "Databricks", "ReadyAPI", "Jenkins"],
  },
  {
    year: "September 2023 - May 2024",
    role: "Advanced Full-Stack Developer Intern",
    company: "FedEx Corporation",
    location: "Remote",
    description: `Enhanced the NRM interface using Typescript and Java, contributing to production feature rollouts. Collaborated in an Agile and Extreme Programming environment for efficient project execution.`,
    technologies: ["TypeScript", "Java", "Agile", "XP"],
  },
  {
    year: "June 2023 - August 2023",
    role: "Software Engineering Intern",
    company: "FedEx Corporation",
    location: "Pittsburgh",
    description: `Adopted Agile methodologies and OOP techniques in Java/Python. Spearheaded refactoring to handle 1M+ row datasets, improving efficiency by 17%. Presented solutions in iteration demos and supported daily stand-ups.`,
    technologies: ["Java", "Python", "OOP", "Agile"],
  },
  {
    year: "June 2022 - August 2022",
    role: "Front-End Development Intern",
    company: "Kevit Technologies",
    description: `Developed a real-time chat application using JavaScript and MongoDB. Improved communication tools for four small businesses, enhancing client interactions.`,
    technologies: ["JavaScript", "MongoDB", "Real-time Chat"],
  },
  {
    year: "May 2021 - May 2023",
    role: "Undergraduate Teaching Assistant",
    company: "Penn State",
    description: `Reviewed code and assignments for 100+ students weekly, providing constructive feedback. Conducted office hours for Python programming and discrete mathematics support.`,
    technologies: ["Python", "Discrete Mathematics", "Teaching"],
  },
];

export const EDUCATION = {
  university: "The Pennsylvania State University – Main Campus",
  degree: "Bachelor of Science in Computer Science",
  duration: "August 2020 - May 2024",
  logo: psuLogo,
  highlights: [
    "Academic Excellence: Maintained a GPA of 3.7/4.0 and consistently earned a spot on the Dean's List.",
    "Foundational Skills: Developed a strong foundation in programming, data structures, algorithms, and machine learning, preparing me for real-world technical challenges.",
  ],
};

export const PROJECTS = [
  {
    title: "Part-Of-Speech Tagging System",
    image: project1,
    github: "https://github.com/harshladani/pos-tagging",
    description:
      "Developed an advanced NLP tool using PyTorch to compare three models for part-of-speech tagging. Implemented Bayesian Classifier, Logistic Regression, and SVM approaches, achieving up to 94.9% accuracy in natural language processing tasks.",
    technologies: ["Python", "PyTorch", "NLP", "Machine Learning", "Scikit-learn"],
  },
  {
    title: "AI-Powered PDF Query System",
    image: project2,
    github: "https://github.com/harshladani/pdf-query-ai",
    description:
      "Built an intelligent PDF query system using RAG architecture and local LLMs. Integrated custom text embeddings via Ollama and Mistral AI for secure document processing, enabling precise and context-aware responses to user queries.",
    technologies: ["Python", "LLM", "RAG", "NLP", "Ollama", "Mistral AI"],
  },
  {
    title: "Movie & TV Show Recommender System",
    image: project3,
    github: "https://github.com/harshladani/movie-recommender",
    description:
      "Created a sophisticated movie recommendation engine analyzing 5,500+ titles. Implemented TF-IDF vectorization for text processing and cosine similarity matching, delivering personalized suggestions that significantly improve user engagement.",
    technologies: ["Python", "NLP", "Machine Learning", "TF-IDF", "Scikit-learn"],
  },
];

export const CONTACT = {
  address: "Boston, MA",
  phoneNo: "+1 717-943-6260",
  email: "harshladani08@gmail.com",
};
