//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import Link from 'next/link'

export default function EpisodePagination({
  indexPath,
  prevPath,
  nextPath,
} : {
  indexPath: string 
  prevPath: string | null
  nextPath: string | null
}) {
  return (
    <div className="flex text-sm">
      <div className="flex-1 text-center text-sky-600 no-underline hover:text-red-600">
        {prevPath ? <Link href={prevPath} scroll={false}>＜ 前へ</Link> : <></>}
      </div>
      <div className="flex-1 text-center text-sky-600 no-underline hover:text-red-600">
        <Link href={indexPath} scroll={false}>目次</Link>
      </div>
      <div className="flex-1 text-center text-sky-600 no-underline hover:text-red-600">
        {nextPath ? <Link href={nextPath} scroll={false}>次へ ＞</Link> : <></>}
      </div>
    </div>
    
  );
} 