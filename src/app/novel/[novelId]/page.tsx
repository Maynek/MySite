//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import EpisodeIndex from '@/components/elements/episode/episode-index'

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