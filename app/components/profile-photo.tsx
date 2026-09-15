import { useId, useRef } from "react";
import { X } from "lucide-react";
import { useLocale } from "../i18n/context";

export function ProfilePhoto() {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const {
    messages: { common },
  } = useLocale();
  return (
    <>
      <button
        className="profile-trigger"
        type="button"
        aria-label={common.profileOpen}
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
      >
        <img
          src="/assets/perfil.png"
          alt="Martin Teseira"
          width="46"
          height="46"
        />
      </button>
      <dialog
        ref={dialog}
        className="profile-dialog"
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="profile-dialog-content">
          <button
            className="profile-close"
            type="button"
            aria-label={common.close}
            onClick={() => dialog.current?.close()}
          >
            <X size={22} />
          </button>
          <img
            className="profile-full"
            src="/assets/perfil.png"
            alt={common.profileAlt}
          />
          <div className="profile-caption">
            <h2 id={titleId}>Martin Teseira</h2>
            <p>{common.profileCaption}</p>
          </div>
        </div>
      </dialog>
    </>
  );
}
