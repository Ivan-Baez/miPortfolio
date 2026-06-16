"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo o nombre */}
        <h1 className="text-lg font-bold tracking-wide">Ivan Báez</h1>

        {/* Links de navegación */}
        <ul className="flex space-x-6">
          <li>
            <a href="#sobremi" className="hover:text-yellow-400 transition">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#proyectos" className="hover:text-yellow-400 transition">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-yellow-400 transition">
              Contáctame
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
