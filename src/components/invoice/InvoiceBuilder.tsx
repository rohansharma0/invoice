import { useState, useRef } from "react";
import { DynamicInvoiceForm } from "./DynamicInvoiceForm";
import { invoiceFormSchema } from "@/src/data/formSchema";
import useInvoiceStore from "@/stores/useInvoiceStore";

export default function InvoiceBuilder() {
    const [formData, setFormData] = useState<Record<string, any>>({
        items: [],
    });

    const { viewMode } = useInvoiceStore();

    const previewRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/30 overflow-auto">
                {(viewMode === "both" || viewMode === "form") && (
                    <DynamicInvoiceForm
                        schema={invoiceFormSchema}
                        formData={formData}
                        setFormData={setFormData}
                    />
                )}

                {(viewMode === "both" || viewMode === "preview") && (
                    <div
                        ref={previewRef}
                        className="bg-white rounded-xl shadow p-6 overflow-y-auto"></div>
                )}
            </div>
        </div>
    );
}
