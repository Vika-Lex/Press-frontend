import Link from "next/link";
import style from './Menu.module.scss'

export interface MenuItemProps {
    label: string,
    href: string
}

const MenuItem = ({label, href}: MenuItemProps) => {
    return (
        <li className={style.item}>
            <Link className={style.link} href={href}>{label}</Link>
        </li>
    );
};
export default MenuItem;
