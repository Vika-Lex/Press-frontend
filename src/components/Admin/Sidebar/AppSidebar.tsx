'use client'

import {
    Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail,

} from "@/components/ui/sidebar"
import {Collapsible} from "@/components/ui/collapsible";
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd, PieChart,
    Settings2,
    SquareTerminal
} from "lucide-react";
import React from "react";
import {NavMain} from "@/src/components/Admin/Sidebar/NavMain";
import {MdInsertPageBreak} from "react-icons/md";

// Menu items.
const data = {
    pages: {
        title: "Pages",
        url: "#",
        icon: MdInsertPageBreak ,
        isActive: true,
        items: [
            {title: "Main", url: "/admin/pages/main"}
        ],
    },
}


export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>

            <SidebarContent>
                <NavMain item={data.pages}/>
            </SidebarContent>

        </Sidebar>
    )
}