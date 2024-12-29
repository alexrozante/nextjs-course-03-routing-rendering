'use client';

import { useRouter } from "next/navigation";

export default function ModalBackdrop({children}) {
  
  const router = useRouter();
  const goBack = () => { router.back() };

  return (
    <>
      <div className="modal-backdrop" onClick={goBack} />
      {children}
    </>
  );
};
