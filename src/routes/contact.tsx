import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useState } from "react";
import { Mail, Video } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Energy Integrated" },
      { name: "description", content: "Book a no-obligation 15-minute conversation, or get in touch via email." },
    ],
  }),
  component: ContactPage,
});

const steps = [
  "Briefly share what you are looking for",
  "Get to know me and learn my methods",
  "Discuss rates and session goals",
  "Discuss availability to check for compatibility",
  "Schedule your initial session",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout hideCTA>
      <section className="py-20 md:py-28">
        <div className="container-x max-w-3xl text-center">
          <p className="eyebrow">Get in touch</p>
          <h1 className="mt-2">Talk with me or schedule a session.</h1>
          <p className="mt-6 text-lg">
            Want to start the conversation or schedule a session? Reach out from where you are.
            Whether you're coming from the human or the technology perspective, we can quickly
            determine how to begin.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x grid lg:grid-cols-[1.2fr_1fr] gap-10">
          {/* Form */}
          <div className="rounded-3xl bg-primary-100 p-8 md:p-10 border border-border">
            <h2 className="text-2xl">Book a no-obligation 15-minute conversation</h2>
            {submitted ? (
              <div className="mt-6 rounded-xl bg-primary-200 text-primary-700 p-5">
                Your form has been successfully submitted. I'll be in touch soon.
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <Field label="What needs to get done?" name="topic" />
                <div>
                  <label className="text-sm font-medium block mb-1">Tell me more</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 outline-none focus:border-primary-600"
                  />
                </div>
                <p className="text-xs text-neutral-600">
                  By submitting this form, you accept the risks of changing your perspective on life.
                </p>
                <button type="submit" className="btn btn-primary">Send</button>
              </form>
            )}
          </div>

          {/* Aside */}
          <div className="space-y-6">
            <InfoCard icon={Video} title="Online hangout" body="I work online and on-site depending on the necessities of the situation." link="Schedule a call →" />
            <InfoCard icon={Mail} title="Mail" body="enquiry@energyintegrated.com — sometimes the written word conveys best what you are thinking." link="Send a message →" />
            <div className="rounded-3xl bg-secondary-200 p-6 border border-border">
              <p className="eyebrow">What to expect</p>
              <ol className="mt-4 space-y-3">
                {steps.map((s, i) => (
                  <li key={s} className="flex gap-3 items-start text-sm">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-primary-600 text-primary-100 grid place-items-center text-xs font-semibold">
                      {i + 1}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium block mb-1">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-border bg-card px-4 py-3 outline-none focus:border-primary-600"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, body, link }: { icon: React.ComponentType<{ className?: string }>; title: string; body: string; link: string }) {
  return (
    <div className="rounded-3xl bg-card border border-border p-6 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-primary-200 text-primary-700 grid place-items-center">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="mt-4 text-lg">{title}</h3>
      <p className="mt-2 text-sm">{body}</p>
      <p className="mt-3 text-sm text-primary-600 font-medium">{link}</p>
    </div>
  );
}
