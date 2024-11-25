//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import { getPathsData } from '@/libs/util'
import EpisodeContainer from '@/components/elements/episode/episode-container'

type pathElement = {
  novelId: string;
  episodeId: string;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const paths = await getPathsData();
  return paths.episodes;
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