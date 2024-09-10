//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import Common from "@/components/layouts/common"
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
    <Common>
      <SWRProvider>
        <EpisodeIndex novelId={params.novelId}/>
      </SWRProvider>
    </Common>
  );
}