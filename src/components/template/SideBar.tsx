import { useTemplateStore } from "@/stores/templateStore";
import { Button } from "@/components/ui/button";

export default function SideBar() {
    const { addNode } = useTemplateStore();

    return (
        <div className="w-56 border-r bg-gray-50 p-3 space-y-3">
            <h2 className="font-semibold text-sm text-gray-700">Add Node</h2>
            <Button onClick={() => addNode("Text")} className="w-full">
                Add Text
            </Button>
            <Button onClick={() => addNode("Image")} className="w-full">
                Add Image
            </Button>
        </div>
    );
}
