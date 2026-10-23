import Reveal from './Reveal'
const focus=['Data engineering and pipeline development','Lakehouse architecture and medallion design','Data modelling and warehouse design','Database migration and modernization','Data quality, reconciliation and reliability','Analytics-ready data delivery']
export default function About(){
 return <section id="about" className="py-28 border-t border-line"><div className="wrap grid md:grid-cols-12 gap-12">
  <Reveal className="md:col-span-7"><h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.05]">Turning complex data into dependable foundations.</h2>
   <p className="mt-8 text-mute text-lg max-w-xl leading-relaxed">I’m a Data Engineer and Data Modeller based in Hyderabad. My work sits between raw source systems and the reports people rely on: getting data in, shaping it into clean models, and proving it matches.</p></Reveal>
  <Reveal delay={.15} className="md:col-span-5 md:pt-4"><ul className="divide-y divide-line border-y border-line">{focus.map(f=><li key={f} className="py-4 flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-acc shrink-0"/>{f}</li>)}</ul></Reveal>
 </div></section>}
