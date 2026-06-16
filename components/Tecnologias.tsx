// components/Tecnologias.tsx
"use client";
import Image from "next/image";
import { useState } from "react";

const logos = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", alt: "Terminal" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", alt: "NPM" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg", alt: "Mongoose" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", alt: "Bootstrap" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg", alt: "Axios" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg", alt: "Vite" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", alt: "NestJS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", alt: "Redux" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", alt: "JWT/Auth" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", alt: "OAuth/Auth0" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg", alt: "Swagger" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", alt: "GitLab" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", alt: "Conactivate" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "Neon" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", alt: "Render" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "Copilot" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg", alt: "WebSocket" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg", alt: "ChatGPT" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg", alt: "Azure SQL Database" },
];

export default function Tecnologias() {
  const [paused, setPaused] = useState(false);
  const infiniteLogos = [...logos, ...logos];

  return (
    <section className="w-full bg-[#000000] py-10 overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-white mb-8 font-[var(--font-poppins)]">
        Tecnologías y Herramientas
      </h2>

      <div
        className={`flex justify-center ${paused ? "paused" : ""}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="carousel flex w-full justify-around">
          {infiniteLogos.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-6 transition-transform duration-300 hover:scale-125 cursor-pointer"
            >
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                title={logo.alt} 
                width={80} 
                height={80} 
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .carousel {
          animation: scroll 25s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .paused {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
