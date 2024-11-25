//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import Link from 'next/link'
import { getNoteSitePath, getGlossaryDataPath } from '@/libs/util'
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

async function getGlossaryData(novelId:string) {
  const path = getGlossaryDataPath(novelId);
  const res = await fetch(path);
  return res.json();
}

export default async function NoteGlossary({
  novelId
} : {
  novelId: string
}) {
  const data = await getGlossaryData(novelId);

  if (!data) {
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
                  <li key={id}
                    className={`
                      text-sky-600 no-underline leading-loose
                      hover:text-red-600 hover:underline
                    `}
                  >
                    <Link href={getNoteSitePath(novelId, id)} scroll={false}>{title}</Link>
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