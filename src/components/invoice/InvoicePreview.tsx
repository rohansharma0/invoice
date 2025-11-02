import { Separator } from "@/components/ui/separator";

export const InvoicePreview = ({
    formData,
}: {
    formData: Record<string, any>;
}) => {
    const total = (formData.items || []).reduce(
        (sum: number, item: any) =>
            sum + Number(item.quantity || 0) * Number(item.price || 0),
        0
    );

    return (
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-6 shadow">
            <h1 className="text-2xl font-bold mb-2">
                {formData.title || "Invoice"}
            </h1>
            <p className="text-sm text-muted-foreground mb-4">
                {formData.date}
            </p>

            <Separator className="my-2" />

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                    <h2 className="font-semibold">From:</h2>
                    <p>{formData.companyName}</p>
                    <p>{formData.companyAddress}</p>
                    <p>{formData.companyEmail}</p>
                </div>
                <div>
                    <h2 className="font-semibold">To:</h2>
                    <p>{formData.clientName}</p>
                    <p>{formData.clientAddress}</p>
                    <p>{formData.clientEmail}</p>
                </div>
            </div>

            <Separator className="my-2" />

            <table className="w-full text-left border-collapse mt-4">
                <thead>
                    <tr className="border-b">
                        <th className="py-2">Description</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {(formData.items || []).map((item: any, i: number) => (
                        <tr key={i} className="border-b">
                            <td className="py-1">{item.description}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>{(item.quantity || 0) * (item.price || 0)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="text-right mt-4 font-semibold">
                Total: {total.toFixed(2)}
            </div>

            <Separator className="my-4" />
            <p className="text-sm text-muted-foreground">{formData.notes}</p>
        </div>
    );
};
