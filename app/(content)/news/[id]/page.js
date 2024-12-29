import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsItem } from "@/app/helpers/news";
import { Suspense } from "react";

async function NewsItem({id}) {
  const newsItem = await getNewsItem(id);
  if (!newsItem) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.id}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <main>
        <p>{newsItem.content}</p>
      </main>
    </article>
  );
}

export default async function NewsPage({ params }) {
  const id = (await params).id
  return (
    <Suspense fallback={<p>Loading news item...</p>}>
      <NewsItem id={id} />
    </Suspense>
  )  
}
