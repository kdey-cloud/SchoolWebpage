
import SchoolMark from "../components/SchoolMark";

function Footer() {
    return (
        <footer className="bg-[#092652] px-5 py-10 text-white sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-[1320px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-3">
              <SchoolMark />
              <div>
                <p className="text-xl font-extrabold">THE LEARN</p>
                <p className="text-xs text-white/55">Learn · Create · Belong</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-white/55">
              <a className="hover:text-white" href="#learning">Learning</a>
              <a className="hover:text-white" href="#our-school">Our school</a>
              <a className="hover:text-white" href="#admissions">Admissions</a>
              <span>© 2025 Forma Academy</span>
            </div>
          </div>
        </footer>
    );
}
export default Footer;