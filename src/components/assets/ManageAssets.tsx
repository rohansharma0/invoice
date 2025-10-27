import { ImagePlus, Signature } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import UploadAsset from "./UploadAsset";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Asset from "./Asset";

const ManageAssets = () => {
    const { data: logos, removeItem: removeLogo } = useLocalStorage<string[]>(
        "logo",
        []
    );

    const { data: signatures, removeItem: removeSignature } = useLocalStorage<
        string[]
    >("signature", []);

    const renderAssetSection = (
        id: string,
        label: string,
        icon: React.ReactNode,
        storageKey: string,
        description: string,
        maxSize: number,
        aspectRatio: number,
        images: string[],
        onRemove: (index: number) => void
    ) => (
        <AccordionItem value={storageKey}>
            <AccordionTrigger className="p-5 border-b border-border hover:bg-accent/20 hover:no-underline transition rounded-none">
                <div className="flex gap-2 items-center font-medium">
                    {icon}
                    <p>{label}</p>
                </div>
            </AccordionTrigger>

            <AccordionContent className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-5">
                <UploadAsset
                    id={id}
                    label={label}
                    storageKey={storageKey}
                    compressionOptions={{ maxSizeMB: maxSize }}
                    aspectRatio={aspectRatio}
                    description={description}
                />

                {Array.isArray(images) &&
                    images.map((img, i) => (
                        <Asset
                            key={`${storageKey}-${i}`}
                            img={img}
                            index={i}
                            label={label}
                            onRemove={onRemove}
                        />
                    ))}
            </AccordionContent>
        </AccordionItem>
    );

    return (
        <Accordion
            type="multiple"
            defaultValue={["logo", "signature"]}
            className="w-full">
            {renderAssetSection(
                "logo",
                "Logos",
                <ImagePlus className="h-4 w-4" />,
                "logo",
                "(PNG or JPG)",
                0.4,
                1,
                logos,
                removeLogo
            )}
            {renderAssetSection(
                "signature",
                "Signatures",
                <Signature className="h-4 w-4" />,
                "signature",
                "(PNG or JPG)",
                0.1,
                1,
                signatures,
                removeSignature
            )}
        </Accordion>
    );
};

export default ManageAssets;
