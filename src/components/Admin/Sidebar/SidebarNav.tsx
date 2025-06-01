"use client"
import Link from "next/link";
import style from "./SideBar.module.scss"
import {IoArrowBackCircleOutline, IoArrowForwardCircleOutline} from "react-icons/io5";
import {useState} from "react";
import {clsx} from "clsx";
import {FaDashcube, FaRegUser} from "react-icons/fa";
import {SiContentful} from "react-icons/si";
import {MdOutlineMenu} from "react-icons/md";


interface Props {
    className?: string
}


const SidebarNav = ({}: Props) => {
    const [isMenuCollapsed, setIsMenuCollapsed] = useState<boolean>(false)
    return (
        <aside className={clsx(style.sidebar, {[style.collapsed]: isMenuCollapsed})}>

            <div className={style.content}>
                <div>
                    <Link href='/admin'
                          className={style.link}
                    >
                        <FaDashcube/>
                        <p>Dashboard</p>
                    </Link>
                </div>
                <div>
                    <Link href='/admin/content'
                          className={style.link}
                    >
                        <SiContentful/>
                        <p>Content</p>
                    </Link>
                </div>
                <div>
                    <Link href='/admin/users'
                          className={style.link}
                    >
                        <FaRegUser/>
                        <p>Users</p>
                    </Link>
                </div>
                <div>
                    <Link href='/admin/menu'
                          className={style.link}
                    >
                        <MdOutlineMenu/>
                        <p>Menu</p>
                    </Link>
                </div>
                <div>
                    <Link href='/admin/page'
                          className={style.link}
                    >
                        <MdOutlineMenu/>
                        <p>Page</p>
                    </Link>
                </div>


            </div>
            <div onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}
                 className={style.collapse}
            >
                <div className='text-white'>
                    {isMenuCollapsed ? (
                        <div>
                        <IoArrowForwardCircleOutline/>

                        </div>
                    ) : (
                        <div className='flex items-center gap-2'>
                            <IoArrowBackCircleOutline/>
                            <p>Collapse Menu</p>
                        </div>
                    )}
                </div>

            </div>
        </aside>
    );
};
export default SidebarNav;