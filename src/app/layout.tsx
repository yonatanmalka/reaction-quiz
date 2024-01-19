import type {Metadata} from 'next'
import './globals.css'
import React from "react";

export const metadata: Metadata = {
    title: 'Reaction',
    description: 'Reaction Website',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
                rel="stylesheet"
            />
        </head>
        <body className='font-primary'>
        {children}
        </body>
        </html>
    )
}
