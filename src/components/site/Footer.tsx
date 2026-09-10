import { Link } from "@tanstack/react-router";

export function ScheduleCTA() {
  return (
    <section className="bg-primary-100 py-20 md:py-28">
      <div className="container-x grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="eyebrow">Schedule a free call</p>
          <h2 className="mt-3">No matter who you are or where you are, if you are looking for guidance, it's here now.</h2>
        </div>
        <div className="space-y-6">
          <p className="text-lg">
            So, let's make it easy. Schedule a free 15 minute consultation to get to know each other
            or directly book a session.
          </p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="container-x py-12 grid md:grid-cols-3 gap-8">
        <div>
          <p className="font-serif text-xl mb-3">Energy Integrated</p>
          <p className="text-sm text-white/70 italic">
            "There is no one right way, there is however a right way for each context."
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold mb-3 text-white">Navigate</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-secondary-500">Home</Link></li>
            <li><Link to="/services" className="hover:text-secondary-500">Services</Link></li>
            <li><Link to="/about" className="hover:text-secondary-500">About Me</Link></li>
            <li><Link to="/contact" className="hover:text-secondary-500">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold mb-3 text-white">Contact</p>
          <p className="text-sm text-white/70">enquiry@energyintegrated.com</p>
          <p className="text-sm text-white/70 mt-2">Online &amp; on-site, worldwide</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-white/50 text-center">
          ©2008–2068 Energy Integrated · KvK nr. 01125880 · VAT nr. NL001439783B62
        </div>
      </div>
    </footer>
  );
}
