//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import { getIndexSitePath, getEpisodeSitePath, getEpisodeDataPath } from '@/libs/util'
import LoadError from '@/components/elements/loading/load-error'
import ContentsBody from '@/components/elements/contents/contents-body'
import EpisodePagination from '@/components/elements/episode/episode-pagination'

async function getEpisodeData(novelId:string, episodeId: string) {
  const path = getEpisodeDataPath(novelId, episodeId);
  const res = await fetch(path);
  return res.json();
}

export default async function EpisodeContainer({
  novelId,
  episodeId,
}:{
  novelId: string
  episodeId: string
}) {
  const data = await getEpisodeData(novelId, episodeId);

  if (!data) {
    return ( <LoadError /> );
  } else {
    const indexPath = getIndexSitePath(novelId);
    const prevPath = data.prevId ? getEpisodeSitePath(novelId, data.prevId) : null;
    const nextPath = data.nextId ? getEpisodeSitePath(novelId, data.nextId) : null;

    return (
      <div className="flex flex-col h-full">
        <div className="my-6">
          <EpisodePagination indexPath={indexPath} prevPath={prevPath} nextPath={nextPath} />
        </div>
        <div className="text-center mb-6">
          <h1 className="font-bold sm:text-2xl ">{data.title}</h1>
        </div>
        <div className="flex-1 leading-loose">
          <ContentsBody body={data.body} novelId={novelId}/>
        </div>
        <div className="my-6">
          <EpisodePagination indexPath={indexPath} prevPath={prevPath} nextPath={nextPath} />
        </div>
      </div>
    );
  }
}