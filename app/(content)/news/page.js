import { getAllNews } from "@/app/helpers/news";
import NewsList from "@/components/news-list";

export default async function NewsListPage() {
  const news = await getAllNews();
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}



