export type Photograph={id:string;filePath:string;altText:string;caption:string;date?:string;approximateDate?:boolean;location?:string;chapter:string;sortOrder:number;publicationApproval:boolean;people?:string[];width:number;height:number};
export const journeyChapters=[{id:'early-years',name:'Early years'},{id:'ajmer',name:'Medical education in Ajmer'},{id:'north-america',name:'A new chapter in North America'},{id:'family',name:'Marriage and family'},{id:'surgery',name:'A life in surgery'},{id:'service',name:'Service as a part of the journey'},{id:'india',name:'Returning to India'},{id:'future',name:'Building for the future'}];
// Archival entries require explicit publication approval and supplied metadata.
export const journeyPhotographs:Photograph[]=[];
export const blogCategories=['Surgery','Robotic Surgery','Innovation','Leadership','Education','Access to Healthcare','Reflections'];
export type BlogArticle={title:string;publicationDate:string;category:string;summary:string;image?:{src:string;alt:string;width:number;height:number};author:string;slug:string;content:string[];externalSource?:string;status:'published'|'draft'};
export const blogArticles:BlogArticle[]=[];
export function readingTime(article:BlogArticle){return Math.max(1,Math.ceil(article.content.join(' ').trim().split(/\s+/).length/200))}
export function publishedArticles(){return blogArticles.filter(a=>a.status==='published').sort((a,b)=>b.publicationDate.localeCompare(a.publicationDate))}
