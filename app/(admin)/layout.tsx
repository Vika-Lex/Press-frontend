import React from "react";
import "@/app/globals.css";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/src/components/Admin/Sidebar/AppSidebar";
import Header from "@/src/components/ui/Header/Header";
import Logo from "@/src/components/ui/Header/Logo";

export default function AdminLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <html lang='en'>
        <body>
        <main>

            <SidebarProvider>
                <AppSidebar/>


                <SidebarTrigger/>
                {children}

            </SidebarProvider>
        </main>
        </body>
        </html>
    );
}
