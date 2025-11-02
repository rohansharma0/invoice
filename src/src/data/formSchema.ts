// src/data/formSchema.ts
export const invoiceFormSchema = [
    {
        group: "Header",
        fields: [
            {
                type: "text",
                label: "Invoice Title",
                key: "title",
                placeholder: "Enter invoice title",
            },
            { type: "date", label: "Date", key: "date" },
        ],
    },
    {
        group: "Company Details",
        fields: [
            { type: "text", label: "Company Name", key: "companyName" },
            { type: "text", label: "Address", key: "companyAddress" },
            { type: "text", label: "Email", key: "companyEmail" },
        ],
    },
    {
        group: "Client Details",
        fields: [
            { type: "text", label: "Client Name", key: "clientName" },
            { type: "text", label: "Client Address", key: "clientAddress" },
            { type: "text", label: "Client Email", key: "clientEmail" },
        ],
    },
    {
        group: "Items",
        type: "table",
        key: "items",
        columns: [
            { key: "description", label: "Description", type: "text" },
            { key: "quantity", label: "Quantity", type: "number" },
            { key: "price", label: "Price", type: "number" },
        ],
    },
    {
        group: "Footer",
        fields: [{ type: "textarea", label: "Notes", key: "notes" }],
    },
];
