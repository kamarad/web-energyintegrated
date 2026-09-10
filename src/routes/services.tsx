import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Sparkles, Stethoscope, ClipboardCheck, Layers, Leaf } from "lucide-react";
import itTherapist from "@/assets/site/it-therapist.png";
import psychic from "@/assets/site/psychic.png";
import audit from "@/assets/site/audit.png";
import graphicAssess from "@/assets/site/graphic-assessments.svg";
import graphicAstro from "@/assets/site/graphic-astrology.svg";
import graphicPsy from "@/assets/site/graphic-psychotherapy.svg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Energy Integrated" },
      { name: "description", content: "IT therapy, Psychic IT reading, IT audits, Blueprint design and Energetic growth work — holistic DevOps for people and technology." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Stethoscope, img: itTherapist, title: "IT therapy", text: "Apply life experiences, technology-specific working standards and programs that remove pain from work and respite from pressure, recycling wasted energy into productivity. Growth is delivered from the principle that it knows no speed — control is an illusion." },
  { icon: Sparkles, img: psychic, title: "Psychic IT Reading", text: "Receive messages from higher sources to determine the right way forward with your technology. For the academically trained I complement rational analysis to see the logic in magic. For the practically inclined I uncover the power of self-reflection on intuition." },
  { icon: ClipboardCheck, img: audit, title: "IT audits", text: "Using deep IT knowledge and channeled messages I identify the state of your project regardless of its size. The road towards your goals might not be straightforward, but the issue and causes will be. Now you can take precise action. Get RCA in hours." },
  { icon: Layers, img: graphicAssess, title: "Blueprint design", text: "Between the old and the new a current of technology and human energy flows. High tech can meet resistance as it causes misalignment with the rhythms of people. From my vast archive of blueprints I deliver context-aware technical and human architectures." },
  { icon: Leaf, img: graphicPsy, title: "Energetic growth work", text: "When you allow the realm beyond words to help you heal and grow, improvements become sustainable. From my connection to ancient wisdom, with a calm presence, I execute energetic and technical audits, apply energy massages, and offer in-house living transformations." },
];

const specialities = [
  { title: "Find your core", text: "In order to move forward and overcome obstacles, I'll give you the core statement you need on your wall." },
  { title: "Get the right structure", text: "To build you need structure. I have the library — I'll look up the one to fit your needs." },
  { title: "Consult your technological conscious", text: "There is no one right way, there is however a right way for each context." },
  { title: "Receive a message from the divine", text: "Do you need a personal mirror? Nothing beats your higher self." },
  { title: "Direct RCA on performance", text: "RCA on performance issues, technical or personal. Based on decades of handcrafted solutions, applied to the now." },
  { title: "Breakdown the complexity", text: "Sanity assessments walk through your processes, literally and figuratively, to diagnose, refer or empower self-healing of any obstacles." },
  { title: "Uncover genius solutions", text: "Sometimes you need to be outside the box to see the solution. Get inspired, be amazed." },
  { title: "Restore harmony", text: "Silence. Discover this ancient and tested path to the core of who you are. Together we move you towards a lighter, uncluttered person." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="py-20 md:py-28 bg-primary-100">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Services</p>
          <h1 className="mt-2">Holistic DevOps for people and technology.</h1>
          <p className="mt-6 text-lg">
            Growth is delivered through the Holistic DevOps method that prunes, weeds, nourishes and
            creates space continuously. Letting AI technology do what it does best — automate, assist,
            visualise — and letting humans bring their best: innovation, careful assessment of future
            needs, social value, intuition and chaos. Here you find dedicated solutions to integrate
            into your life and organisation.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x space-y-16">
          {services.map((s, i) => (
            <article key={s.title} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="rounded-3xl overflow-hidden bg-secondary-200 aspect-[4/3] flex items-center justify-center">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-200 text-primary-700 grid place-items-center mb-4">
                  <s.icon className="w-6 h-6" />
                </div>
                <h2>{s.title}</h2>
                <p className="mt-4">{s.text}</p>
                <Link to="/contact" className="inline-block mt-6 text-primary-600 font-medium hover:text-primary-700">
                  Learn More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary-200 py-20">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Specialities</p>
            <h2 className="mt-2">Range of specialities to meet your specific needs.</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialities.map((s) => (
              <div key={s.title} className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="text-lg">{s.title}</h3>
                <p className="mt-2 text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
