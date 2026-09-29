'use client';
import Image from 'next/image';
import {useEffect,useRef,useState} from 'react';
import {ChevronLeft,ChevronRight} from 'lucide-react';
const slides=Array.from({length:9},(_,i)=>`/images/${i+1}.webp`);
export default function Slideshow(){const[i,setI]=useState(0);const[drag,setDrag]=useState(0);const start=useRef<number|null>(null);const go=(d:number)=>setI(n=>(n+d+slides.length)%slides.length);
useEffect(()=>{const t=setTimeout(()=>go(1),4000);return()=>clearTimeout(t)},[i]);
const end=()=>{if(start.current===null)return;if(drag<-50)go(1);else if(drag>50)go(-1);start.current=null;setDrag(0)};
return <div className="slideshow" aria-roledescription="carousel" aria-label="Journey through pictures" tabIndex={0} onKeyDown={e=>{if(e.key==='ArrowLeft')go(-1);if(e.key==='ArrowRight')go(1)}}>
<div className="slideshow-frame" onPointerDown={e=>{if((e.target as HTMLElement).closest("button"))return;start.current=e.clientX;e.currentTarget.setPointerCapture(e.pointerId)}} onPointerMove={e=>{if(start.current!==null)setDrag(e.clientX-start.current)}} onPointerUp={end} onPointerCancel={end}>
<div className="slideshow-track" style={{transform:`translateX(calc(${-i*100}% + ${drag}px))`,transition:drag?'none':undefined}}>{slides.map((s,n)=><div className="slideshow-slide" key={s}><Image src={s} alt={`Photograph ${n+1} of ${slides.length}`} fill sizes="(max-width:760px) 100vw, 80vw" loading="eager" draggable={false}/></div>)}</div>
<button className="slideshow-arrow prev" onClick={()=>go(-1)} aria-label="Previous photograph"><ChevronLeft size={28}/></button><button className="slideshow-arrow next" onClick={()=>go(1)} aria-label="Next photograph"><ChevronRight size={28}/></button></div>
<div className="slideshow-dots">{slides.map((s,n)=><button key={s} aria-label={`Photograph ${n+1}`} aria-current={n===i} onClick={()=>setI(n)}/>)}</div></div>}
