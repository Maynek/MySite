import { getArticles } from "@/libs/microcms";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import Common from "@/components/layouts/common"

export default function Home() {
	const { contents } = use(getArticles());
	return (
		<Common>
		  <div className="animate-fade-in">
		  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-3/4 mx-auto">
			{contents.map((article) => (
				<article className="flex flex-col shadow p-4" key={article.id}>
					<Link href={`/blog/${article.id}`} className="flex flex-col items-center">
						<Image
							src={article.eyecatch?.url ?? "/no-image.jpg"}
							alt="アイキャッチ"
							width={1600}
							height={1200}
							className="rounded-xl object-cover"
						/>
						<h2 className="text-xl font-bold">{article.title}</h2>
					</Link>
				</article>
			))}
		  </div>
		  </div>
		</Common>
	);
}