import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import type { InvoiceData } from "@/types/app/InvoiceData";

interface Props {
    invoice: InvoiceData;
    onChange: (invoice: InvoiceData) => void;
    onRecalculate: () => void;
}

export default function InvoiceForm({
    invoice,
    onChange,
    onRecalculate,
}: Props) {
    const form = useForm<InvoiceData>({
        defaultValues: invoice,
    });

    const { control, watch } = form;
    const itemsFieldArray = useFieldArray({
        control,
        name: "items",
    });

    const handleSubmit = (values: InvoiceData) => {
        onChange(values);
        onRecalculate();
    };

    // const currentValues = watch();

    // ✅ Fix infinite loop
    // useEffect(() => {
    //     onChange(currentValues);
    // }, [currentValues, onChange]);

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4">
                <Accordion type="multiple">
                    <AccordionItem value="company">
                        <AccordionTrigger className="p-5 border-b border-border hover:bg-accent/20 hover:no-underline transition rounded-none">
                            Company Details
                        </AccordionTrigger>
                        <AccordionContent className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-5">
                            <FormField
                                control={control}
                                name="from"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>From</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Your company name"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Address</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Company address"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="client">
                        <AccordionTrigger className="p-5 border-b border-border hover:bg-accent/20 hover:no-underline transition rounded-none">
                            Client Details
                        </AccordionTrigger>
                        <AccordionContent className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-5">
                            <FormField
                                control={control}
                                name="to"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>To</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Client name or company"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="header">
                        <AccordionTrigger className="p-5 border-b border-border hover:bg-accent/20 hover:no-underline transition rounded-none">
                            Invoice Header
                        </AccordionTrigger>
                        <AccordionContent className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-5">
                            <FormField
                                control={control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Date</FormLabel>
                                        <FormControl>
                                            <Input type="date" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="invoiceNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Invoice #</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="INV-001"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="items">
                        <AccordionTrigger className="p-5 border-b border-border hover:bg-accent/20 hover:no-underline transition rounded-none">
                            Invoice Items
                        </AccordionTrigger>
                        <AccordionContent className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-5">
                            <div className="space-y-2">
                                {itemsFieldArray.fields.map((item, i) => (
                                    <div
                                        key={item.id}
                                        className="flex gap-2 items-end">
                                        <FormField
                                            control={control}
                                            name={`items.${i}.description`}
                                            render={({ field }) => (
                                                <FormItem className="flex-1">
                                                    <FormLabel>
                                                        Description
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder="Item description"
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={control}
                                            name={`items.${i}.quantity`}
                                            render={({ field }) => (
                                                <FormItem className="w-24">
                                                    <FormLabel>Qty</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="number"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={control}
                                            name={`items.${i}.price`}
                                            render={({ field }) => (
                                                <FormItem className="w-24">
                                                    <FormLabel>Price</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="number"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            onClick={() =>
                                                itemsFieldArray.remove(i)
                                            }>
                                            ×
                                        </Button>
                                    </div>
                                ))}

                                <Button
                                    type="button"
                                    variant="secondary"
                                    className="mt-2"
                                    onClick={() =>
                                        itemsFieldArray.append({
                                            description: "",
                                            quantity: 1,
                                            price: 0,
                                        })
                                    }>
                                    + Add Item
                                </Button>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* --- Footer --- */}
                    <AccordionItem value="footer">
                        <AccordionTrigger className="p-5 border-b border-border hover:bg-accent/20 hover:no-underline transition rounded-none">
                            Footer / Notes
                        </AccordionTrigger>
                        <AccordionContent className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-5">
                            <FormField
                                control={control}
                                name="notes"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Notes</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Footer message or terms"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* <Separator />
                <Button type="submit" className="w-full">
                    Recalculate Totals
                </Button> */}
            </form>
        </Form>
    );
}
