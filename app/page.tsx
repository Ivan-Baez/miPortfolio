// app/page.tsx
import NavBar from "../components/NavBar";
import SobreMi from "../components/SobreMi";
import Tecnologias from "../components/Tecnologias";
import Proyectos from "../components/Proyectos";
import Contacto from "../components/Contacto";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="w-full flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6 text-center">Portfolio de Iván Báez</h1>

        <section className="w-full max-w-7xl px-8 mb-12">
          <SobreMi />
        </section>

        <section className="w-full max-w-7xl px-8 mb-12">
          <Tecnologias />
        </section>

        <section className="w-full max-w-7xl px-8 mb-12">
          <Proyectos />
        </section>

        <section className="w-full max-w-7xl px-8 mb-12">
          <Contacto />
        </section>
      </main>
    </>
  );
}
