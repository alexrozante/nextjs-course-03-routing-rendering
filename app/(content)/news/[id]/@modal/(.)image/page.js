import ModalBackdrop from "@/components/modal-backdrop";
import { notFound } from "next/navigation";
import { getNewsItem } from "@/app/helpers/news";

export default async function ImagePage({ params }) {

  const newsItem = await getNewsItem(params.id)
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
