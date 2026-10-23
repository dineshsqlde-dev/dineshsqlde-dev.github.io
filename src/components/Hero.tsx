import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'

// Swap this temporary portrait for your own image when it is ready (public/profile.jpeg).
const profileImage = '/profile.jpeg'
const technologies = [
  { name: 'Microsoft Fabric', image: '/tech-icons/fabric.svg' },
  { name: 'Azure Data Factory', image: '/tech-icons/azure.svg' },
  { name: 'Azure Databricks', image: '/tech-icons/databricks.svg' },
  { name: 'PySpark', image: '/tech-icons/spark.svg' },
  { name: 'Python', image: '/tech-icons/python.svg' },
  { name: 'SQL Server', image: '/tech-icons/sql-server.svg' },
  { name: 'PostgreSQL', image: '/tech-icons/postgresql.svg' },
  { name: 'Power BI', image: '/tech-icons/power-bi.svg' },
]

function TechnologyBanner() {
  return (
    <div className="border-y border-white/15 bg-[#0d0d0d] py-5 sm:py-6" aria-label="Technologies">
      <div className="mx-auto flex max-w-[1440px] items-center gap-5 px-6 sm:gap-8 sm:px-10 md:px-16 lg:px-24">
        <span className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45 sm:text-[10px]">
          Tech stack
        </span>
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="technology-marquee flex w-max items-center">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
                {technologies.map((technology) => (
                  <span key={`${copy}-${technology.name}`} className="flex items-center gap-3 whitespace-nowrap px-4 text-xs font-medium tracking-wide text-white/80 sm:px-6 sm:text-sm">
                    <img src={technology.image} alt="" aria-hidden="true" className="h-7 w-7 shrink-0 object-contain" />
                    {technology.name}
                    <span className="ml-4 h-1 w-1 rounded-full bg-white/35 sm:ml-8" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <>
      <section id="top" className="relative isolate min-h-[760px] overflow-hidden bg-[#050505] text-white md:min-h-[720px]">
        <motion.div
          initial={{ opacity: 0, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="absolute inset-y-0 right-0 -z-10 w-full md:w-[60%]"
        >
          <img
            src={profileImage}
            alt="Portrait placeholder; replace with Dinesh's photo"
            className="h-full w-full object-cover object-[center_28%] opacity-75 md:object-[center_20%] md:opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/65 to-[#050505]/25 md:bg-gradient-to-r md:from-[#050505] md:via-[#050505]/55 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-transparent md:hidden" />
        </motion.div>

        <div className="relative mx-auto flex min-h-[760px] max-w-[1440px] items-end px-6 pb-14 pt-28 sm:px-10 md:min-h-[720px] md:items-center md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
            className="max-w-[640px] pb-2 md:w-[54%] md:pb-0"
          >
            <p className="mb-5 text-xs font-medium tracking-[0.04em] text-white/85 sm:text-sm">I’m Dinesh Kumar Yarragudi, Data Engineer &amp; Modeller</p>
            <h1 className="font-display text-[clamp(3.4rem,7.1vw,6.8rem)] font-extrabold leading-[0.94] tracking-[-0.07em] text-white">
              I build data <span className="block">that works.</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
              Reliable data platforms, modern lakehouses, and analytics that help teams make their next move with confidence.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex min-h-11 items-center gap-3 bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-black transition hover:bg-white/85"
            >
              Let’s talk <ArrowRight size={14} />
            </a>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-white/60 sm:text-xs">
              <span className="inline-flex items-center gap-2"><MapPin size={13} /> Hyderabad, India</span>
              <span className="hidden h-3 w-px bg-white/25 sm:block" />
              <span>Fabric · Azure · Databricks · SQL</span>
            </div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </section>
      <TechnologyBanner />
    </>
  )
}
