import { useRef } from "react";
import logopro from "./profile_LE.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import plateaus from "../../public/2026-02-27-100309_hyprshot.png"
import marvin from "../../public/2026-02-27-101146_hyprshot.png"

type ProjectItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
};

const items: ProjectItem[] = [
  {
    id: "plateaus",
    title: "The Plateaus",
    description: "A mod for the famous game Terraria.",
    image: plateaus,
    link: "https://github.com/Tadomika-Ari/The-Plateaus",
  },
  {
    id: "jarvis",
    title: "JARVIS IA",
    description: "Assistant IA for help you for... all",
    image: "test",
    link: "https://github.com/Tadomika-Ari/JARVIS",
  },
  {
    id: "project-3",
    title: "M4RV1N Bot",
    description: "A simple bot discord",
    image: marvin,
    link: "https://github.com/Tadomika-Ari/M4RV1N-Bot",
  },
];

function ProjectsScroller() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Déplace la rangée vers la gauche pendant le scroll.
  // Ajuste "-75%" selon le nombre de cartes (ex: -50%, -120%, etc.)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="w-full h-[250vh]">
      <div className="sticky top-0 h-screen overflow-hidden px-18">
        <div className="mx-auto max-w-6xl pt-10">
          <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
            My projects :
          </h2>
        </div>

        <motion.div style={{ x }} className="mt-10 flex gap-6 px-4">
          {items.map((item) => (
            <article key={item.id} className="shrink-0  md:w-[420px] rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-lg">
              {/* Image */}
              <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-center text-xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
              {/* Buttons / links */}
                {item.link && (
                  <div className="mt-4 text-center gap-3">
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
                        Github
                      </a>
                    )}
                  </div>
                )}
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Welcome() {
  return (
    <main className="pt-16 pb-4">
      <div className="flex flex-col items-center gap-16">
        {/* HERO CARD */}
        <div className="flex flex-col items-center gap-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-lg p-10 max-w-lg w-full mx-4">
          <img
            src={logopro}
            alt="Lucas EECKHOUTTE"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Lucas EECKHOUTTE
          </h1>

          <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">
            New developer !
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
            I'm a new developer studying at Epitech. I love computer and new tech !
            What else do I like ? I love read, write a book and video games !
            Welcome to my portfolio !
          </p>

          <div className="flex gap-4">
            <a
              href="/projects"
              className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              My projects
            </a>
            <a
              href="/contact"
              className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              ...
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-lg p-10 max-w-lg w-full mx-4" >
          <p className="text-2xl font-bold text-gray-900 dark:text-white" >
            My skills :
          </p>
          <p className="flex flex-col items-center gap-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-lg p-10 max-w-lg w-full mx-4">
            C#, C, Python, HTML, CSS, React, Git, VScode
          </p>
        </div>
        {/* SECTION HORIZONTAL SCROLL */}
        <ProjectsScroller />
        <div className="flex flex-col items-center gap-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-lg p-10 max-w-lg w-full mx-4">
          Test
        </div>
      </div>
    </main>
  );
}