import { useState } from "react";
import { supabase } from "../utils/supabase";

function Arrow() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function DetailIcon({ type }: { type: "clock" | "mail" | "visit" }) {
  const paths = {
    clock: <path d="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
    mail: <path d="m4 6 8 6 8-6M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" />,
    visit: <path d="M12 21s7-5.1 7-12A7 7 0 1 0 5 9c0 6.9 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
  };

  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {paths[type]}
    </svg>
  );
}

function Enquiry() {
  const [enquirySent, setEnquirySent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(
  event: React.FormEvent<HTMLFormElement>
) {
  event.preventDefault();

  if (isSubmitting) return;

  setIsSubmitting(true);
  setErrorMessage("");

  const form = event.currentTarget;
  const formData = new FormData(form);

  const enquiry = {
    parent_name: String(formData.get("parentName") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim() || null,
    child_name: String(formData.get("childName") ?? "").trim(),
    child_age: Number(formData.get("childAge")),
    start_date: String(formData.get("startDate") ?? ""),
    message: String(formData.get("message") ?? "").trim() || null,
    consent: formData.get("consent") === "on",
  };

  try {
    const { error } = await supabase
      .from("admissions_enquiries")
      .insert(enquiry);

    if (error) {
      throw error;
    }

    setEnquirySent(true);
    form.reset();
  } catch (error) {
    console.error("Failed to submit enquiry:", error);

    setErrorMessage(
      "We couldn't submit your enquiry. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }
}

  return (
    <section className="relative min-h-[calc(100vh-9.5rem)] overflow-hidden bg-[#edf5fc] px-5 py-12 sm:px-8 lg:px-10 lg:py-20">
      <div className="absolute -left-20 top-24 h-64 w-64 rounded-full border-[44px] border-white/60" />
      <div className="absolute bottom-16 right-[4%] h-6 w-6 rotate-12 rounded-md bg-[#f6bd3c]" />

      <div className="relative mx-auto mb-6 max-w-[1320px]">
        <a
          className="inline-flex items-center gap-2 text-sm font-extrabold text-[#0758a6] transition hover:-translate-x-1"
          href="/"
        >
          <span aria-hidden="true">←</span> Back to home
        </a>
      </div>

      <div className="relative mx-auto grid max-w-[1320px] overflow-hidden rounded-[2.5rem] bg-white shadow-[0_24px_70px_rgb(18_55_107_/_12%)] lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative overflow-hidden bg-[#0758a6] p-8 text-white sm:p-12 lg:p-14">
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full border-[54px] border-white/5" />
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#f6bd3c]">Admissions enquiry</p>
          <h2 className="mt-5 max-w-md text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:text-5xl">
            Let&apos;s begin your family&apos;s Forma story.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
            Tell us a little about your child and what you are looking for. Our admissions team
            will guide you through every next step.
          </p>

          <div className="mt-10 space-y-6 border-t border-white/15 pt-8">
            {[
              { icon: "clock" as const, title: "A personal reply", text: "Within two school days" },
              { icon: "visit" as const, title: "Campus visits", text: "Tuesday and Thursday" },
              { icon: "mail" as const, title: "Prefer email?", text: "admissions@forma.academy" },
            ].map((detail) => (
              <div className="flex items-start gap-4" key={detail.title}>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-[#f6bd3c]">
                  <DetailIcon type={detail.icon} />
                </span>
                <div>
                  <p className="font-extrabold">{detail.title}</p>
                  <p className="mt-1 text-sm text-white/60">{detail.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 sm:p-12 lg:p-14">
          {enquirySent ? (
            <div className="flex min-h-[560px] flex-col items-center justify-center text-center">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-[#f6bd3c] text-[#12376b]">
                <svg aria-hidden="true" className="h-9 w-9" fill="none" viewBox="0 0 24 24">
                  <path d="m5 12 4 4L19 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
                </svg>
              </span>
              <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.16em] text-[#a6602c]">Enquiry received</p>
              <h3 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] text-[#12376b]">
                Thank you for getting in touch.
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-[#12376b]/60">
                Our admissions team will review your details and contact you within two school
                days.
              </p>
              <button className="secondary-button mt-8" onClick={() => setEnquirySent(false)} type="button">
                Send another enquiry
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="eyebrow">Start your enquiry</p>
                <h3 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-[#12376b] sm:text-4xl">
                  We&apos;d love to meet you.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#12376b]/55">
                  Fields marked with an asterisk are required.
                </p>
              </div>
              <form
                className="grid gap-5 sm:grid-cols-2"
                onSubmit={handleSubmit}
              >
                <label className="form-field">
                  <span>Parent or guardian name *</span>
                  <input autoComplete="name" name="parentName" placeholder="Your full name" required type="text" />
                </label>
                <label className="form-field">
                  <span>Email address *</span>
                  <input autoComplete="email" name="email" placeholder="you@example.com" required type="email" />
                </label>
                <label className="form-field">
                  <span>Phone number</span>
                  <input autoComplete="tel" name="phone" placeholder="+855" type="tel" />
                </label>
                <label className="form-field">
                  <span>Child&apos;s name *</span>
                  <input name="childName" placeholder="Child's full name" required type="text" />
                </label>
                <label className="form-field">
                  <span>Child&apos;s age *</span>
                  <select defaultValue="" name="childAge" required>
                    <option disabled value="">Select age</option>
                    {Array.from({ length: 12 }, (_, index) => index + 3).map((age) => (
                      <option key={age} value={age}>{age} years old</option>
                    ))}
                  </select>
                </label>
                <label className="form-field">
                  <span>Preferred start *</span>
                  <select defaultValue="" name="startDate" required>
                    <option disabled value="">Select intake</option>
                    <option value="2025-26">2025–26 school year</option>
                    <option value="2026-27">2026–27 school year</option>
                    <option value="unsure">I&apos;m not sure yet</option>
                  </select>
                </label>
                <label className="form-field sm:col-span-2">
                  <span>How can we help?</span>
                  <textarea
                    name="message"
                    placeholder="Share any questions, interests, or support your child may need."
                    rows={4}
                  />
                </label>
                <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-[#12376b]/60 sm:col-span-2">
                  <input className="mt-1 h-4 w-4 accent-[#0758a6]" name="consent" required type="checkbox" />
                  <span>I agree that Forma Academy may contact me about admissions and school visits. *</span>
                </label>
                <div className="mt-2 flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-xs leading-relaxed text-[#12376b]/45">
                    Your details are kept private and used only to respond to your enquiry.
                  </p>
                  <button
                    className="primary-button justify-center border-0"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send my enquiry"}
                    {!isSubmitting && <Arrow />}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
    
  );
}

export default Enquiry;
