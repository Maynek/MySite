//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import { getNoteDataPath } from '@/libs/util'
import LoadError from '@/components/elements/loading/load-error'
import ContentsBody from '@/components/elements/contents/contents-body'

async function getNoteData(novelId:string, noteId: string) {
  const path = getNoteDataPath(novelId, noteId);
  const res = await fetch(path);
  return res.json();
}

export default async function NoteContainer({
  novelId,
  noteId,
} : {
  novelId: string
  noteId: string
}) {
  const data = await getNoteData(novelId, noteId);

  if (!data) {
    return ( <LoadError /> );
  } else {
    const body = data.summary + data.body;
    
    return (
      <div className="flex flex-col h-full">
        <div className="text-center mb-6">
          <h1 className="font-bold sm:text-2xl ">{data.title}</h1>
        </div>
        <div className="flex-1 leading-loose">
          <ContentsBody body={body} novelId={novelId}/>
        </div>
      </div>
    );
  }
} 