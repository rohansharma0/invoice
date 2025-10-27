import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";

interface CropDialogProps {
    open: boolean;
    onClose: () => void;
    onSave: (croppedBase64: string) => void;
    image: string | null;
    aspect: number;
}

const CropDialog = ({
    open,
    onClose,
    onSave,
    image,
    aspect,
}: CropDialogProps) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

    const onCropComplete = useCallback((_: any, areaPixels: any) => {
        setCroppedAreaPixels(areaPixels);
    }, []);

    const getCroppedImg = async (imageSrc: string, cropArea: any) => {
        const image = await createImage(imageSrc);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (!ctx) throw new Error("No 2D context");

        canvas.width = cropArea.width;
        canvas.height = cropArea.height;

        ctx.drawImage(
            image,
            cropArea.x,
            cropArea.y,
            cropArea.width,
            cropArea.height,
            0,
            0,
            cropArea.width,
            cropArea.height
        );

        return canvas.toDataURL("image/jpeg");
    };

    const createImage = (url: string): Promise<HTMLImageElement> =>
        new Promise((resolve, reject) => {
            const image = new Image();
            image.addEventListener("load", () => resolve(image));
            image.addEventListener("error", (error) => reject(error));
            image.src = url;
        });

    const handleSave = async () => {
        if (!image || !croppedAreaPixels) return;
        const croppedBase64 = await getCroppedImg(image, croppedAreaPixels);
        onSave(croppedBase64);
    };

    if (!image) return null;

    return (
        <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
            <DialogContent className="max-w-[90vw] sm:max-w-lg p-0">
                <DialogHeader className="p-3 border-b">
                    <DialogTitle>Crop Image</DialogTitle>
                </DialogHeader>
                <div className="relative w-full aspect-square bg-black/50">
                    <Cropper
                        image={image}
                        crop={crop}
                        zoom={zoom}
                        aspect={aspect}
                        onCropChange={setCrop}
                        onZoomChange={setZoom}
                        onCropComplete={onCropComplete}
                    />
                </div>
                <DialogFooter className="p-3 border-t">
                    <DialogClose asChild>
                        <Button variant="outline" size="sm">
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button onClick={handleSave} variant="default" size="sm">
                        Cancel
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default CropDialog;
