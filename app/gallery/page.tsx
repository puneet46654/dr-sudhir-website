import type {Metadata} from 'next';
import GalleryRedirect from '@/components/gallery-redirect';
export const metadata:Metadata={title:'Media',alternates:{canonical:'/media/'},robots:{index:false,follow:true}};
export default function OldGallery(){return <GalleryRedirect/>}
