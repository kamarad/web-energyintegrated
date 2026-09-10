import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Users, Brain, Heart, Sparkles, Stethoscope, Search, Target, Compass } from "lucide-react";
import headShot from "@/assets/site/head-shot.png";
import casper from "@/assets/site/casper.png";
import psychic from "@/assets/site/psychic.png";
import audit from "@/assets/site/audit.png";
import itTherapist from "@/assets/site/it-therapist.png";
import heroNew from "@/assets/site/hero-new.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Energy Integrated — A clear way forward through silence" },
      { name: "description", content: "A clear way forward through silence. Guidance, IT therapy, psychic IT reading and audits for individuals, teams and executive leadership." },
    ],
  }),
  component: HomePage,
});

const guidance = [
  { icon: Users, title: "Guidance for me", text: "Personal intuitive realignment for clarity and direction." },
  { icon: Users, title: "Guidance for us", text: "Team alignment, communication and collaborative momentum." },
  { icon: Users, title: "Guidance for Executive Leadership", text: "Strategy, vision and humane decision-making at the top." },
];

const offerings = [
  { img: psychic, title: "Psychic IT Reading", text: "Receive messages from higher sources to determine the right way forward with your technology, people, process, project, or product. Clear and precise." },
  { img: audit, title: "IT audits", text: "Using deep IT knowledge and channeled messages I take a temperature of the state of your project. Get RCA in hours." },
  { img: itTherapist, title: "IT therapist", text: "Diagnose and treat the Root Cause of IT problems through proven human techniques." },
];

const needs = [
  { icon: Target, title: "Performance Analysis", text: "Something is not giving you the result you expected. What is driving these results?" },
  { icon: Heart, title: "Personal growth", text: "Something wants to come out, something wants to be heard, you want to make a move, change your energy. Feel connected again." },
  { icon: Search, title: "Root Cause Analysis", text: "Something is not right but you can't put your finger on it — is it people, process, product or technology?" },
  { icon: Compass, title: "Strategy & Vision", text: "Do you need a new tech, a change in process, or just get rid of the IT clutter? I'll guide you on your next step." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroNew})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="container-x relative z-10 py-28 md:py-36 min-h-screen flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="font-serif text-white">Energy Integrated.</h1>
            <p className="mt-5 text-xl md:text-2xl text-white/90 font-serif italic">
              A clear way forward through silence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary">Book a session</Link>
              <Link to="/contact" className="btn btn-secondary !text-white !border-white/40 hover:!bg-white/10">Contact me</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive guidance */}
      <section className="bg-primary-100 py-20">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <img src={headShot} alt="Online therapy session" className="rounded-3xl w-full max-w-md mx-auto" />
          <div>
            <p className="eyebrow">Comprehensive guidance</p>
            <h2 className="mt-2">Expertly tailored strategies and techniques, designed specifically for you.</h2>
            <p className="mt-4">
              Energy Integrated delivers an oasis in the forest of opinions and voices. Questions of
              who am I, who is my business, why is my business get resolved simply.
            </p>
            <div className="mt-6 space-y-4">
              {guidance.map((g) => (
                <div key={g.title} className="flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary-200 text-primary-700 grid place-items-center">
                    <g.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg">{g.title}</h3>
                    <p className="text-sm">{g.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-20">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Offerings</p>
            <h2 className="mt-2">Three doorways into the work.</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {offerings.map((o) => (
              <article key={o.title} className="rounded-2xl border border-border bg-card p-6 hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] rounded-xl bg-primary-100 overflow-hidden mb-5">
                  <img src={o.img} alt={o.title} className="w-full h-full object-cover" />
                </div>
                <h3>{o.title}</h3>
                <p className="mt-3 text-sm">{o.text}</p>
                <Link to="/services" className="inline-block mt-5 text-primary-600 font-medium text-sm hover:text-primary-700">
                  Learn More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-secondary-200 py-20">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow">About me</p>
            <h2 className="mt-2">My mission is to bring heart into the field of the mind.</h2>
            <p className="mt-2 script text-3xl">Casper Bodewitz</p>
            <p className="mt-6">
              With more than 20 years experience Energy Integrated has quietly and diligently delivered
              top-of-class IT solutions whilst developing an authentic business environment on both the
              individual and group level.
            </p>
            <p className="mt-4">
              Using intuition as a business tool to diagnose and solve technical and human problems,
              Energy Integrated has designed systems that respect both the nature and nurture of people
              and organisations. Profits turn into prosperity, growth into continuous transformation,
              and management into facilitating.
            </p>
            <Link to="/about" className="btn btn-primary mt-8">See More</Link>
          </div>
          <img src={casper} alt="Casper Bodewitz" className="rounded-3xl w-full max-w-md mx-auto" />
        </div>
      </section>

      {/* Vision banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <img src={heroNew} alt="Bridging technology and people" className="rounded-3xl w-full" />
          <div>
            <p className="text-lg">
              There is no one right way, there is however a right way for each context. Energy
              Integrated delivers its proven approach to all levels in the industry and brings a new
              level to the openness on which the tech revolution was founded.
            </p>
            <blockquote className="mt-8 border-l-4 border-secondary-500 pl-5 font-serif text-2xl italic text-neutral-800">
              "My vision is a world where people and technology do not compete."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Needs */}
      <section className="bg-primary-100 py-20">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Specialities</p>
            <h2 className="mt-2">Range of tools &amp; pros to meet your specific needs.</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {needs.map((n) => (
              <div key={n.title} className="bg-card rounded-2xl p-6 border border-border">
                <div className="w-12 h-12 rounded-xl bg-secondary-300 text-secondary-800 grid place-items-center">
                  <n.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-lg">{n.title}</h3>
                <p className="mt-2 text-sm">{n.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
