import {notFound} from 'next/navigation';
import Image from 'next/image';
import {publishedArticles,readingTime} from '@/data/media';
import {TextLink} from '@/components/editorial';
export const dynamicParams=false;
export function generateStaticParams(){const articles=publishedArticles();return articles.length?articles.map(a=>({slug:a.slug})):[{slug:'no-published-articles'}]}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=publishedArticles().find(a=>a.slug===slug);return {title:a?.title??'Article not found',description:a?.summary,robots:a?undefined:{index:false,follow:false}}}
export default async function Article({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const a=publishedArticles().find(a=>a.slug===slug);if(!a)notFound();return <article className="wrap section-space blog-article"><TextLink href="/media#reflections">All reflections</TextLink><p className="eyebrow">{a.category} · {a.publicationDate} · {readingTime(a)} min read</p><h1>{a.title}</h1><p>By {a.author}</p>{a.image&&<Image src={a.image.src} alt={a.image.alt} width={a.image.width} height={a.image.height} sizes="(max-width:760px) 100vw, 70vw"/>}{a.content.map((p,i)=><p key={i}>{p}</p>)}{a.externalSource&&<TextLink href={a.externalSource}>Original source</TextLink>}</article>}
