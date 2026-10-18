import ScrollReveal from "../components/ScrollReveal";

const learningPhotos = {
  hero: "/images/learning_img/learning-hero.jpg",
  classroom: "/images/learning_img/learning-classroom.jpg",
};

const pathways = [
  {
    years: "Ages 3–5",
    title: "Early Years",
    text: "Playful discovery builds language, confidence, and a lifelong appetite for learning.",
    color: "bg-[#f6bd3c]",
  },
  {
    years: "Grades 1–5",
    title: "Primary",
    text: "Strong foundations grow through meaningful projects, creative thinking, and collaboration.",
    color: "bg-[#2f86cf]",
  },
  {
    years: "Grades 6–8",
    title: "Middle School",
    text: "Increasing independence prepares students to question deeply, communicate clearly, and lead.",
    color: "bg-[#b66a32]",
  },
];

const learningPillars = [
  {
    title: "Strong foundations",
    text: "Literacy, mathematics, science, and languages taught with clarity and purpose.",
  },
  {
    title: "Creative practice",
    text: "Art, design, music, and making woven into everyday learning.",
  },
  {
    title: "Global perspective",
    text: "Different cultures and viewpoints help students understand their place in the world.",
  },
  {
    title: "Personal growth",
    text: "Reflection, relationships, and wellbeing support every learner’s confidence.",
  },
];

function Learning() {
  return (
    <>
      {/* Hero Section */}
      <section className="overflow-hidden bg-[#edf5fc] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
          {/* Hero Text */}
          <ScrollReveal>
            <div>
              <p className="eyebrow">Learning at Forma</p>

              <h1 className="mt-5 text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-[#12376b] sm:text-7xl">
                Learning that moves with every child.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#12376b]/65">
                Our curriculum combines academic depth with creativity,
                wellbeing, and real-world connection—helping students
                understand both what they learn and why it matters.
              </p>

              <a className="primary-button mt-8" href="#pathways">
                Explore our pathways
              </a>
            </div>
          </ScrollReveal>

          {/* Hero Image */}
          <ScrollReveal delay={0.2}>
            <div className="relative min-h-[440px] sm:min-h-[560px]">
              <div className="absolute inset-6 rotate-3 rounded-[3rem] bg-[#f6bd3c]" />

              <img
                alt="A teacher supporting a young learner in class"
                className="absolute inset-0 h-full w-full -rotate-2 rounded-[3rem] object-cover shadow-2xl"
                src={learningPhotos.hero}
              />

              <div className="absolute -bottom-4 -left-3 max-w-[190px] rotate-2 rounded-[1.8rem] border-4 border-white bg-[#0758a6] p-5 text-white shadow-xl">
                <p className="text-3xl font-extrabold">Think.</p>
                <p className="text-3xl font-extrabold text-[#f6bd3c]">
                  Make.
                </p>
                <p className="text-3xl font-extrabold">Grow.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Learning Pathways */}
      <section
        id="pathways"
        className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-[1320px]">
          <ScrollReveal>
            <div className="mb-12 max-w-3xl">
              <p className="eyebrow">A clear journey</p>

              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] text-[#12376b] sm:text-6xl">
                The right balance at every stage.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-3">
            {pathways.map((pathway, index) => (
              <ScrollReveal key={pathway.title} delay={index * 0.15}>
                <article
                  className={`relative min-h-[360px] overflow-hidden rounded-[2.2rem] p-8 ${pathway.color} transition-transform duration-300 hover:-translate-y-2`}
                >
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#12376b]/55">
                    0{index + 1} · {pathway.years}
                  </p>

                  <h3 className="mt-6 text-4xl font-extrabold tracking-[-0.045em] text-[#12376b]">
                    {pathway.title}
                  </h3>

                  <p className="mt-5 max-w-sm leading-relaxed text-[#12376b]/65">
                    {pathway.text}
                  </p>

                  <span className="absolute -bottom-16 -right-14 h-52 w-52 rounded-full border-[36px] border-white/20" />
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Pillars */}
      <section className="bg-[#12376b] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-2 lg:items-center">
          {/* Classroom Image */}
          <ScrollReveal>
            <img
              alt="Students collaborating around a classroom table"
              className="aspect-[4/3] w-full rounded-[2.5rem] object-cover"
              src={learningPhotos.classroom}
            />
          </ScrollReveal>

          {/* Pillar Content */}
          <ScrollReveal delay={0.2}>
            <div className="lg:pl-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#f6bd3c]">
                Our learning pillars
              </p>

              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl">
                Knowledge becomes capability.
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {learningPillars.map((pillar, index) => (
                  <ScrollReveal key={pillar.title} delay={index * 0.12}>
                    <div className="h-full rounded-[1.5rem] bg-white/8 p-5 transition-colors duration-300 hover:bg-white/15">
                      <h3 className="font-extrabold text-[#f6bd3c]">
                        {pillar.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-white/60">
                        {pillar.text}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default Learning;