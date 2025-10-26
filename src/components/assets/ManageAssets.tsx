import { ImagePlus, Signature } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import UploadLogo from "./UploadLogo";
import UploadSignature from "./UploadSignature";
import { useImageUpload } from "@/hooks/useImageUpload";
import Image from "./Image";

const ManageAssets = () => {
    const { storedImages } = useImageUpload({
        key: "logo",
        multiple: true,
    });

    return (
        <Accordion
            type="multiple"
            className="w-full"
            defaultValue={["logos", "signatures"]}>
            <AccordionItem value="logos">
                <AccordionTrigger className="p-5 rounded-none border-b-1 no-underline! cursor-pointer hover:bg-accent/20 transition">
                    <div className="flex gap-2 justify-center items-center font-medium">
                        <ImagePlus className="h-4 w-4" />
                        <p>Logos</p>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-balance min-w-0 p-5">
                    <UploadLogo />
                    {Array.isArray(storedImages) &&
                        storedImages.map((img: string, i) => {
                            return <Image image={img} key={i + "logo"} />;
                        })}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="signatures">
                <AccordionTrigger className="p-5 rounded-none border-b-1 no-underline! cursor-pointer hover:bg-accent/20 transition">
                    <div className="flex gap-2 justify-center items-center font-medium">
                        <Signature className="h-4 w-4" />
                        <p>Signatures</p>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-balance min-w-0 p-5">
                    <UploadSignature />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default ManageAssets;
