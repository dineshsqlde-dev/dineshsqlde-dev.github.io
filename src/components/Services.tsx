import { useState } from 'react'
import { Workflow, Layers, Network, DatabaseZap, ShieldCheck, BarChart3 } from 'lucide-react'
const Icons:Record<string,any>={Workflow,Layers,Network,DatabaseZap,ShieldCheck,BarChart3}
import { SERVICES } from '../data/site'
import Reveal from './Reveal'
export default function Services(){
 const [open,setOpen]=useState(0)
 return <section id="services" className="py-28 border-t border-line"><div className="wrap">
  <Reveal><h2 className="font-display font-bold text-4xl md:text-6xl">What I do</h2></Reveal>
  <div className="mt-14 border-t border-line">{SERVICES.map((s,i)=>{const I=Icons[s.icon];const o=open===i
   return <div key={s.t} className="border-b border-line">
    <button aria-expanded={o} onClick={()=>setOpen(i)} onMouseEnter={()=>setOpen(i)} className="w-full flex items-center gap-5 py-6 text-left group">
     <I size={24} className={`transition-colors shrink-0 ${o?'text-acc':'text-mute'}`}/>
     <span className={`font-display font-bold text-2xl md:text-4xl transition-all ${o?'translate-x-2':'text-mute'}`}>{s.t}</span></button>
    <div className={`grid transition-all duration-500 ${o?'grid-rows-[1fr] pb-6':'grid-rows-[0fr]'}`}><p className="overflow-hidden pl-[44px] md:pl-[48px] max-w-2xl text-mute text-lg">{s.d}</p></div>
   </div>})}</div></div></section>}
