import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { PROJECTS } from '../data/site'
import Reveal from './Reveal'

type Project = (typeof PROJECTS)[number]

/** Pipeline diagram: each step is a node, joined by animated connectors. The last step (the output) is highlighted. */
function Pipeline({ steps, animate }: { steps: string[]; animate: boolean }) {
  return (
    <ol className="flex flex-wrap items-center gap-y-3" aria-label={`Pipeline: ${steps.join(', then ')}`}>
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1
        return (
          <motion.li
            key={step}
            initial={animate ? { opacity: 0, x: -8 } : false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: animate ? 0.08 * i : 0 }}
            className="flex items-center"
          >
            <span
              className={`rounded-md border px-3 py-2 text-sm font-medium ${
                isLast ? 'border-acc text-acc' : 'border-line bg-ink text-paper'
              }`}
            >
              {step}
            </span>
            {!isLast && (
              <svg width="28" height="10" viewBox="0 0 28 10" aria-hidden="true" className="mx-1 shrink-0">
                <line className="flow" x1="0" y1="5" x2="28" y2="5" stroke="#3DF0CF" strokeWidth="2" />
              </svg>
            )}
          </motion.li>
        )
      })}
    </ol>
  )
}

function Detail({ project, animate }: { project: Project; animate: boolean }) {
  return (
    <motion.div
      key={project.id}
      initial={animate ? { opacity: 0, y: 12 } : false}
      animate={{ opacity: 1, y: 0 }}
      exit={animate ? { opacity: 0, y: -8 } : undefined}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <p className="text-sm text-mute">{project.cat}</p>
      <h3 className="mt-2 font-display text-5xl font-extrabold leading-none text-acc md:text-7xl">{project.name}</h3>
      <p className="mt-3 text-lg text-paper">{project.full}</p>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-mute md:text-lg">{project.d}</p>

      <div className="mt-8">
        <h4 className="mb-3 text-sm font-semibold text-paper">How the data flows</h4>
        <div className="overflow-x-auto rounded-md border border-line bg-panel p-4 md:p-5">
          <Pipeline steps={project.flow} animate={animate} />
        </div>
      </div>

      <div className="mt-8">
        <h4 className="mb-3 text-sm font-semibold text-paper">Built with</h4>
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((t: string) => (
            <li key={t} className="rounded-full border border-line px-3 py-1 text-sm text-paper">
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* <p className="mt-8 text-sm text-mute">Case study coming soon.</p> */}
    </motion.div>
  )
}

export default function Projects() {
  const reduce = useReducedMotion()
  const animate = !reduce

  const cats = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.cat)))]
  const [cat, setCat] = useState('All')
  const [selectedId, setSelectedId] = useState<string>(PROJECTS[0].id)

  const list = PROJECTS.filter((p) => cat === 'All' || p.cat === cat)
  // If the filter hides the selected project, fall back to the first visible one.
  const active = list.find((p) => p.id === selectedId) ?? list[0]

  return (
    <section id="work" className="border-t border-line py-28">
      <div className="wrap">
        {/* Heading + filters */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="font-display text-4xl font-bold md:text-6xl">Selected work</h2>
          </Reveal>
          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                aria-pressed={cat === c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acc ${
                  cat === c ? 'border-acc bg-acc text-ink' : 'border-line text-mute hover:text-paper'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Master / detail */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          {/* Project list: horizontal scroll on mobile, vertical on desktop */}
          <nav aria-label="Projects" className="-mx-1 overflow-x-auto px-1 lg:mx-0 lg:overflow-visible lg:px-0">
            <ul className="flex gap-2 lg:flex-col lg:gap-0 lg:border-t lg:border-line">
              {list.map((p) => {
                const isActive = active?.id === p.id
                return (
                  <li key={p.id} className="shrink-0 lg:border-b lg:border-line">
                    <button
                      onClick={() => setSelectedId(p.id)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`relative flex w-full items-baseline justify-between gap-4 rounded-md border px-4 py-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acc lg:rounded-none lg:border-0 lg:px-5 lg:py-6 ${
                        isActive
                          ? 'border-acc text-paper lg:bg-panel'
                          : 'border-line text-mute hover:text-paper'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="project-marker"
                          className="absolute inset-y-0 left-0 hidden w-1 bg-acc lg:block"
                          transition={{ duration: animate ? 0.25 : 0 }}
                        />
                      )}
                      <span className="font-display text-2xl font-extrabold md:text-3xl lg:text-4xl">{p.name}</span>
                      <span className="hidden text-right text-sm sm:block">{p.full}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Detail panel */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="min-h-[420px] rounded-lg border border-line bg-panel/40 p-6 md:p-10">
              <AnimatePresence mode="wait" initial={false}>
                {active && <Detail key={active.id} project={active} animate={animate} />}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}