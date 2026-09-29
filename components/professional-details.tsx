import {Accordion,AccordionItem,AccordionTrigger,AccordionContent} from '@/components/ui/accordion';
import * as cv from '@/data/cv';
function Entries({entries}:{entries:cv.CVEntry[]}){return <>{entries.map((r,i)=><article className="record-row" key={i}><span className="date">{r.date}</span><div><h3>{r.title}</h3><p>{r.institution}</p>{r.detail&&<p>{r.detail}</p>}</div></article>)}</>}
export function ProfessionalDetails({kind}:{kind:'career'|'surgery'}){const sections=kind==='surgery'?[
{id:'milestones',title:'Surgical milestones · 1996–2011',body:<>{cv.milestones.map(([date,title,text])=><article className="record-row" key={date}><span className="date">{date}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</>}
]:[
{id:'education',title:'Education & postgraduate training',body:<Entries entries={cv.education}/>},
{id:'appointments',title:'Career appointments & leadership',body:<Entries entries={cv.appointments}/>},
{id:'practice',title:'Surgical practice',body:<Entries entries={cv.practice}/>},
{id:'credentials',title:'Certifications & examinations',body:<><Entries entries={cv.certification}/>{cv.examinations.map(([date,title])=><article className="record-row" key={title}><span className="date">{date}</span><h3>{title}</h3></article>)}</>},
{id:'affiliations',title:'Professional societies & affiliations',body:<ul className="plain-list">{cv.memberships.map(x=><li key={x}>{x}</li>)}</ul>},
{id:'programs',title:'Surgical program development',body:<>{[...cv.programs].sort((a,b)=>Date.parse(b[0])-Date.parse(a[0])).map(([date,title],i)=><article className="record-row" key={i}><span className="date">{date}</span><h3>{title}</h3></article>)}</>},
{id:'community',title:'Professional & community service',body:<Entries entries={cv.community}/>},
{id:'enterprise',title:'Entrepreneurship',body:<><ul className="plain-list">{cv.companies.map(x=><li key={x}>{x}</li>)}</ul>{cv.corporateMilestones.filter(m=>m.title!=='SSi Mantra 3').map(m=><article className="record-row" key={m.date}><span className="date">{m.date}</span><div><h3>{m.title}</h3><p>{m.text}</p></div></article>)}</>}
];return <Accordion type="multiple" className="detail-accordion">{sections.map(s=><AccordionItem value={s.id} key={s.id}><AccordionTrigger>{s.title}</AccordionTrigger><AccordionContent forceMount>{s.body}</AccordionContent></AccordionItem>)}</Accordion>}
