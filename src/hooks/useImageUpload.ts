// hooks/useImageUpload.ts
import { useState } from "react";
import imageCompression from "browser-image-compression";
import { useLocalStorage } from "./useLocalStorage";

export function useImageUpload(localStorageKey: string) {
    const [image, setImage] = useLocalStorage<string | null>(
        localStorageKey,
        null
    );
    const [originalFile, setOriginalFile] = useState<File | null>(null);
    const [showCropModal, setShowCropModal] = useState<boolean>(false);

    const handleSelectFile = (file: File) => {
        console.log(file);

        setOriginalFile(file);
        setShowCropModal(true);
    };

    const saveCroppedImage = async (base64: string) => {
        if (!base64) return;
        const compressed = await imageCompression.getFilefromDataUrl(
            base64,
            "cropped.png"
        );
        const finalFile = await imageCompression(compressed, {
            maxSizeMB: 0.4, // 400kb
            useWebWorker: true,
        });

        const finalBase64 = await imageCompression.getDataUrlFromFile(
            finalFile
        );
        setImage(finalBase64);
        setShowCropModal(false);
        setOriginalFile(null);
    };

    return {
        image,
        originalFile,
        handleSelectFile,
        showCropModal,
        setShowCropModal,
        saveCroppedImage,
    };
}
