import {Accordion,AccordionItem,AccordionTrigger,AccordionContent} from '@/components/ui/accordion';
import Link from 'next/link';
import * as cv from '@/data/cv';
function Entries({entries}:{entries:cv.CVEntry[]}){return <>{entries.map((r,i)=><article className="record-row" key={i}><span className="date">{r.date}</span><div><h3>{r.title}</h3><p>{r.institution}</p>{r.detail&&<p>{r.detail}</p>}</div></article>)}</>}
export function ProfessionalDetails({kind}:{kind:'career'|'surgery'}){const sections=kind==='surgery'?[
{id:'milestones',title:'Surgical milestones · 1996–2011',body:<>{cv.milestones.map(([date,title,text])=><article className="record-row" key={date}><span className="date">{date}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</>}
]:[
{id:'education',title:'Education & postgraduate training',body:<Entries entries={cv.education}/>},
{id:'appointments',title:'Career appointments & leadership',body:<Entries entries={cv.appointments}/>},
{id:'practice',title:'Surgical practice',body:<Entries entries={cv.practice}/>},
{id:'credentials',title:'Certifications & examinations',body:<><p className="eyebrow">Board certifications listed in the CV; current status is not stated.</p><Entries entries={cv.certification}/><p className="eyebrow">Examinations</p>{cv.examinations.map(([date,title])=><article className="record-row" key={title}><span className="date">{date}</span><h3>{title}</h3></article>)}</>},
{id:'affiliations',title:'Professional societies & affiliations',body:<><p>Affiliations are reproduced from the supplied CV; membership status and dates are not specified.</p><ul className="plain-list">{cv.memberships.map(x=><li key={x}>{x}</li>)}</ul></>},
{id:'programs',title:'Surgical programmes & institutional installations',body:<>{[...cv.programs].sort((a,b)=>Date.parse(b.date)-Date.parse(a.date)).map((program,i)=><article className="record-row" key={`${program.date}-${program.institution}-${i}`}><span className="date">{program.date}</span><div><h3>{program.institution}</h3><p>{program.location}</p><p>{program.detail??'Institutional entry; an individual role is not specified in the approved CV.'}</p></div></article>)}</>},
{id:'community',title:'Professional & community service',body:<Entries entries={cv.community}/>},
{id:'enterprise',title:'Entrepreneurship',body:<>{cv.entrepreneurship.map(record=><article className="record-row" key={record.title}><span className="date">{record.date}</span><div><h3>{record.title}</h3><p>{record.text}</p><Link className="text-link" href={record.href}>{record.linkText}</Link></div></article>)}</>}
];return <Accordion type="multiple" className="detail-accordion">{sections.map(s=><AccordionItem value={s.id} key={s.id}><AccordionTrigger>{s.title}</AccordionTrigger><AccordionContent forceMount>{s.body}</AccordionContent></AccordionItem>)}</Accordion>}
