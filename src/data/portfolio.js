export const personalInfo = {
  name: "Akhil",
  title: "Computer Science Student & Developer",
  subtitle: "B.Tech CSE • AI & ML",
  about: "I’m a Computer Science Engineering student specializing in Artificial Intelligence & Machine Learning. I enjoy building practical software, learning new technologies and solving problems through code.",
  email: "[EMAIL]",
  github: "[GITHUB]",
  linkedin: "[LINKEDIN]",
  resumeLink: "[ADD RESUME LINK]",
};

export const skills = {
  languages: ["Python", "C", "C++", "JavaScript"],
  web: ["HTML", "CSS", "React"],
  database: ["SQL", "DBMS"],
  tools: ["Git", "GitHub", "VS Code", "Vercel"],
  learning: ["Data Structures & Algorithms", "Machine Learning", "Artificial Intelligence"]
};

export const projects = [
  {
    id: "privlink",
    title: "PrivLink",
    category: "Web Application",
    shortDescription: "A privacy-focused communication platform designed to provide a clean and modern messaging experience.",
    technologies: ["React", "JavaScript", "CSS"],
    features: [
      "Messaging interface",
      "User profiles",
      "Media sharing",
      "GIF support",
      "Typing indicator",
      "Chat organization",
      "Privacy-focused settings",
      "Responsive UI"
    ],
    github: "[ADD PROJECT GITHUB URL]",
    demo: "[ADD PROJECT DEMO URL]",
    details: {
      problem: "The need for a messaging platform with an emphasis on privacy and clean design without cluttered UI.",
      solution: "Developed a focused communication app built in React that prioritizes ease-of-use and privacy-first features.",
      challenges: "Implementing responsive messaging UI and managing chat state effectively.",
      learning: "Deepened understanding of React state management, real-time UI updates, and building accessible chat interfaces."
    }
  },
  {
    id: "smart-geocell",
    title: "Smart GeoCell Road System",
    category: "IoT / Smart Infrastructure",
    shortDescription: "An IoT-based system for monitoring road and environmental conditions using sensors and connected hardware.",
    technologies: ["IoT", "Arduino / ESP32", "Sensors", "GSM"],
    features: [
      "Arduino / ESP32",
      "Soil moisture sensor",
      "Water level sensor",
      "GSM module",
      "Buzzer",
      "LEDs",
      "Monitoring dashboard"
    ],
    github: "[ADD PROJECT GITHUB URL]",
    demo: "[ADD PROJECT DEMO URL]",
    details: {
      problem: "Lack of real-time monitoring of road infrastructure conditions leading to delayed maintenance.",
      solution: "Built a hardware prototype with IoT sensors to collect moisture and water level data, communicating alerts via GSM.",
      challenges: "Integrating multiple sensors with a microcontroller and ensuring reliable GSM communication.",
      learning: "Gained hands-on experience in IoT hardware, sensor data processing, and wireless communication protocols."
    }
  }
];

export const education = {
  degree: "Bachelor of Technology",
  field: "Computer Science Engineering — AI & ML",
  university: "Lovely Professional University",
  period: "2025 — Present"
};

export const certifications = [
  {
    name: "Machine Learning Specialization",
    issuer: "Coursera / Stanford University",
    date: "[ADD DATE]",
    link: "[ADD CERTIFICATE LINK]"
  },
  {
    name: "Python for Everybody",
    issuer: "Coursera / University of Michigan",
    date: "[ADD DATE]",
    link: "[ADD CERTIFICATE LINK]"
  },
  {
    name: "React - The Complete Guide",
    issuer: "Udemy",
    date: "[ADD DATE]",
    link: "[ADD CERTIFICATE LINK]"
  }
];

export const learningJourney = [
  "Data Structures & Algorithms",
  "Machine Learning",
  "Artificial Intelligence",
  "Software Engineering"
];
