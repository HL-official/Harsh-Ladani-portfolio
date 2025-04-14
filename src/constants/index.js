import project1 from "../assets/projects/project-1.jpeg";
import psuLogo from "../assets/PSU_logo.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `Full Stack Developer with a passion for AI innovation. From installing my first graphics card to building intelligent systems with RAG architecture, I've pursued technology's cutting edge. Penn State CS graduate now crafting responsive Angular and Spring Boot solutions at FedEx, while advancing NLP projects to get more skilled in AI. When I'm not coding, you'll find me networking with fellow tech enthusiasts or enjoying the latest FPS games and Nolan films.`;
export const ABOUT_TEXT = {
  personalJourney: {
    title: 'Personal Journey',
    content: `I've always been drawn to technology. Growing up, I was the first among family and friends to install a graphics card in my computer for better gaming experiences and likely the only one in my zip code with an Alexa and smart bulb setup at home. This early fascination evolved during high school when I discovered that computer science could empower me to create my own tools and solutions. This revelation set me on a clear path to Penn State, where I pursued my Bachelor's in Computer Science. After four years fueled by caffeine and countless office hours, I graduated with distinction. Today, I'm living my dream as a Full Stack Developer at FedEx, doing what I've always loved - computing.`
  },
  professionalPassion: {
    title: 'Professional Passion',
    content: `I'm driven by a desire to be at the forefront of technology, which means continuously adapting and learning. My current focus is developing skills in Artificial Intelligence, as I believe it represents the next frontier in computing. I aspire to work in an environment where I can contribute to innovations that fundamentally transform how people and technology interact through AI. I want to be part of building solutions that not only solve current problems but anticipate future needs, creating more intuitive and powerful human-computer interactions that drive meaningful progress.`  },
  valuesAndVision: {
    title: 'Beyond The Code',
    content: `When I'm not coding, I thrive on networking and connecting with exciting people who share my enthusiasm for innovation. My downtime often involves playing the latest FPS games or watching the latest films by Nolan or Scorsese.`  }
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
    github: "https://github.com/HL-official/local-pdf-reader/tree/master",
    description:
      "Built an intelligent PDF query system using RAG architecture and local LLMs. Integrated custom text embeddings via Ollama and Mistral AI for secure document processing, enabling precise and context-aware responses to user queries.",
    technologies: ["Python", "LLM", "RAG", "NLP", "Ollama", "Mistral AI"],
  },
  {
    title: "Movie & TV Show Recommender System",
    image: project3,
    github: "https://github.com/HL-official/Movie-Recommendation-System",
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
