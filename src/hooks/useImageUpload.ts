import { useState } from "react";
import imageCompression from "browser-image-compression";
import { useLocalStorage } from "./useLocalStorage";

type UseImageUploadOptions = {
    key: string;
    multiple?: boolean;
};

export function useImageUpload({
    key,
    multiple = false,
}: UseImageUploadOptions) {
    const [originalFile, setOriginalFile] = useState<File | null>(null);

    const {
        data: storedImages,
        setData,
        addItem,
        removeItem,
        clear,
    } = useLocalStorage<string | string[]>(key, multiple ? [] : "");

    const handleSelectFile = (file: File) => {
        console.log(file);
        setOriginalFile(file);
        saveImage(file);
    };

    const saveImage = async (file: File) => {
        if (!file) return;

        const compressedFile = await imageCompression(file, {
            maxSizeMB: 0.4,
            useWebWorker: true,
        });

        const base64 = await imageCompression.getDataUrlFromFile(
            compressedFile
        );
        console.log(base64);

        if (multiple) {
            addItem(base64);
        } else {
            setData(base64);
        }

        setOriginalFile(null);
    };

    return {
        originalFile,
        storedImages,
        handleSelectFile,
        saveImage,
        removeItem,
        clear,
    };
}
