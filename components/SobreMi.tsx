"use client";

import Image from "next/image";

export default function SobreMi() {
  return (
    <section id="sobremi" className="bg-[#000000] py-10">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">
        
        {/* Foto redonda a la izquierda */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/fotosPerfil/yoconlaptop8.jpeg"
            alt="Foto de Ivan"
            width={500}
            height={500}
            loading="eager"
            className="rounded-full object-cover"
          />
        </div>

        {/* Texto delicado e intelectual */}
        <div className="flex-1 font-sans space-y-6">
          <h2 className="text-5xl font-bold mb-4 text-orange-400">Soy Ivan Báez</h2>

          <p className="text-lg leading-relaxed text-gray-300 italic">
            "Soy Ivan Báez, Desarrollador Full Stack enfocado en arquitectura Backend y desarrollo web moderno. Actualmente construyo aplicaciones web robustas y escalables utilizando Next.js, NestJS, TypeScript y PostgreSQL.
             Mi enfoque combina fundamentos sólidos de ingeniería de software con metodologías agénticas y herramientas de IA asistida, lo que me permite optimizar los tiempos de desarrollo manteniendo un alto estándar de calidad, 
             seguridad y mantenibilidad en el código. Apasionado por el aprendizaje continuo y la resolución eficiente de problemas, busco aportar impacto real a través de tecnología bien diseñada."
          </p>
          <p className="text-lg leading-relaxed text-gray-400 flex items-center gap-2">
            📍 Mendoza, Argentina
          </p>

          {/* Botón CV debajo de la descripción */}
          <div className="mt-6">
            <a
              href="/cv/IvanBaez_FullStackBackend_Agents_CV.pdf"
              download
              className="inline-block bg-yellow-400 hover:bg-orange-500 text-black font-semibold px-6 py-2 rounded-lg transition"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
