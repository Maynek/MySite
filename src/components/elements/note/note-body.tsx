//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
'use client'
import useSWR from 'swr';
import Link from 'next/link'
import parse, {DOMNode, domToReact} from 'html-react-parser';
import { getNoteDataPath } from '@/libs/util'
import Loading from '@/components/elements/loading/loading'
import LoadError from '@/components/elements/loading/load-error'

export default function NoteBody({
  novelId,
  noteId,
} : {
  novelId: string
  noteId: string
}) {

  const replace = (node:DOMNode) =>{
    
    if (node && node.type === 'tag') {
      if (node.name === 'nv-note') {
        const noteId = node.attribs.id;
        const children = node.children as DOMNode[];
        return (
          <Link 
            className={`
              text-sky-600 no-underline
              hover:text-red-600 hover:underline
            `}
            href={'/' + novelId + '/note/' + noteId}
          >
            {domToReact(children)} 
          </Link>

        );
      }
    }
  }

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
        <div className="flex-1 leading-loose">
          {parse(data.summary, {replace})}
          <br/>
          {parse(data.body, {replace})}
        </div>
      </div>
    );
  }
} 