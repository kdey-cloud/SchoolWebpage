import ScrollReveal from "../components/ScrollReveal";

const schoolPhotos = {
  campus:
    "https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600",
  community:
    "https://images.unsplash.com/photo-1715741281686-61eeaf709de7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200",
};

const schoolValues = [
  {
    number: "01",
    title: "Curiosity",
    text: "We ask thoughtful questions and stay open to unexpected answers.",
    color: "bg-[#f6bd3c]",
  },
  {
    number: "02",
    title: "Courage",
    text: "We try, reflect, and grow—especially when learning feels difficult.",
    color: "bg-[#edf5fc]",
  },
  {
    number: "03",
    title: "Kindness",
    text: "We notice one another and choose actions that help everyone belong.",
    color: "bg-[#e8d2c1]",
  },
  {
    number: "04",
    title: "Craft",
    text: "We take pride in the care, patience, and imagination behind good work.",
    color: "bg-[#d7e9f8]",
  },
];

const schoolStats = [
  ["18", "Students per class"],
  ["12+", "Nationalities"],
  ["1:8", "Adult ratio"],
];

function OurSchool() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#f7f9fc] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="absolute right-[5%] top-12 h-5 w-5 rotate-45 bg-[#f6bd3c]" />

        <div className="mx-auto max-w-[1320px] text-center">
          <ScrollReveal>
            <p className="eyebrow">Our school</p>

            <h1 className="mx-auto mt-5 max-w-5xl text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-[#12376b] sm:text-7xl">
              A place to be known, challenged, and inspired.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-[#12376b]/60">
              Forma is a close-knit international community where ambitious
              learning and genuine care belong together.
            </p>
          </ScrollReveal>

          {/* Campus Image */}
          <ScrollReveal delay={0.2}>
            <div className="relative mx-auto mt-12 max-w-5xl">
              <div className="absolute -inset-3 rotate-1 rounded-[3rem] bg-[#0758a6]" />

              <img
                alt="A bright and welcoming early years classroom"
                className="relative aspect-[16/8] w-full -rotate-1 rounded-[3rem] border-8 border-white object-cover shadow-xl"
                src={schoolPhotos.campus}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Values */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <ScrollReveal>
            <div>
              <p className="eyebrow">What guides us</p>

              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] text-[#12376b] sm:text-6xl">
                Our values show up every day.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-[#12376b]/60">
                They shape how we teach, how we listen, and how our students
                learn to contribute to the communities around them.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {schoolValues.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.12}>
                <article
                  className={`h-full rounded-[2rem] p-7 transition-transform duration-300 hover:-translate-y-2 ${value.color}`}
                >
                  <p className="text-xs font-extrabold text-[#12376b]/40">
                    /{value.number}
                  </p>

                  <h3 className="mt-7 text-3xl font-extrabold tracking-[-0.04em] text-[#12376b]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#12376b]/60">
                    {value.text}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="overflow-hidden bg-[#0758a6] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-2 lg:items-center">
          {/* Community Image */}
          <ScrollReveal>
            <div className="relative pb-5">
              <img
                alt="Teacher speaking with students in the school community"
                className="aspect-[4/3] w-full rounded-[3rem] rounded-br-[8rem] border-8 border-white/15 object-cover"
                src={schoolPhotos.community}
              />

              <span className="absolute -bottom-1 right-8 rounded-[1.5rem] bg-[#f6bd3c] px-6 py-5 text-xl font-extrabold text-[#12376b]">
                Every child matters.
              </span>
            </div>
          </ScrollReveal>

          {/* Community Content */}
          <ScrollReveal delay={0.2}>
            <div className="lg:pl-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#f6bd3c]">
                One connected community
              </p>

              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] sm:text-6xl">
                Small enough to feel personal.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
                Teachers know their students well. Families are welcomed as
                partners. And every learner has the space to develop a voice,
                build strong relationships, and feel at home.
              </p>

              {/* School Statistics */}
              <div className="mt-9 grid grid-cols-3 gap-4 border-t border-white/15 pt-8">
                {schoolStats.map(([value, label], index) => (
                  <ScrollReveal key={label} delay={0.3 + index * 0.12}>
                    <div>
                      <p className="text-3xl font-extrabold text-[#f6bd3c]">
                        {value}
                      </p>

                      <p className="mt-1 text-xs leading-tight text-white/50">
                        {label}
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

export default OurSchool;