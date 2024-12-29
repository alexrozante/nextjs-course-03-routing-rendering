import ModalBackdrop from "@/components/modal-backdrop";
import { notFound } from "next/navigation";
import { getNewsItem } from "@/app/helpers/news";
import { Suspense } from "react";

async function ImagePreview({id}) {
  const newsItem = await getNewsItem(id);
  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <ModalBackdrop>
        <dialog className="modal" open>
          <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
          </div>
        </dialog>
      </ModalBackdrop>
    </>
  );
}

export default async function ImagePage({ params }) {
  const newsId = (await params).id;
  return (
    <Suspense fallback={<p>Loading image...</p>}>
      <ImagePreview id={newsId} />
    </Suspense>
  );
}
