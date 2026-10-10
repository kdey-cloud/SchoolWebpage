
    import { useState } from "react";
    import Navbar from "../components/Navbar";
    import Footer from "../components/Footer";
    
    const photos = {
      writing:
        "https://images.unsplash.com/photo-1623287073501-8c849217c2fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxoYXBweSUyMGRpdmVyc2UlMjBwcmltYXJ5JTIwc2Nob29sJTIwY2hpbGRyZW4lMjBsZWFybmluZyUyMHdyaXRpbmd8ZW58MXx8fHwxNzkxNjA3OTk2fDA&ixlib=rb-4.1.0&q=85&w=1200",
      classroom:
        "https://images.unsplash.com/photo-1636202339022-7d67f7447e3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxoYXBweSUyMGRpdmVyc2UlMjBwcmltYXJ5JTIwc2Nob29sJTIwY2hpbGRyZW4lMjBsZWFybmluZyUyMHdyaXRpbmd8ZW58MXx8fHwxNzkxNjA3OTk2fDA&ixlib=rb-4.1.0&q=85&w=1400",
      together:
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxoYXBweSUyMGRpdmVyc2UlMjBwcmltYXJ5JTIwc2Nob29sJTIwY2hpbGRyZW4lMjBsZWFybmluZyUyMHdyaXRpbmd8ZW58MXx8fHwxNzkxNjA3OTk2fDA&ixlib=rb-4.1.0&q=85&w=1200",
    };
    
    const learningStages = [
      { number: "01", title: "Early Years", ages: "Ages 3–5", color: "bg-[#f6bd3c]" },
      { number: "02", title: "Primary", ages: "Grades 1–5", color: "bg-[#2f86cf]" },
      { number: "03", title: "Middle School", ages: "Grades 6–8", color: "bg-[#b66a32]" },
    ];
    
    function Arrow({ diagonal = false }: { diagonal?: boolean }) {
      return (
        <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
          <path
            d={diagonal ? "M6 18 18 6M9 6h9v9" : "M5 12h14m-5-5 5 5-5 5"}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      );
    }
    

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <main className="min-h-screen bg-white text-[#12376b]">
        <div className="bg-[#12376b] px-5 py-2.5 text-white">
          <div className="mx-auto flex max-w-[1400px] items-center justify-center gap-3 text-center text-xs font-semibold sm:justify-between">
            <p>Admissions are open for the 2025–26 school year</p>
            <div className="hidden items-center gap-6 sm:flex">
              <a className="text-white/75 hover:text-white" href="tel:+85512345678">+855 12 345 678</a>
              <a className="text-white/75 hover:text-white" href="mailto:hello@forma.academy">hello@forma.academy</a>
            </div>
          </div>
        </div>
        
  
        <Navbar />
  
        <section className="hero relative overflow-hidden bg-[#f7f9fc]">
          <div className="absolute left-[8%] top-14 h-3 w-3 rotate-45 bg-[#f6bd3c]" />
          <div className="absolute bottom-20 left-[46%] h-6 w-6 rotate-45 rounded-sm bg-[#f6bd3c]" />
          <div className="mx-auto grid min-h-[680px] max-w-[1400px] lg:grid-cols-[51%_49%]">
            <div className="relative z-10 flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
              <div className="mb-7 flex w-fit items-center gap-3 rounded-full bg-[#e9f3fc] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#0758a6]">
                <span className="h-2 w-2 rounded-full bg-[#f6bd3c]" />
                International learning, local heart
              </div>
              <h1 className="max-w-2xl text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-[#12376b] sm:text-7xl">
                Big futures start with{" "}
                <span className="relative inline-block text-[#0758a6]">
                  joyful learning.
                  <svg
                    aria-hidden="true"
                    className="absolute -bottom-3 left-0 h-4 w-full text-[#f6bd3c]"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 360 16"
                  >
                    <path d="M3 11C90 2 247 3 357 9" stroke="currentColor" strokeLinecap="round" strokeWidth="7" />
                  </svg>
                </span>
              </h1>
              <p className="mt-9 max-w-xl text-lg leading-relaxed text-[#12376b]/65">
                A caring international school where confident learners grow through strong
                academics, creative discovery, and meaningful friendships.
              </p>
  
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a className="primary-button" href="#admissions">
                  Book a school tour <Arrow />
                </a>
                <a className="secondary-button" href="#learning">
                  Explore learning
                </a>
              </div>
  
              <div className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-[#12376b]/15 border-y border-[#12376b]/15 py-5">
                {[
                  ["18", "Students per class"],
                  ["12+", "Nationalities"],
                  ["3–14", "Years of age"],
                ].map(([value, label]) => (
                  <div className="px-4 first:pl-0" key={label}>
                    <p className="text-2xl font-extrabold text-[#0758a6]">{value}</p>
                    <p className="mt-1 text-[10px] font-semibold uppercase leading-tight tracking-wide text-[#12376b]/50">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
  
            <div className="relative min-h-[590px] lg:min-h-full">
              <div className="absolute -right-24 -top-20 h-[120%] w-[88%] rotate-[8deg] rounded-[4rem] bg-[#0758a6]" />
              <div className="photo-card absolute left-[8%] top-[8%] h-[43%] w-[54%] -rotate-[5deg]">
                <img alt="Young learner writing in class" className="h-full w-full object-cover" src={photos.writing} />
              </div>
              <div className="photo-card absolute bottom-[6%] left-[2%] h-[45%] w-[54%] rotate-[4deg]">
                <img alt="Children learning together" className="h-full w-full object-cover" src={photos.together} />
              </div>
              <div className="photo-card absolute bottom-[12%] right-[-3%] h-[58%] w-[44%] -rotate-[3deg]">
                <img alt="Students in a bright classroom" className="h-full w-full object-cover" src={photos.classroom} />
              </div>
              <div className="absolute right-[31%] top-[9%] grid h-20 w-20 rotate-12 place-items-center rounded-[1.6rem] border-4 border-white bg-[#f6bd3c] text-center text-[10px] font-extrabold uppercase leading-tight tracking-wide text-[#12376b] shadow-lg">
                Learn
                <br />
                with joy
              </div>
            </div>
          </div>
          <div className="hero-stripe absolute bottom-0 left-0 right-0 h-3" />
        </section>
  
        <section className="bg-[#0758a6] px-5 py-5 text-white sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="font-bold">
              <span className="mr-3 text-[#f6bd3c]">New family welcome:</span>
              Personal campus tours every Tuesday and Thursday
            </p>
            <a className="flex items-center gap-3 text-sm font-bold" href="#admissions">
              Reserve your visit <Arrow />
            </a>
          </div>
        </section>
  
        <section id="learning" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[1320px]">
            <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow">Learning pathways</p>
                <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight tracking-[-0.045em] text-[#12376b] sm:text-6xl">
                  The right challenge at every age.
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-[#12376b]/60">
                Each stage combines academic foundations with curiosity, communication, and
                confidence.
              </p>
            </div>
  
            <div className="grid gap-5 md:grid-cols-3">
              {learningStages.map((stage) => (
                <a
                  className={`stage-card group relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-[2.2rem] p-7 ${stage.color}`}
                  href="#admissions"
                  key={stage.number}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold tracking-widest text-[#12376b]/65">/{stage.number}</span>
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-white/80 transition group-hover:rotate-45">
                      <Arrow diagonal />
                    </span>
                  </div>
                  <div className="relative z-10">
                    <p className="text-sm font-bold text-[#12376b]/65">{stage.ages}</p>
                    <h3 className="mt-2 text-4xl font-extrabold tracking-[-0.045em] text-[#12376b]">{stage.title}</h3>
                  </div>
                  <span className="absolute -bottom-14 -right-12 h-48 w-48 rounded-full border-[32px] border-white/20" />
                </a>
              ))}
            </div>
          </div>
        </section>
  
        <section id="our-school" className="overflow-hidden bg-[#edf5fc] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-2 lg:items-center">
            <div className="relative pb-10 pr-8">
              <div className="overflow-hidden rounded-[3rem] rounded-br-[9rem] border-[10px] border-white shadow-xl">
                <img alt="Children collaborating during a school lesson" className="aspect-[4/3] w-full object-cover" src={photos.together} />
              </div>
              <div className="absolute bottom-0 right-0 max-w-[210px] rounded-[2rem] bg-[#a6602c] p-6 text-white shadow-lg">
                <p className="text-3xl font-extrabold">Every child</p>
                <p className="mt-1 text-sm text-white/75">known, supported, and encouraged.</p>
              </div>
            </div>
            <div className="lg:pl-8">
              <p className="eyebrow">Why families choose Forma</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:text-6xl">
                A school that feels like a community.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#12376b]/65">
                Our teachers pair high expectations with genuine care. Students learn to ask good
                questions, express their ideas, and take thoughtful risks.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {["Bilingual learning", "Small class sizes", "Creative curriculum", "Family partnership"].map((item) => (
                  <div className="flex items-center gap-3 font-bold" key={item}>
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-[#f6bd3c]">
                      <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 16 16">
                        <path d="m3 8 3 3 7-7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
  
        <section id="admissions" className="relative overflow-hidden bg-[#12376b] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
          <div className="absolute -right-16 -top-32 h-80 w-80 rounded-full border-[50px] border-white/5" />
          <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div>
              <p className="eyebrow text-[#f6bd3c]">Admissions 2025–26</p>
              <h2 className="mt-4 max-w-3xl text-5xl font-extrabold leading-tight tracking-[-0.05em] sm:text-7xl">
                Come see what learning can feel like.
              </h2>
            </div>
            <a className="flex w-fit shrink-0 items-center gap-6 rounded-full bg-[#f6bd3c] px-8 py-5 font-extrabold text-[#12376b]" href="mailto:admissions@forma.academy">
              Start your enquiry <Arrow />
            </a>
          </div>
        </section>
  
        <Footer />
      </main>
    );
}

export default Home;