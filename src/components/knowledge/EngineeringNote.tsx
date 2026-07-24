import type { EngineeringNoteItem } from "@/content/knowledge/types";

type EngineeringNoteProps = {
  note: EngineeringNoteItem;
};

/** Restrained engineering note block — not a marketing callout. */
export function EngineeringNote({ note }: EngineeringNoteProps) {
  return (
    <aside
      className="knowledge-note"
      aria-labelledby={`knowledge-note-${note.id}`}
    >
      <p className="knowledge-note__eyebrow">Engineering note</p>
      <h3 id={`knowledge-note-${note.id}`} className="knowledge-note__title">
        {note.title}
      </h3>
      <p className="knowledge-note__text">{note.text}</p>
    </aside>
  );
}
