const existingGallery=[
{image:'portrait',title:'Portrait',category:'Portraits & conversations',alt:'Dr. Sudhir Srivastava seated in a black formal jacket'},
{image:'surgeon',title:'In the operating room',category:'Surgical practice',alt:'Dr. Srivastava in blue surgical attire, cap and mask in an operating room'},
{image:'mentor',title:'A shared discussion',category:'Portraits & conversations',alt:'Dr. Srivastava seated around a table with several people and a wall-mounted display'},
{image:'speaker',title:'At the lectern',category:'Gatherings & presentations',alt:'Dr. Srivastava speaking from a lectern on a stage'},
{image:'console',title:'With an operating-room team',category:'Surgical practice',alt:'Dr. Srivastava seated at a surgical console with a team in surgical attire'},
{image:'conversation',title:'In conversation',category:'Portraits & conversations',alt:'Dr. Srivastava in a seated discussion with two other participants'},
{image:'meeting',title:'Around the table',category:'Portraits & conversations',alt:'Participants in a meeting around a long conference table'},
{image:'recognition',title:'A moment of recognition',category:'Gatherings & presentations',alt:'Four participants standing together while holding a commemorative presentation'},
{image:'award-stage',title:'Recognition on stage',category:'Gatherings & presentations',alt:'Three participants on stage with a framed presentation'},
{image:'conference',title:'A stage presentation',category:'Gatherings & presentations',alt:'Participants standing together on a conference stage with a floral bouquet'},
{image:'gathering',title:'A group gathering',category:'Gatherings & presentations',alt:'A large group assembled outdoors in front of a circular building'},
{image:'ceremony',title:'A ceremonial gathering',category:'Gatherings & presentations',alt:'A ceremonial gathering with participants, floral decorations and a framed portrait'},
{image:'mantra',title:'SSI Mantra',category:'Surgical technology',alt:'Uploaded SSI Mantra product image showing the full surgical robotic system'},
{image:'mantra-wide',title:'SSI Mantra · system view',category:'Surgical technology',alt:'A wide product image showing SSI Mantra robotic arms in their supplied configuration'}];

export const gallery=existingGallery.map((p,i)=>({...p,filePath:`/images/${p.image}.webp`,altText:p.alt,caption:p.title,date:null,location:null,chapter:p.category,sortOrder:i,publicationApproval:true}));
