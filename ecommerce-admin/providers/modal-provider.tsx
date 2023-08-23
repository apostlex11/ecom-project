/*  This is going to app -> layout.tsx 
but layout.tsx is a server component, cannot add client component to it
to avoid hydration error esp with modals, 
server side and client side rendering, server side might not have
rendering but the client side will.

the useEffect runs, client component. If its in server side rendering it'll return null
*/

"use client"

import { StoreModal } from "@/components/modals/store-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null;
    }

    return (
        <>
            <StoreModal/>
        </>
    )
}