//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
'use client'
import useSWR from 'swr';
import parse from 'html-react-parser';
import Link from 'next/link'
import { getNoteSitePath, getNoteDataPath} from '@/libs/util'
import Loading from '@/components/elements/loading/loading'
import LoadError from '@/components/elements/loading/load-error'

export default function NotesvelSummary({
  novelId,
  noteId,
} : {
  novelId: string
  noteId: string
}) {
  const shouldFetch = novelId && noteId;
  const path = getNoteDataPath(novelId, noteId);
  const {data, error, isLoading} = useSWR(shouldFetch ? path : null);

  if (isLoading) {
    return ( <Loading /> );
  } else if (!data) {
    return ( <LoadError /> );
  } else {
    return (
      <div className="flex flex-col h-full">
        <div className="text-center mb-6">
          <h1 className="font-bold sm:text-2xl ">{data.title}</h1>
        </div>
        <div className="flex-1 h-full overflow-auto">
          <div className="leading-loose">
            {parse(data.summary)}
          </div>
        </div>
        <div className="text-center mt-2">
          <Link
            className="px-2 py-1 bg-sky-600 text-white font-semibold rounded hover:bg-sky-700"
            href={getNoteSitePath(novelId, noteId)}
            target='_blank'
          >
            詳細を読む
          </Link>
        </div>
      </div>
    );
  }
} 