import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Stethoscope } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  mobileOpen: boolean;
  setMobileOpen: (value: boolean) => void;
};

const links = [
  ["About", "#about"],
  ["Conditions", "#conditions"],
  ["Treatments", "#treatments"],
  ["Education", "#education"],
  ["Research", "#research"],
  ["Feedback", "#feedback"],
  ["Contact", "#contact"],
];

export default function Navbar({
  mobileOpen,
  setMobileOpen,
}: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* FIXED HEADER */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
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
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-10">
          
          {/* LOGO */}
          <motion.a
            href="#home"
            onClick={closeMenu}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <motion.span
              whileHover={{ rotate: 5 }}
              className="grid h-9 w-9 place-items-center rounded-xl bg-teal-700 text-white sm:h-10 sm:w-10"
            >
              <Stethoscope size={19} />
            </motion.span>

            <span>
              <span className="block font-display text-sm font-bold leading-tight text-slate-900 sm:text-base">
                Dr. Krishnakanth AVB
              </span>

              <span className="mt-0.5 block text-[8px] font-semibold uppercase tracking-[0.14em] text-teal-700 sm:text-[10px] sm:tracking-[0.18em]">
                Consultant Urologist
              </span>
            </span>
          </motion.a>

          {/* DESKTOP MENU */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            {links.map(([label, href], index) => (
              <motion.a
                key={label}
                href={href}
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.1 + index * 0.05,
                  duration: 0.4,
                }}
                className="group relative text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-teal-700"
              >
                {label}

                <span className="absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-teal-700 transition-transform duration-300 group-hover:scale-x-100" />
              </motion.a>
            ))}

            <motion.a
              href="#appointment"
              whileHover={{
                y: -2,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-800"
            >
              Book Appointment
            </motion.a>
          </nav>

          {/* MOBILE BUTTON */}
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative grid h-11 w-11 place-items-center rounded-xl bg-slate-100 text-slate-800 transition-colors hover:bg-teal-50 lg:hidden"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
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
              <motion.nav
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  closed: {},
                  open: {
                    transition: {
                      staggerChildren: 0.055,
                      delayChildren: 0.05,
                    },
                  },
                }}
                className="px-5 py-3 sm:px-8"
              >
                {links.map(([label, href]) => (
                  <motion.a
                    key={label}
                    href={href}
                    onClick={closeMenu}
                    variants={{
                      closed: {
                        opacity: 0,
                        x: -20,
                      },
                      open: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className="block border-b border-slate-100 py-4 text-[15px] font-semibold text-slate-700 transition-colors hover:text-teal-700 sm:text-base"
                  >
                    {label}
                  </motion.a>
                ))}

                <motion.a
                  href="#appointment"
                  onClick={closeMenu}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.35,
                  }}
                  className="my-4 block rounded-xl bg-teal-700 px-5 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-teal-800 sm:text-base"
                >
                  Book Appointment
                </motion.a>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}