"use client";

import { SAMPLE_SERVICES } from "../../utils/services";
import { useState } from "react";
import ProjectModal from "./projectModal";

// type OpenProject = {
//     openProject(p: any): void
// }
export default function Projects() {
  type Content = {
    id: number | null;
    title: string;
    year: number | null;
    type: string;
    cover: string;
    description: string;
    media: {
      kind: string;
      src: string;
    };
  };

  const [selected, setSelected] = useState<Content | null>({
    id: null,
    title: "",
    year: null,
    type: "",
    cover: "",
    description: "",
    media: {
      kind: "",
      src: "",
    },
  });

  function openProject(p: any) {
    setSelected(p);
    document.body.style.overflow = "hidden";
  }
  function closeProject() {
    setSelected(null);
    document.body.style.overflow = "auto";
  }

  return (
    <>
    <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold">Services</h2>
      <p className="text-gray-600 mt-2">
        Click a service to open media and technical notes.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {SAMPLE_SERVICES.map((p) => (
          <article
            key={p.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() => openProject(p)}
              className="text-left w-full hover:cursor-pointer"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {p.year} • {p.type.replace(/-/g, " ")}
                </p>
              </div>
            </button>
          </article>
        ))}
      </div>
    </section>
    <ProjectModal selected={selected} closeProject={closeProject} />
    </>
  );
}
