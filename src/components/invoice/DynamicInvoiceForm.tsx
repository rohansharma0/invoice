import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Trash } from "lucide-react";

interface DynamicInvoiceFormProps {
    schema: any[];
    formData: Record<string, any>;
    setFormData: (data: Record<string, any>) => void;
}

export const DynamicInvoiceForm = ({
    schema,
    formData,
    setFormData,
}: DynamicInvoiceFormProps) => {
    const handleChange = (key: string, value: any) => {
        setFormData({ ...formData, [key]: value });
    };

    const handleItemChange = (index: number, column: string, value: any) => {
        const newItems = [...(formData.items || [])];
        newItems[index][column] = value;
        setFormData({ ...formData, items: newItems });
    };

    const addItem = () => {
        setFormData({
            ...formData,
            items: [
                ...(formData.items || []),
                { description: "", quantity: 0, price: 0 },
            ],
        });
    };

    const removeItem = (index: number) => {
        const newItems = formData.items.filter(
            (_: any, i: number) => i !== index
        );
        setFormData({ ...formData, items: newItems });
    };

    return (
        <Accordion type="multiple" defaultValue={schema.map((s) => s.group)}>
            {schema.map((section, i) => (
                <AccordionItem key={i} value={section.group}>
                    <AccordionTrigger>{section.group}</AccordionTrigger>
                    <AccordionContent>
                        {section.type === "table" ? (
                            <div className="space-y-2">
                                {(formData.items || []).map(
                                    (item: any, index: number) => (
                                        <div
                                            key={index}
                                            className="grid grid-cols-12 gap-2 items-end">
                                            {section.columns.map((col: any) => (
                                                <div
                                                    key={col.key}
                                                    className="col-span-4">
                                                    <Label>{col.label}</Label>
                                                    <Input
                                                        type={col.type}
                                                        value={
                                                            item[col.key] || ""
                                                        }
                                                        onChange={(e) =>
                                                            handleItemChange(
                                                                index,
                                                                col.key,
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            ))}
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() =>
                                                    removeItem(index)
                                                }>
                                                <Trash className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    )
                                )}
                                <Button
                                    onClick={addItem}
                                    size="sm"
                                    variant="outline">
                                    <Plus className="mr-2 h-4 w-4" /> Add Item
                                </Button>
                            </div>
                        ) : (
                            section.fields.map((field: any) => (
                                <div key={field.key} className="mb-4">
                                    <Label>{field.label}</Label>
                                    {field.type === "textarea" ? (
                                        <Textarea
                                            placeholder={field.placeholder}
                                            value={formData[field.key] || ""}
                                            onChange={(e) =>
                                                handleChange(
                                                    field.key,
                                                    e.target.value
                                                )
                                            }
                                        />
                                    ) : (
                                        <Input
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            value={formData[field.key] || ""}
                                            onChange={(e) =>
                                                handleChange(
                                                    field.key,
                                                    e.target.value
                                                )
                                            }
                                        />
                                    )}
                                </div>
                            ))
                        )}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};
