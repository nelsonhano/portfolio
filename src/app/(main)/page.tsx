import { Rocket } from "lucide-react";

import About from "@/components/About";
import ColourfulText from "@/components/ui/colourful-text";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import { Skills } from "@/components/Skills";
import SideProfile from "@/components/SideProfile";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 w-full min-h-screen py-5">
      <aside className="md:col-span-1 relative mt-20 w-full">
        <div className="sticky top-20 flex flex-col items-center md:h-[calc(100vh-4rem)]">
          <div className="flex flex-col items-center md:w-2/3 md:px-0 px-32 my-auto">
            <SideProfile />
          </div>
        </div>
      </aside>

      <section className="md:col-span-2 overflow-hidden">
        <div className="space-y-20 p-8">
          <section id="about">
            <About />
          </section>

          <section id="projects">
            <h2 className="flex gap-2 text-3xl font-bold mb-4 text-white">
              <Rocket size={35} className="text-green-600/80" />
              <ColourfulText text={`Projects`} />
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
        </div>
      </section>
      <footer className="mt-20 p-6 text-center text-gray-500">
        © 2025 Koinyan Nelson. All rights reserved.
      </footer>
    </main>
  );
}
