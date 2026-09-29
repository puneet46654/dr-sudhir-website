'use client';
import {Tabs,TabsList,TabsTrigger,TabsContent} from '@/components/ui/tabs';
import {trainingLayers} from '@/data/associations';
export default function TrainingFramework(){return <Tabs defaultValue="institute" className="training-framework"><TabsList className="training-stages" aria-label="SSICRS training model">{trainingLayers.map((l,i)=><TabsTrigger key={l.id} value={l.id}><span>0{i+1}</span>{l.name}</TabsTrigger>)}</TabsList>{trainingLayers.map(l=><TabsContent value={l.id} key={l.id} className="training-detail"><div><h3>{l.title}</h3><p>{l.text}</p></div><ul>{l.methods.map(m=><li key={m}>{m}</li>)}</ul></TabsContent>)}</Tabs>}
