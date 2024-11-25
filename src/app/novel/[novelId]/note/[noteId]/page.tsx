//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import { getNotes } from '@/libs/util'
import NoteContainer from '@/components/elements/note/note-container'

type Params = Promise<{novelId: string, noteId: string }>;

export const dynamicParams = false;
export async function generateStaticParams() {
  const data = await getNotes();
  return data;
}

export default async function IndexPage({
  params,
}: Readonly<{
  params: Params
}>) {
  const {novelId, noteId}  = await params;
  return (
    <NoteContainer novelId={novelId} noteId={noteId}/>
  );
}