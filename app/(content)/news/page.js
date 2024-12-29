import { getAllNews } from "@/app/helpers/news";
import NewsList from "@/components/news-list";
import { Suspense } from "react";

async function NewsGrid() {
  const news = await getAllNews();
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}

export default async function NewsListPage() {
  return (
    <Suspense fallback={<p>Loading news...</p>}>
      <NewsGrid />
    </Suspense>
  )
}



