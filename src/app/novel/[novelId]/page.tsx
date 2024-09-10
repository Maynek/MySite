//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import EpisodeIndex from '@/components/elements/episode/episode-index'
import {SWRProvider} from '@/components/elements/swr-provider'

export default function IndexPage({
  params,
}: Readonly<{
  params: {
    novelId: string
  }
}>) {
  return (
    <SWRProvider>
      <EpisodeIndex novelId={params.novelId}/>
    </SWRProvider>
  );
}