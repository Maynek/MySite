//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import { getEpisodes } from '@/libs/util'
import EpisodeContainer from '@/components/elements/episode/episode-container'

export const dynamicParams = false;
export async function generateStaticParams() {
  const data = await getEpisodes();
  return data;
}

export default function EpisodePage({
  params,
}: Readonly<{
  params: {
    novelId: string
    episodeId: string  
  }
}>) {
  return (
    <EpisodeContainer
      novelId={params.novelId}
      episodeId={params.episodeId}
    />
  );
}