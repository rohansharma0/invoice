import { Button } from "../ui/button";
import { Trash2, X } from "lucide-react";

interface AssetProps {
    img: string;
    index: number;
    label: string;
    onRemove: (index: number) => void;
}

const Asset = ({ img, index, label, onRemove }: AssetProps) => {
    return (
        <div
            key={`${label}-${index}`}
            className="relative aspect-square rounded-lg overflow-hidden border border-border group">
            <img
                src={img}
                alt={`${label} ${index + 1}`}
                className="object-cover w-full h-full"
            />
            <Button
                size="icon-sm"
                onClick={() => onRemove(index)}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-red-500 text-white hover:bg-red-600 transition cursor-pointer">
                <Trash2 className="w-4 h-4" />
            </Button>
        </div>
    );
};

export default Asset;
