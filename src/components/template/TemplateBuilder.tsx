import { useState } from "react";
import { Button } from "@/components/ui/button";
import { defaultTemplateSchema } from "@/src/data/defaultTemplateSchema";
import { TemplateEditor } from "./TemplateEditor";
import { TemplateSchemaPreview } from "./TemplateSchemaPreview";

export default function TemplateBuilder() {
    const [schema, setSchema] = useState(defaultTemplateSchema);

    return (
        <div className="flex flex-col min-h-screen bg-muted/30">
            {/* <div className="sticky top-0 z-50 bg-background border-b shadow-sm flex items-center justify-between px-4 py-2">
                <h2 className="font-semibold text-lg">Template Builder</h2>
                <Button onClick={() => console.log(schema)}>
                    Save Template
                </Button>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <div className="bg-background rounded-xl shadow p-4 overflow-y-auto">
                    <TemplateEditor schema={schema} setSchema={setSchema} />
                </div>

                <div className="bg-white rounded-xl shadow p-4 overflow-y-auto">
                    <TemplateSchemaPreview schema={schema} />
                </div>
            </div>
        </div>
    );
}
