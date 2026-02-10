"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Tafa Analytics",
    description:
      "Built a analytics platform for the Tafa School that allows the school to track the performance of the students and the teachers.",
    tech: ["React", "Next.js"],
    link: "https://testing.tafaanalytics.co.ke/",
  },
  {
    name: "API Gateway Platform",
    description:
      "Designed and implemented a scalable API gateway for microservices, handling millions of requests per day with advanced authentication and rate limiting.",
    tech: ["Node.js", "Express", "Redis", "Docker", "Kubernetes"],
    link: "#",
  },
  {
    name: "Real-Time Analytics Engine",
    description:
      "Built a real-time analytics engine for processing and visualizing streaming data, enabling instant business insights.",
    tech: ["Python", "Kafka", "PostgreSQL", "Grafana", "Debezium"],
    link: "#",
  },
  {
    name: "Multi-Channel Messaging Gateway",
    description:
      "Developed a unified messaging gateway that handles SMS, WhatsApp, and email communications, enabling seamless multi-channel notifications and communications.",
    tech: [
      "Node.js",
      "Safaricom API",
      "SendGrid",
      "WhatsApp Business API",
      "Redis",
      "MongoDB",
    ],
    link: "#",
  },
  {
    name: "Pesa Gateway Package",
    description:
      "Created a comprehensive Python package for integrating with various payment gateways and mobile money services in Africa.",
    tech: ["Python", "M-Pesa"],
    link: "https://pypi.org/project/pesa-gateway/",
  },
  {
    name: "AI Question Extractor",
    description:
      "Built a Python package that uses machine learning to automatically extract and generate questions from educational content and text materials.",
    tech: ["Python", "Machine Learning", "NLP", "Transformers"],
    link: "https://pypi.org/project/ai-question-extractor",
  },
  {
    name: "Tafa Talk",
    description:
      "Developed a school communication platform that facilitates seamless interaction between students, parents and teachers. Features include announcements, academic performance tracking, and direct messaging.",
    tech: ["React", "Django", "PostgreSQL", "WebSockets", "Redis"],
    link: "https://tafatalk.co.ke/",
  },
  // Add more projects as needed
];

export default function Home() {
  const imagePath =
    process.env.NODE_ENV === "production"
      ? "/portfolio/images/profile.jpg"
      : "/images/profile.jpg";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-blue-950 text-black dark:text-white font-[family-name:var(--font-geist-sans)]">
      <main className="w-full max-w-3xl mx-auto flex flex-col gap-16 items-center px-4 py-12 sm:py-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <div className="relative">
            <Image
              src={imagePath}
              alt="Abdul Nelfrank"
              width={140}
              height={140}
              className="rounded-full border-4 border-white dark:border-gray-800 shadow-lg object-cover"
              priority
            />
            <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Abdul Nelfrank
          </h1>
          <h2 className="text-lg sm:text-xl text-blue-700 dark:text-blue-300 font-semibold">
            Senior Backend Engineer
          </h2>
          <p className="max-w-xl text-base text-gray-700 dark:text-gray-300 mt-2">
            Experienced backend engineer specializing in scalable distributed
            systems, API design, and cloud infrastructure. Passionate about
            building robust platforms and mentoring engineering teams.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            <a
              href="https://www.linkedin.com/in/abdul-nelfrank-47242094/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0077b5] hover:bg-[#005983] text-white rounded-full font-medium shadow transition-transform duration-300 transform hover:scale-105"
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="inline"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/thaka-creations"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-gray-700 text-white rounded-full font-medium shadow transition-transform duration-300 transform hover:scale-105"
              aria-label="GitHub"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="inline"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="w-full border-t border-gray-200 dark:border-gray-800 my-4"></div>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100 tracking-tight">
            Projects
          </h3>
          <div className="grid gap-8 sm:grid-cols-2">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                }}
                className="flex flex-col h-full p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 shadow-sm transition-shadow duration-300 group"
              >
                <h4 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-200 group-hover:underline">
                  {project.name}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 flex-1 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-auto text-blue-700 dark:text-blue-300 hover:underline font-medium"
                  >
                    View Project
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Get in Touch Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="w-full mt-16 flex flex-col items-center"
        >
          <div className="w-full border-t border-gray-200 dark:border-gray-800 my-8"></div>
          <h3 className="text-2xl font-bold mb-2 text-center text-gray-900 dark:text-gray-100 tracking-tight">
            Get in Touch
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
            Interested in working together or have a question? Feel free to
            reach out!
          </p>
          <a
            href="mailto:nelfrankaj@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-800 text-white rounded-full font-medium shadow transition-transform duration-300 transform hover:scale-105"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="inline"
              viewBox="0 0 24 24"
            >
              <path d="M2 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm0 2h20v.01L12 13 2 6.01V6zm0 2.236l7.803 5.852a2 2 0 0 0 2.394 0L22 8.236V18H2V8.236z" />
            </svg>
            nelfrankaj@gmail.com
          </a>
        </motion.section>
      </main>
    </div>
  );
}
