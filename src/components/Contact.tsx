import { useState } from 'react'
import { Copy, Check, Mail } from 'lucide-react'
import { LINKS, LOCATION } from '../data/site'
import Reveal from './Reveal'
const ext=(label:string,url:string)=>url?<a className="underline underline-offset-4 hover:text-acc" href={url} target="_blank" rel="noopener noreferrer">{label}</a>:<span className="text-mute">{label}: add URL in src/data/site.ts</span>
export default function Contact(){
 const [ok,setOk]=useState(false)
 const copy=async()=>{try{await navigator.clipboard.writeText(LINKS.email);setOk(true);setTimeout(()=>setOk(false),2000)}catch{window.prompt('Copy email:',LINKS.email)}}
 return <section id="contact" className="py-28 border-t border-line"><div className="wrap">
  <Reveal><h2 className="font-display font-extrabold text-[clamp(2.5rem,7vw,6.5rem)] leading-[.98] max-w-5xl">Have a data challenge? Let’s engineer a solution.</h2></Reveal>
  <div className="mt-12 flex flex-wrap gap-4"><a href={`mailto:${LINKS.email}`} className="inline-flex items-center gap-2 bg-acc text-ink font-semibold rounded-full px-7 py-4"><Mail size={18}/>{LINKS.email}</a>
   <button onClick={copy} className="inline-flex items-center gap-2 border border-line hover:border-paper rounded-full px-6 py-4">{ok?<Check size={18}/>:<Copy size={18}/>}{ok?'Copied':'Copy email'}</button><span className="sr-only" aria-live="polite">{ok?'Email copied':''}</span></div>
  <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-lg">{ext('LinkedIn',LINKS.linkedin)}{ext('GitHub',LINKS.github)}<span className="text-mute">{LOCATION}</span></div>
 </div></section>}
