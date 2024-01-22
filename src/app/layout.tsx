import type { Metadata } from 'next'
import './globals.css'
import React from "react";

export const metadata: Metadata = {
    title: 'Reaction',
    description: 'Reaction Website',
}

export default function RootLayout ({
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
            {/* Google Tag Manager */}
            <script dangerouslySetInnerHTML={{
                __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "bq6zmhd8dg");
          `
            }}/>
            {/* End Google Tag Manager */}
        </head>
        <body className='font-primary'>
        {children}
        </body>
        </html>
    )
}
