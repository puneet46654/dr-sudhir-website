import Image from 'next/image';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
export function Photo({name,alt,className='',priority=false}:{name:string;alt:string;className?:string;priority?:boolean}){return <div className={`photo ${name.startsWith("mantra")?"product-photo":""} ${className}`}><Image src={`/images/${name}.webp`} alt={alt} fill sizes="(max-width: 760px) 100vw, 60vw" priority={priority} /></div>}
export function TextLink({href,children}:{href:string;children:React.ReactNode}){return <Link href={href} className="text-link">{children}<ArrowUpRight size={19}/></Link>}
export function PageIntro({number,kicker,title,description}:{number?:string;kicker?:string;title:React.ReactNode;description:string}){return <section className="page-intro wrap">{kicker&&<div className="eyebrow">{number&&<span>{number} / </span>}{kicker}</div>}<h1>{title}</h1><p className="lead">{description}</p></section>}
