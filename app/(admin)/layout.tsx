import React from "react";
import "@/app/globals.css";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/src/components/Admin/Sidebar/AppSidebar";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import QueryProvider from "@/providers/QueryProvider";

const queryClient = new QueryClient()

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
                <QueryProvider>
                    <AppSidebar/>
                    <SidebarTrigger/>
                    {children}

                </QueryProvider>

            </SidebarProvider>

        </main>
        </body>
        </html>
    );
}
