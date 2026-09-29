import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/site-shell';
export const metadata: Metadata = {
 title: {default:'Dr. Sudhir Srivastava | Surgeon, Innovator & Mentor',template:'%s | Dr. Sudhir Srivastava'},
 description:'The professional journey, surgical contributions, academic work and innovation of Dr. Sudhir Prem Srivastava, M.D.',
 icons:{icon:'/logos/ssilogo.png',apple:'/logos/ssilogo.png'},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>}
