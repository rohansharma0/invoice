import { useImageUpload } from "@/hooks/useImageUpload";
import { Label } from "../ui/label";
import SquareContainer from "./SquareContainer";
import { Input } from "../ui/input";
import { ImagePlus } from "lucide-react";

const UploadLogo = () => {
    const { handleSelectFile } = useImageUpload({
        key: "logo",
        multiple: true,
    });
    return (
        <>
            <Label htmlFor="logo" className="cursor-pointer">
                <SquareContainer className="border-1 border-dashed border-border relative bg-background hover:bg-accent/20 transition flex flex-col items-center justify-center gap-2 w-full">
                    <div className="rounded-full bg-accent/50 text-primary/50 p-3">
                        <ImagePlus className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-[10px] text-muted-foreground ">
                        <p className="text-xs text-primary">
                            Drag & Drop or Click to Upload
                        </p>
                        <p className="text-[10px] text-muted-foreground ">
                            Max size: 400Kb (PNG, JPG)
                        </p>
                    </div>
                </SquareContainer>
            </Label>

            <Input
                id="logo"
                type="file"
                className="sr-only"
                accept="image/*"
                onChange={(e) => handleSelectFile(e.target.files?.[0] as File)}
            />
            {/* <CropDialog
                open={showCropModal}
                onClose={() => setShowCropModal(false)}
                onSave={saveCroppedImage}
                image={previewSrc}
            /> */}
        </>
    );
};

export default UploadLogo;
