import { notFound } from "next/navigation";
import { getNewsItem } from "@/app/helpers/news";
import { Suspense } from "react";

async function ImagePreview({id}) {
  const newsItem = await getNewsItem(id);
  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}

export default async function FullscreenImagePage({ params }) {
  const newsId = (await params).id;
  return (
    <Suspense fallback={<p>Loading image...</p>}>
      <ImagePreview id={newsId}/>
    </Suspense>
  )
}
