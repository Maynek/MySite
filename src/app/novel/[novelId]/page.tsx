//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import { getIndexes } from '@/libs/util'
import EpisodeIndex from '@/components/elements/episode/episode-index'

export const dynamicParams = false;
export async function generateStaticParams() {
  const data = await getIndexes();
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
    <EpisodeIndex novelId={params.novelId}/>
  );
}