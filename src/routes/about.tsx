import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import casper from "@/assets/site/casper.png";
import noRight from "@/assets/site/no-right-no-wrong.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Energy Integrated" },
      { name: "description", content: "Casper Bodewitz (Zhenphen Rangdol) — 20+ years bridging logic and intuition across IT, leadership and human energy." },
    ],
  }),
  component: AboutPage,
});

const skills = {
  "Treatment Approach": ["Coaching", "Intuitive Realignment", "Compassion Focused"],
  "Root Cause Analysis (RCA)": ["People, Process, Product", "Experiential Reprogramming", "Human System Interfaces"],
  "Holistic": ["IT audits", "Agile", "Inherent Interdependence", "Humanistic"],
  "Speaking": ["English", "Dutch", "Spanish"],
  "Modality": ["Individuals", "Teams", "Executive Leadership"],
};

function AboutPage() {
  return (
    <SiteLayout>
      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-[1fr_1.4fr] gap-12 items-start">
          <div>
            <img src={casper} alt="Casper Bodewitz" className="rounded-3xl w-full" />
          </div>
          <div>
            <p className="eyebrow">About Me</p>
            <h1 className="mt-2">Kuzuzangpo la</h1>
            <p className="mt-6 text-lg">
              My name is Casper Bodewitz, also known as Zhenphen Rangdol. During my career I developed
              an academic training in computing science and have worked in all roles across the IT
              spectrum — programmer, developer, integrator, team lead, architect, management
              consultant, auditor, game producer, guide and teacher.
            </p>
            <p className="mt-4">
              I've worked in many industries from Energy to Education, from countries in Europe to the
              Kingdom of Bhutan. I have found in all levels of work there is energy to be integrated,
              whether technical or human energy. I've worked for multinationals, small start-ups and
              everything between.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {Object.entries(skills).map(([k, v]) => (
                <div key={k} className="rounded-2xl bg-primary-100 p-5 border border-border">
                  <p className="font-serif text-lg text-primary-700">{k}</p>
                  <ul className="mt-2 space-y-1 text-sm text-neutral-600">
                    {v.map((i) => <li key={i}>· {i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary-200 py-20">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow">A journey</p>
            <h2 className="mt-2">Bridging logic and intuition.</h2>
            <p className="mt-6">
              IT is 70% communication and people work and 30% technique. It has always been that way
              from Alan Turing to Elon Musk. In a field seemingly about logic, binary decisions and
              pure rationality, in reality there is much intuition. Intuition is the basis of
              collaboration, vision and innovation. When it's not, the human factor gets lost and
              suffering and problems arise — whether technical in nature or not.
            </p>
            <p className="mt-4">
              When I stand with my feet bridging the mind and heart, energy flows and success comes
              naturally.
            </p>
          </div>
          <img src={noRight} alt="No right, no wrong — only context" className="rounded-3xl w-full" />
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid md:grid-cols-2 gap-12">
          <div>
            <h2>Path to becoming an IT therapist</h2>
            <p className="mt-5">
              My interests have always been broad. My work has taken me into the most specialised
              fields — particle simulations for fusion power, chaos theory, quantum mechanics and AI —
              as well as enterprise-level administrative systems. I've always combined logical
              insights with those drawn from Ashtanga yoga, Buddhist philosophy, playing games and the
              experience of nature itself.
            </p>
            <p className="mt-4">
              By traveling the world and living in places such as Bhutan and Argentina I've come to
              realise most of what I do and truly am passionate about is being a guide while working
              with IT — and asking what it does to us as human beings.
            </p>
          </div>
          <div>
            <h2>Experience and credentials</h2>
            <p className="mt-5">
              My CV is long and broad. I've worked with many technical platforms, frameworks and
              languages — from the complex to the mundane. Those who have worked with me remember me
              as pragmatic, conscientious, knowledgeable and wise, with an eye and feeling for the
              human factor.
            </p>
            <p className="mt-4">
              You can find more information on my LinkedIn profile.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
