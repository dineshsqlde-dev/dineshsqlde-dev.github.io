import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV } from '../data/site'
export default function Navbar(){
 const [open,setOpen]=useState(false)
 const id=(n:string)=>n.toLowerCase()
 return <header className="fixed top-0 inset-x-0 z-50 bg-ink/80 backdrop-blur border-b border-line">
  <nav aria-label="Primary" className="wrap flex items-center justify-between h-16">
   <a href="#top" className="font-display font-extrabold text-lg">DKY<span className="text-acc">.</span></a>
   <ul className="hidden md:flex gap-8 text-sm text-mute">{NAV.map(n=><li key={n}><a className="hover:text-paper transition-colors" href={`#${id(n)}`}>{n}</a></li>)}</ul>
   <button className="md:hidden p-2" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </nav>
  {open&&<ul className="md:hidden wrap pb-6 flex flex-col gap-1 bg-ink">{NAV.map(n=><li key={n}><a onClick={()=>setOpen(false)} className="block py-3 text-xl font-display border-b border-line" href={`#${id(n)}`}>{n}</a></li>)}</ul>}
 </header>}
