// components/Contacto.tsx
"use client";
import { useRef } from "react";
import emailjs from 'emailjs-com';


export default function Contacto() {
  const form = useRef<HTMLFormElement>(null);

  const enviarMensaje = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

emailjs.sendForm(
  'service_459n8vv',      // tu Service ID
  'template_k5atjwe',    // acá va tu Template ID
  form.current,
  'C6ZL646RGV9pv-3Iz'     // tu Public Key
)
    .then(() => alert("✅ Mensaje enviado correctamente"))
    .catch(() => alert("❌ Error al enviar el mensaje"));
  };

  return (
    <section
      id="contacto"
      className="p-8 bg-[#000000] text-white flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold text-gray-100 mb-2">Contáctame 💬</h2>
      <p className="text-gray-400 mb-6">
        Hablemos de proyectos, ideas o café ☕
      </p>

      {/* Formulario */}
      <form
        ref={form}
        onSubmit={enviarMensaje}
        className="bg-[#111827] p-8 rounded-lg shadow-md w-full max-w-xxl flex flex-col gap-4"
      >
        <div className="flex items-center gap-2 bg-[#1f2937] rounded p-2">
          <span>✉️</span>
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            required
            className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
          />
        </div>
        <div className="flex items-start gap-2 bg-[#1f2937] rounded p-2">
          <span>💬</span>
          <textarea
            name="mensaje"
            placeholder="Escribe tu mensaje..."
            rows={5}
            required
            className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
          ></textarea>
        </div>
<button
  type="submit"
  className="bg-gray-700 hover:bg-yellow-400 text-white hover:text-black font-semibold py-2 rounded transition"
>
  Enviar
</button>


      </form>

      {/* Separador */}
      <p className="mt-6 text-gray-500">O también puedes encontrarme en:</p>

      {/* Botones de redes */}
      <div className="flex gap-6 mt-4">
        <a
          href="https://www.linkedin.com/in/ivan-baez-work"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#111827] hover:bg-blue-700 p-4 rounded-lg flex flex-col items-center transition transform hover:scale-105"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain-wordmark.svg"
            alt="LinkedIn"
            className="w-20 h-20 mb-1 invert"
          />
          <span className="text-sm text-gray-300">LinkedIn</span>
        </a>

        <a
          href="https://github.com/Ivan-Baez"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#111827] hover:bg-gray-700 p-4 rounded-lg flex flex-col items-center transition transform hover:scale-105"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
            alt="GitHub"
            className="w-20 h-20 mb-1 invert"
          />
          <span className="text-sm text-gray-300">GitHub</span>
        </a>
      </div>
    </section>
  );
}
