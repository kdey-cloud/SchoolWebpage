const lifePhotos = {
  hero: "https://images.unsplash.com/photo-1791064482551-455a790c5b5b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600",
  sport: "https://images.unsplash.com/photo-1581929316882-6709df8c555b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
  clubs: "https://images.unsplash.com/photo-1761039808159-f02b58f07032?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
  community: "https://images.unsplash.com/photo-1727796027198-a652c639ee20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
};

function StudentLife() {
  return (
    <>
      <section className="relative min-h-[680px] overflow-hidden bg-[#12376b]">
        <img alt="Students playing together on a colorful school court" className="absolute inset-0 h-full w-full object-cover opacity-55" src={lifePhotos.hero} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12376b] via-[#12376b]/80 to-transparent" />
        <div className="relative mx-auto flex min-h-[680px] max-w-[1320px] items-center px-5 py-20 sm:px-8 lg:px-10">
          <div className="max-w-3xl text-white">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#f6bd3c]">Student life</p>
            <h1 className="mt-5 text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-7xl">
              Full days. Bright ideas. Real friendships.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">
              Beyond lessons, students find new interests, test their courage, and create the
              shared experiences that make school memorable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Beyond the classroom</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] text-[#12376b] sm:text-6xl">Something for every kind of energy.</h2>
            </div>
            <p className="max-w-md text-[#12376b]/60">Movement, creativity, service, and friendship all have a place in a balanced school day.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Sports & movement", "Team games, swimming, movement, and outdoor play build confidence and healthy habits.", lifePhotos.sport, "bg-[#f6bd3c]"],
              ["Clubs & interests", "Student choice opens the door to coding, performance, making, debate, and more.", lifePhotos.clubs, "bg-[#2f86cf]"],
              ["Community events", "Celebrations, showcases, and family days bring our international community together.", lifePhotos.community, "bg-[#b66a32]"],
            ].map(([title, text, image, color]) => (
              <article className="group overflow-hidden rounded-[2.2rem] bg-white shadow-[0_14px_40px_rgb(18_55_107_/_8%)]" key={title}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={image} />
                </div>
                <div className="relative p-7">
                  <span className={`absolute -top-5 right-7 h-10 w-10 rotate-12 rounded-xl ${color}`} />
                  <h3 className="text-3xl font-extrabold tracking-[-0.04em] text-[#12376b]">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#12376b]/60">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">A day at Forma</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] text-[#12376b] sm:text-6xl">A rhythm that keeps children engaged.</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#12376b]/60">
              Focused learning, social time, movement, and reflection are thoughtfully balanced
              throughout the day.
            </p>
          </div>
          <div className="space-y-3">
            {[
              ["07:45", "A warm welcome", "Students settle in, reconnect with friends, and prepare for the day."],
              ["08:15", "Deep learning", "Core lessons and projects make the most of fresh morning energy."],
              ["12:00", "Lunch & play", "Time to eat well, move freely, and enjoy being together."],
              ["13:00", "Create & explore", "Arts, languages, inquiry, and specialist learning fill the afternoon."],
              ["15:15", "Clubs & home time", "The day closes with activities, reflection, and a calm transition home."],
            ].map(([time, title, text]) => (
              <div className="grid gap-3 rounded-[1.5rem] border border-[#12376b]/10 p-5 sm:grid-cols-[80px_160px_1fr] sm:items-center" key={time}>
                <p className="font-extrabold text-[#0758a6]">{time}</p>
                <h3 className="font-extrabold text-[#12376b]">{title}</h3>
                <p className="text-sm leading-relaxed text-[#12376b]/55">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6bd3c] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-7 sm:flex-row sm:items-center">
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-[-0.045em] text-[#12376b] sm:text-5xl">Come experience a Forma school day.</h2>
          <a className="shrink-0 rounded-full bg-[#12376b] px-7 py-4 font-extrabold text-white" href="/enquiry">Book a visit</a>
        </div>
      </section>
    </>
  );
}

export default StudentLife;
