'use client';
import {Tabs,TabsList,TabsTrigger,TabsContent} from '@/components/ui/tabs';
import {trainingLayers} from '@/data/associations';
import {Photo} from '@/components/editorial';
export default function TrainingFramework(){return <Tabs defaultValue="institute" className="training-framework"><TabsList className="training-stages" aria-label="SSICRS training model">{trainingLayers.map((l,i)=><TabsTrigger key={l.id} value={l.id}><span>0{i+1}</span>{l.name}</TabsTrigger>)}</TabsList>{trainingLayers.map((l,i)=><TabsContent value={l.id} key={l.id} className="training-detail"><Photo name={`crs${i+1}`} alt={l.name} className="training-photo"/><div><h3>{l.title}</h3><p>{l.text}</p></div><ul>{l.methods.map(m=><li key={m}>{m}</li>)}</ul></TabsContent>)}</Tabs>}
