import { create } from "zustand";
import { persist } from "zustand/middleware";

type ViewMode = "form" | "preview" | "both";

interface InvoiceStoreState {
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
}

const useInvoiceStore = create<InvoiceStoreState>()(
    persist<InvoiceStoreState>(
        (set) => ({
            viewMode: "both",
            setViewMode: (mode: ViewMode) =>
                set({
                    viewMode: mode,
                }),
        }),
        { name: "invoice-store" }
    )
);

export default useInvoiceStore;
