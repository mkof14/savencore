import { EngineeringDiagram } from "@/components/engineering";

type DomainFlowDiagramProps = {
  id: string;
  title: string;
  description: string;
  nodes: readonly { id: string; label: string; detail?: string }[];
  kind?: "flow" | "hierarchy";
};

/**
 * Minimal domain / chain diagram using the shared engineering diagram language.
 */
export function DomainFlowDiagram({
  id,
  title,
  description,
  nodes,
  kind = "hierarchy",
}: DomainFlowDiagramProps) {
  return (
    <div className="domain-flow-diagram">
      <EngineeringDiagram
        diagram={{
          id,
          kind,
          title,
          description,
          nodes: nodes.map((node) => ({
            id: node.id,
            label: node.label,
            ...(node.detail ? { detail: node.detail } : {}),
          })),
        }}
      />
    </div>
  );
}
