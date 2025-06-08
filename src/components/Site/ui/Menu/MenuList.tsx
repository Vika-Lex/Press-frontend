import style from './Menu.module.scss'
import MenuItem from "@/src/components/Site/ui/Menu/MenuItem";
import {NavItemInterface} from "@/src/types/NavItem";

export interface MenuListProps {
    menu: NavItemInterface[]
}

const MenuList = ({menu}: MenuListProps) => {
    return (
        <nav className={style.nav}>
            <ul className={style.list}>
                {menu?.map(link => (
                    <MenuItem label={link.label} href={link.href}/>

                ))}

            </ul>
        </nav>
    );
};
export default MenuList;
