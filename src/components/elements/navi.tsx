//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import Link from 'next/link'

export default function Navi({}) {
    return (
        <nav>
          <ul className="flex flex-row">
            <li className="mr-2 hover:text-sky-600">
              <Link href="/">Home</Link>
            </li>
            <li className="mr-2 hover:text-sky-600">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
    );
  }