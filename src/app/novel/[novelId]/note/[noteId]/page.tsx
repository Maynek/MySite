//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import {SWRProvider} from '@/components/elements/swr-provider'
import NoteContainer from '@/components/elements/note/note-container'

export default function IndexPage({
  params,
}: Readonly<{
  params: {
    novelId: string
    noteId: string  
  }
}>) {
  return (
    <SWRProvider>
      <NoteContainer novelId={params.novelId} noteId={params.noteId}/>
    </SWRProvider>
  );
}