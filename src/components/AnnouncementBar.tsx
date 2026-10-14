import React from "react";

function AnnouncementBar() {
    return (
        <div className="bg-[#12376b] px-5 py-2.5 text-white">
          <div className="mx-auto flex max-w-[1400px] items-center justify-center gap-3 text-center text-xs font-semibold sm:justify-between">
            <p>Admissions are open for the 2025–26 school year</p>
            <div className="hidden items-center gap-6 sm:flex">
              <a className="text-white/75 hover:text-white" href="tel:+85512345678">+855 96 353 3698</a>
              <a className="text-white/75 hover:text-white" href="mailto:hello@forma.academy">thelearn@forma.academy</a>
            </div>
          </div>
        </div>
    );
}
export default AnnouncementBar;