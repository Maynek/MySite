import { getArticles, getArticlesDetail } from "@/libs/microcms";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import styles from "@/styles/blog.module.css"
import Common from "@/components/layouts/common"

type Props = {
	params: { articleId: string };
};

export async function generateMetadata(props: Props): Promise<Metadata> {
	const id = props.params.articleId;
	const article = await getArticlesDetail(id);
	return {
		title: article.title,
	};
}

export default async function Article(props: Props) {
  const article = await getArticlesDetail(props.params.articleId);
  
  if (!article) {
    notFound();
  }
  return (
    <Common>
	  <div className={styles.head}>
        <Image
          src={article.eyecatch?.url ?? "/no-image.png"}
          alt="アイキャッチ"
          width={1600}
          height={1200}
          className="rounded-lg object-cove"
	    />
        <h1>{article.title}</h1>
        <p>{article.createdAt}</p>
      </div>
	  <hr />
      <div className={styles.article}>
        {parse(article.content)}
	  </div>
    </Common>
  );
}