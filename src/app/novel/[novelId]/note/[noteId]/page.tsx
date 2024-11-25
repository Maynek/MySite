//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import { getNotes } from '@/libs/util'
import NoteContainer from '@/components/elements/note/note-container'

export const dynamicParams = true;
export async function generateStaticParams() {
  const data = await getNotes();
  return data;
}

export default function IndexPage({
  params,
}: Readonly<{
  params: {
    novelId: string
    noteId: string  
  }
}>) {
  return (
    <NoteContainer novelId={params.novelId} noteId={params.noteId}/>
  );
}