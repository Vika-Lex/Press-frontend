import style from "./NavLinks.module.scss"
import Link from "next/link";
import {NavItemInterface} from "@/src/types/NavItem";


interface Props {
    className?: string,
    menu: NavItemInterface[]|undefined
}


const NavLinks = ({menu}: Props) => {
    return (
        <nav className={style.nav}>
            <ul className={style.list}>
                {menu?.map(link => (
                    <li key={link.id}>
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                ))}

            </ul>
        </nav>
    );
};
export default NavLinks