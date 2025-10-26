import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import UploadLogo from "./UploadLogo";
import UploadSignature from "./UploadSignature";

const ManageAssets = () => {
    return (
        <div>
            Manage Assets
            <Accordion
                type="multiple"
                className="w-full"
                defaultValue={["logos", "signatures"]}>
                <AccordionItem value="logos">
                    <AccordionTrigger>Logos</AccordionTrigger>
                    <AccordionContent className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-balance min-w-0">
                        <UploadLogo />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="signatures">
                    <AccordionTrigger>Signatures</AccordionTrigger>
                    <AccordionContent className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-balance min-w-0">
                        <UploadSignature />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default ManageAssets;
