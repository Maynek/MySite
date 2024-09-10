//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
'use client'
import Link from 'next/link'
import useSWR from 'swr';
import { getNoteSitePath, getGlossaryDataPath } from '@/libs/util'
import Loading from '@/components/elements/loading/loading'
import LoadError from '@/components/elements/loading/load-error'

type note = {
  id:string;
  title: string;
}

type tab = {
  id: string;
  title: string;
  notes: Array<note>;
}


export default function NoteGlossary({
  novelId
} : {
  novelId: string
}) {
  const path = getGlossaryDataPath(novelId);
  const {data, error, isLoading} = useSWR(path);
  let id:string;

  if (isLoading) {
    return ( <Loading /> );
  } else if (!data) {
    return ( <LoadError /> );
  } else {
    return (
      <>
        <div className="mt-4 mb-8 text-center">
          <h1 className="font-bold mb-1 sm:text-2xl">{data.title}</h1>
        </div>
        <ul className="mb-8">
          {data.tabs.map(({id, title, notes}:tab) => (
            <li key={id} className="my-4">
              <span className="font-bold sm:text-lg">{title}</span>
              <ul className="my-2 font-normal">
                {notes?.map(({id,title}:note) => (
                  <li key={id} className="text-sky-600 no-underline hover:text-red-600 hover:underline">
                    <Link href={getNoteSitePath(novelId, id)}>{title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </>
    );
  }
} 