import { create } from "zustand";

export interface GridCell {
    id: string;
    row: number;
    col: number;
    rowSpan?: number;
    colSpan?: number;
    nodeId?: string | null;
    style?: {
        border?: string;
        backgroundColor?: string;
    };
}

export interface NodeProps {
    id: string;
    type: "Text" | "Image" | "Header" | "Footer";
    cellIds: string[];
    props: Record<string, any>;
}

export interface PageData {
    id: string;
    size: "A4" | "Letter";
    rows: number;
    cols: number;
    cells: GridCell[];
    nodes: NodeProps[];
}

interface TemplateState {
    page: PageData;
    selectedNodeId: string | null;
    addNode: (type: NodeProps["type"]) => void;
    updateNode: (id: string, props: Record<string, any>) => void;
    selectNode: (id: string | null) => void;
}

export const useTemplateStore = create<TemplateState>((set, get) => ({
    page: {
        id: "page-1",
        size: "A4",
        rows: 12,
        cols: 8,
        cells: Array.from({ length: 12 * 8 }).map((_, i) => ({
            id: `c-${i}`,
            row: Math.floor(i / 8),
            col: i % 8,
        })),
        nodes: [],
    },
    selectedNodeId: null,

    addNode: (type) => {
        const id = crypto.randomUUID();
        const newNode: NodeProps = {
            id,
            type,
            cellIds: [],
            props:
                type === "Text" || type === "Header"
                    ? { value: "New text", fontSize: 14, top: 100, left: 100 }
                    : { src: "", top: 120, left: 100, width: 80 },
        };
        set((state) => ({
            page: { ...state.page, nodes: [...state.page.nodes, newNode] },
            selectedNodeId: id,
        }));
    },

    updateNode: (id, props) =>
        set((state) => ({
            page: {
                ...state.page,
                nodes: state.page.nodes.map((n) =>
                    n.id === id ? { ...n, props: { ...n.props, ...props } } : n
                ),
            },
        })),

    selectNode: (id) => set({ selectedNodeId: id }),
}));
