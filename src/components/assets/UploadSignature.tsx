import { Input } from "../ui/input";
import { Label } from "../ui/label";
import SquareContainer from "./SquareContainer";

const UploadSignature = () => {
    return (
        <>
            <Label htmlFor="signature" className="cursor-pointer">
                <SquareContainer className="border-1 border-dashed border-border relative bg-background hover:bg-accent/20 transition flex flex-col items-center justify-center gap-1 w-full h-full">
                    <p className="text-xs text-muted-foreground">
                        Drag & Drop or Click to Upload
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Max size: 150Kb (PNG, JPG)
                    </p>
                </SquareContainer>
            </Label>

            <Input id="signature" type="file" className="sr-only" />
        </>
    );
};
export default UploadSignature;
