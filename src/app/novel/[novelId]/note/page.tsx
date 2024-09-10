//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import {SWRProvider} from '@/components/elements/swr-provider'
import NoteGlossary from '@/components/elements/note/note-glossary'

export default function IndexPage({
  params,
}: Readonly<{
  params: {
    novelId: string
  }
}>) {
  return (
    <SWRProvider>
      <NoteGlossary novelId={params.novelId}/>
    </SWRProvider>
  );
}