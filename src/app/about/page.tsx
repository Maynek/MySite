//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import Link from 'next/link'
import Common from "@/components/layouts/common"

export default function About() {
  return (
    <Common>
      <h1 className="font-bold text-3xl mb-4">このサイトについて</h1>
      <p>Ada Maynek が執筆している Web 小説 を公開するためのサイトです。</p>
    </Common>
  );
}