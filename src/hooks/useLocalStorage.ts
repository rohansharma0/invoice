import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, defaultValue: T) {
    const [data, setDataState] = useState<T>(() => {
        try {
            const stored = localStorage.getItem(key);
            return stored ? (JSON.parse(stored) as T) : defaultValue;
        } catch (err) {
            console.error("Failed to load from localStorage:", err);
            return defaultValue;
        }
    });

    // 🔹 Sync when any tab or hook updates localStorage
    useEffect(() => {
        const handleStorageChange = () => {
            try {
                const stored = localStorage.getItem(key);
                setDataState(stored ? (JSON.parse(stored) as T) : defaultValue);
            } catch (err) {
                console.error("Failed to sync localStorage:", err);
                setDataState(defaultValue);
            }
        };

        window.addEventListener("storage", handleStorageChange);
        window.addEventListener("localStorageUpdate", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener(
                "localStorageUpdate",
                handleStorageChange
            );
        };
    }, [key, defaultValue]);

    const setData = (value: T) => {
        try {
            setDataState(value);
            localStorage.setItem(key, JSON.stringify(value));
            // 🔹 Trigger custom sync event
            window.dispatchEvent(new Event("localStorageUpdate"));
        } catch (err) {
            console.error("Failed to save to localStorage:", err);
        }
    };

    const addItem = (item: T extends Array<infer U> ? U : never) => {
        if (!Array.isArray(data)) {
            console.warn("addItem() called but stored data is not an array");
            return;
        }
        const updated = [...data, item] as T;
        setData(updated);
    };

    const removeItem = (predicate: number | ((item: any) => boolean)) => {
        if (!Array.isArray(data)) return;

        const newData =
            typeof predicate === "number"
                ? data.filter((_, idx) => idx !== predicate)
                : data.filter((item) => !predicate(item));

        setData(newData as T);
    };

    const clear = () => {
        try {
            localStorage.removeItem(key);
            setDataState(defaultValue);
            window.dispatchEvent(new Event("localStorageUpdate"));
        } catch (err) {
            console.error("Failed to clear localStorage:", err);
        }
    };

    return { data, setData, addItem, removeItem, clear };
}
