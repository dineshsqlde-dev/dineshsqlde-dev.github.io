import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PROJECTS } from '../data/site'
import Reveal from './Reveal'
function Flow({steps}:{steps:string[]}){
 const w=steps.length*150
 return <svg viewBox={`0 0 ${w} 90`} className="w-full" role="img" aria-label={`Flow: ${steps.join(', then ')}`}>
  {steps.map((s,i)=><g key={s}><rect x={i*150+5} y="25" width="110" height="40" rx="3" fill="#1A1D1B" stroke="#2C312E"/><text x={i*150+60} y="50" textAnchor="middle" fill="#F2EFE8" fontSize="12">{s}</text>
   {i<steps.length-1&&<line className="flow" x1={i*150+115} y1="45" x2={i*150+155} y2="45" stroke="#3DF0CF" strokeWidth="2"/>}</g>)}</svg>}
export default function Projects(){
 const cats=['All',...Array.from(new Set(PROJECTS.map(p=>p.cat)))]
 const [cat,setCat]=useState('All'),[open,setOpen]=useState<string|null>('fer')
 const list=PROJECTS.filter(p=>cat==='All'||p.cat===cat)
 return <section id="work" className="py-28 border-t border-line"><div className="wrap">
  <div className="flex flex-wrap items-end justify-between gap-6"><Reveal><h2 className="font-display font-bold text-4xl md:text-6xl">Selected work</h2></Reveal>
   <div role="group" aria-label="Filter projects" className="flex gap-2">{cats.map(c=><button key={c} aria-pressed={cat===c} onClick={()=>setCat(c)} className={`px-4 py-2 rounded-full text-sm border ${cat===c?'bg-acc text-ink border-acc':'border-line text-mute hover:text-paper'}`}>{c}</button>)}</div></div>
  <div className="mt-12 border-t border-line">{list.map(p=>{const o=open===p.id;return <article key={p.id} className="border-b border-line">
   <h3><button aria-expanded={o} onClick={()=>setOpen(o?null:p.id)} className="w-full text-left py-8 flex items-baseline justify-between gap-6 group">
    <span className="font-display font-extrabold text-5xl md:text-8xl group-hover:text-acc transition-colors">{p.name}</span>
    <span className="text-mute text-right text-sm md:text-base">{p.full}</span></button></h3>
   <AnimatePresence initial={false}>{o&&<motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden">
    <div className="grid md:grid-cols-2 gap-10 pb-10">
     <div><p className="text-lg text-mute leading-relaxed">{p.d}</p>
      <ul className="mt-6 flex flex-wrap gap-2">{p.tech.map(t=><li key={t} className="text-sm border border-line rounded-full px-3 py-1">{t}</li>)}</ul>
      <p className="mt-6 text-sm text-mute">Case study not yet available.</p></div>
     <div className="self-center border border-line rounded p-4 bg-panel overflow-x-auto"><div className="min-w-[420px]"><Flow steps={p.flow}/></div></div>
    </div></motion.div>}</AnimatePresence></article>})}</div></div></section>}
