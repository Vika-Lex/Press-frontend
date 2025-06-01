import React from "react";
import "@/app/globals.css";
import Header from "@/src/components/ui/Header/Header";
import SidebarNav from "@/src/components/Admin/Sidebar/SidebarNav";
import Logo from "@/src/components/ui/Header/Logo";




export default function AdminLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body>
        <Header>
            <Logo/>
        </Header>

        <main className='flex '>

            <SidebarNav/>
                <div className='w-full'>
                    {children}
                </div>
        </main>
        </body>

        </html>
    );
}
