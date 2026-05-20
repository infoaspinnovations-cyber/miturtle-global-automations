import trustedBy from "@/assets/trusted-by.png";
import { SectionHeader } from "./Section";

export function TrustedBy() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Trusted By"
          title={<>Engineered for the <span className="text-gradient-emerald">institutions that move nations.</span></>}
          description="From government ministries and defense premises to global enterprises and academic institutions — MiTurtle® powers the entrances that matter."
          center
        />
        <div className="mt-14 overflow-hidden rounded-3xl glass-strong p-2">
          <div className="rounded-2xl bg-white p-6 md:p-10">
            <img
              src={trustedBy}
              alt="Organizations trusting MiTurtle® — GMR, BHEL, CPWD, Ministry of Home Affairs, IIM Udaipur, Ashoka University, L&T, IndianOil, Bihar Vidhan Sabha, Pind Baluchi, Hindustan Times, HP, Birla Opus, IIT, PPAP, The Muthoot Group, TATA and more."
              loading="lazy"
              className="mx-auto w-full max-w-5xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
