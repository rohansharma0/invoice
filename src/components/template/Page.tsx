import Grid from "./Grid";
import NodeLayer from "./NodeLayer";
import { useTemplateStore } from "@/stores/templateStore";

export default function Page() {
    const { page } = useTemplateStore();

    const sizeClass =
        page.size === "A4" ? "w-[210mm] h-[297mm]" : "w-[8.5in] h-[11in]";

    return (
        <div className="relative bg-white shadow-md border overflow-hidden mx-auto my-4">
            <div className={`relative ${sizeClass}`}>
                <Grid />
                <NodeLayer />
            </div>
        </div>
    );
}
