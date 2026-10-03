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
            "¡Hola! Soy Ivan Báez, Desarrollador Full Stack con especialización en el ecosistema Node.js, NestJS y Next.js.
            Me apasiona transformar ideas y lógica de negocio en soluciones digitales funcionales, seguras y escalables. 
            Integro flujos de trabajo asistidos por IA y Spec-Driven Development (SDD) en mi día a día para diseñar arquitecturas
             limpias y entregar código listo para producción. Mi objetivo es sumarme a equipos dinámicos donde pueda aportar visión técnica,
              capacidad de adaptación y valor real desde el primer día."
          </p>
          <p className="text-lg leading-relaxed text-gray-400 flex items-center gap-2">
            📍 Mendoza, Argentina
          </p>

          {/* Botón CV debajo de la descripción */}
          <div className="mt-6">
            <a
              href="public/cv/IvanBaez_FullStackBackend_Agents_CV.pdf.pdf"
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
