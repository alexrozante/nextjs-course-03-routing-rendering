import Link from "next/link";
import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsPage({ params }) {

  const newsItem = DUMMY_NEWS.find(async (item) => (item.id === (await params).id))

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
