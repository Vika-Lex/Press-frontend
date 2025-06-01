
import React from "react";
import "@/app/globals.css";
import Header from "@/src/components/ui/Header/Header";
import NavLinks from "@/src/components/ui/Navigation/NavLinks/NavLinks";
import Container from "@/src/components/ui/Container/Container"
import Logo from "@/src/components/ui/Header/Logo";
import {getFullMenus} from "@/lib/menu/getFullMenu";
import Footer from "@/src/components/ui/Footer/Footer";
import HeaderActions from "@/src/components/Site/ui/HeaderActions/HeaderActions";


export default async function MainLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const menu = await getFullMenus()
    return (
        <html lang="ru">
        <body>
        <Header>
            <Container className='flex items-center'>
                <Logo/>
                <NavLinks menu={menu?.items}/>
                <HeaderActions/>
            </Container>
        </Header>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
