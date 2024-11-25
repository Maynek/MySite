//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import { getEpisodes } from '@/libs/util'
import EpisodeContainer from '@/components/elements/episode/episode-container'

type Params = Promise<{novelId: string, episodeId: string }>;

export const dynamicParams = false;
export async function generateStaticParams() {
  const data = await getEpisodes();
  return data;
}

export default async function EpisodePage({
  params,
}: Readonly<{
  params: Params
}>) {
  const {novelId, episodeId}  = await params;
  return (
    <EpisodeContainer
      novelId={novelId}
      episodeId={episodeId}
    />
  );
}