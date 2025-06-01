import style from "./NavLinks.module.scss"
import Link from "next/link";
interface Props {
    className?: string
}


const NavLinks = ({}: Props) => {
    return (
        <nav className={style.nav}>
            <ul className={style.list}>
                <li>
                    <Link href=''>Про нас</Link>
                </li>
                <li>
                    <Link href=''>Продукция</Link>
                </li>
                <li>
                    <Link href=''>Контакты</Link>
                </li>
            </ul>
        </nav>
    );
};
export default NavLinks