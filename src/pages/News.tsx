const newsImages = {
  featured:
    "https://images.unsplash.com/photo-1636202339022-7d67f7447e3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600",
  reading:
    "https://images.unsplash.com/photo-1588072432904-843af37f03ed?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
  together:
    "https://images.unsplash.com/photo-1727473704274-3fbad0dbbd60?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
  creative:
    "https://images.unsplash.com/photo-1620679860437-e59fdf6024f4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
};

const stories = [
  {
    category: "Learning",
    date: "12 May 2025",
    title: "Reading buddies build confidence across year groups",
    summary: "Older and younger learners discover how much they can teach one another.",
    image: newsImages.reading,
    color: "bg-[#f6bd3c]",
  },
  {
    category: "Community",
    date: "06 May 2025",
    title: "A joyful morning with our Forma families",
    summary: "Families joined us on campus for shared activities, conversation, and plenty of smiles.",
    image: newsImages.together,
    color: "bg-[#2f86cf]",
  },
  {
    category: "Creativity",
    date: "29 April 2025",
    title: "Young artists turn big ideas into bold work",
    summary: "Our latest studio project invited students to explore color, texture, and self-expression.",
    image: newsImages.creative,
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

function News() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#12376b] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="absolute -right-24 -top-36 h-96 w-96 rounded-full border-[64px] border-white/5" />
        <div className="absolute bottom-12 left-[8%] h-5 w-5 rotate-12 rounded-sm bg-[#f6bd3c]" />
        <div className="relative mx-auto max-w-[1320px]">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#f6bd3c]">From our community</p>
          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-7xl">
              News, stories &amp; school life.
            </h1>
            <p className="max-w-md text-base leading-relaxed text-white/65">
              Discover the moments, ideas, and people that make every week at Forma Academy
              meaningful.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1320px]">
          <p className="eyebrow mb-7">Featured story</p>
          <article className="group grid overflow-hidden rounded-[2.5rem] bg-white shadow-[0_18px_55px_rgb(18_55_107_/_10%)] lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[380px] overflow-hidden lg:min-h-[540px]">
              <img
                alt="Students learning together in a bright classroom"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                src={newsImages.featured}
              />
              <span className="absolute left-6 top-6 rounded-full bg-[#f6bd3c] px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-[#12376b]">
                School life
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#a6602c]">18 May 2025 · 4 min read</p>
              <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.045em] text-[#12376b] sm:text-5xl">
                Curiosity takes the lead in our new discovery spaces.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#12376b]/60">
                From open-ended science challenges to collaborative building projects, our
                redesigned classrooms are helping learners ask bigger questions and find their
                own way forward.
              </p>
              <a className="primary-button mt-8 w-fit" href="#latest-stories">
                Read the story <Arrow />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="latest-stories" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Latest stories</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] text-[#12376b] sm:text-5xl">
                Life at Forma, lately.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#12376b]/55">
              Learning highlights, community celebrations, and a closer look at the everyday
              moments we value.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {stories.map((story) => (
              <article
                className="group overflow-hidden rounded-[2rem] border border-[#12376b]/10 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgb(18_55_107_/_12%)]"
                key={story.title}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    src={story.image}
                  />
                  <span className={`absolute bottom-4 left-4 rounded-full px-4 py-2 text-xs font-extrabold text-[#12376b] ${story.color}`}>
                    {story.category}
                  </span>
                </div>
                <div className="p-7">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#12376b]/40">{story.date}</p>
                  <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.035em] text-[#12376b]">
                    {story.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#12376b]/55">{story.summary}</p>
                  <a className="mt-6 inline-flex items-center gap-3 text-sm font-extrabold text-[#0758a6]" href="#latest-stories">
                    Read more <Arrow diagonal />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="relative mx-auto flex max-w-[1320px] flex-col justify-between gap-8 overflow-hidden rounded-[2.5rem] bg-[#f6bd3c] p-8 sm:p-12 lg:flex-row lg:items-center lg:p-14">
          <div className="absolute -bottom-24 right-[8%] h-64 w-64 rounded-full border-[48px] border-white/20" />
          <div className="relative">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#a6602c]">Stay connected</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-[-0.045em] text-[#12376b] sm:text-5xl">
              The best of Forma, delivered monthly.
            </h2>
          </div>
          <a
            className="relative flex w-fit shrink-0 items-center gap-5 rounded-full bg-[#12376b] px-7 py-4 font-extrabold text-white transition hover:-translate-y-1"
            href="mailto:hello@forma.academy?subject=Forma%20newsletter"
          >
            Join our newsletter <Arrow />
          </a>
        </div>
      </section>
    </>
  );
}

export default News;
