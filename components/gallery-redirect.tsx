'use client';
import {useEffect} from 'react';
export default function GalleryRedirect(){useEffect(()=>{window.location.replace('/media/'+window.location.search+window.location.hash)},[]);return <div className="wrap section-space"><meta httpEquiv="refresh" content="0;url=/media/"/><a className="text-link" href="/media/">Continue to Media</a></div>}
