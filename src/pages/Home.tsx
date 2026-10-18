import ScrollReveal from "../components/ScrollReveal";
import PhotoAnimation from "../components/PhotoAnimation";
const photos = {
  writing:
    "/images/home_img/writing.jpg",
  classroom:
    "/images/home_img/classroom.jpg",
  together:
    "/images/home_img/together.jpg",
};

const learningStages = [
  {
    number: "01",
    title: "Early Years",
    ages: "Ages 3–5",
    color: "bg-[#f6bd3c]",
  },
  { number: "02", title: "Primary", ages: "Grades 1–5", color: "bg-[#2f86cf]" },
  {
    number: "03",
    title: "Middle School",
    ages: "Grades 6–8",
    color: "bg-[#b66a32]",
  },
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
  return (
    <main className="min-h-screen bg-white text-[#12376b]">
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
                  <path
                    d="M3 11C90 2 247 3 357 9"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="7"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-9 max-w-xl text-lg leading-relaxed text-[#12376b]/65">
              A caring international school where confident learners grow
              through strong academics, creative discovery, and meaningful
              friendships.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a className="primary-button" href="#admissions">
                Book a school tour <Arrow />
              </a>
              <a className="secondary-button" href="#learning">
                Explore learning
              </a>
            </div>

            <ScrollReveal delay={0.2}>
              <div className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-[#12376b]/15 border-y border-[#12376b]/15 py-5">
                {[
                  ["18", "Students per class"],
                  ["12+", "Nationalities"],
                  ["3–14", "Years of age"],
                ].map(([value, label]) => (
                  <div className="px-4 first:pl-0" key={label}>
                    <p className="text-2xl font-extrabold text-[#0758a6]">
                      {value}
                    </p>
                    <p className="mt-1 text-[10px] font-semibold uppercase leading-tight tracking-wide text-[#12376b]/50">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          <div className="relative min-h-[590px] lg:min-h-full">
            {/* Blue background */}
            <PhotoAnimation
              delay={0}
              rotate={8}
              className="absolute -right-24 -top-20 h-[120%] w-[88%] rounded-[4rem] bg-[#0758a6]"
            >
              <div className="h-full w-full rounded-[4rem]" />
            </PhotoAnimation>

            {/* Writing photo */}
            <PhotoAnimation
              delay={0.2}
              rotate={-5}
              className="photo-card absolute left-[8%] top-[8%] z-10 h-[43%] w-[54%]"
            >
              <img
                src={photos.writing}
                alt="Young learner writing in class"
                className="h-full w-full object-cover"
              />
            </PhotoAnimation>

            {/* Students learning together */}
            <PhotoAnimation
              delay={0.4}
              rotate={4}
              className="photo-card absolute bottom-[6%] left-[2%] z-20 h-[45%] w-[54%]"
            >
              <img
                src={photos.together}
                alt="Children learning together"
                className="h-full w-full object-cover"
              />
            </PhotoAnimation>

            {/* Classroom photo */}
            <PhotoAnimation
              delay={0.6}
              rotate={-3}
              className="photo-card absolute bottom-[12%] right-[-3%] z-30 h-[58%] w-[44%]"
            >
              <img
                src={photos.classroom}
                alt="Students in a bright classroom"
                className="h-full w-full object-cover"
              />
            </PhotoAnimation>

            {/* Learn with joy badge */}
            <PhotoAnimation
              delay={0.9}
              rotate={12}
              className="absolute right-[31%] top-[9%] z-40"
            >
              <div className="grid h-20 w-20 place-items-center rounded-[1.6rem] border-4 border-white bg-[#f6bd3c] text-center text-[10px] font-extrabold uppercase leading-tight tracking-wide text-[#12376b] shadow-lg">
                Learn
                <br />
                with joy
              </div>
            </PhotoAnimation>
          </div>
        </div>
        <div className="hero-stripe absolute bottom-0 left-0 right-0 h-3" />
      </section>

      <section className="bg-[#0758a6] px-5 py-5 text-white sm:px-8 lg:px-10">
        <ScrollReveal delay={0.1}>
          <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="font-bold">
              <span className="mr-3 text-[#f6bd3c]">New family welcome:</span>
              Personal campus tours every Tuesday and Thursday
            </p>
            <a
              className="flex items-center gap-3 text-sm font-bold"
              href="#admissions"
            >
              Reserve your visit <Arrow />
            </a>
          </div>
        </ScrollReveal>
      </section>

      <section id="learning" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <ScrollReveal delay={0.1}>
                <p className="eyebrow">Learning pathways</p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight tracking-[-0.045em] text-[#12376b] sm:text-6xl">
                  The right challenge at every age.
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.3}>
              <p className="max-w-md text-base leading-relaxed text-[#12376b]/60">
                Each stage combines academic foundations with curiosity,
                communication, and confidence.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {learningStages.map((stage, index) => (
              <ScrollReveal key={stage.number} delay={index * 0.2}>
                <a
                  className={`stage-card group relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-[2.2rem] p-7 ${stage.color}`}
                  href="#admissions"
                  key={stage.number}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold tracking-widest text-[#12376b]/65">
                      /{stage.number}
                    </span>
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-white/80 transition group-hover:rotate-45">
                      <Arrow diagonal />
                    </span>
                  </div>
                  <div className="relative z-10">
                    <p className="text-sm font-bold text-[#12376b]/65">
                      {stage.ages}
                    </p>
                    <h3 className="mt-2 text-4xl font-extrabold tracking-[-0.045em] text-[#12376b]">
                      {stage.title}
                    </h3>
                  </div>
                  <span className="absolute -bottom-14 -right-12 h-48 w-48 rounded-full border-[32px] border-white/20" />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="our-school"
        className="overflow-hidden bg-[#edf5fc] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-2 lg:items-center">
          {/* Left: Image and floating card */}
          <ScrollReveal>
            <div className="relative pb-10 pr-8">
              <div className="overflow-hidden rounded-[3rem] rounded-br-[9rem] border-[10px] border-white shadow-xl">
                <img
                  alt="Children collaborating during a school lesson"
                  className="aspect-[4/3] w-full object-cover"
                  src={photos.together}
                />
              </div>

              <div className="absolute bottom-0 right-0 max-w-[210px] rounded-[2rem] bg-[#a6602c] p-6 text-white shadow-lg">
                <p className="text-3xl font-extrabold">Every child</p>

                <p className="mt-1 text-sm text-white/75">
                  known, supported, and encouraged.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: School information */}
          <ScrollReveal delay={0.2}>
            <div className="lg:pl-8">
              <p className="eyebrow">Why families choose Forma</p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:text-6xl">
                A school that feels like a community.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#12376b]/65">
                Our teachers pair high expectations with genuine care. Students
                learn to ask good questions, express their ideas, and take
                thoughtful risks.
              </p>

              {/* School features */}
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  "Bilingual learning",
                  "Small class sizes",
                  "Creative curriculum",
                  "Family partnership",
                ].map((item, index) => (
                  <ScrollReveal key={item} delay={0.3 + index * 0.12}>
                    <div className="flex items-center gap-3 font-bold">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#f6bd3c]">
                        <svg
                          aria-hidden="true"
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="m3 8 3 3 7-7"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </span>

                      {item}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section
        id="admissions"
        className="relative overflow-hidden bg-[#12376b] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24"
      >
        {/* Decorative circle */}
        <div className="absolute -right-16 -top-32 h-80 w-80 rounded-full border-[50px] border-white/5" />

        <div className="relative mx-auto flex max-w-[1320px] flex-col justify-between gap-10 lg:flex-row lg:items-center">
          {/* Heading animation */}
          <ScrollReveal>
            <div>
              <p className="eyebrow text-[#f6bd3c]">Admissions 2025–26</p>

              <h2 className="mt-4 max-w-3xl text-5xl font-extrabold leading-tight tracking-[-0.05em] sm:text-7xl">
                Come see what learning can feel like.
              </h2>
            </div>
          </ScrollReveal>

          {/* Button animation */}
          <ScrollReveal delay={0.3}>
            <a
              className="flex w-fit shrink-0 items-center gap-6 rounded-full bg-[#f6bd3c] px-8 py-5 font-extrabold text-[#12376b] transition duration-300 hover:-translate-y-1 hover:bg-white"
              href="/enquiry"
            >
              Start your enquiry <Arrow />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

export default Home;
