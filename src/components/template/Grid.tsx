import { useTemplateStore } from "@/stores/templateStore";

export default function Grid() {
    const { page } = useTemplateStore();

    return (
        <div
            className="absolute top-0 left-0 w-full h-full grid border border-gray-300"
            style={{
                gridTemplateRows: `repeat(${page.rows}, 1fr)`,
                gridTemplateColumns: `repeat(${page.cols}, 1fr)`,
            }}>
            {page.cells.map((cell) => (
                <div
                    key={cell.id}
                    className="border border-gray-200 hover:bg-gray-100 transition-colors"
                />
            ))}
        </div>
    );
}
