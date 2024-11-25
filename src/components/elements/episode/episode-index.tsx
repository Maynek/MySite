//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import Link from 'next/link'
import { episode, chapter, getEpisodeSitePath, getGlossarySitePath, getIndexData } from '@/libs/util'
import LoadError from '@/components/elements/loading/load-error'

export default async function EpisodeIndex({
  novelId
} : {
  novelId: string
}) {
  const data = await getIndexData(novelId);
  let id:string;

  if (!data) {
    return ( <LoadError /> );
  } else {
    return (
      <>
        <div className="mt-4 mb-8 text-center">
          <h1 className="font-bold mb-1 sm:text-2xl">{data.maintitle}</h1>
          <h2 className="font-bold sm:text-xl">{data.subtitle}</h2>
        </div>
        <ul className="mb-8">
          {data.chapters.map(({id, title, episodes}:chapter) => (
            <li key={id} className="my-4">
              <span className="font-bold sm:text-lg">{title}</span>
              <ul className="my-2 font-normal">
                {episodes?.map(({id,title}:episode) => (
                  <li 
                    key={id}
                    className={`
                      text-sky-600 no-underline leading-loose
                      hover:text-red-600 hover:underline
                    `}
                  >
                    <Link href={getEpisodeSitePath(novelId, id)} scroll={false}>{title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        {data.glossary && (
          <ul className="mb-8">
            <li className="text-sky-600 no-underline hover:text-red-600 hover:underline">
              <Link href={getGlossarySitePath(novelId)} scroll={false}>{data.glossary}</Link>
            </li>
          </ul>          
        )}
      </>
    );
  }
} 