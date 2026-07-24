import { EngineeringCallout } from "@/components/engineering/EngineeringCallout";

type EngineeringNoteBlockProps = {
  id: string;
  title: string;
  text: string;
};

/** Standard Engineering Note content block (callout type). */
export function EngineeringNoteBlock({
  id,
  title,
  text,
}: EngineeringNoteBlockProps) {
  return (
    <EngineeringCallout
      callout={{
        id,
        type: "engineering-note",
        title,
        text,
      }}
    />
  );
}
