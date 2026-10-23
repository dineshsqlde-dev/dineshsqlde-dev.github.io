import { SKILLS, CERTS } from '../data/site'
import Reveal from './Reveal'
import { Award } from 'lucide-react'
export default function Skills(){
 return <section id="skills" className="py-28 border-t border-line"><div className="wrap">
  <Reveal><h2 className="font-display font-bold text-4xl md:text-6xl">Toolkit</h2></Reveal>
  <div className="mt-14 grid md:grid-cols-2 gap-x-16 gap-y-10">{Object.entries(SKILLS).map(([g,items])=><Reveal key={g}><h3 className="font-display font-bold text-xl mb-4">{g}</h3>
   <ul className="flex flex-wrap gap-2">{items.map(i=><li key={i} className="text-sm border border-line rounded-full px-3 py-1.5 hover:border-acc transition-colors">{i}</li>)}</ul></Reveal>)}</div>
  <Reveal><h2 className="font-display font-bold text-3xl md:text-4xl mt-24">Certifications and recognition</h2>
   <ul className="mt-8 grid sm:grid-cols-2 gap-4">{CERTS.map(c=><li key={c} className="flex gap-4 items-start border border-line rounded p-5 bg-panel"><Award className="text-acc shrink-0" size={22}/><span>{c}</span></li>)}</ul></Reveal>
 </div></section>}
