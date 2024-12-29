'use client'

import { notFound, useRouter } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export default function ImagePage({ params }) {
  const newsItem = DUMMY_NEWS.find(async (item) => item.id === (await params).id);

  if (!newsItem) {
    notFound();
  }

  const router = useRouter();
  const goBack = () => { router.back() };

  return (
    <>
      <div className="modal-backdrop" onClick={goBack} />
      <dialog className="modal" open onClick={goBack}>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
