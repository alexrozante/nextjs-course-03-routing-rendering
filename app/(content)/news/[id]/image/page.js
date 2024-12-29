import { notFound } from "next/navigation";
import { getNewsItem } from "@/app/helpers/news";

export default async function FullscreenImagePage({ params }) {
  const newsItem = await getNewsItem(params.id);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
