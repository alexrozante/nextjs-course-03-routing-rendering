import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export default function FullscreenImagePage({ params }) {

  const newsItem = DUMMY_NEWS.find((item) => (item.id === params.id))

  if (!newsItem) {
    notFound();
  }
  
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
