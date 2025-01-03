import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function NewsPage({ params }) {

  const newsItem = DUMMY_NEWS.find((item) => (item.id === params.id))

  if (!newsItem) {
    notFound();
  }
  
  return (
    <article className='news-article'>
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <main>
        <p>{newsItem.content}</p>
      </main>
    </article>
  );
}
