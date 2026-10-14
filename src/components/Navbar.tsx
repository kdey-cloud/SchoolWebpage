
    import { useState } from "react";
    import SchoolMark from "../components/SchoolMark";
    import { useLocation } from "react-router-dom";
    import { Link } from "react-router-dom";
    
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
    
   
function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
              <header className="relative z-30 border-b border-[#12376b]/10 bg-white">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex h-24 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-10"
          >
            
            <a className="flex items-center gap-3" href="#" aria-label="Forma International Academy home">
              <SchoolMark />
              <div>
                <p className="text-xl font-extrabold leading-none tracking-[-0.035em] text-[#0758a6] sm:text-2xl">
                  THE LEARN
                </p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#a6602c] sm:text-[10px]">
                  Learn · Create · Belong
                </p>
              </div>
            </a>
  
            <div className="hidden items-center gap-7 text-sm font-bold lg:flex"> 
              {[{name: "Home", path: "/"}, 
                { name: "Learning", path: "/learning" }, 
                { name: "Our school", path: "/our-school" }, 
                { name: "Student life", path: "/student-life" }, 
                { name: "News", path: "/news" }, 
                ].map((item) => ( 
                  <Link 
                    className="nav-link" 
                    to={item.path} 
                    key={item.name} 
                  > 
                    {item.name} 
                  </Link> 
              ))} 
            </div>

            {location.pathname !== "/enquiry" && (
            <a
              className="hidden items-center gap-3 rounded-full bg-[#0758a6] px-6 py-3 text-sm font-bold text-white shadow-[0_5px_0_#d7e7f5] transition hover:-translate-y-0.5 lg:flex"
              href="/enquiry"
            >
              Enquire now <Arrow />
            </a>
            )}

            <button
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
              className="grid h-11 w-11 place-items-center rounded-xl bg-[#0758a6] text-white lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              type="button"
            >
              <span className="flex w-5 flex-col gap-1.5">
                <span className={`h-0.5 bg-current transition ${menuOpen ? "translate-y-1 rotate-45" : ""}`} />
                <span className={`h-0.5 bg-current transition ${menuOpen ? "-translate-y-1 -rotate-45" : ""}`} />
              </span>
            </button>
          </nav>
            {menuOpen && (
              <div className="absolute left-0 top-full w-full border-t border-[#12376b]/10 bg-white px-5 py-5 shadow-xl lg:hidden">
              <div className="flex flex-col divide-y divide-[#12376b]/10">
              {[
                {name: "Home", path: "/"},
                { name: "Learning", path: "/learning" },
                { name: "Our school", path: "/our-school" },
                { name: "Student life", path: "/student-life" },
                { name: "News", path: "/news" },
                { name: "Admissions", path: "/enquiry" },
              ].map((item) => (
          <Link
          className="flex items-center justify-between py-4 font-bold"
          to={item.path}
          key={item.name}
          onClick={() => setMenuOpen(false)}
          >
          {item.name}
          <Arrow diagonal />
        </Link>
      ))}
    </div>
  </div>
)}


        </header>
    </nav>
  );
}

export default Navbar;