import { getNewsForYear } from "@/app/helpers/news";
import NewsList from "@/components/news-list";

export default async function FilterNewsPage({params}) {
  const year = (await params).year;
  const newsList = getNewsForYear(year);

  return (
    <>
      <NewsList news={newsList} />
    </>
  );
}
