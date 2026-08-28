
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Stethoscope } from "lucide-react";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

type Props = {
  mobileOpen: boolean;
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
};

const sectionLinks = [
  {
    label: "Conditions",
    id: "conditions",
  },
  {
    label: "Treatments",
    id: "treatments",
  },
  {
    label: "Education",
    id: "education",
  },
  {
    label: "Research",
    id: "research",
  },
  {
    label: "Feedback",
    id: "feedback",
  },
  {
    label: "Contact",
    id: "contact",
  },
];

export default function Navbar({
  mobileOpen,
  setMobileOpen,
}: Props) {
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  /*
   * HEADER SCROLL EFFECT
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * CLOSE MOBILE MENU
   */
  const closeMenu = () => {
    setMobileOpen(false);
  };

  /*
   * HOME
   */
  const goHome = () => {
    closeMenu();

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };

  /*
   * ABOUT PAGE
   */
  const goAbout = () => {
    closeMenu();
    navigate("/about");
  };

  /*
   * SCROLL TO HOME SECTION
   */
  const handleNavigation = (id: string) => {
    closeMenu();

    /*
     * Already on home page
     */
    if (location.pathname === "/") {
      setTimeout(() => {
        const section = document.getElementById(id);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

      return;
    }

    /*
     * If currently on another page,
     * go home first.
     */
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  /*
   * APPOINTMENT
   */
  const handleAppointment = () => {
    closeMenu();

    if (location.pathname === "/") {
      setTimeout(() => {
        const section = document.getElementById("appointment");

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

      return;
    }

    navigate("/");

    setTimeout(() => {
      const section = document.getElementById("appointment");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed left-0 right-0 top-0 z-[100] border-b transition-all duration-500 ${
        scrolled
          ? "border-slate-200 bg-white/95 shadow-lg backdrop-blur-xl"
          : "border-slate-200/70 bg-white/90 backdrop-blur-md"
      }`}
    >
      {/* HEADER INNER */}
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* LOGO */}
        <motion.button
          type="button"
          onClick={goHome}
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="flex items-center gap-2 text-left sm:gap-3"
          aria-label="Go to home"
        >
          <motion.span
            whileHover={{
              rotate: 5,
            }}
            transition={{
              duration: 0.25,
            }}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-teal-700 text-white shadow-sm sm:h-10 sm:w-10"
          >
            <Stethoscope size={19} />
          </motion.span>

          <span>
            <span className="block font-display text-[13px] font-bold leading-tight text-slate-900 sm:text-base">
              Dr. Krishnakanth AVB
            </span>

            <span className="mt-0.5 block text-[7px] font-semibold uppercase tracking-[0.12em] text-teal-700 sm:text-[10px] sm:tracking-[0.18em]">
              Consultant Urologist
            </span>
          </span>
        </motion.button>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-4 lg:flex xl:gap-6">

          {/* ABOUT */}
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 0.4,
            }}
          >
            <Link
              to="/about"
              className={`group relative text-sm font-medium transition-colors duration-300 ${
                location.pathname === "/about"
                  ? "text-teal-700"
                  : "text-slate-600 hover:text-teal-700"
              }`}
            >
              About

              <span
                className={`absolute -bottom-2 left-0 h-[2px] w-full origin-left rounded-full bg-teal-700 transition-transform duration-300 ${
                  location.pathname === "/about"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          </motion.div>

          {/* HOME SECTION LINKS */}
          {sectionLinks.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => handleNavigation(item.id)}
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15 + index * 0.05,
                duration: 0.4,
              }}
              className="group relative text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-teal-700"
            >
              {item.label}

              <span className="absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-teal-700 transition-transform duration-300 group-hover:scale-x-100" />
            </motion.button>
          ))}

          {/* BOOK APPOINTMENT */}
          <motion.button
            type="button"
            onClick={handleAppointment}
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="ml-1 rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-teal-800 hover:shadow-md"
          >
            Book Appointment
          </motion.button>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <motion.button
          type="button"
          whileTap={{
            scale: 0.88,
          }}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="relative grid h-11 w-11 place-items-center rounded-xl bg-slate-100 text-slate-800 transition-all duration-300 hover:bg-teal-50 hover:text-teal-700 lg:hidden"
          aria-label={
            mobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{
                  rotate: -90,
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  rotate: 90,
                  opacity: 0,
                  scale: 0.7,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{
                  rotate: 90,
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  rotate: -90,
                  opacity: 0,
                  scale: 0.7,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <nav className="max-h-[calc(100vh-72px)] overflow-y-auto px-5 py-3 sm:px-8">

              {/* MOBILE ABOUT */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.05,
                  duration: 0.3,
                }}
              >
                <Link
                  to="/about"
                  onClick={closeMenu}
                  className={`block border-b border-slate-100 py-4 text-[15px] font-semibold transition-colors duration-300 sm:text-base ${
                    location.pathname === "/about"
                      ? "text-teal-700"
                      : "text-slate-700 hover:text-teal-700"
                  }`}
                >
                  About
                </Link>
              </motion.div>

              {/* MOBILE SECTION LINKS */}
              {sectionLinks.map((item, index) => (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigation(item.id)}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.08 + index * 0.055,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="block w-full border-b border-slate-100 py-4 text-left text-[15px] font-semibold text-slate-700 transition-colors duration-300 hover:text-teal-700 active:text-teal-700 sm:text-base"
                >
                  {item.label}
                </motion.button>
              ))}

              {/* MOBILE APPOINTMENT */}
              <motion.button
                type="button"
                onClick={handleAppointment}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.42,
                  duration: 0.35,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="my-4 block w-full rounded-xl bg-teal-700 px-5 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-teal-800 sm:text-base"
              >
                Book Appointment
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
