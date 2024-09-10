//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-3xl mb-1">Web小説</h1>
      <ul >
        <li className="my-2 text-sky-600 no-underline hover:text-red-600 hover:underline">
          <Link href="/novel/progstars01/">プログラマブル・スターズ １</Link>
        </li>
      </ul>
    </>
  );
}
