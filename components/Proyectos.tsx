"use client";
import Image from "next/image";
import { useState } from "react";

function Carrusel({ imagenes }: { imagenes: string[] }) {
  const [index, setIndex] = useState(0);

  const siguiente = () => setIndex((index + 1) % imagenes.length);
  const anterior = () => setIndex((index - 1 + imagenes.length) % imagenes.length);

  return (
    <div className="relative w-full h-64 mb-4">
      <Image
        src={imagenes[index]}
        alt={`Imagen ${index + 1}`}
        width={600}
        height={300}
        className="rounded-md object-cover w-full h-full"
      />
      <button
        onClick={anterior}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 
                   bg-gray-800 text-white px-2 py-1 rounded 
                   hover:bg-gray-700 hover:scale-110 transition z-20"
      >
        ◀
      </button>
      <button
        onClick={siguiente}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 
                   bg-gray-800 text-white px-2 py-1 rounded 
                   hover:bg-gray-700 hover:scale-110 transition z-20"
      >
        ▶
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {imagenes.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-teal-200" : "bg-gray-500"}`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default function Proyectos() {
  const proyectos = [
    {
      titulo: "Go Safe 🏞️",
      descripcion: "Plataforma que conecta instructores de turismo con personas interesadas en experiencias seguras.",
      tecnologias: ["React", "TailwindCSS", "WebSocket"],
      link: "https://github.com/Ivan-Baez/GO-SAFE-pf-",
      deploy: "https://gosafe-seven.vercel.app/",
      imagenes: [
        "/assets/goSafe/Go Safe 1.png",
        "/assets/goSafe/Go Safe 2.png",
        "/assets/goSafe/Go Safe 3.png"
      ]
    },
    {
      titulo: "E-commerce Backend 🛒",
      descripcion: "API REST para e‑commerce con autenticación JWT y despliegue en Render.",
      tecnologias: ["Node.js", "Express", "MongoDB", "JWT"],
      link: "https://github.com/Ivan-Baez/pm4-backend",
      deploy: "https://pm4-backend-5foa.onrender.com/api",
      imagenes: [
        "/assets/backendEcomerce/BackendEcomerce1.png",
        "/assets/backendEcomerce/BackendEcomerce2.png"
      ]
    },
    {
      titulo: "Appointment Manager (Frontend) 🏥",
      descripcion: "Gestión de citas con Next.js y despliegue en Render.",
      tecnologias: ["Next.js", "TypeScript"],
      link: "https://github.com/Ivan-Baez/APPOINTMENT-MANAGER-pm3-",
      deploy: "https://appointment-manager-pm3-1.onrender.com/",
      imagenes: [
        "/assets/appointmentManager/Apointment Manager 1.png",
        "/assets/appointmentManager/Apointment Manager 2.png",
        "/assets/appointmentManager/Apointment Manager 3.png"
      ]
    },
    {
      titulo: "Appointment Manager (Backend) 📅",
      descripcion: "Backend en NestJS con PostgreSQL (Neon) y despliegue en Render.",
      tecnologias: ["NestJS", "PostgreSQL", "TypeScript"],
      link: "https://github.com/Ivan-Baez/APPOINTMENT-MANAGER-pm3-",
      deploy: "https://appointment-manager-pm3.onrender.com/",
      imagenes: [
        "/assets/appointmentManager/Apointment Manager 6.png",
        "/assets/appointmentManager/Apointment Manager 7.png",
        "/assets/backendEcomerce/endpointsPrueva.png"
      ]
    }
  ];

  return (
    <section id="proyectos" className="p-12 bg-[#000000] text-white">
      <h2 className="text-3xl font-bold mb-12 text-center text-white">
        Proyectos
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg p-8 shadow-md 
             bg-[#111827] transform transition-transform duration-300 ease-in-out 
             hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-teal-200 hover:z-10 relative overflow-hidden"
          >
            <Carrusel imagenes={proyecto.imagenes} />
            <h3 className="text-2xl font-semibold text-teal-200">
              {proyecto.titulo}
            </h3>
            <p className="mt-2 text-gray-300">{proyecto.descripcion}</p>
            <p className="mt-2 text-sm text-gray-400">
              Tecnologías: {proyecto.tecnologias.join(", ")}
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <a
                href={proyecto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded transition w-full md:w-auto"
              >
                Ver repositorio
              </a>
              {proyecto.deploy && (
                <a
                  href={proyecto.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition w-full md:w-auto"
                >
                  Ver demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
