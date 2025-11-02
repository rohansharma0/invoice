import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus } from "lucide-react";

export function TemplateEditor({ schema, setSchema }: any) {
    const addSection = () => {
        setSchema([...schema, { group: "New Section", fields: [] }]);
    };

    const removeSection = (index: number) => {
        setSchema(schema.filter((_: any, i: number) => i !== index));
    };

    const updateSectionName = (index: number, name: string) => {
        const newSchema = [...schema];
        newSchema[index].group = name;
        setSchema(newSchema);
    };

    const addField = (sectionIndex: number) => {
        const newSchema = [...schema];
        newSchema[sectionIndex].fields = [
            ...(newSchema[sectionIndex].fields || []),
            { type: "text", label: "New Field", key: `field_${Date.now()}` },
        ];
        setSchema(newSchema);
    };

    const removeField = (sectionIndex: number, fieldIndex: number) => {
        const newSchema = [...schema];
        newSchema[sectionIndex].fields.splice(fieldIndex, 1);
        setSchema(newSchema);
    };

    const updateField = (
        sectionIndex: number,
        fieldIndex: number,
        key: string,
        value: any
    ) => {
        const newSchema = [...schema];
        newSchema[sectionIndex].fields[fieldIndex][key] = value;
        setSchema(newSchema);
    };

    return (
        <div className="space-y-6">
            {schema.map((section: any, i: number) => (
                <div key={i} className="border rounded-lg p-4 bg-muted/20">
                    <div className="flex justify-between items-center mb-2">
                        <Input
                            value={section.group}
                            onChange={(e) =>
                                updateSectionName(i, e.target.value)
                            }
                            className="font-semibold"
                        />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeSection(i)}>
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>

                    <Separator className="my-2" />

                    <div className="space-y-3">
                        {(section.fields || []).map((field: any, j: number) => (
                            <div
                                key={j}
                                className="grid grid-cols-12 gap-2 items-end">
                                <div className="col-span-4">
                                    <Input
                                        value={field.label}
                                        onChange={(e) =>
                                            updateField(
                                                i,
                                                j,
                                                "label",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Label"
                                    />
                                </div>
                                <div className="col-span-4">
                                    <Input
                                        value={field.key}
                                        onChange={(e) =>
                                            updateField(
                                                i,
                                                j,
                                                "key",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Key"
                                    />
                                </div>
                                <div className="col-span-3">
                                    <Select
                                        value={field.type}
                                        onValueChange={(v) =>
                                            updateField(i, j, "type", v)
                                        }>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="text">
                                                Text
                                            </SelectItem>
                                            <SelectItem value="number">
                                                Number
                                            </SelectItem>
                                            <SelectItem value="textarea">
                                                Textarea
                                            </SelectItem>
                                            <SelectItem value="date">
                                                Date
                                            </SelectItem>
                                            <SelectItem value="table">
                                                Table
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => removeField(i, j)}>
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        ))}
                    </div>

                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => addField(i)}
                        className="mt-3">
                        <Plus className="mr-2 h-4 w-4" /> Add Field
                    </Button>
                </div>
            ))}

            <Button onClick={addSection} variant="secondary" className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Add Section
            </Button>
        </div>
    );
}
