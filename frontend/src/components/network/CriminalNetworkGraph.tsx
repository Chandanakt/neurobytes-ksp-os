import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  {
    id: "1",
    position: { x: 250, y: 50 },
    data: { label: "Accused: Ramesh" },
  },

  {
    id: "2",
    position: { x: 50, y: 200 },
    data: { label: "Vehicle KA09AB1234" },
  },

  {
    id: "3",
    position: { x: 250, y: 200 },
    data: { label: "Phone 9876543210" },
  },

  {
    id: "4",
    position: { x: 450, y: 200 },
    data: { label: "FIR #2026-145" },
  },

  {
    id: "5",
    position: { x: 250, y: 350 },
    data: { label: "Associate: Suresh" },
  },
];

const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },

  {
    id: "e1-3",
    source: "1",
    target: "3",
  },

  {
    id: "e1-4",
    source: "1",
    target: "4",
  },

  {
    id: "e3-5",
    source: "3",
    target: "5",
  },
];

export default function CriminalNetworkGraph() {
  return (
    <div className="h-[700px] bg-slate-900 rounded-xl">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
      />
    </div>
  );
}