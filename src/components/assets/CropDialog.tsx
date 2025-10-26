import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import Cropper from "react-easy-crop";

interface CropDialogProps {
    open: boolean;
    onClose: () => void;
    onSave: (croppedBase64: string) => void;
    image: string | null;
}

const CropDialog = ({ open, onClose, onSave, image }: CropDialogProps) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);

    // const onCropComplete = (croppedArea, croppedAreaPixels) => {
    //     console.log(croppedArea, croppedAreaPixels);
    // };

    // You can integrate your cropping library here (e.g., react-easy-crop)
    const handleSave = () => {
        // For demonstration, we just use a placeholder base64
        const croppedBase64 = "data:image/png;base64,...";
        onSave(croppedBase64);
    };

    if (!image) return null;

    return (
        <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Crop Image</DialogTitle>
                </DialogHeader>
                <div className="my-4 flex justify-center">
                    <Cropper
                        image={image}
                        crop={crop}
                        zoom={zoom}
                        aspect={4 / 3}
                        onCropChange={setCrop}
                        // onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                    />
                    {/* <img
                        src={image}
                        alt="Preview"
                        className="max-h-64 max-w-full object-contain"
                    /> */}
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button onClick={handleSave}>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default CropDialog;
