import { Navbar } from "./Navbar";
import { Footer, ScheduleCTA } from "./Footer";

export function SiteLayout({ children, hideCTA = false }: { children: React.ReactNode; hideCTA?: boolean }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      {!hideCTA && <ScheduleCTA />}
      <Footer />
    </div>
  );
}
