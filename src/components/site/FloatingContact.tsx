import { MessageCircle, Phone } from "lucide-react";

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 print:hidden">
      <a
        href="https://wa.me/916394861699"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MiTurtle on WhatsApp"
        className="group flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_rgba(16,185,129,0.6)] transition-transform hover:-translate-y-0.5"
        style={{ background: "var(--gradient-emerald)" }}
      >
        <MessageCircle className="size-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
      <a
        href="tel:+916394861699"
        aria-label="Call MiTurtle"
        className="flex items-center gap-2 rounded-full border border-white/10 bg-background/80 px-4 py-3 text-sm font-semibold backdrop-blur transition-transform hover:-translate-y-0.5"
      >
        <Phone className="size-4 text-emerald-glow" />
        <span className="hidden sm:inline">+91 63948 61699</span>
      </a>
    </div>
  );
}
