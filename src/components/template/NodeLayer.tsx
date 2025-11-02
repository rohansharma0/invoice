import { useTemplateStore } from "@/stores/templateStore";

export default function NodeLayer() {
    const { page, selectedNodeId, selectNode, updateNode } = useTemplateStore();

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {page.nodes.map((node) => (
                <div
                    key={node.id}
                    onClick={() => selectNode(node.id)}
                    className={`absolute pointer-events-auto border ${
                        selectedNodeId === node.id
                            ? "border-blue-500"
                            : "border-transparent"
                    }`}
                    style={{
                        top: node.props.top,
                        left: node.props.left,
                    }}>
                    {node.type === "Text" || node.type === "Header" ? (
                        <div
                            contentEditable
                            suppressContentEditableWarning
                            onInput={(e) =>
                                updateNode(node.id, {
                                    value: e.currentTarget.textContent,
                                })
                            }
                            className="p-1 bg-white"
                            style={{ fontSize: node.props.fontSize }}>
                            {node.props.value}
                        </div>
                    ) : (
                        <img
                            src={node.props.src || "/placeholder.png"}
                            alt=""
                            draggable={false}
                            className="bg-gray-100"
                            style={{ width: node.props.width }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
