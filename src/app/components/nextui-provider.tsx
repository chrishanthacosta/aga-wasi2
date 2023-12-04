'use client'

import { NextUIProvider } from '@nextui-org/react'

export function NextUiClientProvider({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}