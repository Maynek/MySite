//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
'use client'
import useSWR from 'swr';
import { getIndexSitePath, getEpisodeSitePath, getEpisodeDataPath } from '@/libs/util'
import Loading from '@/components/elements/loading/loading'
import LoadError from '@/components/elements/loading/load-error'
import AnimatePage from '@/components/elements/animate-page'
import ContentsBody from '@/components/elements/contents/contents-body'
import EpisodePagination from '@/components/elements/episode/episode-pagination'

export default function EpisodeContainer({
  novelId,
  episodeId,
}:{
  novelId: string
  episodeId: string
}) {
  const shouldFetch = novelId && episodeId;
  const path = getEpisodeDataPath(novelId, episodeId);
  const {data, error, isLoading} = useSWR(shouldFetch ? path : null);

  if (isLoading) {
    return ( <Loading /> );
  } else if (!data) {
    return ( <LoadError /> );
  } else {
    const indexPath = getIndexSitePath(novelId);
    const prevPath = data.prevId ? getEpisodeSitePath(novelId, data.prevId) : null;
    const nextPath = data.nextId ? getEpisodeSitePath(novelId, data.nextId) : null;

    return (
      <AnimatePage>
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
      </AnimatePage>
    );
  }
}