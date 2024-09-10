//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
'use client'
import useSWR from 'swr';
import parse from 'html-react-parser';
import Link from 'next/link'
import Loading from '@/components/elements/loading/loading'
import LoadError from '@/components/elements/loading/load-error'

export default function WikipediaSummary({
  title,
} : {
  title: string
}) {
  const shouldFetch = title;
  const path = 'https://ja.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&redirects=1&origin=*&titles=' + title;
  const linkURL = 'https://ja.wikipedia.org/wiki/' + title;
  const {data, error, isLoading} = useSWR(shouldFetch ? path : null);

  if (isLoading) {
    return ( <Loading /> );
  } else if (!data) {
    return ( <LoadError /> );
  } else {
    let pageId = '-1';
    for (let id in data.query.pages) {
      pageId = id;
    }
    if (pageId === '-1') {
      return ( <LoadError /> );
    }
    const page = data.query.pages[pageId];

    return (
      <div className="flex flex-col h-full">
        <div className="text-center mb-2">
          <h1 className="font-bold sm:text-2xl ">{page.title}</h1>
          <p className="mt-2 text-slate-500">（Wikipediaより引用）</p>
        </div>
        <div className="flex-1 h-full overflow-auto" >
          <div className="wikipedia_body">
            {parse(page.extract)}
          </div>
        </div>
        <div className="text-center mt-2">
          <Link
            className="px-2 py-1 bg-sky-600 text-white font-semibold rounded hover:bg-sky-700"
            href={linkURL}
            target='_blank'
          >
            Wikipediaで全文を読む
          </Link>
        </div>
      </div>
    );
  }
} 