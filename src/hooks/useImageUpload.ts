import { useState } from "react";
import imageCompression from "browser-image-compression";
import { useLocalStorage } from "./useLocalStorage";

type UseImageUploadOptions = {
    key: string;
    multiple?: boolean;
    compressionOptions?: Partial<{
        maxSizeMB: number;
    }>;
};

export function useImageUpload({
    key,
    multiple = false,
    compressionOptions,
}: UseImageUploadOptions) {
    const [uploading, setUploading] = useState(false);
    const [originalFile, setOriginalFile] = useState<File | null>(null);

    const { addItem, setData } = useLocalStorage<string | string[]>(
        key,
        multiple ? [] : ""
    );

    const uploadImage = async (file: File) => {
        if (!file) return;

        try {
            setUploading(true);
            setOriginalFile(file);
            const maxSize = compressionOptions?.maxSizeMB ?? 0.4;
            const compressedFile = await imageCompression(file, {
                maxSizeMB: maxSize,
                useWebWorker: true,
            });
            const base64 = await imageCompression.getDataUrlFromFile(
                compressedFile
            );

            if (multiple) addItem(base64);
            else setData(base64);
        } catch (err) {
            console.error("Failed to upload image:", err);
        } finally {
            setOriginalFile(null);
            setUploading(false);
        }
    };

    return {
        uploading,
        uploadImage,
    };
}
