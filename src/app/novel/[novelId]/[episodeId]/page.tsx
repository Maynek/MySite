//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import Common from "@/components/layouts/common"
import {SWRProvider} from '@/components/elements/swr-provider'
import EpisodeContainer from '@/components/elements/episode-container'

export default function EpisodePage({
  params,
}: Readonly<{
  params: {
    novelId: string
    episodeId: string  
  }
}>) {
  return (
    <Common>
      <SWRProvider>
        <EpisodeContainer
          novelId={params.novelId}
          episodeId={params.episodeId}
        />
      </SWRProvider>
    </Common>
  );
}