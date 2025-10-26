import { useImageUpload } from "@/hooks/useImageUpload";
import { Label } from "../ui/label";
import SquareContainer from "./SquareContainer";
import { Input } from "../ui/input";
import CropDialog from "./CropDialog";

const UploadLogo = () => {
    const {
        image,
        originalFile,
        handleSelectFile,
        showCropModal,
        setShowCropModal,
        saveCroppedImage,
    } = useImageUpload("logo");

    const previewSrc =
        image || (originalFile ? URL.createObjectURL(originalFile) : null);

    return (
        <>
            <Label htmlFor="logo" className="cursor-pointer">
                <SquareContainer className="border-1 border-dashed border-border relative bg-background hover:bg-accent/20 transition flex flex-col items-center justify-center gap-1 w-full">
                    <p className="text-xs text-muted-foreground">
                        Drag & Drop or Click to Upload
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Max size: 400Kb (PNG, JPG)
                    </p>
                </SquareContainer>
            </Label>

            <Input
                id="logo"
                type="file"
                className="sr-only"
                accept="image/*"
                onChange={(e) => handleSelectFile(e.target.files?.[0] as File)}
            />
            <CropDialog
                open={showCropModal}
                onClose={() => setShowCropModal(false)}
                onSave={saveCroppedImage}
                image={previewSrc}
            />
        </>
    );
};

export default UploadLogo;
