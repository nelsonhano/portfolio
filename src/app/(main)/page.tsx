import { Rocket } from "lucide-react";

import ColourfulText from "@/components/ui/colourful-text";
import Technologies from "@/components/Technologies";
import SideProfile from "@/components/SideProfile";
import ContactForm from "@/components/ContactForm";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row w-full min-h-screen">
      <aside className="md:sticky md:top-0 md:h-screen md:w-1/3 w-full bg-transparent mt-10 md:mt-0 flex justify-center md:justify-end md:border-r border-gray-800">
        <div className="flex flex-col items-center w-full md:w-[80%] px-10 md:px-0 my-auto">
          <SideProfile />
        </div>
      </aside>

      <section className="flex-1 overflow-y-auto md:h-screen md:overflow-y-scroll">
        <div className="space-y-20 p-8 md:p-10">
          <section id="about">
            <About />
          </section>

          <section id="projects">
            <h2 className="flex gap-2 text-3xl font-bold mb-4 text-white">
              <Rocket size={35} className="text-green-600/80" />
              <ColourfulText text="Projects" />
            </h2>
            <div className="grid gap-6">
              <Projects />
            </div>
          </section>

          <section id="testimonials">
            <h2 className="text-3xl font-bold">
              <ColourfulText text="Technologies" />
            </h2>
            <div className="rounded-xl mt-2 shadow">
              <Technologies />
            </div>
          </section>

          <section id="skills">
            <h2 className="text-3xl font-bold">
              <ColourfulText text="Skills" />
            </h2>
            <Skills />
          </section>

          <section id="contact">
            <h2 className="text-3xl font-bold">
              <ColourfulText text="Contact" />
            </h2>
            <div className="mt-5">
              <ContactForm />
            </div>
          </section>

          <footer className="mt-20 p-6 text-center text-gray-500">
            © 2025 Koinyan Nelson. All rights reserved.
          </footer>
        </div>
      </section>
    </main>
  );
}

