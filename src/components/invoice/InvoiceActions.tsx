import { Button } from "../ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

const InvoiceActions = () => {
    return (
        <div className="flex items-center gap-2">
            <Button variant="outline">Save</Button>
            <Select value="both">
                <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="View Mode" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="both">Both</SelectItem>
                    <SelectItem value="form">Form</SelectItem>
                    <SelectItem value="preview">Preview</SelectItem>
                </SelectContent>
            </Select>
            <Button variant="outline">Preview</Button>
            <Button>Download</Button>
        </div>
    );
};

export default InvoiceActions;
