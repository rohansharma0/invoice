import { useImageUpload } from "@/hooks/useImageUpload";
import { Label } from "../ui/label";
import { ImagePlus } from "lucide-react";
import { Spinner } from "../ui/spinner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import CropDialog from "./CropDialog";
import { useState, type DragEvent } from "react";

interface UploadAssetProps {
    id: string;
    label: string;
    storageKey: string;
    compressionOptions?: { maxSizeMB: number };
    aspectRatio?: number;
    description?: string;
}

const UploadAsset = ({
    id,
    label,
    storageKey,
    compressionOptions = { maxSizeMB: 0.4 },
    aspectRatio = 1,
    description = "(PNG or JPG)",
}: UploadAssetProps) => {
    const { uploadImage, uploading } = useImageUpload({
        key: storageKey,
        multiple: true,
        compressionOptions,
    });
    const [isDragging, setIsDragging] = useState(false);
    const [cropDialogOpen, setCropDialogOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [originalFile, setOriginalFile] = useState<File | null>(null);

    const isDisabled = uploading;

    const handleFile = (file: File) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            setSelectedImage(event.target?.result as string);
            setCropDialogOpen(true);
        };
        reader.readAsDataURL(file);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;
        const file = files[0];
        setOriginalFile(file);
        handleFile(files[0]);
    };

    const handleCropSave = async (croppedBase64: string) => {
        if (!croppedBase64 || !originalFile) return;

        const blob = await fetch(croppedBase64).then((res) => res.blob());
        const croppedFile = new File([blob], originalFile.name, {
            type: originalFile.type,
        });

        uploadImage(croppedFile);

        setSelectedImage(null);
        setOriginalFile(null);
        setCropDialogOpen(false);
    };

    const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        if (!isDisabled) setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setIsDragging(false);
        if (isDisabled) return;
        const file = e.dataTransfer.files[0];
        if (!file) return;
        setOriginalFile(file);
        handleFile(file);
    };

    return (
        <>
            <Label
                htmlFor={id}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={cn(
                    "block w-full",
                    isDisabled
                        ? "cursor-not-allowed pointer-events-none opacity-70"
                        : "cursor-pointer"
                )}>
                <div
                    className={cn(
                        "aspect-square w-full rounded-xl border border-dashed border-border flex flex-col items-center justify-center gap-2 bg-background transition-all select-none hover:bg-accent/20"
                    )}>
                    {isDisabled ? (
                        <Button
                            variant="outline"
                            disabled
                            size="sm"
                            className="flex items-center gap-2">
                            <Spinner className="size-4" />
                            Uploading...
                        </Button>
                    ) : (
                        <>
                            <div className="rounded-full bg-accent/50 text-primary/50 p-3">
                                <ImagePlus className="h-4 w-4" />
                            </div>
                            <div className="flex flex-col items-center text-center gap-1.5 text-[10px] text-muted-foreground px-4">
                                <p className="text-xs text-primary font-medium">
                                    Click or Drag to Upload {label}
                                </p>
                                <p className="text-[10px]">{description}</p>
                            </div>
                        </>
                    )}
                </div>
            </Label>

            <Input
                id={id}
                type="file"
                disabled={isDisabled}
                accept="image/*"
                className="sr-only"
                onChange={handleChange}
            />

            <CropDialog
                open={cropDialogOpen}
                onClose={() => setCropDialogOpen(false)}
                image={selectedImage}
                onSave={handleCropSave}
                aspect={aspectRatio}
            />
        </>
    );
};

export default UploadAsset;
