'use client'

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
    SidebarRail,

} from "@/components/ui/sidebar"

import React from "react";
import {NavMain} from "@/src/components/Admin/Sidebar/NavMain";
import {MdInsertPageBreak} from "react-icons/md";
import Link from "next/link";


const data = {
   navMain: [
       {
           title: "Building your application",
           url: "#",
           items: [
               {
                   title: "Menu",
                   url: "/admin/menu"
               },
               {
                   title: "Pages",
                   url: "/admin/pages"
               },
               {
                   title: "Users",
                   url: "/admin/users"
               }
           ]

       }
   ]
}


export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>

            <SidebarContent>
                {data.navMain.map(item => (
                    <SidebarGroup key={item.title}>
                        <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {item.items.map(menuItem => (
                                    <SidebarMenuItem key={menuItem.title}>
                                        <SidebarMenuButton asChild>
                                           <Link href={menuItem.url}>{menuItem.title}</Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )) }
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>

        </Sidebar>
    )
}