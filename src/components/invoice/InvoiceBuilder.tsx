import { useState, useRef } from "react";
import { InvoiceTopbar } from "./InvoiceTopbar";
import { DynamicInvoiceForm } from "./DynamicInvoiceForm";
import { invoiceFormSchema } from "@/src/data/formSchema";
import { InvoicePreview } from "./InvoicePreview";

export default function InvoiceBuilder() {
    const [formData, setFormData] = useState<Record<string, any>>({
        items: [],
    });
    const [viewMode, setViewMode] = useState<"both" | "form" | "preview">(
        "both"
    );
    const previewRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="flex flex-col min-h-screen">
            {/* <InvoiceTopbar
                viewMode={viewMode}
                setViewMode={setViewMode}
                previewRef={previewRef}
            /> */}

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/30 overflow-auto">
                {(viewMode === "both" || viewMode === "form") && (
                    <div className="bg-background rounded-xl shadow p-4 overflow-y-auto">
                        <DynamicInvoiceForm
                            schema={invoiceFormSchema}
                            formData={formData}
                            setFormData={setFormData}
                        />
                    </div>
                )}

                {(viewMode === "both" || viewMode === "preview") && (
                    <div
                        ref={previewRef}
                        className="bg-white rounded-xl shadow p-6 overflow-y-auto">
                        <InvoicePreview formData={formData} />
                    </div>
                )}
            </div>
        </div>
    );
}
