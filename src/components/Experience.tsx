import { motion } from 'framer-motion'
import { JOBS } from '../data/site'
import Reveal from './Reveal'
export default function Experience(){
 return <section id="experience" className="py-28 border-t border-line"><div className="wrap">
  <Reveal><h2 className="font-display font-bold text-4xl md:text-6xl">Experience</h2></Reveal>
  <ol className="relative mt-14 ml-3 pl-8 md:pl-12">
   <motion.span aria-hidden className="absolute left-0 top-0 w-px bg-acc origin-top h-full" initial={{scaleY:0}} whileInView={{scaleY:1}} viewport={{once:true}} transition={{duration:1.2}}/>
   {JOBS.map(j=><li key={j.co} className="relative pb-14 last:pb-0"><span className="absolute -left-[41px] md:-left-[57px] top-3 w-3 h-3 rounded-full bg-acc ring-4 ring-ink"/>
    <Reveal><p className="text-mute">{j.when}</p><h3 className="font-display font-bold text-2xl md:text-4xl mt-1">{j.role}</h3><p className="text-lg mt-1">{j.co}</p></Reveal></li>)}
  </ol></div></section>}
