import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface InvoiceTopbarProps {
    viewMode: "both" | "form" | "preview";
    setViewMode: (mode: "both" | "form" | "preview") => void;
    previewRef: React.MutableRefObject<HTMLDivElement | null>;
}

export const InvoiceTopbar = ({
    viewMode,
    setViewMode,
    previewRef,
}: InvoiceTopbarProps) => {
    const downloadPDF = async () => {
        if (!previewRef.current) return;
        const canvas = await html2canvas(previewRef.current);
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("invoice.pdf");
    };

    return (
        <div className="sticky top-0 z-50 bg-background border-b shadow-sm flex items-center justify-between px-4 py-2">
            <h2 className="font-semibold text-lg">Invoice Builder</h2>
            <div className="flex gap-2 items-center">
                <Select
                    value={viewMode}
                    onValueChange={(v) => setViewMode(v as any)}>
                    <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="View Mode" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="both">Both</SelectItem>
                        <SelectItem value="form">Form</SelectItem>
                        <SelectItem value="preview">Preview</SelectItem>
                    </SelectContent>
                </Select>

                <Button onClick={downloadPDF}>Download PDF</Button>
            </div>
        </div>
    );
};
