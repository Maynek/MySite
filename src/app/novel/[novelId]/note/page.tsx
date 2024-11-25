//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import { getGlossaries } from '@/libs/util'
import NoteGlossary from '@/components/elements/note/note-glossary'

export const dynamicParams = true;
export async function generateStaticParams() {
  const data = await getGlossaries();
  return data;
}

export default function IndexPage({
  params,
}: Readonly<{
  params: {
    novelId: string
  }
}>) {
  return (
    <NoteGlossary novelId={params.novelId}/>
  );
}