import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
    const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        const mql = window.matchMedia(
            `(max-width: ${MOBILE_BREAKPOINT - 1}px)`
        );
        const update = (e: MediaQueryListEvent | MediaQueryList) =>
            setIsMobile(e.matches);

        update(mql);
        mql.addEventListener("change", update);
        return () => mql.removeEventListener("change", update);
    }, []);

    return !!isMobile;
}
