//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
'use client'
import useSWR from 'swr';
import parse, {DOMNode, domToReact} from 'html-react-parser';
import { getIndexSitePath, getEpisodeSitePath, getEpisodeDataPath } from '@/libs/util'
import Loading from '@/components/elements/loading'
import LoadError from '@/components/elements/load-error'
import AnimatePage from '@/components/elements/animate-page'
import EpisodePagination from '@/components/elements/episode/episode-pagination'

export default function EpisodeBody({
  novelId,
  episodeId,
  onClickWikipedia,
  onClickNote
} : {
  novelId: string
  episodeId: string
  onClickWikipedia?:(title:string) => void
  onClickNote?:(noteId:string) => void
}) {

  const clickWikipedia = ({title}:{title:string}) => {
    if (onClickWikipedia) onClickWikipedia(title);
  }

  const clickNote = ({noteId}:{noteId:string}) => {
    if (onClickNote) onClickNote(noteId);
  }

  const replace = (node:DOMNode) =>{
    
    if (node && node.type === 'tag') {
      if (node.name === 'nv-link') {
        const url = node.attribs.url;
        const children = node.children as DOMNode[];
        return (
          <a
            href={url}
            target={'_blank'}
            className={`
              text-sky-600 no-underline
              hover:text-red-600 hover:underline hover:cursor-help
            `}
          >
            {domToReact(children)}
          </a>
        );
      } else if (node.name === 'nv-wiki') {
        const title = node.attribs.title;
        const children = node.children as DOMNode[];
        return (
          <span
            className={`
              text-sky-600 no-underline
              hover:text-red-600 hover:underline hover:cursor-help
            `}
            onClick={() => clickWikipedia({title})}
          >
            {domToReact(children)}
          </span>
        );
      } else if (node.name === 'nv-note') {
        const noteId = node.attribs.id;
        const children = node.children as DOMNode[];
        return (
          <span
            className={`
              text-sky-600 no-underline
              hover:text-red-600 hover:underline hover:cursor-help
            `}
            onClick={() => clickNote({noteId})}
          >
            {domToReact(children)}
          </span>
        );
      }
    }
  }

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
            {parse(data.body, {replace})}
          </div>
          <div className="my-6">
            <EpisodePagination indexPath={indexPath} prevPath={prevPath} nextPath={nextPath} />
          </div>
        </div>
      </AnimatePage>
    );
  }
} 